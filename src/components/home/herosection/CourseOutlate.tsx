import { CheckList } from "@/types/course";
import Image from "next/image";
import React from "react";

interface ChecklistProps {
  checklist: CheckList[];
}

const CourseOutlate: React.FC<ChecklistProps> = ({ checklist }) => {
  // console.log(checklist);

  return (
    <>
      <div className="grid py-2 pt-0 md:p-4">
        <p className="mb-4 text-xl text-black font-semibold">
          এই কোর্সে যা থাকছে
        </p>
        {checklist?.map((feature, index) => (
          <div key={index} className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out"
              style={{ fontSize: 0 }}
            >
              <Image
                src={feature.icon}
                alt="icon"
                width="20"
                height="20"
                loading="lazy"
                decoding="async"
                style={{ color: "transparent" }}
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              {feature.text}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseOutlate;
