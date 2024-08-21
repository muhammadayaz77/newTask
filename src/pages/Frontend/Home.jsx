import React, { useState } from 'react'
import AddTodo from '../../components/AddTodo'
import Progress from '../../components/Progress'
import Todo from '../../components/Todo'
import Complete from '../../components/Complete'
function Home() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className='text-center mt-3 mb-5'>
          Countdown Board for Project Management
          </h1>
        </div>
        <div className="col-12 mb-3">
          <AddTodo></AddTodo>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
         <Todo></Todo>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
        <Progress></Progress>
        </div>
        <div className="col-lg-4 col-md-6">
        <Complete></Complete>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home