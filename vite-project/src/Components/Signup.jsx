import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from "formik"
import * as yup from 'yup';
import { Errorm } from './Error';
import "../Style/Signup.css"
import { height } from '@mui/system';
import { useState } from 'react';
import { getSignupSuccess } from '../Redux/Action/Signup';
import { useDispatch, useSelector } from 'react-redux';

const validationSchema = yup.object({
    // mname:yup.array().of(yup.string("This is a Required Field").max(200,"You Cross The Limit").required("*Require Field!")),
    // gender:yup.string().required(),
    username: yup.string().required("*Require Field!"),
    email: yup.string().email('Invalid email format').required("*Email is Field!"),
    password: yup.string().required('Password is required'),
    confirmpass: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
    phone: yup.string().required("*Require Field!"),
});



export const Signup = () => {
    const dispatch=useDispatch()   
    const selector = useSelector(store => store.SignupReducer); 
    // const user={
    //   email,
    //    pass
    // } 

    
    return (
        <>
            <Box
                sx={{
                    width: "85%",
                    height: 900,
                    border: "0px solid rgb(237,237,237)",
                    margin: "auto",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "80%",
                        border: "0px solid black",
                        margin: "auto",
                        marginTop: 2,
                        backgroundColor: "white",
                        boxShadow:"0px 0px 4px"
                    }}
                >
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={
                            {username:"", email: "", password: "",confirmpass:"",phone:"" }}
                        onSubmit={(values) => {
                            console.log("values:", values.email)
                            alert("Form Submited Succefully")
                            dispatch(getSignupSuccess(values))
                            const uu={
                                email:values.email
                                
                            }
                            console.log("user:",selector.payload)

                           
                        }}
                    >
                        <Form>

                            <div className="outerForm">
                            <img className='Logo' src="./src/Images/logo.jpg" alt="ec Logo"
                         
                        />
                            <div className="signupName"><h1>Signup</h1> </div>



                                <Box className='innerBox'  >
                                    <div className="label"><h6>Username</h6> </div>
                                    <Field className='inputBox' name="username" type="text"
                                  
                              />
                                    <br />
                                    <Errorm color name='username' />
                                </Box>

                                <Box className='innerBox'  >
                                    <div className="label"><h6>Email</h6> </div>
                                    <Field className='inputBox' name="email" type="text" 
                                    />
                                    <br />
                                    <Errorm color name='email' />
                                </Box>


                                <Box className='innerBox'  >

                                    <div className="label"><h6>Password</h6> </div>
                                    <Field className='inputBox' name="password" type="text"  />
                                    <br />
                                    <Errorm color name='password' />
                                </Box>


                                <Box className='innerBox'  >

                                    <div className="label"><h6>Confirm Password</h6> </div>
                                    <Field className='inputBox' name="confirmpass" type="text"  />
                                    <br />
                                    <Errorm color name='confirmpass' />
                                </Box>
                                <Box className='innerBox'  >


                                    <div className="label"><h6>Phone Number</h6> </div>
                                    <Field className='inputBox' name="phone" type="text"  />
                                    <br />
                                    <Errorm color name='phone' />
                                </Box>



                                <button 
                                className='submit' type='submit'
                                
                                ><h5 style={{margin:"auto"}}>Submit</h5></button>
                            </div>
                        </Form>

                    </Formik>

                </Box>

            </Box>
        </>

    )
}