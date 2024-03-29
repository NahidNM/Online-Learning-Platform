import { useState } from "react";

import { useEffect } from "react";
import CoursesCart from "../../Course/CoursesCart";

const PopularCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/course")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });

  //    console.log(courses);

  return (
    <div className="pt-5 pb-10">
      <div className="divider"></div>
      <div className="font-bold text-center text-blue-500 divider md:text-5xl">
       Our Popular Course
      </div>
      <div className="divider"></div>

      <div className="grid gap-5 md:grid-cols-3">
        {courses?.slice(0, 6)?.map((course) => (
          <CoursesCart key={course._id} course={course}></CoursesCart>
        ))}
      </div>
    </div>
  );
};

export default PopularCourse;
