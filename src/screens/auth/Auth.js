import React from "react";
import { Outlet } from "react-router";

function Auth() {
  return (
    <>
      <div className="bg-green-800 flex justify-center h-screen w-screen items-center">
        <div className="bg-white w-96 h-auto rounded-lg text-black p-8 font-semibold space-y-3 text-xl shadow-md">
          <p className="text-gray-500 font-bold">Sign in to our platform</p>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Auth;
