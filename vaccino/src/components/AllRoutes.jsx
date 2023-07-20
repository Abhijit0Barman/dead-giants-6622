import React from 'react'
import { Routes, Route } from "react-router-dom"
import Database from "./Database"
import Education from "./Education"
import News from "./News"
import Regulation from "./Regulation"
import Home from "./Home"
import Login from "./Login"
import Main from './Main'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/database' element={<Database />}></Route>
        <Route path='/education' element={<Education />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/regulation' element={<Regulation />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/database/:id' element={<Database />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes