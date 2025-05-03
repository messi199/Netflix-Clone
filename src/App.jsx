import React from 'react'
import Home from './Pages/Home/Home'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
const App = () => {
  return (
    <>
   <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/player/:id' element={<Player/>} />
      </Routes>
      </>

  )
}

export default App
