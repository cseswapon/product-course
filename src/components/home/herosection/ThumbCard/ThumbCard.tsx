import Image from "next/image";
import React from "react";
import { IoMdCall } from "react-icons/io";

const ThumbCard: React.FC = () => {
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
    <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
      <div className="border-[#dbe1eb] border">
        <div className=" md:border"></div>
        <div className="hidden md:block">
          <div
            data-device-type="desktop"
            className="w-full p-4 md:h-auto"
            id="variant"
          >
            <div className="relative md:static">
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between md:flex-col md:items-start">
                  <div className="md:mb-3">
                    <div className="inline-block text-2xl text-black font-semibold">
                      ৳3850
                    </div>
                    <span className="inline-flex items-center ml-2">
                      <del className="text-black font-normal md:text-xl">
                        ৳5000
                      </del>
                      <div className="c-Tukmu inline-block ml-2">
                        <p className="card-price text-green-600 font-medium">
                          ১১৫০ ৳ ছাড়
                        </p>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2"></div>

                <button className="bg-green-600 text-white py-2 px-4 rounded-md text-center md:w-full">
                  কোর্সটি কিনুন
                </button>
              </div>

              {/* Optional Decorative Div */}
              <div className="absolute md:static top-[-45px] left-0">
                <div>{/* Optional element */}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid py-2 pt-0 md:p-4 border">
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
        </div>
      </div>
      <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
        <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
        <div className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
          <IoMdCall className="text-lg font-bold" />
          <span>ফোন করুন (16910)</span>
        </div>
      </p>
    </section>
  );
};

export default ThumbCard;
