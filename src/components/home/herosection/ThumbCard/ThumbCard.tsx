import React from "react";
import { IoMdCall } from "react-icons/io";
import PreviewGallery from "./PreviewGallery";
import CourceSell from "../CourceSell";
import CourseOutlate from "../CourseOutlate";
import { Course } from "@/types/course";

interface ThubCardProps {
  course: Course;
}

const ThumbCard: React.FC<ThubCardProps> = ({ course }) => {
  // console.log(course.media);
  return (
    <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 md:bg-white absolute right-0 md:top-0 md:absolute z-[9]">
      <div className="md:border-[#dbe1eb] md:border overflow-hidden">
        <div className="md:block hidden md:border">
          <PreviewGallery resources={course.media} />
        </div>
        <div className="hidden md:block">
          <div
            data-device-type="desktop"
            className="w-full p-4 md:h-auto"
            id="variant"
          >
            <div className="relative md:static">
              <CourceSell sell={course.cta_text} />

              {/* Optional Decorative Div */}
              <div className="absolute md:static top-[-45px] left-0">
                <div>{/* Optional element */}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <CourseOutlate />
        </div>
      </div>
      <div className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
        <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
        <div className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
          <IoMdCall className="text-lg font-bold" />
          <span>ফোন করুন (16910)</span>
        </div>
      </div>
    </section>
  );
};

export default ThumbCard;
