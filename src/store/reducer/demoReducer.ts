
export const empArray:IBlogs = {
    blogs:['dunya']
}

export interface IBlogs {
    blogs:Array<any>
}

export interface IDispatch {
    type:string,
    payload:IBlogs
}
export const mainReducer = (state = empArray , action:IDispatch):IBlogs => {
    switch (action.type) {
        case '1_FULFILLED':
            return {...state, blogs: [...state.blogs, action.payload]}
        case '2_FULFILLED':
                return {...state, blogs: [...state.blogs, action.payload]}
        default:
            return {...state};
    }
}