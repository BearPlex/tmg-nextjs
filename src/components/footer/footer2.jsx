import React from "react";
import { Link } from "react-router-dom";
import { twitterSvg } from "../../helpers/Helpers";
import { instagramSvg } from "../../helpers/Helpers";
import { facebookSvg } from "../../helpers/Helpers";
import { linkedinSvg } from "../../helpers/Helpers";
// import danImage from '../../assets/images/dan-global-logo@2x.jpg';
// import drumImage from '../../assets/images/the-drum-logo.jpg';
// import clutchImage from '../../assets/images/glutch@2x.jpg';
// import awardsImage from '../../assets/images/awwwards-logo@2x.jpg';
// import designImage from '../../assets/images/css-design-awards-white.jpg';
import Image from "../src/components/Image/Image";
function footer2() {
  return (
    <>
      <div className="px-6 pt-14 pb-1 md:pb-5 bgWhite ">
        <div className=" bgBlack pt-7 md:pt-20 pb-10 rounded-3xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center md:text-center flex flex-col items-center">
              <h2 className="text-base font-semibold leading-7 text-[#299C84]">
                Contact Us
              </h2>
              <p className="my-6 smallHeading sm:text-5xl paragraph blackDescriptionText mx-auto text-center">
                You have Got This far Ready to Get Started?
              </p>

              <button className="nv-button-primary">Get In Touch</button>
            </div>

            <div className="mt-8 pt-8 md:flex md:items-center md:justify-between">
              <div className="order-2 flex gap-4 md:flex md:gap-5  md:order-2 xl:mr-24">
                <Link
                  className="text-[#848484] hover:text-white text-[16px] transition hover:translate ease-in-out duration-300"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-[#848484] hover:text-white text-[16px] transition hover:translate ease-in-out duration-300"
                  href="/blog"
                >
                  Blogs
                </Link>
                {/* <Link className="text-[#848484] hover:text-white text-[16px]" href="/">
                  Prices
                </Link> */}
                <Link
                  className="text-[#848484] hover:text-white text-[16px] transition hover:translate ease-in-out duration-300"
                  href="/case-study"
                >
                  Case Study
                </Link>
              </div>
              <div className="order-3 flex space-x-6 mt-7 md:order-3 md:mt-0 ">
                <div>
                  <Link
                    className="text-[#848484]  text-[16px] "
                    href="https://twitter.com/bearplexdigital"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={500}
                      height={300}
                      src={twitterSvg.src}
                      alt="twitterSvg"
                      className="hover:rotate-6 duration-300 transition ease-in-out"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-[#848484] text-[16px] "
                    href="https://www.linkedin.com/company/bearplex/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={500}
                      height={300}
                      alt="linkedinSvg"
                      src={linkedinSvg.src}
                      className="hover:rotate-6 duration-300 transition ease-in-out"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-[#848484] text-[16px] "
                    href="https://www.facebook.com/BearPlex/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={500}
                      height={300}
                      alt="facebookSvg"
                      src={facebookSvg.src}
                      className="hover:rotate-6 duration-300 transition ease-in-out"
                    />
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-1 my-4 hover:-translate-y-1 cursor-pointer duration-300 ease-in-out transition">
                <Link href="/">
                  {" "}
                  {/* <Image decoding="async" width={500} height={300} src={lightSmall} alt="Small Light Pic" /> */}
                </Link>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <Link
                  className="text-[#848484] hover:text-white  text-[16px] transition hover:translate ease-in-out duration-300"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="text-[#848484] hover:text-white  text-[16px] transition hover:translate ease-in-out duration-300"
                  href="/FAQ"
                >
                  FAQ
                </Link>
                <Link
                  className="text-[#848484] hover:text-white  text-[16px] transition hover:translate ease-in-out duration-300"
                  href="/terms-conditions"
                >
                  Terms of Service
                </Link>
              </div>
              <h1 className="mt-8 leading-[24px] text-[#848484] font-sans md:order-1 md:mt-0">
                &copy; 2023 NuVision, Inc. All Rights Reserved.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer2;
