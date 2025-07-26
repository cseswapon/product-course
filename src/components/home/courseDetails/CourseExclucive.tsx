import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CourseExclucive:React.FC = () => {
    return (
      <>
        <h1 className="text-xl font-semibold md:mb-4 md:text-2xl">
          কোর্স এক্সক্লুসিভ ফিচার
        </h1>

        <div className="border border-gray-300 rounded py-2 px-5">
          <div className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row border-b border-gray-600 last:border-b-0">
            <div className="flex flex-col gap-2">
              <h2 className="text-[14px] font-[500] leading-[30px] text-[#111827] md:text-[16px]">
                ভিডিও লেকচার
              </h2>

              <div className="flex flex-row items-center gap-5">
                <FaCheck color="#6294F8" size={19} />
                <p className="text-[14px] font-[400] leading-[24px] text-[#4B5563] md:text-[16px]">
                  IELTS Academic ও General Training নিয়ে আলোচনা
                </p>
              </div>

              <div className="flex flex-row items-center gap-5">
                <FaCheck color="#6294F8" size={19} />
                <p className="text-[14px] font-[400] leading-[24px] text-[#4B5563] md:text-[16px]">
                  Reading, Writing, Listening ও Speaking এর Overview & Format
                </p>
              </div>

              <div className="flex flex-row items-center gap-5">
                <FaCheck color="#6294F8" size={19} />
                <p className="text-[14px] font-[400] leading-[24px] text-[#4B5563] md:text-[16px]">
                  প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি
                </p>
              </div>

              <div className="flex flex-row items-center gap-5">
                <FaCheck color="#6294F8" size={19} />
                <p className="text-[14px] font-[400] leading-[24px] text-[#4B5563] md:text-[16px]">
                  ভিডিওর সাথে প্র্যাকটিসের সুযোগ
                </p>
              </div>
            </div>
            <div>
              <div className="mb-4 mx-auto max-w-[250px] transition-opacity duration-300 ease-in-out">
                <Image
                  src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png"
                  alt="IELTS Course Thumbnail"
                  height={200}
                  width={350}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default CourseExclucive;