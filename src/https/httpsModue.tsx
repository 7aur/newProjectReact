import {IDispatch} from '../store/reducer/demoReducer'
export const fetchData = async (url:string, dispatch:IDispatch, payload:any) => {
    const response  = await fetch(url);
    let data = await response.json();
    return data;
}