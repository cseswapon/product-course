"use client";
import { Section } from "@/types/course";
import { Collapse, CollapseProps, Button } from "antd";
import React, { useState, useMemo } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { Element } from "react-scroll";

interface CoursePointerProps {
  faq: Section;
}

const CourseAsking: React.FC<CoursePointerProps> = ({ faq }) => {
  const { values } = faq;

  const [expandedKeys, setExpandedKeys] = useState<string[]>(["1"]);
  const [showAll, setShowAll] = useState(false);

  const onChange = (key: string | string[]) => {
    setExpandedKeys(Array.isArray(key) ? key : [key]);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const items: CollapseProps["items"] = useMemo(() => {
    return (
      values?.map((item, index) => ({
        key: String(index + 1),
        label: (
          <h3 className="text-sm font-semibold md:text-base">
            {item.question}
          </h3>
        ),
        children: (
          <div dangerouslySetInnerHTML={{ __html: item.answer || "" }} />
        ),
      })) || []
    );
  }, [values]);

  return (
    <Element name="faq">
      <div className="mb-5">
        <h1 className="mb-2 text-xl font-semibold md:mb-4">সচরাচর জিজ্ঞাসা</h1>
        <Collapse
          items={showAll ? items : items.slice(0, 3)}
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition="end"
        />
        {items.length > 3 && (
          <Button
            onClick={toggleShowAll}
            className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700"
          >
            {showAll ? "Show Less" : "See More"}
          </Button>
        )}
      </div>

      <div className="mb-6 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
        <div className="bg-white pb-6 md:pb-0">
          <div className="mb-0">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              আরও কোন জিজ্ঞাসা আছে?
            </h2>
            <div className="md:max-w-[300px]">
              <a href="tel:16910">
                <div className="flex w-full items-center justify-center rounded border border-[#E5E7EB] py-3 hover:border-[#1CAB55] md:max-w-[300px] md:rounded-lg md:px-6 md:py-5">
                  <AiOutlinePhone className="w-[17px] h-[17px] md:w-6 md:h-6 text-[#1CAB55]" />
                  <h3 className="ml-2 text-base font-medium text-[#1CAB55] md:text-lg">
                    কল করুন 16910 নম্বরে
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default CourseAsking;
