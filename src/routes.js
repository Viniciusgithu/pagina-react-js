import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './Pages/Home'
import Users from './Pages/Users'

function ActionRoutes(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  )

}


export default ActionRoutes