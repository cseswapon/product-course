import React from "react";
import CourseDetailsTab from "./CourseDetailsTab";
import CourseInstructor from "./CourseInstructor";
import CourseFeature from "./CourseFeature";
import GroupJoinEngagement from "./GroupJoinEngagement";
import CourseLearning from "./CourseLearning";

const Courseheader: React.FC = () => {
  return (
    <>
      <CourseDetailsTab />
      {/* <h1>Course Details</h1> */}
      <CourseInstructor />
      <CourseFeature />
      <GroupJoinEngagement />
      <CourseLearning />
    </>
  );
};

export default Courseheader;
