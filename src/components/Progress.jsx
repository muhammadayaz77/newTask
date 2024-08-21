import React from 'react'
import { useSelector } from 'react-redux'
import { TbProgressBolt } from "react-icons/tb";
function Progress() {
  
 let progress = useSelector(store => store.todo.todo);
  return (
    <>
     <div className='content'>
      <h5 className='text-center my-2'>Progress</h5>
      {progress.map((item) => 
        <div className='bg-warning m-2 p-2 d-flex align-items-center justify-content-between'>
            <p className='m-0 text-white'>{item}</p>
            <TbProgressBolt style={{fontSize:'20px',marginLeft : 'auto'}}  />
            <div>
            </div>
           </div>
      )}
           
           
          </div>
    </>
  )
}

export default Progress