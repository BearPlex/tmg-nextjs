/* eslint-disable */
import Link from "next/link";
// import kotaTransparentImage from '../../assets/svg/Kota_logo_white-1.svg';
import kotaTransparentImage from "../../assets/images/tmg-logo.png";
import { SVG_COLORS, twitterSvg } from "../../helpers/Helpers";
import { facebookSvg } from "../../helpers/Helpers";
import { instagramSvg } from "../../helpers/Helpers";
import { linkedinSvg } from "../../helpers/Helpers";
import Image from "../Image/Image";
const NavigationMenu = () => {
  return (
    <div className="background-gradient z-10 w-full h-full px-20 py-16 fixed top-0">
      <Link href="/">
        {/* <a className="inline-block "> */}
        <Image
          width={500}
          height={300}
          src={kotaTransparentImage.src}
          alt="kota logo"
          className="inline-block w-40 cursor-pointer"
        />
        {/* </a> */}
      </Link>
      <div>
        <ul className="max-w-[60%] mx-auto relative">
          <li className="group">
            <Link href="/services">
              {/* <a className="text-[#FFCBC2] inline-block text-[4.7rem] font-bold leading-none  hover:text-white"> */}
              Services
              {/* </a> */}
            </Link>
            <div className="hidden group-hover:block">
              <ul className="absolute top-[50%] translate-y-[-50%]  left-[350px] flex flex-col">
                <Link href="/service/social-media-marketing">
                  {/* <a className="px-3 text-left text-3xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white"> */}
                  Social Media Marketing
                  {/* </a> */}
                </Link>
                <Link href="/service/web-design">
                  {/* <a className="px-3 text-left text-3xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white"> */}
                  Web Development & Design
                  {/* </a> */}
                </Link>
                <Link href="/service/brand-management">
                  {/* <a className="px-3 text-left text-3xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white"> */}
                  Branding
                  {/* </a> */}
                </Link>
                <Link href="/service/seo">
                  {/* <a className="px-3 text-left text-3xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white"> */}
                  Seo
                  {/* </a> */}
                </Link>
                {/* <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">E-Commerce</a></Link>
                                <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">WordPress</a></Link> */}
              </ul>
            </div>
          </li>
          <li className="group">
            <Link href="/work">
              {/* <a className="text-[#FFCBC2] hover:text-white inline-block text-[4.7rem] pt-3 font-bold leading-none"> */}
              Work
              {/* </a> */}
            </Link>
            {/* <div className="hidden group-hover:block">
                            <ul className="absolute top-10 w-[15rem] right-[100px]">
                                <Link href="#"><a className="text-[#FFCBC2] hover:text-white px-3 text-left text-4xl inline-block font-bold leading-normal">Work</a></Link>
                            </ul>
                        </div> */}
          </li>

          <li className="group">
            <Link href="/studio">
              {/* <a className="inline-block font-bold text-[4.7rem] pt-3 leading-none text-[#FFCBC2] hover:text-white"> */}
              Studio
              {/* </a> */}
            </Link>
            <div className="hidden group-hover:block">
              {/* <ul className="absolute top-[50%] translate-y-[-50%]  left-[310px] flex flex-col">
                                <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">Web Development</a></Link>
                                <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">Digital Marketing</a></Link>
                                <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">E-Commerce</a></Link>
                            </ul> */}
            </div>
          </li>
          <li className="group">
            <Link href="/blog">
              {/* <a className="inline-block font-bold text-[4.7rem] pt-3 leading-none text-[#FFCBC2] hover:text-white"> */}
              Blog
              {/* </a> */}
            </Link>
            {/* <div className="hidden group-hover:block">
                            <ul className="absolute top-[50%] translate-y-[-50%]  right-[100px] flex flex-col">
                                <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">E-Commerce</a></Link>
                                <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">WordPress</a></Link>
                            </ul>
                        </div> */}
          </li>
          <li className="group">
            <Link href="/contact">
              {/* <a className="inline-block font-bold text-[4.7rem] pt-3 leading-none text-[#FFCBC2] hover:text-white"> */}
              Contact
              {/* </a> */}
            </Link>
            {/* <div className="hidden group-hover:block">
                            <ul className="absolute top-[50%] translate-y-[-50%]  right-[100px] flex flex-col">
                                <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">Creative Web Design</a></Link>
                                <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">Web Development</a></Link>
                                <Link href="#"><a className="px-3 text-left text-4xl inline-block font-bold leading-normal text-[#FFCBC2] hover:text-white">Branding</a></Link>
                            </ul>
                        </div> */}
          </li>
          <li className="group">
            <Link href="/resources">
              {/* <a className="text-[#FFCBC2] hover:text-white inline-block text-[4.7rem] pt-3 font-bold leading-none"> */}
              Resources
              {/* </a> */}
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-footer fixed bottom-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="#">{twitterSvg()}</Link>
          <Link href="#">{facebookSvg()}</Link>
          <Link href="#">{instagramSvg()}</Link>
          <Link href="#">{linkedinSvg()}</Link>
        </div>
        <div className="flex items-center">
          <h4 className="text-white font-bold text-2xl py-5 border-r-2 border-white pr-6">
            Let/'s get cracking
          </h4>
          <button className="transparentBgColor ml-6 uppercase hover:bg-white hover:text-orange_theme-400 text-white font-bold py-4 px-6 rounded-full hover:transition hover:transition-all">
            Start Your project
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavigationMenu;
