import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from "formik"
import * as yup from 'yup';
import { Errorm } from './Error';
import { getSignupFail, getSignupSuccess } from '../Redux/Action/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../Style/Signup.css"
import axios from "axios"


const validationSchema = yup.object({
    username: yup.string().required("*Require Field!"),
    email: yup.string().email('Invalid email format').required("*Email is Field!"),
    password: yup.string().required('Password is required').min(5, 'Password should be 5 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmpass: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    phone: yup.string().required("*Require Field!"),
});



export const Signup = () => {
    const dispatch = useDispatch()
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
                            { username: "", email: "", password: "", confirmpass: "", phone: "" }}
                        onSubmit={(values) => {                           
                            const payload = {
                                name: values.confirmpass,
                                email: values.email,
                                password: values.password,
                                username: values.username,
                                mobile: values.phone,
                                description: "fdfd",
                            }

                            // axios.post('https://masai-api-mocker.herokuapp.com/auth/register',
                            //     {
                            //         ...payload
                            //     }

                            // )
                                // .then(function (response) {
                                    // dispatch(getSignupSuccess(payload))
                                    // console.log(response.data.error);
                                    // if (response.data.error == false) {
                                        localStorage.setItem("UserInfo",JSON.stringify(payload))

                                        navigator("/sigin")
                                        alert("You're SignUp")
                                    // }
                                //     else if(response.data.error == true){
                                //         alert("Youre already have an Account")
                                //     }
                                // })
                                // .catch(function (error) {
                                //     dispatch(getSignupFail(error))
                                //     console.log(error);
                                // });
                           

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
                                    <Field className='inputBox' name="password" type="text" />
                                    <br />
                                    <Errorm color name='password' />
                                </Box>


                                <Box className='innerBox'  >

                                    <div className="label"><h6>Confirm Password</h6> </div>
                                    <Field className='inputBox' name="confirmpass" type="text" />
                                    <br />
                                    <Errorm color name='confirmpass' />
                                </Box>
                                <Box className='innerBox'  >


                                    <div className="label"><h6>Phone Number</h6> </div>
                                    <Field className='inputBox' name="phone" type="text" />
                                    <br />
                                    <Errorm color name='phone' />
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