import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const i = 1;
  const [instuctors, setInstuctor] = useState([]);

  useEffect(() => {
    fetch("https://online-learning-platform-server-gold.vercel.appcourse")
      .then((res) => res.json())
      .then((data) => setInstuctor(data));
  });
  // console.log(instuctors);

  const uniqeInstructorSet = new Set();
  // console.log(uniqeInstructorSet);

  const instructorDetails = instuctors
    .filter((instructor) => {
      if (
        !uniqeInstructorSet.has(instructor.instructor_details.instructor_name)
      ) {
        uniqeInstructorSet.add(instructor.instructor_details.instructor_name);
        return true;
      }
      return false;
    })
    .map((course) => course.instructor_details);

  return (
    <div className="my-10">
      <div className="divider"></div>
      <div className="font-bold text-center text-blue-500 divider md:text-5xl">
        Our Instructor
      </div>
      <div className="divider"></div>
      <div className="grid gap-5 md:ml-20 md:grid-cols-3">
        {instructorDetails?.map((instuctorDetail) => (
          <InstructorCard
            key={instuctorDetail.instructor_name}
            teacher={instuctorDetail}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
