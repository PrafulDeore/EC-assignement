export const SIGNUP_LOADING="SIGNUP_LOADING";
export const SIGNUP_SUCCESS="SIGNUP_SUCCESS"
export const SIGNUP_FAIL="SIGNUP_FAIL"


export const getSignupLoading=()=>({
    type:SIGNUP_LOADING

})
export const getSignupSuccess=(payload)=>({

    type:SIGNUP_SUCCESS,
    payload
})

export const getSignupFail=()=>({

    type:SIGNUP_FAIL
})


 