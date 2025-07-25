"use client";

import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const tabs = [
  "কোর্স ইন্ট্রোডাকশন",
  "কোর্সটি যেভাবে সাজানো হয়েছে",
  "কোর্সটি করে যা শিখবেন",
  "কোর্স সম্পর্কে বিস্তারিত",
  "কোর্স এক্সক্লুসিভ ফিচার",
  "শিক্ষার্থীরা যা বলছে",
  "সচরাচর জিজ্ঞাসা",
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
    <div className="relative w-full border-b border-gray-200 bg-white py-2 my-2">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
      >
        <FaChevronLeft className="text-gray-500" />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar mx-10 space-x-6 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`whitespace-nowrap text-[1rem] pb-1 border-b-2 transition-all duration-200 ${
              activeIndex === index
                ? "border-green-600 text-green-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-green-500"
            }`}
          >
            {tab}
          </button>
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
