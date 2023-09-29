 import { useContext, useState } from "react";

import { useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import CoursesCart from "./CoursesCart";
import { Dna } from 'react-loader-spinner'
import { AuthContext } from "../../Providers/AuthProvider";


const Course = () => {
    const { loading } = useContext(AuthContext);
   
 const [courses, setCourses] = useState([]);
   const [data, setData] = useState(courses);
   
    useEffect(() => {
     fetch('http://localhost:5000/course')
     .then(res => res.json())
     .then(data =>{
         setCourses(data)
         setData(data)
     })
    })
    
    // console.log(courses);
    
    const filter = (event) => {
        setData(
            courses.filter((course) =>
            course.category.toLowerCase().includes(event.target.value)
          )
        );
      }; 
      
      if(loading){
        return <div className='flex justify-around'><Dna
        visible={true}
        height="100"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      /></div>
    }
    
    return (
        <div>
             <div className="relative md:mx-16 md:-right-96 ">
        <div className="flex items-center my-3 bg-stone-400 rounded-xl md:mx-96">
          <input
            className="py-2 pl-2 my-2 md:mx-2 md:pr-24 rounded-xl "
            onChange={filter}
            type="text"
            placeholder="Search"
          />
          <button>
            <FaSearch color="#F7E1AE" size={30} className="md:mx-2" />
          </button>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
  {
       data.map((course) => <CoursesCart key={course._id} course={course}>
            </CoursesCart>
            )
     }
</div>
        </div>
    );
};

export default Course;