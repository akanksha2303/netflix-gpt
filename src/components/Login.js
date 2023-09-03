import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const[isSignInForm,setIsSignInForm] = useState(true);

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
        <form className="w-4/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
              <input type="text" placeholder="Full Name" className= "p-4 my-4 w-full bg-gray-700 rounded-lg"/>
            )}
            <input type="text" placeholder="Email Address" className= "p-4 my-4 w-full  bg-gray-700 rounded-lg"/>
            <input type="password" placeholder="Password" className= "p-4 my-4 w-full bg-gray-700 rounded-lg"/>
            <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
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

