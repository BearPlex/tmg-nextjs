/* eslint-disable */
import Link from "next/link";
import Image from "../Image/Image";
import logoIcon from "../../../public/webp/tmg-logo.82b8a7c1.webp";
import footerLogos from "../../../public/webp/footer-logos.fb9a26d3.webp";
import {
  facebookSvg,
  instagramSvg,
  linkedinSvg,
  twitterSvg,
  whatsappSvg,
} from "../../helpers/Helpers";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#1B1B1B] pt-7 md:pt-20 pb-0 md:pb-10">
        <div className="w-full max-w-7xl mx-auto">
          {/* This part is done */}

          <div className="pagePaddingX text-white">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className=" w-full md:w-6/12 md:text-right text-left order-3 mb-6 md:mb-0">
                <h4 className="paragraph font-bold text-[#EE2760]">
                  Connect
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
                    <a
                      href="https://wa.me/19179701353"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block "
                    >
                      {whatsappSvg()}
                    </a>
                  </div>
                </h4>
                <h5 className="paragraph mt-8 mb-2 whiteHeadingText font-bold hidden md:block">
                  Shoot us an email
                </h5>
                <a
                  href="mailto:Info@themediagale.com"
                  className="mb-3 whiteHeadingText smallHeading font-bold"
                >
                  <span className="gradientHoverWhite smallHeading font-bold   ">
                    info@themediagale.com
                  </span>
                </a>
              </div>

              <div className="w-full md:w-6/12">
                <div className="flex flex-row items-top mb-6">
                  <div className="w-full lg:w-6/12 ml-auto">
                    <ul className="list-unstyled">
                      <li className="mb-0 md:mb-3">
                        <span className="text-[#EE2760] font-extrabold paragraph md:pb-3">
                          Explore
                        </span>
                      </li>
                      <li className="mb-0 md:mb-3">
                        <Link className=" md:pb-3 " href="/">
                          <span className="gradientHoverWhite font-extrabold paragraph pb-0">
                            Home
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-3">
                        <Link className=" md:pb-3 " href="/work">
                          <span className="gradientHoverWhite font-extrabold paragraph pb-0">
                            Work
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-3">
                        <Link className=" md:pb-3 " href="/services">
                          <span className="gradientHoverWhite font-extrabold paragraph pb-0">
                            Services
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-3">
                        <Link className=" md:pb-3 " href="/blog">
                          <span className="gradientHoverWhite font-extrabold paragraph pb-0">
                            Blog
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-3">
                        <Link className=" md:pb-3 " href="/contact">
                          <span className="gradientHoverWhite font-extrabold paragraph pb-0">
                            Contact
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-6">
                        <Link className=" md:pb-3 " href="/privacy-policy">
                          <span className="gradientHoverWhite font-extrabold paragraph pb-0">
                            Privacy Policy
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-6/12 flex justify-start">
                    <ul className="list-unstyled">
                      <li className="mt-0 mb-0 md:mb-3">
                        <span className="text-[#EE2760] font-extrabold paragraph md:pb-3">
                          Offices
                        </span>
                      </li>
                      <li className="mb-0 md:mb-3">
                        <Link className=" md:pb-3" href="/contact">
                          <span className="gradientHoverWhite font-extrabold paragraph">
                            New York
                          </span>
                        </Link>
                      </li>
                      <li className="mb-0 md:mb-3">
                        <Link className=" md:pb-3" href="/contact">
                          <span className="gradientHoverWhite font-extrabold paragraph ">
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

          <div className="w-full mt-10 sm:mt-2 md:mt-6 lg:mb-6 mb-0 md:mb-2 flex justify-end  md:flex-row flex-col  md:justify-between md:items-center md:mx-0">
            <Link
              href="/contact"
              className="w-full flex justify-end flex-col-reverse md:flex-row md:justify-between md:items-center md:mx-0"
            >
              <div className="flex items-center  md:pl-8 lg:pl-12 xl:pl-10">
                <div className="h-full w-[100vw] md:w-[80%] isolate">
                  <div className=" sm:bg-bg-white rounded-none sm:rounded-md pb-12 sm:pb-0 flex flex-row items-center justify-between">
                    <Image
                      width={50}
                      height={40}
                      className="h-[9vw] md:h-[70px] w-full object-contain rounded-none sm:rounded-md ease-in-out duration-300 transition hover:-translate-y-1"
                      alt="group"
                      objectFit="cover"
                      src={footerLogos.src}
                    />
                  </div>
                </div>
              </div>
              <div className="pl-4 md:pl-0  mb-6 md:m-0 pr-4 md:pr-10 lg:pr-14 xl:pr-10">
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
