import React, { FC } from "react";
import { IVariable } from "../types/IVariable";
import styles from './Variable.module.css'
import { useNavigate } from "react-router-dom";

export const Variable:FC<{fields: IVariable, isFullOpen:boolean}> = ({fields, isFullOpen}) => {
    const navigate = useNavigate()
    
    return(
        <div 
            onClick={()=>navigate(`/variables/${fields.ID}`)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: '15px',
                padding: '25px',
                background: '#161E31',
                borderRadius: '15px',
                width: '395px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
            }}
        >
            <p style={{
                fontFamily: 'Century Gothic',
                fontSize: '22px',
                color: 'white',
                fontWeight: 'bold',
                textWrap: 'pretty',
            }}>{fields.Name}</p>
            <p className={styles['description']}>{fields.Description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        </div>
    )
}