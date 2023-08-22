/* eslint-disable */
import { useState, useEffect } from "react";
import Link from "next/link";
import kotaTransparentImage from "../../assets/images/tmg-logo.png";
import { SVG_COLORS, twitterSvg } from "../../helpers/Helpers";
import { facebookSvg } from "../../helpers/Helpers";
import { instagramSvg } from "../../helpers/Helpers";
import { linkedinSvg } from "../../helpers/Helpers";
import Image from "../Image/Image";
const NavigationMenu = () => {
  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      body::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredOverUL, setIsHoveredOverUL] = useState(false);
  let timer;
  let mediumscreen = false;
  if (window.innerWidth < 1024) {
    mediumscreen = true;
  } else {
    mediumscreen = false;
  }

  useEffect(() => {}, [isHovered]);

  return (
    <div className="background-gradient z-10 w-full h-full fixed top-0 ">
      <div className="flex flex-col justify-between h-full">
        <div className=" pagePaddingX pt-[15vh] ">
          <div className="inline-block w-56 cursor-pointer"></div>
          <div className="">
            <ul className="relative flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="w-full md:w-1/2 flex md:justify-center pl-7 md:pl-0 mt-[5vh]">
                <div className="w-full h-auto md:w-1/6">
                  <li
                    className="group mb-3 md:mb-0"
                    onMouseEnter={() => setIsHovered(true)}
                  >
                    <Link
                      href="/services"
                      className="text-[#FFCBC2] inline-block extraLargeHeading font-bold leading-none  hover:text-white"
                    >
                      Services
                    </Link>
                  </li>
                  <div className="block md:hidden ml-8 h-auto">
                    <ul className="list-disc text-[#FFCBC2] hover:text-white flex flex-col items-start justify-between">
                      <li>
                        <Link
                          href="/service/social-media-marketing"
                          className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                        >
                          Social Media Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/web-design"
                          className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                        >
                          Web Development & Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/brand-management"
                          className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                        >
                          Branding
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/seo"
                          className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                        >
                          SEO
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <li
                    className="group"
                    onMouseEnter={() => setIsHovered(false)}
                  >
                    <Link
                      href="/work"
                      className="text-[#FFCBC2] hover:text-white inline-block extraLargeHeading pt-3 font-bold leading-none"
                    >
                      Work
                    </Link>
                  </li>

                  <li
                    className="group"
                    onMouseEnter={() => setIsHovered(false)}
                  >
                    <Link
                      href="/studio"
                      className="inline-block font-bold extraLargeHeading pt-3 leading-none text-[#FFCBC2] hover:text-white"
                    >
                      Studio
                    </Link>
                    <div className="hidden group-hover:block"></div>
                  </li>
                  <li
                    className="group"
                    onMouseEnter={() => setIsHovered(false)}
                  >
                    <Link
                      href="/blog"
                      className="inline-block font-bold extraLargeHeading pt-3 leading-none text-[#FFCBC2] hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li
                    className="group"
                    onMouseEnter={() => setIsHovered(false)}
                  >
                    <Link
                      href="/contact"
                      className="inline-block font-bold extraLargeHeading pt-3 leading-none text-[#FFCBC2] hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                  <li
                    className="group"
                    onMouseEnter={() => setIsHovered(false)}
                  >
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
                  <div className="hidden md:block ml-0 md:ml-8">
                    <ul className="flex flex-col items-start justify-between h-[90px] lg:h-[170px]">
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
        <div className="max-w-7xl mb-5 mx-auto pagePaddingX w-full">
          <div className="w-full nav-footer flex items-center justify-between ">
            <div className="flex items-center gap-0 md:gap-4 contact-wrapper">
              <a
                href="https://twitter.com/themediagale"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                {twitterSvg()}
              </a>
              <a
                href="https://instagram.com/themediagale/"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                {instagramSvg()}
              </a>
              <a
                href="https://www.facebook.com/themediagale/"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                {facebookSvg()}
              </a>
              <a
                href="https://www.linkedin.com/company/themediagale/"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                {linkedinSvg()}
              </a>
            </div>
            <div className="flex items-center">
              <h4 className="text-white font-bold largeParagraph md: py-2 md:py-5 pr-2 md:pr-6">
                Let's get cracking
              </h4>
              <button className="hover:-translate-y-2 ease-in-out transition duration-300 transparentBgColor ml-0 sm:ml-2 md:ml-6 uppercase hover:bgWhite hover:text-orange_theme-400 text-white font-bold py-2 md:py-4 px-3 md:px-6 rounded-full">
                <Link href="/contact">
                  <span className="paragraph">Start Your project</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavigationMenu;
