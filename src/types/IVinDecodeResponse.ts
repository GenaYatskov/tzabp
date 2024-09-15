import { ICarFeature } from "./ICarFeatures"

export interface IVinDecodeResponse{
    Count: number
    Message: string
    Results: ICarFeature[]
    SearchCriteria: string
}