import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from "formik"
import * as yup from 'yup';
import { Errorm } from './Error';
import "../Style/Signin.css"
import { useNavigate } from 'react-router-dom';

import axios from "axios"


const validationSchema = yup.object({
 
    email: yup.string().email('Invalid email format').required("*Email is Field!"),
    password: yup.string().required('Password is required'),
  
});

const User=JSON.parse(localStorage.getItem("UserInfo"))
// console.log("User:",User.email,User.password)

export const Signin=() => {
    const navigator=useNavigate()


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
                        boxShadow: "0px 0px 4px"
                    }}
                >
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={
                            {email: "", password: ""}}
                        onSubmit={(values) => {                           
                            const payload = {
                                email: values.email,
                                password: values.password,
                               
                            }

                            if(User.email==payload.email && User.password==payload.password){
                                alert("Youre LogIn")
                                navigator("/home")
                                
                            }
                            else{
                                alert("Please Cheack Email & Password!")
                            }
                            console.log("Login:",payload)

                            console.log("User:",User.email,User.password)

                          
                        }}
                    >
                        <Form>

                            <div className="outerForm">
                                <img className='Logo' src="./src/Images/logo.jpg" alt="ec Logo"

                                />
                                <div className="signupName"><h1>Signin</h1> </div>



                                <Box className='innerBox'  >
                                    <div className="label"><h6>Email</h6> </div>
                                    <Field className='inputBox' name="email" type="text"
                                    />
                                    <br />
                                    <Errorm color name='email' />
                                </Box>


                                <Box className='innerBox'  >

                                    <div className="label"><h6>Password</h6> </div>
                                    <Field className='inputBox' name="password" type="text" />
                                    <br />
                                    <Errorm color name='password' />
                                </Box>

                                <button
                                    className='submit' type='submit'
                                ><h5 style={{ margin: "auto" }}>Submit</h5></button>
                            </div>
                        </Form>

                    </Formik>

                </Box>

            </Box>
        </>

    )
}