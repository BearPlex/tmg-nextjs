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
import footerLogos from "../../assets/images/footer-logos.png";
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
        <div className="w-full max-w-7xl mx-auto">
          {/* This part is done */}

          <div className="pagePaddingX text-white xl:px-0 xl:pl-0">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className=" w-full md:w-6/12 md:text-right text-left order-3 mb-6 md:mb-0">
                <h4 className="paragraph font-bold text-[#EE2760]">
                  Follow
                  <div className="flex gap-x-0 md:gap-x-2 justify-start md:justify-end contact-wrapper">
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
                </h4>
                <h5 className="paragraph mt-8 mb-1 whiteHeadingText font-bold hidden md:block">
                  Shoot us an email
                </h5>
                <a
                  href="mailto:Info@themediagale.com"
                  className="mb-2 whiteHeadingText smallHeading font-bold"
                >
                  <span className="gradientHoverWhite text-sm sm:text-base font-medium   ">
                    info@themediagale.com
                  </span>
                </a>
              </div>

              <div className="w-full md:w-6/12">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-6/12 ml-auto">
                    <ul className="list-unstyled">
                      <li className="mb-0 md:mb-2">
                        <span className="text-[#EE2760] font-semibold text-sm sm:text-base   md:pb-3">
                          Explore
                        </span>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/">
                          <span className="gradientHoverWhite xl2Bold text-sm sm:text-base  pb-0">
                            Home
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/work">
                          <span className="gradientHoverWhite xl2Bold text-sm sm:text-base  pb-0">
                            Work
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/services">
                          <span className="gradientHoverWhite xl2Bold text-sm sm:text-base  pb-0">
                            Services
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/blog">
                          <span className="gradientHoverWhite xl2Bold text-sm sm:text-base  pb-0">
                            Blog
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3 " href="/privacy-policy">
                          <span className="gradientHoverWhite xl2Bold text-sm sm:text-base  pb-0">
                            Privacy Policy
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-6/12 xl:relative xl:right-16">
                    <ul className="list-unstyled">
                      <li className="mt-6 md:mt-0 mb-0 md:mb-2">
                        <span className="text-[#EE2760] font-semibold text-sm sm:text-base   md:pb-3">
                          Offices
                        </span>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3" href="/contact">
                          <span className="gradientHoverWhite xl2Bold text-sm sm:text-base ">
                            New York
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-2">
                        <Link className=" md:pb-3" href="/contact">
                          <span className="gradientHoverWhite xl2Bold text-sm sm:text-base ">
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
              href="/contact"
              className="w-full flex justify-end flex-col-reverse md:flex-row   md:justify-between md:items-center md:mx-0"
            >
              <div className="flex items-center  md:pl-10 lg:pl-14 xl:pl-0">
                <div className="h-full w-[100vw] md:w-[100%] isolate">
                  <div className=" sm:bg-transparent bg-white pb-12 sm:pb-0 flex flex-row items-center justify-between">
                    <Image
                      width={50}
                      height={40}
                      className="h-[9vw] md:h-[70px] w-full object-contain sm:w-auto rounded-none sm:rounded-md ease-in-out duration-300 transition hover:-translate-y-1"
                      alt="group"
                      layout="response"
                      objectFit="cover"
                      src={footerLogos.src}
                    />
                  </div>
                </div>
              </div>
              <div className="pl-4 md:pl-0  mb-6 md:m-0 pr-4 md:pr-10 lg:pr-14 xl:pr-0">
                <div className="w-[150px]">
                  <Image
                    width={0}
                    height={0}
                    src={logoIcon.src}
                    alt="tmg"
                    layout="responsive"
                    objectFit="cover"
                    className="h-12 w-12 cursor-pointer ease-in-out duration-300 transition hover:-translate-y-1"
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
