import axios from "axios"
export const SLIDER_LOADING="SLIDER_LOADING";
export const SLIDER_SUCCESS="SLIDER_SUCCESS"
export const SLIDER_FAIL="SLIDER_FAIL"


export const getsliderLoading=()=>({
    type:SLIDER_LOADING

})
export const getsliderSuccess=(payload)=>({

    type:SLIDER_SUCCESS,
    payload
})

export const getsliderFail=()=>({

    type:SLIDER_FAIL
})



export const sliderData=(payload)=>(dispatch)=>{
    dispatch(getsliderLoading())
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US', 
    {
      ...payload,
     
    })
    .then(function (response) {
      dispatch(getsliderSuccess(response))
    //   console.log("sliderData:",response.data)
    })
    .catch(function (error) {
        dispatch(getsliderFail(error))
      console.log(error);
    });
}
