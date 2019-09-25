
export interface ICats {
    cats: 
    {
        name: String,
        id: number,
    }[]
}

export const empArray: ICats | any = {
    cats: []
}

export interface IDispatch {
    type: string,
    payload: ICats
}

export const catReducer = (state = empArray, action: IDispatch): ICats => {
    switch (action.type) {
        case 'ADD':
            return { ...state, cats: [...state.cats, action.payload] }
        case 'REMOVE':
            return { ...state, cats: [...state.cats, action.payload] }
        default:
            return {...state};
    }
}