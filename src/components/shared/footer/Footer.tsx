"use client";

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 px-4 py-3 md:px-7 max-w-[1440px] mx-auto bg-white text-[#374151]">
      <div className="container mx-auto grid grid-cols-2 justify-items-center gap-7 text-center md:grid-cols-[320px_auto_auto_320px] md:justify-between md:text-left">
        <div className="widget col-span-2 md:col-span-1">
          <div className="mb-5 hidden md:block">
            <Image
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt="Ten Minute School Logo"
              width={150}
              height={48}
              className="mx-auto md:mx-0"
              priority
            />
          </div>
          <h3 className="widget-title mb-5 text-lg font-bold">
            আমাদের মোবাইল অ্যাপ ডাউনলোড করুন
          </h3>
          <div className="mb-5 flex justify-center md:justify-start gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://cdn.10minuteschool.com/images/Landing_page/playstore.png"
                alt="Download on Play Store"
                width={140}
                height={42}
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/10-minute-school/id1577061772"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://cdn.10minuteschool.com/images/Landing_page/appstore.png"
                alt="Download on App Store"
                width={140}
                height={42}
              />
            </a>
          </div>
        </div>

        <div className="widget text-left">
          <h3 className="widget-title mb-2 text-lg font-bold">কোম্পানি</h3>
          <ul>
            <li className="mb-2 hover:text-green-600">
              <a href="/careers">ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি</a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform"
                target="_blank"
                rel="noreferrer"
              >
                শিক্ষক হিসাবে যোগ দিন
              </a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a href="//affiliation.10minuteschool.com/">
                অ্যাফিলিয়েট হিসাবে যোগ দিন
              </a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a href="/privacy-policy">প্রাইভেসি পলিসি</a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a href="/refund-policy">রিফান্ড পলিসি</a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a href="/terms-and-conditions">ব্যবহারকারীর শর্তাবলী</a>
            </li>
          </ul>
        </div>

        <div className="widget text-left">
          <h3 className="widget-title mb-2 text-lg font-bold">অন্যান্য</h3>
          <ul>
            <li className="mb-2 hover:text-green-600">
              <a
                href="https://blog.10minuteschool.com/"
                target="_blank"
                rel="noreferrer"
              >
                ব্লগ
              </a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a
                href="https://10minuteschool.com/store/all/"
                target="_blank"
                rel="noreferrer"
              >
                বুক স্টোর
              </a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a
                href="https://10minuteschool.com/content/"
                target="_blank"
                rel="noreferrer"
              >
                ফ্রি নোটস ও গাইড
              </a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a
                href="https://10minuteschool.com/jobs-prep"
                target="_blank"
                rel="noreferrer"
              >
                চাকরি প্রস্তুতি কোর্সসমূহ
              </a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a
                href="https://10minuteschool.com/certificate/"
                target="_blank"
                rel="noreferrer"
              >
                সার্টিফিকেট ভেরিফাই করুন
              </a>
            </li>
            <li className="mb-2 hover:text-green-600">
              <a
                href="https://10minuteschool.com/resource"
                target="_blank"
                rel="noreferrer"
              >
                ফ্রি ডাউনলোড
              </a>
            </li>
          </ul>
        </div>

        <div className="widget md:col-span-1 col-span-2">
          <h3 className="widget-title mb-2 text-lg font-bold">
            আমাদের সাথে যোগাযোগ করুন
          </h3>
          <ul className="mb-5 text-sm">
            <li>
              <strong>কল করুন:</strong>{" "}
              <a href="tel:16910" className="text-green-700 hover:underline">
                16910
              </a>{" "}
              (24x7)
            </li>
            <li>
              <strong>হোয়াটসঅ্যাপ:</strong>{" "}
              <a
                href="https://api.whatsapp.com/send?phone=+8801896016252&text=I need your assistance"
                className="text-green-700 hover:underline"
              >
                +8801896016252
              </a>
            </li>
            <li>
              <strong>ইমেইল:</strong>{" "}
              <a
                href="mailto:support@10minuteschool.com"
                className="text-green-700 hover:underline"
              >
                support@10minuteschool.com
              </a>
            </li>
          </ul>

          <div className="flex md:justify-start justify-center gap-3">
            <a
              href="https://www.facebook.com/10minuteschool/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/10ms_insta/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/company/10ms/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.tiktok.com/@10minuteschool?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok className="text-xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-neutral-600 border-t pt-5 border-[#dbe1eb]">
        স্বত্ব © ২০১৫-২০২৪ টেন মিনিট স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত
      </div>
    </footer>
  );
};

export default Footer;
