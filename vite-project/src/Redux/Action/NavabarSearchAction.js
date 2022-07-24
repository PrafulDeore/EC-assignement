import axios from "axios"

export const SEARCH_LOADING="SEARCH_LOADING";
export const SEARCH_SUCCESS="SEARCH_SUCCESS";
export const SEARCH_FAIL="SEARCH_FAIL"

export const getSearch_Loading=()=>({
type:SEARCH_LOADING
})


export const getSearch_Success=(payload)=>({

    type:SEARCH_SUCCESS,
    payload
})
export const getSearch_Fail=()=>({
    type:SEARCH_FAIL
    })
    
// export const search_Result=(payload)=>({dispatch,query})=>{

//     dispatch(getSearch_Loading())
//     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`,{
//         ...payload
//     }
//     )
//         .then(function (response) {
//             dispatch(getSearch_Success(response))
//           console.log("SearchData:",response.data)
//         })
//         .catch(function (error) {
//             dispatch(getSearch_Fail(error))

//           console.log(error);
//         });

// }