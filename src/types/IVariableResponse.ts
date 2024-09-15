import { IVariable } from "./IVariable"

export interface IVariableResponse{
    Count: number
    Message: string
    Results: IVariable[]
    SearchCriteria: string
}