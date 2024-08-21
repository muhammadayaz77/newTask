import React,{useRef, useState} from 'react'
import { auth } from '../../config/Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux/AuthSlice';
function Login() {
  // let isAuth = useSelector()
  let dispatch = useDispatch()
  let [isProcess,setProcess] = useState(false);
    let emailElement = useRef();
    let passElement = useRef();
    let confirmPassElement = useRef();
    let handleLogin = (e) => {
        e.preventDefault();
        let email = emailElement.current.value;
        let pass = passElement.current.value;
        let confirmPass = confirmPassElement.current.value;
        if(pass !== confirmPass)
        {
          window.toastify('Password Not Match','error');
        }
        else
        {
          setProcess(true)
            createUserWithEmailAndPassword(auth, email, pass)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                dispatch(authActions.login())
          window.toastify('Your account has been created','success');
                // ...
              })
              .catch((error) => {
          window.toastify('Something went wrong','error');

                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              })
              .finally(() => 
                setProcess(false)
              )
        }
    }
  return (
    <>
    <div className="container mt-5">
        <div className="row d-flex justify-content-center">
            <div className="col-4 border">
            <form className='w-100'
            onSubmit={handleLogin}
            >
    <h1 className="h3 mb-3 fw-normal text-center my-3">Please Login</h1>

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
    <div className="form-floating">
      <input type="password"
      ref={confirmPassElement}
      className="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Confirm Password</label>
    </div>
    <div className="form-check text-start my-3">
      <input className="form-check-input" 
      type="checkbox" id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2 mb-3" type="submit"
    >
      {!isProcess ? 'login' : 
      <div className="spinner-border"></div>
      }
    </button>
    <p>Already have an Account?<Link to='/auth/register'>Register</Link></p>
  </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login