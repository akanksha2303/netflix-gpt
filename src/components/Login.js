import React, { useState,useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { getAuth,updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  
  const[isSignInForm,setIsSignInForm] = useState(true);
  const[errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value,password.current.value); 
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      // sign up logic
  createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
  
    const user = userCredential.user;
    const auth = getAuth();

    updateProfile(auth.currentUser, {
    displayName: name.current.value, 
    photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4"
}).then(() => {
  const {uid , email , displayName , photoURL} = auth.currentUser;
  dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
  navigate("/browse");

}).catch((error) => {
  setErrorMessage(error.message);
});
    console.log(user);
    navigate("/browse")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
    else{
      //sign in logic
  signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage );
  });

    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
        <Header/>
        <div className= "absolute">
      <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
        />
        </div>
        <form onSubmit= {(e)=>e.preventDefault()} className="w-4/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white bg-opacity-80">

            <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
              <input 
              ref={name}
              type="text" placeholder="Full Name" className= "p-4 my-4 w-full bg-gray-700 rounded-lg"/>
            )}
            <input
             ref={email}
             type="text" placeholder="Email Address" className= "p-4 my-4 w-full  bg-gray-700 rounded-lg"/>

            <input 
            ref={password}
            type="password" placeholder="Password" className= "p-4 my-4 w-full bg-gray-700 rounded-lg"/>

            <p className="text-red-500 font-semibold text-lg py-2">{errorMessage}</p>

            <button className="p-4 my-6 w-full bg-red-700 rounded-lg" onClick={handleButtonClick}>
              {isSignInForm? "Sign In" : "Sign Up"}
              </button>

              <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix? Sign up Now." : "Already Registered? Sign In."}
                </p>
        </form>
    </div>
  );
};

export default Login;

