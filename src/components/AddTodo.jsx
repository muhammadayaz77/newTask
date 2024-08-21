import React, { useRef } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { firestore } from '../config/Firebase';


function AddTodo() {
    let todoName = useRef();
    let handleAddTodo = async() => {

try {
  const docRef = await addDoc(collection(firestore, "users"), {
    todoName : todoName.current.value,
    todoDate : serverTimestamp(),
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
    }
  return (
    <>
<divc className=' w-100 d-flex'>
<button type="button" class="btn btn-primary m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Todo
</button>

</divc>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-center">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add ToDo</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <input
                    ref={todoName}
                    type="text"
                    style={{padding:'10px'}}
                    placeholder='Enter your Project Name' />
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button
        onClick={handleAddTodo}
        type="button" class="btn btn-success" data-bs-dismiss="modal"
        >Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AddTodo