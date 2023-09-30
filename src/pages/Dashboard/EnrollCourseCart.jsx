import React from 'react';
// import Course from '../Course/Course';
import ReactStars from "react-stars";

const EnrollCourseCart = (props) => {
console.log(props.course);
const { course_name,
    category,
    rating,
    enrolled_students,
    course_logo_image,
    price,
    syllabus_info,
    instructor_details,
    reviews,
    _id,} = props.course;

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
             
              className="pt-4 bg-indigo-600 border-0 border-b-4 border-orange-400 btn btn-outline card-actions"
            >
             view Course
             </button>    
        </div>
      </div>
    );
};

export default EnrollCourseCart;