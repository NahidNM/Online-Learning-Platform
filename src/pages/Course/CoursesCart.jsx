import React from "react";
// import { Swap } from 'react-daisyui';
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import ReactStars from "react-stars";

const CoursesCart = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    course_name,
    category,
    rating,
    enrolled_students,
    course_logo_image,
    price,
    syllabus_info,
    instructor_details,
    reviews,
    _id,
  } = props.course;

  // console.log(props.course);

  const { user } = useAuth();

  const [, refetch] = useCart();

  const handleLesson = () => {
    if (user && user.email) {
      const classLesson = {
        classId: _id,
        email: user.email,
        rating,
        course_logo_image,
        syllabus_info,
        category,
        price,
        instructor_details,
        enrolled_students,
        course_name,
      };
      fetch("https://online-learning-platform-server-gold.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classLesson),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login then add to class",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 px-5 py-5 text-gray-700 bg-cyan-400 rounded-2xl">
      <img className="w-96 rounded-t-2xl" src={course_logo_image} alt="" />
      <div className="flex justify-between ">
        <div className="flex items-center gap-2 ">
          <h1 className="text-lg font-bold ">{rating}</h1>
          <ReactStars
            value={rating}
            color1={"gray"}
            size={20}
            color2={"#ffd700"}
          />
          <h1>({reviews?.length})</h1>
        </div>
        <h1 className="text-xl font-bold ">{price}$</h1>
      </div>
      <h1 className="text-xl ">{course_name}</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Category: {category}</h1>
        <h1 className="text-xl">Enrolled: {enrolled_students}</h1>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-3 ">
          <img
            className="p-1 border-2 border-blue-900 rounded-full w-14 "
            src={instructor_details.instructor_image}
            alt=""
          />
          <h1 className="font-bold">{instructor_details.instructor_name}</h1>
        </div>
        <button
          onClick={() => handleLesson()}
          className="pt-4 bg-indigo-600 border-0 border-b-4 border-orange-400 btn btn-outline card-actions"
        >
          Add to Course
        </button>
      </div>
    </div>
  );
};

export default CoursesCart;
