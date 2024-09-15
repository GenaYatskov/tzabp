import React, { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IVariable } from "../types/IVariable";
import styles from './Variable.module.css'
import { getVariables } from ".data/getVariables";

export const FullOpenVariable:FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [variable, setVariable] = useState<IVariable>()

    const handlerGetVariables = useCallback( async () => {
        const { getVariablesHandler } = getVariables()

        const { data, error } = await getVariablesHandler()

        if (error) {
            console.error(error)
        } else if (data) {
            setVariable(data.Results.find((item)=>item.ID === Number(id)))
        }

    }, [])

    useEffect(()=>{
        handlerGetVariables()
    }, [])

    return(
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: '15px',
                padding: '25px',
                background: '#161E31',
                borderRadius: '15px',
                maxWidth: '500px',
                cursor: 'pointer',
            }}
        >
            <p style={{
                fontFamily: 'Century Gothic',
                fontSize: '22px',
                color: 'white',
                fontWeight: 'bold',
            }}>{variable?.Name}</p>
            <p style={{                
                fontFamily: 'Century Gothic',
                fontSize: '20px',
                color: 'white',
                textWrap: 'pretty',
                wordBreak: 'break-word',
            }}>{variable?.Description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            <button 
                onClick={()=>navigate('/variables')} 
                style={{
                    border: 'none',
					borderRadius: '5px',
					background: '#7367F0',
					fontFamily: 'Century Gothic',
					letterSpacing: '2px',
					color: '#FFFFFF',
					cursor: 'pointer',
					fontSize: '24px',
					padding: '10px 25px'
                }}>
                    Exit
            </button>
        </div>
    )
}