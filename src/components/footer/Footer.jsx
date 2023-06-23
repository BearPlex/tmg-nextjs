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
      <footer className="relative bg-[#1B1B1B] pt-20 pb-12">
        <div className="w-full 3xl:max-w-7xl 3xl:mx-auto">
          <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 text-white 3xl:px-0 3xl:pl-0">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className=" w-6/12 text-right order-3">
                <h4 className="text-[18px] mb-3 font-bold text-[#EE2760]">
                  Follow
                  <div className="flex gap-x-2 justify-end contact-wrapper">
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
                <h5 className="text-[18px] mt-0 mb-5 text-blueGray-600 font-bold">
                  Sign Up to our newsletter
                </h5>
                <a
                  href="mailto:Info@themediagale.com"
                  className="mb-2 text-blueGray-600 text-[35px] font-bold"
                >
                  Info@themediagale.com
                </a>
              </div>
              <div className="w-6/12">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-6/12 ml-auto">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <Link
                          href="/"
                          className="block uppercase text-blueGray-500 text-[18px] font-extrabold pb-3"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 text-[18px] font-extrabold pb-3 "
                          href="/work"
                        >
                          Work
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 text-[18px] font-extrabold pb-3 "
                          href="/services"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 text-[18px] font-extrabold pb-3 "
                          href="/blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 text-[18px] font-extrabold pb-3"
                          href="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="block uppercase text-blueGray-500 text-[18px] font-extrabold pb-3 "
                          href="/privacy-policy"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full ml-4 lg:ml-0 lg:w-6/12 xl:relative xl:right-16">
                    {/* <ul className="list-unstyled"> */}
                    {/* </ul> */}
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <span className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-3 text-[18px]">
                          Offices
                        </span>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-3 text-[18px]"
                          href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                        >
                          New York
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-3 text-[18px]"
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
          <div className="w-full mt-16 sm:mt-6 lg:mb-0 mb-6  flex justify-end  md:flex-row flex-col  md:justify-between md:items-center mx-5 md:mx-0">
            <Link
              href="/"
              className="w-full flex justify-end  md:flex-row flex-row  md:justify-between md:items-center mx-5 md:mx-0"
            >
              <div className="bg-white">
                <Image
                  width={500}
                  height={300}
                  className=""
                  alt="group"
                  src={groupBtn.src}
                />
              </div>
              <Image
                width={0}
                height={0}
                src={logoIcon.src}
                alt="tmg"
                className="h-[59px] w-[280px] pr-10 md:pr-10 rg:pr-14 xl:pr-20 2xl:pr-32 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
