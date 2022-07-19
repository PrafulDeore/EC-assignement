import { Link } from "react-router-dom";
import "../Style/Navbar.css"
export const Navbar=()=>{




    return(
        <div className="navbar">
        <img className="Vlogo" src="./src/Images/LOGO.png" alt="" />
        <div className="outerLink">
        <Link className="link" to="/">Login</Link>
        <Link className="link" to="/video">Video</Link>
        <Link className="link" to="/Calender">Calender</Link>
        </div>
          
        </div>
        
    )
}