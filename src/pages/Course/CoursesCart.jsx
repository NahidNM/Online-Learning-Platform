import React from 'react';

const CoursesCart = (props) => {
    const {course_name, category,rating, enrolled_students,course_logo_image, price,syllabus_info, reviews } = props.course;

    // console.log(props.course);

    return (
        <div className="shadow-xl card md:w-80 bg-sky-200 ">           
        <figure><img className="pt-5 rounded-lg" src={course_logo_image} alt="Shoes" /></figure>
        <p className="absolute right-0 px-4 mt-4 mr-4 text-white rounded-md bg-slate-900">${price}</p>
       
        <div className="flex flex-col items-center text-black card-body">
           
            <h2 className="card-title">{course_name}</h2>
            <div className='flex items-center gap-3'>
            <p>Instructor : {category}</p>
            <p>Enroll : {enrolled_students}</p>
          
            </div>
            <p>Seats : {syllabus_info}</p>
            
            
              
              <button className="pt-4 bg-indigo-600 border-0 border-b-4 border-orange-400 btn btn-outline card-actions">Add to Course</button>
        
        </div>
    </div>
    );
};

export default CoursesCart;