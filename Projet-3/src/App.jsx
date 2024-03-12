import React,{useState} from 'react'

import './App.css'
import Gamecontainer from './Components/Gamecontainer'
import LandingPage from './Components/LandingPage'

function App() {
  
const [game,setgame]=useState(false)
const toggle=()=>{
  setgame((prev)=>!prev)
}
  return (
    <>
    
      {game ? <Gamecontainer/> :  <LandingPage toggle={toggle}/> }
    
      

    </>
  )
}

export default App
