import Image from "next/image";
import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  videoUrl?: string;
  thumb?: string;
  name: string;
  designation: string;
  text?: string;
  stars?: number;
  userImage: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  videoUrl,
  thumb = "",
  name,
  designation,
  text = "",
  userImage,
}) => {
  const [play, setPlay] = useState<boolean>(false);
  const [showFullText, setShowFullText] = useState<boolean>(false);

  const getAutoplayUrl = (): string => {
    if (!videoUrl) return "";
    const hasQuery = videoUrl.includes("?");
    return play ? `${videoUrl}${hasQuery ? "&" : "?"}autoplay=1&mute=1` : "";
  };

  const shouldTrim = text.length > 300;
  const displayText =
    showFullText || !shouldTrim ? text : text.slice(0, 300) + "...";

  return (
    <div className="mr-4 flex items-center justify-center">
      <div className="relative mt-5 w-[260px] md:w-[372px] rounded-lg border border-[#dbe1eb] p-6 flex min-h-[250px] md:min-h-[297px] flex-col justify-between bg-white">
        <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#FCE0D6] p-2">
          <FaQuoteLeft className="text-[#D33242] text-xs" />
        </div>
        {videoUrl ? (
          <div className="w-full mb-4 overflow-hidden rounded-md aspect-video">
            {!play ? (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setPlay(true)}
              >
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                    alt="Play the Video"
                    className="max-w-[20vw]"
                    width={40}
                    height={40}
                  />
                </span>
                <Image
                  src={thumb}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={getAutoplayUrl()}
                title="Video Player"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        ) : (
          <div className="text-gray-700 text-sm mb-4">
            <p>{displayText}</p>
            {shouldTrim && (
              <button
                onClick={() => setShowFullText((prev) => !prev)}
                className="text-blue-600 font-medium text-sm mt-1"
              >
                {showFullText ? "See less" : "See more"}
              </button>
            )}
          </div>
        )}

        <div className="flex gap-4 items-center">
          <div className="rounded-full overflow-hidden w-[50px] h-[50px] relative">
            <Image
              src={userImage}
              alt={name}
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-400">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
