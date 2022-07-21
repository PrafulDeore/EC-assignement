import { Link } from "react-router-dom";
import "../Style/Navbar.css"
import TextField from '@mui/material/TextField';
export const NavbarProfile=()=>{

const handleLogout=()=>{

    localStorage.clear()
}


    return(
        <div className="navbar">
        <img className="Vlogo" src="./src/Images/logo.jpg" alt="" />
        <div className="outerLink" 
        style={{border:"0px solid black",display:"flex"}}>

        <div className="navLinks" style={{border:"0px solid black",}}> 
        <Link className="link" style={{display}} to="/home">Home</Link>
        
        
        </div>
       
        </div>
          
        </div>
        
    )
}