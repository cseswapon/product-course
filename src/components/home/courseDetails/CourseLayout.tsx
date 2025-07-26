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
import { Course } from "@/types/course";

interface CourseLayoutProps {
  course: Course;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({ course }) => {
  // console.log(course);
  return (
    <>
      <CourseDetailsTab />
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

export default CourseLayout;
