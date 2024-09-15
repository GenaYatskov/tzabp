export const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('serchedCars') || '[]') as {model:string, VINcode:string}[]
}

export const saveToLocalStorage = (serchedCar: {model:string, VINcode: string}) => {
    const cachedData = getFromLocalStorage()
    cachedData.push(serchedCar)
    if (cachedData.length > 3) cachedData.shift()
    localStorage.setItem('serchedCars', JSON.stringify(cachedData))
}
