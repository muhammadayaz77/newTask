import React, { useEffect, useState } from 'react'
import { firestore } from '../config/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import {useDispatch} from 'react-redux'
import { authActions } from '../redux/TodoSlice';
import { comActions } from '../redux/CompSlice';
function Todo() {
  let dispatch = useDispatch();
  let [documents,setDocuments] = useState([])
  let readDocuments = async() => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    let array = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      array.push(data);
      
});
setDocuments(array)
console.log(documents)
  }
  useEffect(() => {
    setInterval(() => {
      readDocuments();
    },1000)
  },[]);
  return (
    <>
     <div className='content'>
      <h5 className='text-center my-2'>My Todo</h5>
          {documents.map((item) => 
            <div className='bg-primary m-2 p-2 d-flex align-items-center justify-content-between'>
            <p className='m-0 text-white'>{item.todoName}</p>
            <div>
            <button className='btn btn-warning me-2'
            onClick={() => dispatch(authActions.addToProgress(item.todoName))            }
            >Progress</button>
            <button className='btn btn-success'
            onClick={() => dispatch(comActions.addToComplete(item.todoName))}
            >Complete</button>
            </div>
           </div>
          )}
           
           
          </div>
    </>
  )
}

export default Todo