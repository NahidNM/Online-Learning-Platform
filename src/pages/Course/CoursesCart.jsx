import React from "react";
// import { Swap } from 'react-daisyui';
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const CoursesCart = (props) => {
    
    const navigate = useNavigate()
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

  const [ ,refetch ] = useCart()
  
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
            
            course_name,
          };
      fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classLesson),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else{
        Swal.fire({
            title: 'Please login then add to class',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }
  };


  return (
    <div className="shadow-xl card md:w-80 bg-sky-200 ">
      <figure>
        <img className="pt-5 rounded-lg" src={course_logo_image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 px-4 mt-4 mr-4 text-white rounded-md bg-slate-900">
        ${price}
      </p>

      <div className="flex flex-col items-center text-black card-body">
        <h2 className="card-title">{course_name}</h2>
        <div className="flex items-center gap-3">
          <p>Instructor : {category}</p>
          <p>Enroll : {enrolled_students}</p>
        </div>
        <p>Seats : {syllabus_info}</p>

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
