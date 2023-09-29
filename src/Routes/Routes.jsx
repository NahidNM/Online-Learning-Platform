import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPages></ErrorPages>,
      children : [
        {
            path: '/', 
            element: <Home></Home>
        }
      ]
    },
  ]);