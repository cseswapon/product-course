import Image from "next/image";
import React from "react";
import ThumbCard from "./ThumbCard/ThumbCard";
import PreviewGallery from "./ThumbCard/PreviewGallery";
import CourceSell from "./CourceSell";
import CourseOutlate from "./CourseOutlate";

const HeroSection: React.FC = () => {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-[300px] md:min-h-[300px] flex items-center md:py-0 py-7"
      >
        <div className="md:grid grid-cols-1 md:grid-cols-5 gap-4 container mx-auto lg:px-[10rem]">
          <div className="md:hidden block">
            <PreviewGallery />
          </div>
          <div className="col-span-3 text-white space-y-5 order-2 md:order-1 md:px-0 px-2">
            <h1 className="text-white my-2 text-[21px] font-semibold  md:text-4xl">
              IELTS Course by Munzereen Shahid
            </h1>
            <div>
              <button className="flex flex-row flex-wrap gap-2 text-white">
                <span className="inline-block">
                  <Image
                    src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                    alt="raging"
                    width={130}
                    height={100}
                  />
                </span>
                <span className="inline-block text-sm md:text-base">
                  (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </span>
              </button>
            </div>
            <div>
              <p className="text-gray-400 text-[15px] text-justify">
                Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন
                নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার
                কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS
                Course-এ।{" "}
              </p>
            </div>
          </div>
          <div className="col-span-2 text-white order-1 md:order-2 relative">
            <ThumbCard />
          </div>
        </div>
      </section>
      <div className="md:hidden block px-1 py-2 space-y-2">
        <CourceSell />
        <CourseOutlate />
      </div>
    </>
  );
};

export default HeroSection;
