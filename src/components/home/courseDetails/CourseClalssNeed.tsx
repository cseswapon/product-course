import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CourseClalssNeed: React.FC = () => {
  return (
    <>
      <div id="requirements">
        <div className="mb-6 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
          <div className="pb-6 bg-white md:pb-0">
            <div className="mb-0">
              <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                ক্লাস করার জন্য প্রয়োজন হবে
              </h2>
              <div className="py-2 rounded-md md:border md:p-6">
                <ul>
                  <li className="flex items-start gap-2 mb-2">
                    <FaCheckCircle className="text-[#6294F8]" size={24} />
                    <h3>ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</h3>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#6294F8]" size={24} />
                    <h3>স্মার্টফোন অথবা পিসি</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="how_to_pay">
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            যেভাবে পেমেন্ট করবেন
          </h2>
          <div className="rounded-md md:border md:p-4 xs:py-2">
            <p>
              কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
              <span
                role="button"
                className="underline cursor-pointer text-green"
                // onClick={handleVideoClick}
              >
                এই ভিডিওটি দেখুন
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseClalssNeed;
