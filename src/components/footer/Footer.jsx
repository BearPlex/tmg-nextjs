/* eslint-disable */
import Link from "next/link";
import danImage from "../../assets/images/dan-global-logo@2x.jpg";
import drumImage from "../../assets/images/the-drum-logo.jpg";
import clutchImage from "../../assets/images/glutch@2x.jpg";
import awardsImage from "../../assets/images/awwwards-logo@2x.jpg";
import designImage from "../../assets/images/css-design-awards-white.jpg";
import kotaTransparentImage from "../../assets/svg/Kota_logo_white-1.svg";
import groupBtn from "../../assets/images/Group.png";
import tmg from "../../assets/images/tmg-log.png";
import Image from "../Image/Image";
import logoIcon from "../../assets/images/tmg-logo.png";
import clutrhLogo from "../../assets/svg/clutrh-logo.svg";
import shopifyLogo from "../../assets/svg/shopify-logo.svg";
import sortListLogo from "../../assets/svg/sort-list-logo.svg";
import pashaLogo from "../../assets/svg/PASHA-Logo.svg";
import psebLogo from "../../assets/svg/PSEB-logo.svg";
import {
  facebookSvg,
  instagramSvg,
  linkedinSvg,
  twitterSvg,
} from "../../helpers/Helpers";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#1B1B1B] pt-7 md:pt-20 pb-0 md:pb-10">
        <div className="w-full 3xl:max-w-7xl 3xl:mx-auto">
          {/* This part is done */}

          <div className="pagePaddingX text-white 3xl:px-0 3xl:pl-0">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className=" w-full md:w-6/12 md:text-right text-left order-3 mb-6 md:mb-0">
                <h4 className="paragraph font-bold text-[#EE2760]">
                  Follow
                  <div className="flex gap-x-0 md:gap-x-2 justify-start md:justify-end contact-wrapper">
                    <a
                      href="https://twitter.com/bearplexdigital"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block"
                    >
                      {twitterSvg()}
                    </a>
                    <a
                      href="https://www.facebook.com/BearPlex/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block"
                    >
                      {instagramSvg()}
                    </a>
                    <a
                      href="https://www.facebook.com/BearPlex/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block"
                    >
                      {facebookSvg()}
                    </a>
                    <a
                      href="https://www.linkedin.com/company/bearplex/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block"
                    >
                      {linkedinSvg()}
                    </a>
                  </div>
                </h4>
                <h5 className="paragraph mt-0 mb-2 whiteHeadingText font-bold hidden md:block">
                  Send us an email
                </h5>
                <a
                  href="mailto:Info@themediagale.com"
                  className="mb-2 whiteHeadingText smallHeading font-bold"
                >
                  <span className="gradientHoverWhite xl2Bold smallHeading  pb-0">
                    Info@themediagale.com
                  </span>
                </a>
              </div>

              <div className="w-full md:w-6/12">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-6/12 ml-auto">
                    <ul className="list-unstyled">
                      <li className="mb-0 md:mb-2">
                        <span className="text-[#EE2760] xl2Bold text20   md:pb-3">
                          Explore
                        </span>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/">
                          <span className="gradientHoverWhite xl2Bold text20  pb-0">
                            Home
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/work">
                          <span className="gradientHoverWhite xl2Bold text20  pb-0">
                            Work
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/services">
                          <span className="gradientHoverWhite xl2Bold text20  pb-0">
                            Services
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/blog">
                          <span className="gradientHoverWhite xl2Bold text20  pb-0">
                            Blog
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/privacy-policy">
                          <span className="gradientHoverWhite xl2Bold text20  pb-0">
                            Privacy Policy
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-6/12 xl:relative xl:right-16">
                    <ul className="list-unstyled">
                      <li className="mt-6 md:mt-0 mb-0 md:mb-2">
                        <span className="text-[#EE2760] xl2Bold text20   md:pb-3">
                          Offices
                        </span>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3" href="/contact">
                          <span className="gradientHoverWhite xl2Bold text20 ">
                            New York
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3" href="/contact">
                          <span className="gradientHoverWhite xl2Bold text20 ">
                            Lahore
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-10 sm:mt-2 md:mt-6 lg:mb-6 mb-0 md:mb-2   flex justify-end  md:flex-row flex-col  md:justify-between md:items-center md:mx-0">
            <Link
              href="/"
              className="w-full flex justify-end flex-col-reverse md:flex-row   md:justify-between md:items-center md:mx-0"
            >
              <div className="flex items-center  md:pl-10 lg:pl-14 xl:pl-20 2xl:pl-32 3xl:pl-0">
                <div className="h-full w-[100vw] md:w-[100%] bgWhite isolate">
                  <div className="bgWhite flex flex-row items-center justify-between">
                    <Image
                      width={50}
                      height={40}
                      className="h-[9vw] md:h-[90px] w-[100px]"
                      alt="group"
                      layout="response"
                      objectFit="cover"
                      src={sortListLogo.src}
                    />
                    <Image
                      width={90}
                      height={50}
                      className="h-[9vw] md:h-[90px] w-[140px] md:w-[200px]"
                      alt="group"
                      layout="response"
                      objectFit="cover"
                      src={shopifyLogo.src}
                    />
                    <Image
                      width={50}
                      height={50}
                      className="h-[9vw] md:h-[90px] w-[100px]"
                      alt="group"
                      layout="response"
                      objectFit="cover"
                      src={clutrhLogo.src}
                    />
                    <Image
                      width={50}
                      height={50}
                      className="h-[9vw] md:h-[90px] w-[100px]"
                      alt="group"
                      layout="response"
                      objectFit="cover"
                      src={psebLogo.src}
                    />
                    <Image
                      width={50}
                      height={50}
                      className="h-[9vw] md:h-[90px] w-[100px]"
                      alt="group"
                      layout="response"
                      objectFit="cover"
                      src={pashaLogo.src}
                    />
                  </div>
                </div>
              </div>
              <div className="pl-4 md:pl-0  mb-6 md:m-0 pr-4 md:pr-10 lg:pr-14 xl:pr-20 2xl:pr-32 3xl:pr-0">
                <div className="w-[180px] md:w-[150px] lg:w-[280px]">
                  <Image
                    width={0}
                    height={0}
                    src={logoIcon.src}
                    alt="tmg"
                    layout="responsive"
                    objectFit="cover"
                    className="h-[59px] w-[180px] md:w-[150px] lg:w-[280px] cursor-pointer"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
