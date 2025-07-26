"use client";
import React, { useState, useEffect } from "react";
import CourceSell from "../herosection/CourceSell";
import CourseOutlate from "../herosection/CourseOutlate";

const StickyCourse: React.FC = () => {
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
      className={`sticky top-[5rem] space-y-5 bg-white p-5 md:block transition-opacity duration-500 container mx-auto px-[5rem] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <CourceSell />
      <CourseOutlate />
    </div>
  );
};

export default StickyCourse;
