import React from "react";
import style from "@/styles/footer/footer.module.css";
import logo from "@/public/Home/shape.png";
import Image from "next/image";
const SearchpadLogo = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="10" height="10" fill="white" />
    <rect y="14" width="10" height="10" fill="white" />
    <rect x="14" width="10" height="10" fill="white" />
    <rect x="14" y="14" width="10" height="10" fill="white" />
  </svg>
);

const SocialIcon = ({ d }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={d} fill="currentColor" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-400 py-16 px-8">
      <div className="container px-14 mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div className="flex-shrink-0 flex gap-3">
            <Image src={logo} alt={logo} width={40} />
            <span className="text-[33.93px] font-[500] text-white">
              Searchpad
            </span>
          </div>
          <div className=" flex justify-center gap-[6rem]">
            <div className="">
              <h3 className="text-[16px] font-[400] text-white mb-4">
                AI Tools
              </h3>
              <ul className={`${style.listItem} leading-10`}>
                <li>Image Creation</li>
                <li>Voiceover</li>
                <li>Document Creation</li>
                <li>Ad Creative</li>
                <li>Slide Creation</li>
              </ul>
            </div>
            <div className="mr-16">
              <h3 className="text-lg font-semibold text-white mb-4 invisible">
                AI Tools
              </h3>
              <ul className={`${style.listItem} leading-10`}>
                <li>Video Creation</li>
                <li>Idea Generation</li>
                <li>Graphic Design</li>
                <li>Website UI</li>
                <li>Data Visualization</li>
              </ul>
            </div>
            <div className={`flex gap-[4rem]`}>
              <div className={``}>
                <h3 className="text-[16px] font-[400] text-white mb-4">
                  Product
                </h3>
                <ul className={`${style.listItem} leading-10`}>
                  <li>API</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div className={` `}>
                <h3 className="text-[16px] font-[400] text-white mb-4">
                  Product
                </h3>
                <ul className={`${style.listItem} leading-10`}>
                  <li>API</li>
                  <li>Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-14 ">
          <p className="text-sm">Searchpad ©. All rights reserved.</p>
          <div className="flex space-x-6">
            <SocialIcon d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            <SocialIcon d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            <SocialIcon d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            <SocialIcon d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            <SocialIcon d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a4.54 4.54 0 0 0 1.4 6.05l-1.62-.04a4.53 4.53 0 0 0 3.55 4.46 4.53 4.53 0 0 1-2.05.08 4.51 4.51 0 0 0 4.22 3.15 9.05 9.05 0 0 1-5.61 1.93A12.94 12.94 0 0 0 22 15.9c0-.2 0-.4-.02-.6.84-.6 1.56-1.36 2.14-2.23z" />
            <SocialIcon d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
