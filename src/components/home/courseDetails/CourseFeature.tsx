"use client";
import { Section } from "@/types/course";
import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";

interface CourseFeaturesProps {
  features: Section;
}

const CourseFeature: React.FC<CourseFeaturesProps> = ({ features }) => {
  const { values } = features;
  return (
    <Element name="features">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">
          কোর্সটি যেভাবে সাজানো হয়েছে
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
          {values?.map(({ icon, subtitle, title }, idx) => (
            <div key={idx} className="flex flex-row items-start gap-3 m-1">
              <div>
                <Image
                  src={icon || ""}
                  alt={icon || "N/A"}
                  loading="lazy"
                  width={36}
                  height={36}
                  decoding="async"
                  className="mb-4 mx-auto opacity-100 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0 }}
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-[18px] font-medium leading-[26px] text-white">
                  {title}
                </h2>
                <h2 className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">
                  {subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default CourseFeature;
