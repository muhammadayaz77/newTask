import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Header from '../../components/Header'
import About from './About'
import Contact from './Contact'
function index() {
  return (
    <>
    <Header></Header>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default index