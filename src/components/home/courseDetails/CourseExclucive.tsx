"use client";
import { Section } from "@/types/course";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { Element } from "react-scroll";
interface CoursePointerProps {
  feature_explanations: Section;
}

const CourseExclucive: React.FC<CoursePointerProps> = ({
  feature_explanations,
}) => {
  const { values } = feature_explanations;
  // console.log(values);
  return (
    <Element name="feature_explanations">
      <h1 className="text-xl font-semibold md:mb-4 md:text-2xl">
        কোর্স এক্সক্লুসিভ ফিচার
      </h1>

      {values?.map((item, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded py-2 px-5 space mb-5 last:mb-0"
        >
          <div className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row border-b border-gray-600 last:border-b-0">
            <div className="flex flex-col gap-2">
              <h2 className="text-[14px] font-[500] leading-[30px] text-[#111827] md:text-[16px]">
                {item?.title}
              </h2>

              {item?.checklist?.map((_, i) => (
                <div key={i + idx} className="flex flex-row items-center gap-5">
                  <FaCheck color="#6294F8" size={19} />
                  <p className="text-[14px] font-[400] leading-[24px] text-[#4B5563] md:text-[16px]">
                    {_}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <div className="mb-4 mx-auto max-w-[250px] transition-opacity duration-300 ease-in-out">
                <Image
                  src={item?.file_url || ""}
                  alt="IELTS Course Thumbnail"
                  height={200}
                  width={350}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Element>
  );
};

export default CourseExclucive;
