import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Signup from "../pages/Login/Signup/Signup";
import Course from "../pages/Course/Course";
import Instructor from "../pages/Intructor/Instructor";
import MyCourse from "../pages/Dashboard/MyCourse";
import Dashboard from "../Layout/Dashboard";
import EnrollCourse from "../pages/Dashboard/EnrollCourse";
import CourseVideo from "../pages/Dashboard/CourseVideo";
import UserHome from "../pages/Dashboard/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "courses",
        element: <Course></Course>,
      },
      {
        path: "instructor",
        element: <privateRoute><Instructor></Instructor></privateRoute>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <privateRoute>
        <Dashboard></Dashboard>
      </privateRoute>
    ),
    children: [
      {
        path: "UserHome",
        element: <UserHome></UserHome>
      },
      {
        path: "mycourse",
        element: <MyCourse></MyCourse>,
      },
      {
        path: "enrollCourse",
        element: <EnrollCourse></EnrollCourse>,
      },
      {
        path: 'video',
        element: <CourseVideo></CourseVideo>
      },
    ],
  },
]);
