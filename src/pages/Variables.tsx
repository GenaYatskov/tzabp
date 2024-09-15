import { getVariables } from ".data/getVariables";
import React, { FC, useCallback, useEffect, useState } from "react";
import { IVariable } from "../types/IVariable";
import { Variable } from ".components/Variable";

export const Variables:FC = () => {

    const [variables, setVariables] = useState<IVariable[]>([])
    
    const handlerGetVariables = useCallback( async () => {
        const { getVariablesHandler } = getVariables()

        const { data, error } = await getVariablesHandler()

        if (error) {
            console.error(error)
        } else if (data) {
            setVariables(data.Results)
        }

    }, [])

    useEffect(()=>{
        handlerGetVariables()
    }, [])

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '25px',
        }}>
            {variables.map((items, index)=>(
                <Variable isFullOpen={false} fields={items} key={index}/>
            ))}
        </div>
    )
}