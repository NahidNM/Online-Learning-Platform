import React from 'react';

const InstructorCard = (props) => {
    console.log(props.teacher);
    const { instructor_name, instructor_image, experience, qualification } = props.teacher;
    return (
        <div className="shadow-xl card md:w-80 bg-sky-200 ">
      <figure>
        <img className="pt-5 rounded-lg w-60 h-60" src={instructor_image} alt="Shoes" />
      </figure>
      <div className="text-black card-body">
        <h2 className="card-title">{instructor_name}</h2>
        
          <h1>{experience}</h1>
          <h1>{qualification}</h1>
        
        <p></p>
      </div>
    </div>
    );
};

export default InstructorCard;