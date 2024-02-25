import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Routes, Route } from "react-router-dom";
import Signup from "./screens/auth/Signup";
import Signin from "./screens/auth/Signin";
import Auth from "./screens/auth/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./screens/main/Main";
import Notfound from "./screens/Notfound/Notfound";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "",
            element: <Signin />,
            
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "main",
        element: <Main />,
        // children: [
        //   {
        //     path: "",
        //     element: <Home />,
        //   },
        // ],
      },
    ],
  },
  {
    path:"*",
    element:<Notfound/>
  }
]);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
