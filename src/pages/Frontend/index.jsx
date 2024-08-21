import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import Home from './Home'
import Header from '../../components/Header'
import About from './About'
import Contact from './Contact'
import NoPage from '../../components/NoPage'
import { useSelector } from 'react-redux'
function index() {
  let isAuth = useSelector(store => store.auth);
  return (
    <>
    <Header></Header>
    <Routes>
        <Route path='/' element={isAuth ?<Home /> : <Navigate to='/about' />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NoPage />} />
    </Routes>
    </>
  )
}

export default index