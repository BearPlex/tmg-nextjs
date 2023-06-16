import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/resource-word.png";
import HeadingThree from "../src/components/headings/HeadingThree";
import Link from "next/link";
import homePageImage from "../src/assets/images/seo-resource.png";
import developmentImage from "../src/assets/images/ppc-resource.png";
import digitalImage from "../src/assets/images/design-resource.png";
import marketingImage from "../src/assets/images/content-resource.png";
import eCommerceImage from "../src/assets/images/e-commerce.png";
import wordPressImage from "../src/assets/images/wordpress-4.png";
import Footer from "../src/components/footer/Footer";
import ScrollspyNav from "react-scrollspy-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Resources = () => {
  return (
    <>
      <section className="pt-20">
        <Header />
        <section className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 gap-4 pt-20 md:pt-12 items-center ">
          <div className="w-full text-center">
            <img
              src={kotaLogo.src}
              alt="kota canvas"
              loading="lazy"
              className="max-w-full"
            />
          </div>
          <div className="w-full">
            <h4 className="mb-6 text-5xl sm:text-7xl font-bold leading-tight">
              Dedicated Resource{" "}
              <span className="text-orange_theme-500">Allocation</span>
            </h4>
            <p className="text-2xl">
              We offer 360-degree marketing solutions such as PPC Advertisement,
              Search Engine Optimisation and Web Development Services. Our team
              is technically and professionally equipped to make every be
              <span className="text-[#F79B60]">
                {" "}
                brand a success story.
              </span>{" "}
            </p>
            <button class="relative w-72  h-14 mt-12 rounded-full overflow-hidden">
              <div className="">
                <div class="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                <div class="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                <p class="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                  Book Free{" "}
                  <span className="text-pink-500"> Consultation Today</span>
                </p>
              </div>
            </button>
          </div>
        </section>

        <div className="px-10 md:px-28">
          <section
            id="web_design"
            className="flex flex-col md:flex-row md:items-center justify-between py-28">
            <div className=" md:w-[40%]">
              <HeadingThree
                cssClass="text-[4rem]"
                title="SEO 
                Resource"
              />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                Analyzing the market and consumer data helps us provide
                customized solutions to everyday business challenges.
              </p>
              <Link href="/webDesign">
                <a className="text-orange_theme-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-orange_theme-400 border-2 border-orange_theme-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="w-[300px] sm:w-[400px] md:w-[55%] mt-16 md:mt-0">
              <img
                src={homePageImage.src}
                alt="services images"
                className="w-full min-w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section>
          <section
            id="web_development"
            className="flex  justify-between py-28  flex-col md:flex-row md:items-center">
            <div className="md:w-[40%]">
              <HeadingThree
                cssClass="text-[4rem]"
                title="PPC 
Resource"
              />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                Analyzing the market and consumer data helps us provide
                customized solutions to everyday business challenges.
              </p>
              <Link href="/webDevelopment">
                <a className="text-orange_theme-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-orange_theme-400 border-2 border-orange_theme-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className=" w-[300px] sm:w-[400px] md:w-[55%] mt-16 md:mt-0">
              <img
                src={developmentImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section>
          <section
            id="branding"
            className="flex  justify-between py-28  flex-col md:flex-row md:items-center">
            <div className="md:w-[40%]">
              <HeadingThree
                cssClass="text-[4rem]"
                title="Design 
Resource"
              />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                Analyzing the market and consumer data helps us provide
                customized solutions to everyday business challenges.
              </p>
              <Link href="/webDevelopment">
                <a className="text-orange_theme-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-orange_theme-400 border-2 border-orange_theme-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className=" w-[300px] sm:w-[400px] md:w-[55%] mt-16 md:mt-0">
              <img
                src={digitalImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section>
          <section
            id="digital_marketing"
            className="flex  justify-between py-28  flex-col md:flex-row md:items-center">
            <div className="md:w-[40%]">
              <HeadingThree
                cssClass="text-[4rem]"
                title="Content 
Resource"
              />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                Analyzing the market and consumer data helps us provide
                customized solutions to everyday business challenges.
              </p>
              <Link href="/webDevelopment">
                <a className="text-orange_theme-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-orange_theme-400 border-2 border-orange_theme-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className=" w-[300px] sm:w-[400px] md:w-[55%] mt-16 md:mt-0">
              <img
                src={marketingImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section>
          {/* <section
            id="e_commerce"
            className="flex items-center justify-between py-28"
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[5rem]" title="E-Commerce" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                Reinvent your online store with an expert team who know what it
                takes to turn clicks into customers and keep them coming back.
              </p>
              <Link href="/webDevelopment">
                <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="w-[55%]">
              <img
                src={eCommerceImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section> */}
          {/* <section
            id="wordpress"
            className="flex items-center justify-between py-28"
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[5rem]" title="WordPress" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                Our approach decouples WordPress CMS from the front end
                technology to tighten security and improve overall speed.
              </p>
              <Link href="/webDevelopment">
                <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="w-[55%]">
              <img
                src={wordPressImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section> */}
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Resources;
