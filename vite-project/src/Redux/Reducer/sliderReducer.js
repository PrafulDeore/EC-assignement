import { SLIDER_FAIL, SLIDER_LOADING, SLIDER_SUCCESS } from "../Action/SliderAction";


const init={
    "loading":false,
     "error":false,
     
}
// !Reducer always takes state/store and action =type & payload
export const sliderReducer=(store=init,{type,payload})=>{

switch(type){
    case SLIDER_LOADING:
        return{
                ...store,
                "loading":true,
                "error":false
        }
        case SLIDER_SUCCESS:
            return{
                ...store,
                 payload,
                 "loading":false,
                 "error":false,
            }
            case SLIDER_FAIL:
                return{
                    ...store,
                    "error":true,
                }
                default:
                    return store 
}}