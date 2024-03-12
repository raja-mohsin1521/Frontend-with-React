
import React from 'react'
import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import LandingContainer from './Components/LandingContainer'
import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import Results from './Components/Results'
import Reviews from './Components/Reviews'


function App() {
 
  function dragNdrop2() {
 
  
  }
  return (
    <>
     <Navbar/>
     <LandingContainer dragNdrop2={dragNdrop2}/>
 
     <Loader/>
     <About/>
     <Reviews/>
     <Footer/>
    </>
  )
}

export default App
