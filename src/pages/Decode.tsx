import { SearchInput } from '.components/SearchInput'
import { getVinDecode } from '.data/getVinDecode'
import React, { FC, useCallback, useState } from 'react'
import { ICarFeature } from '../types/ICarFeatures'
import { CarFeatures } from '.components/CarFeatures'
import { sortByVariable } from '.services/sortByVariable'
import { saveToLocalStorage } from '.services/localStorage'

export const Decode:FC = () => {

    const [carsFeatures, setCarsFeatures] = useState<ICarFeature[][]>([])

    const handlerGetCarFeaturesFromVin = useCallback( async (vin:string) => {
        const { getVinDecodeHandler } = getVinDecode(vin)

        const { data, error } = await getVinDecodeHandler()

        if (error) {
            console.error(error)
        } else if (data) {
            setCarsFeatures((prev) => [...prev, sortByVariable(
                data.Results.filter(
                    item => 
                    item.Value !== null
                    &&
                    item.Value !== ''
                )
            )])
            saveToLocalStorage({model: data.Results.find((item) => item.Variable === 'Make')?.Value ?? 'No name', VINcode: vin})

        }

    }, [])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'auto',
                height: 'auto',
                gap: '25px',
            }}
        >
            <SearchInput handlerGetCarFeaturesFromVin={handlerGetCarFeaturesFromVin}/>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '25px',
                    flexWrap: 'wrap',
                }}
            >{
                carsFeatures.map((features, index) => (
                    <CarFeatures features={features} key={index}/>
                ))
            }</div>
        </div>
    )
}