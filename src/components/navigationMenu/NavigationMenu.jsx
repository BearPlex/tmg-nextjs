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
  let mediumscreen = false;
  if (window.innerWidth < 1024) {
    mediumscreen = true;
    console.log("Window width is less than 1024");
  } else {
    mediumscreen = false;
    console.log("Window width is 1024 or greater");
  }

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
    <div className="background-gradient z-10 w-full h-full fixed top-0">
      <div className=" pagePaddingX pt-[15vh] ">
        <div className="inline-block w-56 cursor-pointer"></div>
        <div className="">
          <ul className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="w-1/2 flex md:justify-center pl-7 md:pl-0 mt-[5vh]">
              <div className="w-1/6">
                <li className="group" onMouseEnter={() => setIsHovered(true)}>
                  <Link
                    href="/services"
                    className="text-[#FFCBC2] inline-block extraLargeHeading font-bold leading-none  hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li className="group" onMouseEnter={() => setIsHovered(false)}>
                  <Link
                    href="/work"
                    className="text-[#FFCBC2] hover:text-white inline-block extraLargeHeading pt-3 font-bold leading-none"
                  >
                    Work
                  </Link>
                </li>

                <li className="group" onMouseEnter={() => setIsHovered(false)}>
                  <Link
                    href="/studio"
                    className="inline-block font-bold extraLargeHeading pt-3 leading-none text-[#FFCBC2] hover:text-white"
                  >
                    Studio
                  </Link>
                  <div className="hidden group-hover:block"></div>
                </li>
                <li className="group" onMouseEnter={() => setIsHovered(false)}>
                  <Link
                    href="/blog"
                    className="inline-block font-bold extraLargeHeading pt-3 leading-none text-[#FFCBC2] hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li className="group" onMouseEnter={() => setIsHovered(false)}>
                  <Link
                    href="/contact"
                    className="inline-block font-bold extraLargeHeading pt-3 leading-none text-[#FFCBC2] hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li className="group" onMouseEnter={() => setIsHovered(false)}>
                  <Link
                    href="/resources"
                    className="text-[#FFCBC2] hover:text-white inline-block extraLargeHeading pt-3 font-bold leading-none"
                  >
                    Resources
                  </Link>
                </li>
              </div>
            </div>

            <div className="w-1/2 flex justify-center md:justify-center lg:justify-start pl-7 md:pl-0 mt-[2vh]">
              {(isHovered || mediumscreen) && (
                <div className="block ml-0 md:ml-8">
                  <ul className="flex flex-col items-start justify-between h-[110px] lg:h-[250px]">
                    {/* <ul className="absolute w-[250px] md:w-[380px] h-[180px] md:h-[250px] top-[50%] translate-y-[-50%]  left-[35vw] lg:left-[300px] xl:left-[480px] flex flex-col justify-between"> */}
                    {/* <> */}
                    <Link
                      href="/service/social-media-marketing"
                      className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                    >
                      Social Media Marketing
                    </Link>
                    <Link
                      href="/service/web-design"
                      className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                    >
                      Web Development & Design
                    </Link>
                    <Link
                      href="/service/brand-management"
                      className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                    >
                      Branding
                    </Link>
                    <Link
                      href="/service/seo"
                      className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                    >
                      SEO
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>

      {/* This is last of navigation  */}
      <div className="w-full pagePaddingX nav-footer fixed bottom-5 flex items-center justify-between">
        <div className="flex items-center gap-0 md:gap-4 contact-wrapper">
          <Link href="#">{twitterSvg()}</Link>
          <Link href="#">{facebookSvg()}</Link>
          <Link href="#">{instagramSvg()}</Link>
          <Link href="#">{linkedinSvg()}</Link>
        </div>
        <div className="flex items-center">
          <h4 className="text-white font-bold largeParagraph md: py-2 md:py-5 pr-2 md:pr-6">
            Let's get cracking
          </h4>
          <button className="transparentBgColor ml-0 sm:ml-2 md:ml-6 uppercase hover:bgWhite hover:text-orange_theme-400 text-white font-bold py-2 md:py-4 px-3 md:px-6 rounded-full">
            <span className="paragraph">Start Your project</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavigationMenu;
