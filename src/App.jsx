import React from 'react'
import Login from './components/Login'
import Error from './components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/error" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
