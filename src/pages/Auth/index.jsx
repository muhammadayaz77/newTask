import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Profile from '../../components/Profile'
function index() {
  return (
    <>
    <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='profile' element={<Profile />} />
    </Routes>
    </>
  )
}

export default index