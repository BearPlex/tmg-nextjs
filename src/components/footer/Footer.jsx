/* eslint-disable */
import Link from "next/link";
import { twitterSvg } from "../../helpers/Helpers";
import { instagramSvg } from "../../helpers/Helpers";
import { facebookSvg } from "../../helpers/Helpers";
import { linkedinSvg } from "../../helpers/Helpers";
import danImage from "../../assets/images/dan-global-logo@2x.jpg";
import drumImage from "../../assets/images/the-drum-logo.jpg";
import clutchImage from "../../assets/images/glutch@2x.jpg";
import awardsImage from "../../assets/images/awwwards-logo@2x.jpg";
import designImage from "../../assets/images/css-design-awards-white.jpg";
import kotaTransparentImage from "../../assets/svg/Kota_logo_white-1.svg";
import groupBtn from "../../assets/images/Group.png";
import tmg from "../../assets/images/tmg-log.png";
import Image from "../Image/Image";
const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#1B1B1B] pt-16 pb-6">
        <div className="px-32 text-white">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className=" w-6/12  text-right order-3">
              <h4 className="text-3xl font-bold gradient-text">Follow</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Sign Up to our newsletter
              </h5>
              <a
                href="mailto:Info@themediagale.com"
                className="text-lg mt-0 mb-2 text-blueGray-600"
              >
                Info@themediagale.com
              </a>
            </div>
            <div className="w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  {/* <span className="mb-2"><Link href="/" className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 ">Home</Link></span>  */}
                  <ul className="list-unstyled">
                    {/* <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Work</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Services</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Contact</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Privacy Policy</a>
              </li> */}
                    <li className="mb-4">
                      <Link
                        href="/"
                        className="block uppercase text-blueGray-500 text-sm font-extrabold mb-2 "
                      >
                        Home
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-3  text-base"
                        href="/work"
                      >
                        Work
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-3 text-base"
                        href="/services"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-3 text-base"
                        href="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-3 mt-3 text-base"
                        href="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-3 text-base"
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full mt-5 lg:mt-1 ml-4 lg:ml-0 lg:w-6/12 xl:relative xl:right-16">
                  <span className="block uppercase text-blueGray-500 text-sm font-extrabold bold mb-2 text-[#EE2760]">
                    Offices
                  </span>
                  <ul className="list-unstyled">
                    <li className="mb-1">
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        New York
                      </Link>
                    </li>
                    {/* <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li> */}
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-extrabold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Lahore
                      </Link>
                    </li>
                    {/* <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-6 lg:mb-0 mb-6  flex justify-end  md:flex-row flex-col  md:justify-between md:items-center h-10 mx-5 md:mx-0">
            {/* <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button> */}
            <Link href="/">
              <Image
                width={500}
                height={300}
                src={tmg.src}
                alt="tmg"
                className="w-20 md:w-[230px] cursor-pointer"
              />
            </Link>
            <div className="bg-white w-52 md:w-80">
              <Image
                width={500}
                height={300}
                className="w-60 md:w-full"
                alt="group"
                src={groupBtn.src}
              />
            </div>
          </div>
          <hr className="mt-16 mb-8 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  TMG
                </a>
                {/* <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>. */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
