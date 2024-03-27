import { useState } from 'react'

import './App.css'
import LandingBox from './Components/LandingBox'
import About from './Components/About'
import Working from './Components/Working'
import Services from './Components/Usage'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Usage from './Components/Usage'
import ServicsContainer from './Components/ServicsContainer'

function App() {
  

  return (
    <>
    <Nav/>
      <LandingBox/>
      <Working/>
      <Usage/>
    <ServicsContainer/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
