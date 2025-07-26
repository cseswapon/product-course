"use client";
import React, { useState, useEffect } from "react";
import CourceSell from "../herosection/CourceSell";
import CourseOutlate from "../herosection/CourseOutlate";
import { IoMdCall } from "react-icons/io";
import { Course } from "@/types/course";

interface CourseLayoutProps {
  course: Course;
}

const StickyCourse: React.FC<CourseLayoutProps> = ({ course }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 930) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-[5rem] space-y-5 bg-white p-5 md:block transition-opacity duration-500 container mx-auto px-[5rem] hidden  ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <CourceSell sell={course.cta_text} />
      <CourseOutlate checklist={course.checklist || []} />
      <div className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row px-3">
        <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
        <div className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
          <IoMdCall className="text-lg font-bold" />
          <span>ফোন করুন (16910)</span>
        </div>
      </div>
    </div>
  );
};

export default StickyCourse;
