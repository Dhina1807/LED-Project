import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Web from './Web.jsx' 
import Light1 from './Light1.jsx' 
import Light2 from './Light2.jsx' 
import Shop from './Shop.jsx' 
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
        
   
        <Routes>
          
          <Route path="/" element={<Web/>}/>
          <Route path="/light1" element={<Light1/>}/>
          <Route path="/light2" element={<Light2/>}/>
          <Route path="/lights/:id" element={<Shop/>}/>
          <Route path="/Bulbs/:id" element={<Shop/>}/>
          
        
        </Routes>
      
      </BrowserRouter>
      <Shop/>
      
    </>
  )
}

export default App
