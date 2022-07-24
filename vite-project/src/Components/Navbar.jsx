import { Link } from "react-router-dom";
import "../Style/Navbar.css"
import TextField from '@mui/material/TextField';
import { useState } from "react";
import axios from "axios"
import { getSearch_Fail, getSearch_Loading, getSearch_Success } from "../Redux/Action/NavabarSearchAction";
import { useDispatch } from "react-redux";

export const Navbar=()=>{
const dispatch=useDispatch()
const[query,setQuery]=useState("")
const handleSubmit=()=>{
    setQuery(query)

    console.log("yes",query)
   

        dispatch(getSearch_Loading())
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`
        )
            .then(function (response) {
                dispatch(getSearch_Success(response))
              console.log("SearchData:",response.data)
            })
            .catch(function (error) {
                dispatch(getSearch_Fail(error))
    
              console.log(error);
            });
    
    

}

const handleLogout=()=>{
    localStorage.clear()
}

    return(
        <div className="navbar">
        <img className="Vlogo" src="./src/Images/logo.jpg" alt="" />
        <input  className="inputBoxx" type="text" 
        value={query}
        onChange={((e)=>setQuery(e.target.value))}
        />
        <button className="inputButton"
        onClick={handleSubmit}
        >Search</button>

        <div className="outerLink" 
        style={{border:"0px solid red",display:"flex"}}>

        


        <div className="navLinks" style={{border:"0px solid black",}}> 

        <Link className="link" to="/profile">Profile</Link>
        <Link className="link" to="/sigin">Login</Link>
        <Link className="link" onClick={handleLogout} to="/">SignUp</Link>
        </div>
       
        </div>
          
        </div>
        
    )
}