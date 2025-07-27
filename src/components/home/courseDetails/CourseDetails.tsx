"use client";
import { Section } from "@/types/course";
import { Collapse, CollapseProps, Button } from "antd";
import React, { useState } from "react";
import { Element } from "react-scroll";

interface CoursePointerProps {
  about: Section;
}

const CourseDetails: React.FC<CoursePointerProps> = ({ about }) => {
  const { values } = about;
  const [showAll, setShowAll] = useState(false);

  // Convert values to Collapse items
  const items: CollapseProps["items"] = values.map((value, index) => ({
    key: String(index + 1),
    label: <div dangerouslySetInnerHTML={{ __html: value.title || "" }} />,
    children: <div dangerouslySetInnerHTML={{ __html: value.description || "" }} />,
  }));

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Element name="about" className="mb-5 relative">
      <h1 className="text-xl font-semibold md:mb-4 md:text-2xl">
        কোর্স সম্পর্কে বিস্তারিত
      </h1>
      <Collapse
        items={showAll ? items : items.slice(0, 3)}
        defaultActiveKey={["1"]}
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
    </Element>
  );
};

export default CourseDetails;
