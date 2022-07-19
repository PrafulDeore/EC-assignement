import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Signup } from './Components/Signup'
import { Signin } from './Components/SignIn'
import { Home } from './Components/Home'
import { Profile } from './Components/Profile'
import { MovieDetails } from './Components/MovieDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Signup/>}></Route>
       <Route path='/sigin' element={<Signin/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
       <Route path='/moviedetails' element={<MovieDetails/>}></Route>

      
      </Routes>
    </div>
  )
}

export default App
