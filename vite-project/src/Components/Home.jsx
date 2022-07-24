import { Navbar } from "./Navbar"
import { Sliderr } from "./Slider/Slider"

export const Home=()=>{
    const User=JSON.parse(localStorage.getItem("UserInfo")) || ""
    if(User){
        console.log(User.username)
    }
    else{
        console.log("Hello User")

    }
    return(
        <>
        <Navbar/>
{
    User?<h5 style={{color:"white"}}>{`Hello ${User.username}`}</h5>:<h5 style={{color:"orange"}}>{`Hello User`}</h5>
}
        <Sliderr/>
        </>
    )
}