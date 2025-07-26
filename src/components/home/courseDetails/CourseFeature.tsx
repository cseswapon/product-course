"use client";
import Image from "next/image";
import { Element } from "react-scroll";

const CourseFeature = () => {
  const features = [
    {
      title: "৫০+ ভিডিও লেকচার",
      description:
        "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা",
      imgSrc:
        "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png",
      alt: "৫০+ ভিডিও লেকচার",
    },
    {
      title: "৩৮টি লেকচার শিট",
      description:
        "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
      imgSrc:
        "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png",
      alt: "৩৮টি লেকচার শিট",
    },
    {
      title: "রিডিং এন্ড লিসিনিং মক টেস্ট",
      description:
        "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
      imgSrc:
        "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png",
      alt: "রিডিং এন্ড লিসিনিং মক টেস্ট",
    },
    {
      title: "ডাউট সল্ভিং লাইভ ক্লাস",
      description:
        "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
      imgSrc:
        "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png",
      alt: "ডাউট সল্ভিং লাইভ ক্লাস",
    },
  ];

  return (
    <Element name="features">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">
          কোর্সটি যেভাবে সাজানো হয়েছে
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
          {features.map(({ title, description, imgSrc, alt }, idx) => (
            <div key={idx} className="flex flex-row items-start gap-3 m-1">
              <div>
                <Image
                  src={imgSrc}
                  alt={alt}
                  loading="lazy"
                  width={36}
                  height={36}
                  decoding="async"
                  className="mb-4 mx-auto opacity-100 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0 }}
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-[18px] font-medium leading-[26px] text-white">
                  {title}
                </h2>
                <h2 className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">
                  {description}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default CourseFeature;
