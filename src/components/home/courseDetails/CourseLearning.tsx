import { AiOutlineCheckCircle } from "react-icons/ai";



const CourseLearning: React.FC = () => {
  return (
    <div id="pointers">
      <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
        <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
          <div>
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              কোর্সটি করে যা শিখবেন
            </h2>
            <div className="rounded-md md:border">
              <div className="pt-2 md:p-6">
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                  <li className="flex items-start gap-2 mb-2">
                    <AiOutlineCheckCircle
                      className="mr-1 mt-[2px]"
                      size={20}
                      color="#6294F8"
                    />
                    <div className="flex-1">
                      IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম
                      ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও
                      স্ট্র্যাটেজি
                    </div>
                  </li>
                  <li className="flex items-start gap-2 mb-2">
                    <AiOutlineCheckCircle
                      className="mr-1 mt-[2px]"
                      size={20}
                      color="#6294F8"
                    />
                    <div className="flex-1">
                      IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে
                      ভালো স্কোর পেতে সহায়ক Structure ও Essay type
                    </div>
                  </li>
                  <li className="flex items-start gap-2 mb-2">
                    <AiOutlineCheckCircle
                      className="mr-1 mt-[2px]"
                      size={20}
                      color="#6294F8"
                    />
                    <div className="flex-1">
                      IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে
                      যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি
                    </div>
                  </li>
                  <li className="flex items-start gap-2 mb-2">
                    <AiOutlineCheckCircle
                      className="mr-1 mt-[2px]"
                      size={20}
                      color="#6294F8"
                    />
                    <div className="flex-1">
                      সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ
                      খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা
                    </div>
                  </li>
                  <li className="flex items-start gap-2 mb-2">
                    <AiOutlineCheckCircle
                      className="mr-1 mt-[2px]"
                      size={20}
                      color="#6294F8"
                    />
                    <div className="flex-1">
                      IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের
                      মাধ্যমে ভালো স্কোর অর্জনের কৌশল
                    </div>
                  </li>
                  <li className="flex items-start gap-2 mb-2">
                    <AiOutlineCheckCircle
                      className="mr-1 mt-[2px]"
                      size={20}
                      color="#6294F8"
                    />
                    <div className="flex-1">
                      IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে
                      IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে
                      পরিপূর্ণ ধারণা
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearning;
