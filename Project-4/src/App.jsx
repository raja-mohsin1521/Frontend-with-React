import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './Components/Top'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Body/>
    </>
  )
}

export default App
