import React from "react";
import { Outlet,useLocation } from "react-router";

function Auth() {
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
          <p className="text-gray-500 font-bold">{useLocation().pathname.includes('signup')? 'Sign up to our platform':'Sign in to our platform'} </p>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Auth;
