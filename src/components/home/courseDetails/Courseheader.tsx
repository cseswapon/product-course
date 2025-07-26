import React from "react";
import CourseDetailsTab from "./CourseDetailsTab";
import CourseInstructor from "./CourseInstructor";
import CourseFeature from "./CourseFeature";
import GroupJoinEngagement from "./GroupJoinEngagement";
import CourseLearning from "./CourseLearning";
import CourseContentpreview from "./CourseContentpreview";
import CourseDetails from "./CourseDetails";
import CourseExclucive from "./CourseExclucive";
import CourseOffer from "./CourseOffer";
import StudentReview from "./StudentReview";
import CourseClalssNeed from "./CourseClalssNeed";
import CourseAsking from "./CourseAsking";
import Testimonial from "../TestimonialCard/Testimonial";

const Courseheader: React.FC = () => {
  return (
    <>
      <CourseDetailsTab />
      {/* <h1>Course Details</h1> */}
      <CourseInstructor />
      <CourseFeature />
      <GroupJoinEngagement />
      <CourseLearning />
      <CourseContentpreview />
      <CourseDetails />
      <CourseExclucive />
      <CourseOffer />
      <StudentReview />
      <CourseClalssNeed />
      <CourseAsking />
      <Testimonial />
    </>
  );
};

export default Courseheader;
