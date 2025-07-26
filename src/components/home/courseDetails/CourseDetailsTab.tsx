"use client";

import { Section } from "@/types/course";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-scroll";

interface CourseDetailsTabProps { 
  section: Section[]
}

const CourseDetailsTab: React.FC<CourseDetailsTabProps> = ({section}) => {
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
    <div className="sticky w-full border-gray-200 bg-white py-2 my-2 md:top-[4rem] top-[3rem] z-10">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-400  cursor-pointer p-2 rounded-full shadow z-10"
      >
        <FaChevronLeft className="text-white" />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar mx-10 space-x-6 cursor-pointer active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {section.map(
          (tab, index) =>
            tab.name.length > 0 && (
              <Link
                to={tab.type}
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
                {tab.name}
              </Link>
            )
        )}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-400 p-2 rounded-full shadow z-10"
      >
        <FaChevronRight className="text-white" />
      </button>
    </div>
  );
};

export default CourseDetailsTab;
