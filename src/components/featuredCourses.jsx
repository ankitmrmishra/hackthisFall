import React from "react";
import CourseCard from "./courseCard";
import { useEffect, useState } from "react";
// import sanityClient  from "./client";

function featuredCourses() {
//   const [course, setCourses] = useState(null);
//   useEffect(() => {
//     sanityClient
//       .fetch(
//       `*[_type == "product"]{
//   price,
//     "slug": slug.current,
//     description,
//     "slug":slug.current,
//     "images": images[0].asset->url
// }`
//     )
//       .then((data) => setCourses(data))
//     .catch(console.error)
//   })
  return (
    <div
      id='Courses'
      className=' text-black  bg-gradient-to-b from-blue-200 to-violet-300 '
    >
      <div className=' pt-32 heading flex flex-row items-center text-center align-middle justify-center text-5xl'>
        <span className='text1 '>Featured</span>
        <span className='text1 text-teal-600'>Courses</span>
      </div>
      <div className='subtitle pt-8  flex flex-row items-center text-center align-middle justify-center text-slate-700'>
        <span className='w-[40rem]'>
          "Discover excellence with our handpicked 'Featured Courses. Explore
          these top-tier offerings and unlock your potential with our curated
          selection."
        </span>
      </div>

      <div className='courseshere lg:grid grid-cols-3 gap-5 flex flex-col items-center align-middle justify-center lg:p-[10rem]'>
        {/* {course && course.map((course, index) => (
  <div key={index}>
    <CourseCard description={course.description} image={course.image} price={course.price} /> */}
  {/* </div> */}
{/* ))} */}
      </div>
    </div>
  );
}

//#D9ECFF, #F0F3FF00

export default featuredCourses;
