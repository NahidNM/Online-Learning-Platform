import { useContext } from "react";

// import { useEffect } from "react";
// import { FaSearch } from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";
import CoursesCart from "./CoursesCart";
import { Dna } from "react-loader-spinner";
import { AuthContext } from "../../Providers/AuthProvider";
import React from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { useState, useEffect } from "react";

const Course = () => {
  const [ALLCourse, setAllCoures] = useState([]);
  const [data, setData] = useState(ALLCourse);
  const [ai, setAi] = useState([]);
  const [ui, setUi] = useState([]);
  const [Development, setDevelopment] = useState([]);
  const [app, setApp] = useState([]);
  const [science, setScience] = useState([]);
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/course")
      .then((res) => res.json())
      .then((data) => {
        setAllCoures(data);
        setData(data);
      });
  }, []);

  // filter category
  const filter = (event) => {
    setData(
      ALLCourse.filter((lesson) =>
        lesson.course_name.toLowerCase().includes(event.target.value)
      )
    );
  };

  // filter tuitor
  const tutorhandler = (prop) => {
    setData(
      ALLCourse.filter(
        (lesson) => lesson.instructor_details.instructor_name == prop
      )
    );
  };

  const CategoryHandler = (prop) => {
    setData(ALLCourse.filter((lesson) => lesson.category == prop));
    console.log(ALLCourse);
  };

  const handleALLCourse = () => {
    console.log(ALLCourse);
    setData(ALLCourse);
    console.log(data);
  };

  const RatingSOrter = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => b.rating - a.rating);
    setData(sortedData);
  };
  const priceSOrter = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => b.price - a.price);
    setData(sortedData);
  };

  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-around">
        <Dna
          visible={true}
          height="100"
          width="180"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <div className="md:px-10 ">
      {/* -------------------Search Bar-------------------------- */}
      <div className="flex items-center my-3 bg-cyan-400 rounded-xl md:mx-96">
        <input
          className="py-2 pl-3 pr-24 mx-2 my-2 rounded-xl "
          onChange={filter}
          type="text"
          placeholder="Search Courses"
        />
        <button>
          <BsSearch color="#F7E1AE" size={30} className="mx-2" />
        </button>
      </div>

      {/* ----------------------Category list and filter list------------------------ */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="pt-3 text-xl font-semibold text-gray-700 ">
            Find By Category :{" "}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <button
              className="btn btn-accent"
              onClick={() => handleALLCourse()}
            >
              All Courses
            </button>
            <button
              className="btn btn-accent"
              onClick={() => CategoryHandler("AI")}
            >
              AI
            </button>
            <button
              className="btn btn-accent"
              onClick={() => CategoryHandler("UI UX")}
            >
              UI UX design
            </button>
            <button
              className="btn btn-accent"
              onClick={() => CategoryHandler("Development")}
            >
              WEB Development
            </button>
            <button
              className="btn btn-accent"
              onClick={() => CategoryHandler("App")}
            >
              APP Development
            </button>
            <button
              className="btn btn-accent"
              onClick={() => CategoryHandler("Data Science")}
            >
              Data Science
            </button>
            <button
              className="btn btn-accent"
              onClick={() => CategoryHandler("Data Entry")}
            >
              Data Entry
            </button>
          </div>

          <h1 className="pt-3 text-xl font-semibold text-gray-700 ">
            Find By Tutor :{" "}
          </h1>
          <div className="flex flex-wrap items-center gap-4 py-1">
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Samuel")}
            >
              Samuel
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Mathew")}
            >
              Mathew{" "}
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Smith")}
            >
              Smith{" "}
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Jade")}
            >
              Jade
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Katherine")}
            >
              Katherine
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Razia")}
            >
              Razia
            </button>
          </div>
        </div>
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="m-1 btn btn-accent">
              Click to sort data
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-20 md:w-44"
            >
              <li onClick={() => priceSOrter()}>
                <a className="flex items-center">
                  <span className="hidden md:block">Sort By</span> Price
                </a>
              </li>
              <li onClick={() => RatingSOrter()}>
                <a className="flex items-center">
                  <span className="hidden md:block">Sort By</span> Rating
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --------------------------CourseCatolog------------------------ */}
      <div className="grid gap-5 py-5 md:grid-cols-3 ">
        {data.length == 0 ? (
          <h1>Sorry, No Class Available</h1>
        ) : (
          data.map((session) => (
            <CoursesCart key={session._id} course={session} />
          ))
        )}
      </div>
    </div>
  );
};

export default Course;
