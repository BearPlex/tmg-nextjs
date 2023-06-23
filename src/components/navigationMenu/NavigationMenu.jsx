/* eslint-disable */
import { useState, useEffect } from "react";
import Link from "next/link";
// import kotaTransparentImage from '../../assets/svg/Kota_logo_white-1.svg';
import kotaTransparentImage from "../../assets/images/tmg-logo.png";
import { SVG_COLORS, twitterSvg } from "../../helpers/Helpers";
import { facebookSvg } from "../../helpers/Helpers";
import { instagramSvg } from "../../helpers/Helpers";
import { linkedinSvg } from "../../helpers/Helpers";
import Image from "../Image/Image";
const NavigationMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredOverUL, setIsHoveredOverUL] = useState(false);
  let timer;
  useEffect(() => {
    // if (isHovered) {
    //   timer = setTimeout(() => {
    //     setIsHovered(false);
    //   }, 1500);
    // }
    // return () => {
    //   clearTimeout(timer);
    // };
  }, [isHovered]);

  return (
    <div className="background-gradient z-10 w-full h-full px-20 py-[10vh] fixed top-0">
      <div className="inline-block w-56 cursor-pointer"></div>
      <div className="">
        <ul className="max-w-[60%] mx-auto relative">
          <div className="w-1/6">
            <li className="group" onMouseEnter={() => setIsHovered(true)}>
              <Link
                href="/services"
                className="text-[#FFCBC2] inline-block text-[4.7rem] font-bold leading-none  hover:text-white"
              >
                Services
              </Link>
              {isHovered && (
                <div className="block mx-10">
                  <ul className="absolute w-[380px] h-[280px]  top-[50%] translate-y-[-50%]  left-[480px] flex flex-col justify-between">
                    {/* <> */}
                    <Link
                      href="/service/social-media-marketing"
                      className="px-3 text-left text-3xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white"
                    >
                      Social Media Marketing
                    </Link>
                    <Link
                      href="/service/web-design"
                      className="px-3 text-left text-3xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white"
                    >
                      Web Development & Design
                    </Link>
                    <Link
                      href="/service/brand-management"
                      className="px-3 text-left text-3xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white"
                    >
                      Branding
                    </Link>
                    <Link
                      href="/service/seo"
                      className="px-3 text-left text-3xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white"
                    >
                      SEO
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <li className="group" onMouseEnter={() => setIsHovered(false)}>
              <Link
                href="/work"
                className="text-[#FFCBC2] hover:text-white inline-block text-[4.7rem] pt-3 font-bold leading-none"
              >
                Work
              </Link>
            </li>

            <li className="group" onMouseEnter={() => setIsHovered(false)}>
              <Link
                href="/studio"
                className="inline-block font-bold text-[4.7rem] pt-3 leading-none text-[#FFCBC2] hover:text-white"
              >
                Studio
              </Link>
              <div className="hidden group-hover:block"></div>
            </li>
            <li className="group" onMouseEnter={() => setIsHovered(false)}>
              <Link
                href="/blog"
                className="inline-block font-bold text-[4.7rem] pt-3 leading-none text-[#FFCBC2] hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li className="group" onMouseEnter={() => setIsHovered(false)}>
              <Link
                href="/contact"
                className="inline-block font-bold text-[4.7rem] pt-3 leading-none text-[#FFCBC2] hover:text-white"
              >
                Contact
              </Link>
            </li>
            <li className="group" onMouseEnter={() => setIsHovered(false)}>
              <Link
                href="/resources"
                className="text-[#FFCBC2] hover:text-white inline-block text-[4.7rem] pt-3 font-bold leading-none"
              >
                Resources
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="nav-footer fixed bottom-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="#">{twitterSvg()}</Link>
          <Link href="#">{facebookSvg()}</Link>
          <Link href="#">{instagramSvg()}</Link>
          <Link href="#">{linkedinSvg()}</Link>
        </div>
        <div className="flex items-center">
          <h4 className="text-white font-bold text-2xl py-5 pr-6">
            Let's get cracking
          </h4>
          <button className="transparentBgColor ml-6 uppercase hover:bgWhite hover:text-orange_theme-400 text-white font-bold py-4 px-6 rounded-full">
            Start Your project
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavigationMenu;
