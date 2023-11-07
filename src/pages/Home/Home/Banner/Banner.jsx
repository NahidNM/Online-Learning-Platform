import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import bg from "../../../../../public/Login/bg.avif";
import bg1 from "../../../../../public/Login/photo-1616400619175-5beda3a17896.avif";

const Banner = () =>  {

  const AutoplaySlider = withAutoplay(AwesomeSlider)

  return(
    <div className='pt-16'>
      <AutoplaySlider
    play={true}
    cancelOnInteraction={true} // should stop playing on user interaction
    interval={2500}
  >
    <div className="min-h-screen hero md:pt-16 ">
      <img src="https://i.ibb.co/V3L7Kyq/160-F-401828866-H9fh-Not-GOOkz1-VI7d-AJP0-V142tp-Lil-Dq.jpg" alt="" className='w-full '/>
<div className="hero-overlay bg-opacity-60"></div>
<div className="text-center hero-content text-neutral-content">
<div>
<div className=''>
    <h1 className="text-4xl font-medium uppercase drop-shadow-[3px_3px_0_rgb(234,179,8)] md:text-5xl">Hello there</h1>
    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>  
</div>
  </div>
</div>
<div className="min-h-screen hero md:pt-16 " >
<img src={bg} className='w-full' alt="" />

<div className="hero-overlay bg-opacity-60"></div>

<div className="text-center hero-content text-neutral-content">
<div>
<div className=''>
    <h1 className="text-4xl font-medium uppercase drop-shadow-[3px_3px_0_rgb(234,179,8)] md:text-5xl">Hello there</h1>
    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>  
</div>
  </div>
</div>
<div className="min-h-screen hero md:pt-16 ">
<img src={bg1} className='w-full' alt="" />
<div className="hero-overlay bg-opacity-60"></div>
<div className="text-center hero-content text-neutral-content">
<div>
<div className=''>
    <h1 className="text-4xl font-medium uppercase drop-shadow-[3px_3px_0_rgb(234,179,8)] md:text-5xl">Hello there</h1>
    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>  
</div>
  </div>
</div>
  </AutoplaySlider>
    </div>
  )
}


export default Banner;













// import React from "react";
// import banner from "../../../../../public/Banner/bg1.png";

// const Banner = () => {
//   return (
//     <div className="min-h-screen pt-16 hero bg-base-200">
//       <div className="flex-col gap-5 hero-content lg:flex-row-reverse">
//         <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
//         <div>
//           <h1 className="text-5xl font-bold">
//             Improve Your Online Learning Experience Better Instantly!
//           </h1>
//           <p className="w-full py-6">
//             we have 50+ Online courses & 20K+ Online register student. Find your
//             desired Courses from them
//           </p>
//           <div className="flex items-center gap-6">
//             <p>
//               <button className="btn btn-primary">Get Started</button>
//             </p>
//             <p>
//               <button className="px-10 py-3 text-xl font-bold rounded-lg bg-slate-300">
//                 Browse Courses
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
