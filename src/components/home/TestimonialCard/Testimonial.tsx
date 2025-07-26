"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import { Element } from "react-scroll";
import { Section } from "@/types/course";

interface CoursePointerProps {
  testimonials: Section;
}

const Testimonial: React.FC<CoursePointerProps> = ({ testimonials }) => {
  const { values } = testimonials;

  console.log(values);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Element name="testimonials">
      <h1 className="mb-4 text-xl font-semibold md:text-2xl">
        আপনার জন্য আরও কিছু কোর্স
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {values?.map((item, idx) => (
            <div key={idx}>
              <TestimonialCard
                text={item?.testimonial || ""}
                name={item?.name || ""}
                designation={item?.description || ""}
                userImage={item?.profile_image || ""}
                thumb={item?.thumb || ""}
                videoUrl={item?.video_url || ""}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Element>
  );
};

export default Testimonial;
