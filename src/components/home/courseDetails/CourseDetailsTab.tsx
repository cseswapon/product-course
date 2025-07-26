"use client";

import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-scroll";

// const tabs = [
//   "Instructors",
//   "Features",
//   "Pointers",
//   "About",
//   "Feature_explanations",
//   "Free_items",
//   "Testimonials",
//   "Faq",
// ];
const tabs = [
  { en: "Instructors", bn: "কোর্স ইন্ট্রোডাকশন" },
  { en: "Features", bn: "কোর্সটি যেভাবে সাজানো হয়েছে" },
  { en: "Pointers", bn: "কোর্সটি করে যা শিখবেন" },
  { en: "About", bn: "কোর্স সম্পর্কে বিস্তারিত" },
  { en: "Feature_explanations", bn: "কোর্স এক্সক্লুসিভ ফিচার" },
  { en: "Testimonials", bn: "শিক্ষার্থীরা যা বলছে" },
  { en: "Faq", bn: "সচরাচর জিজ্ঞাসা" },
  // "Free_items" is missing in the Bangla version, so leaving it blank
  { en: "Free_items", bn: "" },
];

const CourseDetailsTab: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const width = container.clientWidth;
    container.scrollBy({
      left: dir === "left" ? -width / 2 : width / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky w-full border-gray-200 bg-white py-2 my-2 top-[4rem] z-10">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
      >
        <FaChevronLeft className="text-gray-500" />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar mx-10 space-x-6 cursor-pointer active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {tabs.map((tab, index) => (
          <Link
            to={tab.en}
            smooth={true}
            duration={500}
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`whitespace-nowrap text-[1rem] pb-1 border-b-2 transition-all duration-200 ${
              activeIndex === index
                ? "border-green-600 text-green-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-green-500"
            }`}
          >
            {tab.bn}
          </Link>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
      >
        <FaChevronRight className="text-gray-500" />
      </button>
    </div>
  );
};

export default CourseDetailsTab;
