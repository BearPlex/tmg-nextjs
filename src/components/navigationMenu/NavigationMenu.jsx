/* eslint-disable */
import { useState, useEffect } from "react";
import Link from "next/link";
import { SVG_COLORS, twitterSvg } from "../../helpers/Helpers";
import { facebookSvg } from "../../helpers/Helpers";
import { instagramSvg } from "../../helpers/Helpers";
import { linkedinSvg } from "../../helpers/Helpers";
import Image from "../Image/Image";
const NavigationMenu = ({ setShowMenu }) => {
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
    <div className="background-gradient-new z-10 w-full h-full fixed top-0 ">
      <div className="flex flex-col justify-between h-full">
        <div className=" pagePaddingX pt-[4vh] lg:pt-[7vh]">
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
                      onClick={() => {
                        setTimeout(() => {
                          setShowMenu(false);
                        }, 300);
                      }}
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
                          onClick={() => {
                            setTimeout(() => {
                              setShowMenu(false);
                            }, 300);
                          }}
                          className="px-0 md:px-4 text-left text-xl sm:smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                        >
                          Social Media Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/web-design"
                          onClick={() => {
                            setTimeout(() => {
                              setShowMenu(false);
                            }, 300);
                          }}
                          className="px-0 md:px-4 text-left text-xl sm:smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                        >
                          Web Development & Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/seo"
                          onClick={() => {
                            setTimeout(() => {
                              setShowMenu(false);
                            }, 300);
                          }}
                          className="px-0 md:px-4 text-left text-xl sm:smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                        >
                          Search Engine Optimization
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/brand-management"
                          onClick={() => {
                            setTimeout(() => {
                              setShowMenu(false);
                            }, 300);
                          }}
                          className="px-0 md:px-4 text-left text-xl sm:smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white"
                        >
                          Branding & Design
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
                      onClick={() => {
                        setTimeout(() => {
                          setShowMenu(false);
                        }, 300);
                      }}
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
                      href="/agency"
                      onClick={() => {
                        setTimeout(() => {
                          setShowMenu(false);
                        }, 300);
                      }}
                      className="inline-block font-bold extraLargeHeading pt-3 leading-none text-[#FFCBC2] hover:text-white"
                    >
                      Agency
                    </Link>
                    <div className="hidden group-hover:block"></div>
                  </li>
                  <li
                    className="group"
                    onMouseEnter={() => setIsHovered(false)}
                  >
                    <Link
                      href="/blog"
                      onClick={() => {
                        setTimeout(() => {
                          setShowMenu(false);
                        }, 300);
                      }}
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
                      onClick={() => {
                        setTimeout(() => {
                          setShowMenu(false);
                        }, 300);
                      }}
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
                      onClick={() => {
                        setTimeout(() => {
                          setShowMenu(false);
                        }, 300);
                      }}
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
                        onClick={() => {
                          setTimeout(() => {
                            setShowMenu(false);
                          }, 300);
                        }}
                        href="/service/social-media-marketing"
                        className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white mb-4"
                      >
                        Social Media Marketing
                      </Link>
                      <Link
                        onClick={() => {
                          setTimeout(() => {
                            setShowMenu(false);
                          }, 300);
                        }}
                        href="/service/web-design"
                        className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white mb-4"
                      >
                        Web Development & Design
                      </Link>
                      <Link
                        onClick={() => {
                          setTimeout(() => {
                            setShowMenu(false);
                          }, 300);
                        }}
                        href="/service/seo"
                        className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white mb-4"
                      >
                        Search Engine Optimization
                      </Link>
                      <Link
                        onClick={() => {
                          setTimeout(() => {
                            setShowMenu(false);
                          }, 300);
                        }}
                        href="/service/brand-management"
                        className="px-0 md:px-4 text-left smallHeading inline-block font-bold text-[#FFCBC2] hover:text-white mb-4"
                      >
                        Branding & Design
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
            <div className="flex items-center gap-0 lg:gap-4 contact-wrapper-menu">
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
              <h4 className="hidden md:block text-white text-center font-bold paragraph md:largeParagraph py-2 md:py-5 pl-2 pr-2 lg:pr-6 lg:pl-6">
                Let's get cracking
              </h4>
              <button className="hover:-translate-y-2 ease-in-out transition duration-300 transparentBgColor ml-0 sm:ml-2 md:ml-6 uppercase hover:bgWhite hover:text-orange_theme-400 text-white font-bold py-2 md:py-4 px-3 md:px-6 rounded-full">
                <Link
                  href="/contact"
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 300);
                  }}
                >
                  <span className="font-bold smallText md:paragraph">
                    Start Your project
                  </span>
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
