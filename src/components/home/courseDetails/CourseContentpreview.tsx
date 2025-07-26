"use client";
import { Section } from "@/types/course";
import { Collapse, Button } from "antd";
import React, { useState } from "react";
import { Element } from "react-scroll";

interface CoursePointerProps {
  contentPreview: Section;
}
const CourseContentPreview: React.FC<CoursePointerProps> = ({
  contentPreview,
}) => {
  const { values } = contentPreview;
  // const [expandedKeys, setExpandedKeys] = useState<string[]>(["1"]);
  const [showAll, setShowAll] = useState(false);

  // const onChange = (key: string | string[]) => {
  // setExpandedKeys(Array.isArray(key) ? key : [key]);
  // console.log(key);
  // };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Element name="content_preview" className="mb-5">
      <h1 className="mb-2 text-xl font-semibold md:mb-4">কন্টেন্ট প্রিভিউ</h1>
      {values.length === 0 && <p>No data found</p>}
      {values.map((item, idx) => (
        <Collapse
          key={idx}
          items={showAll ? values : values.slice(0, 3)}
          defaultActiveKey={["1"]}
          // onChange={onChange}
          expandIconPosition="end"
        />
      ))}
      {values.length > 3 && (
        <Button
          onClick={toggleShowAll}
          className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700"
        >
          {showAll ? "Show Less" : "See More"}
        </Button>
      )}
    </Element>
  );
};

export default CourseContentPreview;
