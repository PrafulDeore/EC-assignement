import { Link } from "react-router-dom";
import "../Style/Navbar.css"
import TextField from '@mui/material/TextField';
export const Navbar=()=>{

const handleLogout=()=>{

    localStorage.clear()
}


    return(
        <div className="navbar">
        <img className="Vlogo" src="./src/Images/logo.jpg" alt="" />
        <div className="outerLink" 
        style={{border:"0px solid black",display:"flex"}}>

        <TextField id="standard-basic" label="Search Movie" variant="standard" />

        <div className="navLinks" style={{border:"0px solid black",}}> 
        <Link className="link" to="/sigin">Login</Link>
        <Link className="link" to="/profile">Profile</Link>
        <Link className="link" onClick={handleLogout} to="/">LogOut</Link>
        </div>
       
        </div>
          
        </div>
        
    )
}