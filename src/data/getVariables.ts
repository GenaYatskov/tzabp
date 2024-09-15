import axios, { AxiosError } from 'axios'
import { IVinDecodeResponse } from '../types/IVinDecodeResponse'
import { IVariableResponse } from '../types/IVariableResponse'

export const getVariables = () => {
    const requestURL: string = 'https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json'
    
    const getVariablesHandler = async () => {

        try {
            const { data } = await axios.get<IVariableResponse>(requestURL, {
                params: {
                    format: 'json',
                }
            })
            return { data, error: null }
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                return { data: null, error: err as AxiosError }
            } else {
                return { data: null, error: err as Error }
            }
        }
    }

    return { getVariablesHandler }
}