
export interface IBlogs {
    blogs: 
    {
        title: String,
        image: String,
        category: String,
        status:number,
        priority:number,
        description: String
    }[]
}

export const empArray: IBlogs | any = {
    blogs: []
}

export interface IDispatch {
    type: string,
    payload: IBlogs
}

export const mainReducer = (state = empArray, action: IDispatch): IBlogs => {
    switch (action.type) {
        case 'ADD':
            return { ...state, blogs: [...state.blogs, action.payload] }
        case 'REMOVE':
            return { ...state, blogs: [] }
        default:
            return {...state};
    }
}