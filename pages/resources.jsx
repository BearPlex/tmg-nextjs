/* eslint-disable */
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
import Image from "../src/components/Image/Image";
import GradientButton from "../src/components/button/GradientButton";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import HeroContainer from "../src/components/containers/HeroContainer";
const Resources = () => {
  return (
    <>
      <PageWrapper>
        <section>
          <HeroContainer imageSrc={kotaLogo.src}>
            <div className="w-full">
              <h4 className="mb-6 heading-style font-bold leading-tight">
                Dedicated Resource{" "}
                <span className="gradientText">Allocation</span>
              </h4>
              <p className="text-style">
                We offer 360-degree marketing solutions such as PPC
                Advertisement, Search Engine Optimisation and Web Development
                Services. Our team is technically and professionally equipped to
                make every be
                <span className="gradientText">
                  {" "}
                  brand a success story.
                </span>{" "}
              </p>
              <div className="mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </HeroContainer>

          <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32">
            <section
              id="web_design"
              className="flex flex-col md:flex-row md:items-center gap-10 justify-between py-28"
            >
              <div className="w-[50%]">
                <HeadingThree cssClass="heading-style" title="SEO Resource" />
                <p className="mt-8 mb-14 font-medium text-style text-black">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Learn More" route="/webDesign" />
              </div>
              <div className="w-[300px] sm:w-[400px] md:w-[50%] mt-16 md:mt-0">
                <Image
                  width={500}
                  height={300}
                  src={homePageImage.src}
                  alt="services images"
                  className="w-full h-auto shadow-2xl rounded-lg"
                />
              </div>
            </section>
            <section
              id="web_development"
              className="flex  justify-between py-28 gap-10 flex-col md:flex-row md:items-center"
            >
              <div className="w-[50%]">
                <HeadingThree cssClass="heading-style" title="PPC Resource" />
                <p className="mt-8 mb-14 font-medium text-style">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Learn More" route="/webDevelopment" />
              </div>
              <div className="w-[50%] mt-16 md:mt-0">
                <Image
                  width={500}
                  height={300}
                  src={developmentImage.src}
                  alt="services images"
                  className="w-full h-auto shadow-2xl rounded-lg"
                />
              </div>
            </section>
            <section
              id="branding"
              className="flex justify-between py-28 gap-10 flex-col md:flex-row md:items-center"
            >
              <div className="w-[50%]">
                <HeadingThree
                  cssClass="heading-style"
                  title="Design Resource"
                />
                <p className="mt-8 mb-14 font-medium text-style text-black">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Learn More" route="/webDevelopment" />
              </div>
              <div className="w-[50%] mt-16 md:mt-0">
                <Image
                  width={500}
                  height={300}
                  src={digitalImage.src}
                  alt="services images"
                  className="w-full h-auto shadow-2xl rounded-lg"
                />
              </div>
            </section>
            <section
              id="digital_marketing"
              className="flex justify-between py-28 gap-10 flex-col md:flex-row md:items-center"
            >
              <div className="md:w-[50%]">
                <HeadingThree
                  cssClass="heading-style"
                  title="Content Resource"
                />
                <p className="mt-8 mb-14 font-medium text-style">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Learn More" route="/webDevelopment" />
              </div>
              <div className="w-[50%] mt-16 md:mt-0 ">
                <Image
                  width={500}
                  height={300}
                  src={marketingImage.src}
                  alt="services images"
                  className="w-full h-auto shadow-2xl rounded-lg"
                />
              </div>
            </section>
          </div>
        </section>
        <Footer />
      </PageWrapper>
    </>
  );
};
export default Resources;

// {/* <section
// id="e_commerce"
// className="flex items-center justify-between py-28"
// >
// <div className="w-[40%]">
//   <HeadingThree cssClass="text-[5rem]" title="E-Commerce" />
//   <p className="mt-8 mb-14 font-medium text-xl text-black">
//     Reinvent your online store with an expert team who know what it
//     takes to turn clicks into customers and keep them coming back.
//   </p>
//   <Link href="/webDevelopment">
//     <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
//       Learn More
//     </a>
//   </Link>
// </div>
// <div className="w-[55%]">
//   <Image decoding="async" width={500} height={300}
//     src={eCommerceImage.src}
//     alt="services images"
//     className="w-full h-100 shadow-2xl rounded-lg"
//   />
// </div>
// </section> */}
// {/* <section
// id="wordpress"
// className="flex items-center justify-between py-28"
// >
// <div className="w-[40%]">
//   <HeadingThree cssClass="text-[5rem]" title="WordPress" />
//   <p className="mt-8 mb-14 font-medium text-xl text-black">
//     Our approach decouples WordPress CMS from the front end
//     technology to tighten security and improve overall speed.
//   </p>
//   <Link href="/webDevelopment">
//     <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
//       Learn More
//     </a>
//   </Link>
// </div>
// <div className="w-[55%]">
//   <Image decoding="async" width={500} height={300}
//     src={wordPressImage.src}
//     alt="services images"
//     className="w-full h-100 shadow-2xl rounded-lg"
//   />
// </div>
// </section> */}
