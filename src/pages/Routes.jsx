import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
function Index() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={<Auth/>} />
        

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index