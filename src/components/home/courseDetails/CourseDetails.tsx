"use client";
import { Collapse, CollapseProps, Button } from "antd";
import { useState } from "react";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  { key: "1", label: "This is panel header 1", children: <p>{text}</p> },
  { key: "2", label: "This is panel header 2", children: <p>{text}</p> },
  { key: "3", label: "This is panel header 3", children: <p>{text}</p> },
];

const CourseDetails = () => {
  const [expandedKeys, setExpandedKeys] = useState<string[]>(["1"]);
  const [showAll, setShowAll] = useState(false);

  const onChange = (key: string | string[]) => {
    setExpandedKeys(Array.isArray(key) ? key : [key]);
    console.log(key);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="mb-5">
      <h1 className="text-xl font-semibold md:mb-4 md:text-2xl">
        কোর্স সম্পর্কে বিস্তারিত
      </h1>
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
  );
};

export default CourseDetails;
