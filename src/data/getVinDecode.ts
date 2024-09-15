import axios, { AxiosError } from 'axios'
import { IVinDecodeResponse } from '../types/IVinDecodeResponse'

export const getVinDecode = (VINcode:string) => {
    const requestURL: string = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/' + VINcode
    
    const getVinDecodeHandler = async () => {

        try {
            const { data } = await axios.get<IVinDecodeResponse>(requestURL, {
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

    return { getVinDecodeHandler }
}