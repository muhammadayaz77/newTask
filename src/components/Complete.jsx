import React from 'react'
import { useSelector } from 'react-redux'
import { TbProgressCheck } from "react-icons/tb";
function Complete() {
  let complete = useSelector(store => store.comp.comp)
  return (
    <>
     <div className='content'>
      <h5 className='text-center my-2'>Complete</h5>
      {complete.map((item) => 
                   <div className='bg-success m-2 p-2 d-flex align-items-center justify-content-between'>
                   <p className='m-0 text-white'>{item}</p>
                   <TbProgressCheck style={{fontSize:'20px',marginLeft:'auto'}} />
                   <div>
                   </div>
                  </div>
      )}
           
          </div>
    </>
  )
}

export default Complete