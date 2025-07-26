"use client";
import { Section } from "@/types/course";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Element } from "react-scroll";
interface CoursePointerProps {
  pointers: Section;
}
const CourseLearning: React.FC<CoursePointerProps> = ({ pointers }) => {
  const { values } = pointers;
  return (
    <Element name="pointers">
      <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
        <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
          <div>
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              কোর্সটি করে যা শিখবেন
            </h2>

            <div className="rounded-md md:border border-[#dbe1eb]">
              <div className="pt-2 md:p-6">
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                  {values.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 mb-2">
                      <AiOutlineCheckCircle
                        className="mr-1 mt-[2px]"
                        size={20}
                        color="#6294F8"
                      />
                      <div className="flex-1">{item?.text}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default CourseLearning;
