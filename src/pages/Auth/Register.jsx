import React,{useRef, useState} from 'react'
import { auth } from '../../config/Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/AuthSlice';
function Register() {
  let [isProcess,setProcess] = useState(false);
  let dispatch = useDispatch()
  let navigate = useNavigate();
    let emailElement = useRef();
    let passElement = useRef();
    let handleRegister = (e) => {
        e.preventDefault();
        let email = emailElement.current.value;
        let pass = passElement.current.value;
       
            signInWithEmailAndPassword(auth, email, pass)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                window.toastify('Your are signin','success')
                dispatch(authActions.login())
                navigate('/')
              })
              .catch((error) => {
                window.toastify('Something went wrong','error')
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              })
    }
  return (
    <>
    <div className="container mt-5">
        <div className="row d-flex justify-content-center">
            <div className="col-4 border">
            <form className='w-100'
            onSubmit={handleRegister}
            >
    <h1 className="h3 mb-3 fw-normal text-center my-3">Please Register</h1>

    <div className="form-floating mb-2">
      <input type="email"
      ref={emailElement}
      className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-2">
      <input type="password"
      ref={passElement}
      className="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>
    <button className="btn btn-primary w-100 py-2 mb-3" type="submit"
    >
      {!isProcess ? 'Register' : 
      <>
      <div className="spinner-border"></div>
      </>}
    </button>
    <p>Don't have an Account?<Link to='/auth/login'>Login</Link></p>
  </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register