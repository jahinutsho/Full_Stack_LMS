import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { AppContext } from "../../Context/AppContext";

const CourseSection = () => {
  const {allCourses}=useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Learn from the best</h2>
      <p className="text-sm md:text-base text-gray-500 mb-8">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {allCourses.slice(0,4).map((Course, index) => (
          <CourseCard key={index} course={Course} />
        ))}
      </div>
      <div className="text-center">
        <Link 
          to="/course-list" 
          onClick={() => window.scrollTo(0, 0)}
          className="inline-block text-gray-500 hover:text-gray-700 border border-gray-500/30 hover:border-gray-500/50 px-10 py-3 rounded transition-colors duration-300"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;
