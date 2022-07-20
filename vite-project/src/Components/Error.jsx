import { ErrorMessage } from 'formik'
import React from 'react'

export const Errorm = ({name}) => {
  return (
    <div style={{color:"red", fontSize:"1.3vW", border:"0px solid red",height:"1.5vW",width:"fit-content",marginTop:"-4%"}}>
        <div>
           <ErrorMessage name={name}/>
        </div>
    </div>
  )
}
