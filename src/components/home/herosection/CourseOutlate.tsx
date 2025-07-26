import Image from "next/image";
import React from "react";

const CourseOutlate: React.FC = () => {
  const features = [
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png",
      text: "কোর্সটি করছেন ৩২৯৯৫ জন",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png",
      text: "সময় লাগবে ৫০ ঘন্টা",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png",
      text: "৫৪টি ভিডিও",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png",
      text: "১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png",
      text: "৩৮টি লেকচার শিট",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png",
      text: "২৫টি ভিডিও লেকচার",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png",
      text: "১টি ফ্রি হার্ডকপি বই",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png",
      text: "ফেসবুক সাপোর্ট গ্রুপ",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png",
      text: "কোর্সের মেয়াদ আজীবন",
    },
  ];
  return (
    <>
      <div className="grid py-2 pt-0 md:p-4">
        <p className="mb-4 text-xl text-black font-semibold">
          এই কোর্সে যা থাকছে
        </p>
        {features.map((feature, index) => (
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
