import React, { useEffect, useState } from "react";
import EnrollCourseCart from "./EnrollCourseCart";

const EnrollCourse = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  useEffect(() => {
    fetch("https://online-learning-platform-server-gold.vercel.appenroll")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });

  return (
    <div>
      <div className="divider"></div>
      <div className="font-bold text-center text-blue-500 divider md:text-5xl">
        Enroll Course
      </div>
      <div className="divider"></div>

      <div className="grid gap-3 md:grid-cols-3 md:ml-4">
        {courses?.length == 0 ? (
          <h1>Sorry, No Course Enroll</h1>
        ) : (
          courses?.map((session) => (
            <EnrollCourseCart key={session._id} course={session} />
          ))
        )}
      </div>
    </div>
  );
};

export default EnrollCourse;
