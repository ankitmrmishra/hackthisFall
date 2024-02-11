import React from "react";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Company from "./components/company";
import FeaturedCourses from "./components/featuredCourses";
import Details from "./components/Details";
import Testimonials from "./components/testimonials";
import Footer from "./components/Footer";
import SignInSide from "./components/signin";
import SignUp from "./components/signup";
// import TokBoxVideoChat from "./video"
import CourseDetail from "./components/courseDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import courseData from "./components/courseData.json";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignInSide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Herosection />
              <Company />
              <FeaturedCourses courses={courseData} />
              <Details />
              <Testimonials />
              <Footer />
              {/* <TokBoxVideoChat/> */}
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={<CourseDetail courses={courseData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
