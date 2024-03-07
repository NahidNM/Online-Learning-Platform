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
import Payments from "../pages/Dashboard/PaymentMethod/Payments";
import PrivateRoute from "../Providers/PrivateRoute";

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
        element: <PrivateRoute><Instructor></Instructor></PrivateRoute>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
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
        path: "payments",
        element: <Payments></Payments>
      },
      {
        path: 'payments/:id',
        element: <Payments></Payments>,
        loader: (({params})=> fetch(`http://localhost:4000/addCourse/${params.id}`))
      },
      {
        path: "enrollCourse",
        element: <EnrollCourse></EnrollCourse>
      },
      {
        path: 'video',
        element: <CourseVideo></CourseVideo>
      },
    ],
  },
]);
