import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from "formik"
import * as yup from 'yup';
import { Errorm } from './Error';
import "../Style/Signup.css"
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import axios from "axios"
import { NavbarProfile } from './NavabrProfile';


const validationSchema = yup.object({
 
    email: yup.string().email('Invalid email format').required("*Email is Field!"),
    password: yup.string().required('Password is required'),
  
});

const User=JSON.parse(localStorage.getItem("UserInfo"))
console.log("User:",User)

export const Profile=() => {
    const navigator=useNavigate()
    const handleLogout=()=>{

        localStorage.clear()
        navigator('/')
    }
    

    return (
        <>
        <NavbarProfile/>
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
                   
                   

                            <div className="outerForm">
                                <img className='Logo' src="./src/Images/logo.jpg" alt="ec Logo"/>

{
    User? <Box className='innerBox'  >
    <div className="signupName"><h1>User Profile</h1> </div>
    <div className="label"><h3>{`Username: ${User.username}`}</h3> </div>
    <div className="label"><h3>{`Email: ${User.email}`}</h3> </div>
    <div className="label"><h3>{`Email: ${User.mobile}`}</h3> </div>
    <button className='submit'
    onClick={handleLogout}
    style={{ margin: "10px 0px 10px"  }}
    ><h6 style={{ margin: "auto" }}>LogOut</h6></button>
</Box>:<div className="signupName"><h1>Youre Not LogdIn <Link to="/">click here</Link></h1> 
     
</div>

}

                               


                              

                                
                            </div>
                       

                </Box>

            </Box>
        </>

    )
}