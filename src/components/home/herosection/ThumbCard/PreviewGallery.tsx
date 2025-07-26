"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CourseMedia } from "@/types/course";

interface PreviewGalleryProps {
  resources: CourseMedia[];
}

const PreviewGallery: React.FC<PreviewGalleryProps> = ({ resources }) => {
  // const {} = resources;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const active = resources[activeIndex];

  // console.log(active);
  const handleNext = () => {
    setIsPlaying(false);
    if (activeIndex < resources.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setIsPlaying(false);
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handlePlay = () => {
    if (active.resource_type === "video") {
      setIsPlaying(true);
    }
  };

  const renderMain = () => {
    if (active.resource_type === "video" && isPlaying) {
      return (
        <div className="relative pt-[56.25%] w-full rounded overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${active.resource_value}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-[219px] rounded overflow-hidden shadow-md">
          <Image
            src={
              active.resource_type === "video"
                ? active.thumbnail_url || active.resource_value || ""
                : active.resource_value || ""
            }
            alt="Main"
            fill
            className="object-cover"
          />
          {active.resource_type === "video" && !isPlaying && (
            <div
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="bg-white bg-opacity-70 rounded-full p-4 shadow-md">
                <FaPlay className="text-green-500 text-2xl" />
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-1 relative">
      <div className="mb-4">{renderMain()}</div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="p-2 bg-white text-green-500 border rounded-full shadow disabled:opacity-30 absolute top-[7.5rem] left-1 z-10"
        >
          <FaChevronLeft />
        </button>

        <div className="flex justify-center items-center gap-2 w-full">
          {resources.map((res, idx) => {
            const isActive = idx === activeIndex;
            const isVideo = res.resource_type === "video";
            const thumb = res.thumbnail_url || res.resource_value;

            return (
              <div
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex(idx);
                }}
                className={`relative w-[55px] h-[29px] rounded overflow-hidden cursor-pointer border-2 ${
                  isActive ? "border-green-500" : "border-transparent"
                }`}
              >
                <Image
                  src={thumb || ""}
                  alt="Thumb"
                  width={100}
                  height={60}
                  // className="object-cover w-[55px]"
                />
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <FaPlay className="text-white text-xs" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          disabled={activeIndex === resources.length - 1}
          className="p-2 bg-white text-green-500 border rounded-full shadow disabled:opacity-30  absolute top-[7.5rem] right-1 z-10"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PreviewGallery;
