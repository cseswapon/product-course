import Image from "next/image";
import React from "react";

const CourseOffer: React.FC = () => {
  return (
    <div className="mb-14">
      <h2 className="my-5 text-xl font-semibold leading-[30px] text-black">
        এই কোর্সের সাথে ফ্রি পাচ্ছেন–
      </h2>
      <div
        className="relative w-full overflow-hidden bg-no-repeat bg-cover rounded-lg p-5"
        style={{
          backgroundImage:
            "url(https://cdn.10minuteschool.com/images/banner_background_1731401239364.png)",
          borderRadius: "20px",
        }}
      >
        
        <div className="text-white divide-y rounded-lg divide-dashed divide-slate-600 p-4 px-10 relative z-[1] border-2">
          <div className="relative flex flex-col items-start justify-between gap-1 px-5 py-5 overflow-hidden md:flex-row">
            <div className="flex flex-col items-start gap-1">
              <h3 className="mb-2 text-base md:text-xl font-[600] leading-[26px] text-white">
                ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
              </h3>
              <div className="flex flex-col gap-2">
                <ul className="list-disc list-inside">
                  <li className="flex flex-row items-center gap-3 text-sm font-[400] leading-[24px] mb-1">
                    <span className="opacity-60">•</span>
                    <p className="font-[400] leading-[24px] text-[#fff] md:text-[16px]">
                      360 পৃষ্ঠা
                    </p>
                  </li>
                  <li className="flex flex-row items-center gap-3 text-sm font-[400] leading-[24px] mb-1">
                    <span className="opacity-60">•</span>
                    <p className="font-[400] leading-[24px] text-[#fff] md:text-[16px]">
                      প্রিমিয়াম হার্ডকপি
                    </p>
                  </li>
                  <li className="flex flex-row items-center gap-3 text-sm font-[400] leading-[24px] mb-1">
                    <span className="opacity-60">•</span>
                    <p className="font-[400] leading-[24px] text-[#fff] md:text-[16px]">
                      ফ্রি ডেলিভারি
                    </p>
                  </li>
                  <li className="flex flex-row items-center gap-3 text-sm font-[400] leading-[24px] mb-1">
                    <span className="opacity-60">•</span>
                    <p className="font-[400] leading-[24px] text-[#fff] md:text-[16px]">
                      ৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="z-[1] flex w-full sm:items-center md:mr-5 md:w-fit md:items-end">
              <div
                className="mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="call us"
                  src="https://cdn.10minuteschool.com/images/1667372177810.png"
                  width={120}
                  height={150}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOffer;
