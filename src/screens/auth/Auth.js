import React, { useEffect } from "react";
import { Outlet,useLocation } from "react-router";
import  { useNavigate } from "react-router-dom";
function Auth() {

  const navigate = useNavigate();
  const location = useLocation();
  const canGoBack = location.key === 'default';

  
  useEffect(() =>{
      console.log(location);
  },[location])
   

  return (
    <>
      <div className="
      bg-green-800  
      flex justify-center 
      min-h-screen min-w-screen 
      items-center
      p-2
      ">
        <div className="bg-white w-96 h-auto rounded-lg text-black p-8 font-semibold space-y-3 text-xl shadow-md">
          <div className="flex items-center space-x-2">
          {
            location.pathname !== '/auth' ?
              <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-8 w-8 
            transition duration-500 ease-in-out text-green-900
            font-bold
            bg-gray-100
            hover:text-white
            hover:bg-green-900 focus:outline-none"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined text-[20px]">keyboard_backspace</span>
          </button>
          : null
       }
        <p className="text-gray-500 font-bold">{useLocation().pathname.includes('signUp')? 'Sign up to our platform':'Sign in to our platform'} </p>
          </div>
         
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Auth;
