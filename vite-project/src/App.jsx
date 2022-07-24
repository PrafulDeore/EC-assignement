import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Signup } from './Components/Signup'
import { Signin } from './Components/SignIn'
import { Home } from './Components/Home'
import { Profile } from './Components/Profile'
import { Sliderr } from './Components/Slider/Slider'
import { Cards } from './Components/Card/Card'
import { MovieDetails } from './Components/MovieDetails/Moviedetails'

function App() {

  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Signup/>}></Route>
       <Route path='/sigin' element={<Signin/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
       <Route path='movie/:id' element={<MovieDetails/>}></Route>
       <Route path='/slider' element={<Sliderr/>}></Route>
       <Route path='/card' element={<Cards/>}></Route>


      
      </Routes>
    </div>
  )
}

export default App
