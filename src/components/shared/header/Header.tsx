"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { PiTranslate } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe1eb] bg-white md:h-[65px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
        <div className="flex gap-2">
          <button
            className="xl:hidden"
            type="button"
            name="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"></path>
            </svg>
            <span className="sr-only">menu</span>
          </button>
          <div className="md:hidden">
            <Link href="/">
              <Image
                src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                alt="10ms"
                width={100}
                height={27}
                priority
              />
            </Link>
          </div>
        </div>
        <div className="items-center hidden gap-9 md:flex">
          <Link href="/">
            <Image
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt="10ms"
              width={100}
              height={27}
              priority
            />
          </Link>
        </div>
        <div className="flex-1 hidden w-full pr-4 md:block">
          <div className="relative flex w-full flex-col items-start bg-white z-50">
            <div className="shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 border-[#dbe1eb] px-[12px] py-2 md:border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="24"
                fill="none"
                viewBox="0 0 27 24"
              >
                <path fill="#fff" d="M0 0H26.514V23.99H0z"></path>
                <path
                  fill="#111827"
                  d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
                ></path>
                <path
                  fill="#F1844C"
                  d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"
                ></path>
              </svg>
              <input
                type="search"
                autoComplete="off"
                placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:text-[#7C818A] focus:outline-none"
              />
            </div>
          </div>
        </div>
        <nav className="hidden mr-4 xl:block">
          <ul className="flex items-center gap-2 lg:gap-4 text-sm font-medium text-[#4B5563]">
            <li>
              <Link
                className="hover:text-green-500 flex items-center text-[14px]"
                href="/academic"
              >
                ক্লাস ৬-১২{" "}
                <MdOutlineKeyboardArrowDown className="inline-block text-lg font-extrabold" />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-500 flex items-center text-[14px]"
                href="/skills"
              >
                স্কিলস{" "}
                <MdOutlineKeyboardArrowDown className="inline-block text-lg font-extrabold" />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-500 flex items-center text-[14px]"
                href="/admission"
              >
                ভর্তি পরীক্ষা{" "}
                <MdOutlineKeyboardArrowDown className="inline-block text-lg font-extrabold" />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-500 flex items-center text-[14px]"
                href="/online-batch"
              >
                অনলাইন ব্যাচ{" "}
                <MdOutlineKeyboardArrowDown className="inline-block text-lg font-extrabold" />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-500 flex items-center text-[14px]"
                href="/english-centre"
              >
                ইংলিশ সেন্টার{" "}
                <MdOutlineKeyboardArrowDown className="inline-block text-lg font-extrabold" />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-500 flex items-center text-[14px]"
                href="#"
              >
                আরো{" "}
                <MdOutlineKeyboardArrowDown className="inline-block text-lg font-extrabold" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            className="hidden cursor-pointer items-center gap-1 rounded border border-[#dbe1eb] px-2 py-[2px] hover:bg-slate-50 md:flex"
            href="/"
          >
            <PiTranslate />
            <span>EN</span>
          </Link>
          <Link
            href="tel:16910"
            className="hidden md:flex items-center gap-1 text-green-500"
          >
            <IoMdCall className="text-lg font-bold" />
            <span>16910</span>
          </Link>
          <Link
            className="flex items-center px-3 py-1 text-white rounded-md bg-green-500 md:px-6"
            href="/auth/login/?returnUrl=%2Fproduct%2Fielts-course%2F"
          >
            <span className="text-[12px] md:text-[16px] font-semibold md:font-medium">
              লগ-ইন
            </span>
          </Link>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="block md:hidden">
          <ul className="flex flex-col items-start px-4 py-2 space-y-2 bg-white border-t">
            <li>
              <Link
                href="/academic"
                className="text-[#4B5563] text-sm font-medium"
              >
                ক্লাস ৬-১২
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="text-[#4B5563] text-sm font-medium"
              >
                স্কিলস
              </Link>
            </li>
            <li>
              <Link
                href="/admission"
                className="text-[#4B5563] text-sm font-medium"
              >
                ভর্তি পরীক্ষা
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#4B5563] text-sm font-medium">
                আরো
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
