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
import {
  facebookSvg,
  instagramSvg,
  linkedinSvg,
  twitterSvg,
} from "../../helpers/Helpers";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#1B1B1B] pt-7 md:pt-20 pb-0 md:pb-12">
        <div className="w-full 3xl:max-w-7xl 3xl:mx-auto">
          {/* This part is done */}

          <div className="pagePaddingX text-white 3xl:px-0 3xl:pl-0">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className=" w-full md:w-6/12 md:text-right text-left order-3">
                <h4 className="paragraph font-bold text-[#EE2760]">
                  Follow
                  <div className="flex gap-x-0 md:gap-x-2 justify-start md:justify-end  contact-wrapper">
                    <a href="#" className="inline-block">
                      {twitterSvg()}
                    </a>
                    <a href="#" className="inline-block">
                      {instagramSvg()}
                    </a>
                    <a href="#" className="inline-block">
                      {facebookSvg()}
                    </a>
                    <a href="#" className="inline-block">
                      {linkedinSvg()}
                    </a>
                  </div>
                </h4>
                <h5 className="paragraph mt-0 mb-2 whiteHeadingText font-bold">
                  Sign Up to our news letter
                </h5>
                <a
                  href="mailto:Info@themediagale.com"
                  className="mb-2 whiteHeadingText smallHeading font-bold"
                >
                  Info@themediagale.com
                </a>
              </div>

              <div className="w-full md:w-6/12">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-6/12 ml-auto">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <Link
                          href="/"
                          className="block uppercase text-blueGray-500 paragraph font-extrabold pb-0 md:pb-3"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 paragraph font-extrabold pb-0 md:pb-3 "
                          href="/work"
                        >
                          Work
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 paragraph font-extrabold pb-0 md:pb-3 "
                          href="/services"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 paragraph font-extrabold pb-0 md:pb-3 "
                          href="/blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 paragraph font-extrabold pb-0 md:pb-3"
                          href="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 paragraph font-extrabold pb-0 md:pb-3 "
                          href="/privacy-policy"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-6/12 xl:relative xl:right-16">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <span className="block uppercase text-blueGray-500 paragraph font-extrabold pb-0 md:pb-3">
                          Offices
                        </span>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 paragraph font-extrabold pb-0 md:pb-3"
                          href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                        >
                          New York
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 paragraph font-extrabold pb-0 md:pb-3"
                          href="https://creative-tim.com/privacy?ref=njs-profile"
                        >
                          Lahore
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
              // className="w-full flex justify-end  md:flex-row flex-col  md:justify-between md:items-center md:mx-0"
            >
              <div className="flex items-center mb-4 md:m-0 pl-4 md:pl-10 lg:pl-14 xl:pl-20 2xl:pl-32 3xl:pl-0">
                {/* <div className="order-2 md:order-1 flex items-center pl-10 md:pl-10 lg:pl-14 xl:pl-20 2xl:pl-32"> */}
                <div className="h-[45px] w-[90%] bgWhite">
                  <Image
                    width={500}
                    height={300}
                    className="h-[45px]"
                    alt="group"
                    src={groupBtn.src}
                  />
                </div>
              </div>
              <div className="pl-4 md:pl-0  mb-6 md:m-0 pr-4 md:pr-10 lg:pr-14 xl:pr-20 2xl:pr-32 3xl:pr-0">
                {/* <div className=" order-1 md:order-2 pr-10 md:pr-10 lg:pr-14 xl:pr-20 2xl:pr-32"> */}
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
