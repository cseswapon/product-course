"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <>
      <h1 className="mb-4 text-xl font-semibold md:text-2xl">
        আপনার জন্য আরও কিছু কোর্স
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <TestimonialCard
              text="ঘরে বসে Spoken English কোর্সটি করে বুঝতে পারলাম শত শত গ্রামে শেখার কোনো প্রয়োজন নেই..."
              name="Khama Rani Bose"
              designation="ভর্তি পরীক্ষার্থী"
              userImage="https://cdn.10minuteschool.com/images/images/skills/Testimonial/user2.png"
            />
          </div>
          <div>
            <TestimonialCard
              videoUrl="https://www.youtube.com/embed/L61TXe0cmas"
              thumb="https://cdn.10minuteschool.com/images/catalog/product/testimonial/L61TXe0cmas-HD_1727333220204.jpg"
              name="Tilottoma Sengupta"
              designation="শিক্ষার্থী"
              userImage="https://cdn.10minuteschool.com/images/images/skills/Testimonial/user2.png"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
