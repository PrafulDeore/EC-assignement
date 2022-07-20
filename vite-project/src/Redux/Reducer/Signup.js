import { SIGNUP_FAIL, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../Action/Signup";


const init={
    "loading":false,
     "error":false,
     
}
// !Reducer always takes state/store and action =type & payload
export const SignupReducer=(store=init,{type,payload})=>{

switch(type){
    case SIGNUP_LOADING:
        return{
                ...store,
                "loading":true,
                "error":false
        }
        case SIGNUP_SUCCESS:
            return{
                ...store,
                 payload,
                 "loading":false,
                 "error":false,
            }
            case SIGNUP_FAIL:
                return{
                    ...store,
                    "error":true,
                }
                default:
                    return store 
}}