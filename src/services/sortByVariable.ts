import { ICarFeature } from "../types/ICarFeatures"

const sortOrder = ['Make', 'Model', 'Model Year', 'Vehicle Descriptor']

export function sortByVariable(data: ICarFeature[]) {
	return data.sort(
		(a, b) =>
			(sortOrder.indexOf(a.Variable) === -1
				? sortOrder.length
				: sortOrder.indexOf(a.Variable)) -
			(sortOrder.indexOf(b.Variable) === -1
				? sortOrder.length
				: sortOrder.indexOf(b.Variable))
	)
}
