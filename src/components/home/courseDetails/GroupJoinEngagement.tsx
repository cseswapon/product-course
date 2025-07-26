"use client";
import { Section } from "@/types/course";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Element } from "react-scroll";
interface CourseGroupJoinProps {
  groupJoin: Section;
}
const GroupJoinEngagement: React.FC<CourseGroupJoinProps> = ({ groupJoin }) => {
  const { values } = groupJoin;
  // console.log(values);
  return (
    <>
      {values?.map((item, idx) => (
        <Element
          key={idx}
          name="group_join_engagement"
          className="mb-8 md:mb-12"
          style={{
            backgroundImage: `url(${item.background?.image})`,
            backgroundSize: "cover",
            borderRadius: 25,
          }}
        >
          <div className="flex gap-4 p-4 md:p-8 rounded-xl overflow-hidden">
            <div className="w-full md:w-1/2">
              <Image
                src={`https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621150265.png`}
                alt="Pointer"
                className="mb-4"
                width={150}
                height={100}
              />
              <h2
                className="text-xl font-semibold"
                style={{ color: "#ffffff" }}
              >
                {item?.title}
              </h2>
              <p className="mt-2 text-base" style={{ color: "#ededed" }}>
                {item?.description}
              </p>
              <Link
                className="cursor-pointer"
                href={item?.cta?.clicked_url || ""}
                target="_blank"
              >
                <button className="mt-6 bg-green-500 text-white rounded p-2 px-3.5">
                  {item?.cta?.text || ""}
                </button>
              </Link>
            </div>
            <div className="hidden md:flex items-center w-1/2">
              <Image
                src={item?.thumbnail || ""}
                alt="IELTS Course Thumbnail"
                height={200}
                width={500}
              />
            </div>
          </div>
        </Element>
      ))}
    </>
  );
};

export default GroupJoinEngagement;
