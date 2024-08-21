import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Profile from '../../components/Profile'
import NoPage from '../../components/NoPage'
function index() {
  return (
    <>
    <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<NoPage />} />

    </Routes>
    </>
  )
}

export default index