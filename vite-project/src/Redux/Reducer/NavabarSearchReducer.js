import { SEARCH_FAIL, SEARCH_LOADING, SEARCH_SUCCESS } from "../Action/NavabarSearchAction"



const init={
    "loading":false,
    "error":false
}
export const navabarSearch_Reducer=(state=init,{type,payload})=>{
switch(type){
    case SEARCH_LOADING:
        return{
                ...state,
                "loading":true,
                "error":false
        }
        case SEARCH_SUCCESS:
            return{
                ...state,
                 payload,
                 "loading":false,
                 "error":false,
            }
            case SEARCH_FAIL:
                return{
                    ...state,
                    "error":true,
                }
                default:
                    return state 
}

}