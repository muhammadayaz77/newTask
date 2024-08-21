import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../redux/AuthSlice';

function Profile() {
    let isAuth = useSelector(store => store.auth);
    console.log(isAuth)
    let [isProcess,setProcess] = useState(true)
    let dispatch = useDispatch()
    let [user,setUser] = useState({});
    useEffect(() => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    setUser(user);
    dispatch(authActions.login());
    // ...
  } else {
    // dispatch(authActions.logout());
    // User is signed out
    // ...
  }
},[]);

    })
  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <h1 className='text-center'>The Profile that are login</h1>
        
                    <h3>Email : {user.email}</h3>
                    <h3>UID : {user.uid}</h3>
                        </div>
        </div>
    </div>
    </>
  )
}

export default Profile