import { signOut } from 'firebase/auth';
import React from 'react'
import { FcLibrary } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../config/Firebase';
import { authActions } from '../redux/AuthSlice';

function Header() {
  let isAuth = useSelector(store => store.auth);
  let dispatch = useDispatch()
  let handleSignout = () => {
    signOut(auth)
    .then(() => {
      window.toastify('You are Signout','success')
      dispatch(authActions.logout())

    })
    .catch(() => {
      window.toastify('Something went wrong','error');
    })
  }
  return (
    <>
    <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
        <FcLibrary style={{fontSize:'40px'}} />
        <span style={{fontSize:'25px',fontFamily:'sans-serif',fontWeight:'700'}}>myJira</span>
        {/* <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" /> */}
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-5">
          <li><a href="#" className="nav-link px-2 link=body-emphasis text-dark">Home</a></li>
          <li><Link to="/about" className="nav-link px-2 link-body-emphasis">About</Link></li>
          <li><Link to="/contact" className="nav-link px-2 link-body-emphasis">Contact Us</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
        </form>
        
        <Link to='/auth/login' className='btn btn-primary me-3'>Login</Link>
        <div className="dropdown text-end">
          <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
            <img src="../public/MuhammadAyaz.jpeg" alt="mdo" width="32" height="32" className="rounded-circle" />
          </a>
          <ul className="dropdown-menu text-small show" data-popper-placement="bottom-end" style={{position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate3d(0.5px, 34px, 0px)"}}>
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><Link to='/auth/profile' className="dropdown-item" href="#">Profile</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a onClick={handleSignout} className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
        
      
      </div>
    </div>
  </header>
    </>
  )
}

export default Header