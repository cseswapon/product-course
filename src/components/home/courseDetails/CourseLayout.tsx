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
  // console.log(course.sections);
  const instructor = course.sections.find(
    (item) => item.type === "instructors"
  );
  const feature = course.sections.find((item) => item.type === "features");
  const groupJoinEng = course.sections.find(
    (item) => item.type === "group_join_engagement"
  );
  const pointers = course.sections.find((item) => item.type === "pointers");

  const content_preview = course.sections.find(
    (item) => item.type === "content_preview"
  );

  const feature_explanations = course.sections.find(
    (item) => item.type === "feature_explanations"
  );
  const faq = course.sections.find((item) => item.type === "faq");
  const testimonials = course.sections.find(
    (item) => item.type === "testimonials"
  );
  const about = course.sections.find((item) => item.type === "about");

  return (
    <>
      <CourseDetailsTab section={course.sections} />
      {instructor && <CourseInstructor section={instructor || []} />}
      {feature && <CourseFeature features={feature || []} />}
      {groupJoinEng && <GroupJoinEngagement groupJoin={groupJoinEng || []} />}
      {pointers && <CourseLearning pointers={pointers} />}
      {content_preview && (
        <CourseContentpreview contentPreview={content_preview || []} />
      )}

      {about && <CourseDetails about={about || []} />}

      {feature_explanations && (
        <CourseExclucive feature_explanations={feature_explanations || []} />
      )}
      <CourseOffer />
      <StudentReview />
      <CourseClalssNeed />
      {faq && <CourseAsking faq={faq} />}
      {testimonials && <Testimonial testimonials={testimonials} />}
    </>
  );
};

export default CourseLayout;
