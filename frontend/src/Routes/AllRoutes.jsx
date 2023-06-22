import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Notfound from '../Components/Notfound'
import ProgressPage from '../Components/Progress'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/progress' element={<ProgressPage/>}></Route>
            <Route path='*' element={<Notfound/>}></Route>
        </Routes>
    </div>
  )
}
