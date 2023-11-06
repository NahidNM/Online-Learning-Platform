import React from "react";
import banner from "../../../../../public/Banner/bg1.png";

const Banner = () => {
  return (
    <div className="min-h-screen pt-16 hero bg-base-200">
      <div className="flex-col gap-5 hero-content lg:flex-row-reverse">
        <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Improve Your Online Learning Experience Better Instantly!
          </h1>
          <p className="w-full py-6">
            we have 50+ Online courses & 20K+ Online register student. Find your
            desired Courses from them
          </p>
          <div className="flex items-center gap-6">
            <p>
              <button className="btn btn-primary">Get Started</button>
            </p>
            <p>
              <button className="px-10 py-3 text-xl font-bold rounded-lg bg-slate-300">
                Browse Courses
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
