import { Navbar } from "./Navbar"

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
    User?<h1>{`Hello ${User.username}`}</h1>:<h1>{`Hello User`}</h1>
}
        
        </>
        
    )
}