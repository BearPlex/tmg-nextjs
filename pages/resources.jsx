/* eslint-disable */
import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/resource-word.png";
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
import TextWithImageContainer from "../src/components/containers/TextWithImageContainer";
const Resources = () => {
  return (
    <>
      <PageWrapper>
        <section>
          <HeroContainer imageSrc={kotaLogo.src}>
            <div className="w-full">
              <h4 className="mb-2 md:mb-6  heading font-bold leading-tight">
                Dedicated Resource{" "}
                <span className="gradientText">Allocation</span>
              </h4>
              <p className="paragraphBlack">
                We offer 360-degree marketing solutions such as PPC
                Advertisement, Search Engine Optimisation and Web Development
                Services. Our team is technically and professionally equipped to
                make every be
                <span className="gradientText">
                  {" "}
                  brand a success story.
                </span>{" "}
              </p>
              <div className="mt-4 md:mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </HeroContainer>

          <div className="pagePaddingX">
            <TextWithImageContainer
              id="web_design"
              imageSrc={homePageImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">SEO Resource</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 font-medium paragraphBlack">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Learn More" route="/webDesign" />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="web_development"
              imageSrc={developmentImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">PPC Resource</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 font-medium text-style">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Learn More" route="/webDevelopment" />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="branding"
              imageSrc={digitalImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Design Resource</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 font-medium paragraphBlack">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Learn More" route="/webDevelopment" />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="digital_marketing"
              imageSrc={marketingImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Content Resource</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 font-medium text-style">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <div className="mb-10">
                  <GradientButton text="Learn More" route="/webDevelopment" />
                </div>
              </div>
            </TextWithImageContainer>
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
// className="flex items-center justify-between py-10 md:py-28"
// >
// <div className="w-[40%]">
//   <HeadingThree cssClass="text-[5rem]" title="E-Commerce" />
//   <p className="mt-2 mb-4 md:mt-8 md:mb-14 font-medium paragraph text-black">
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
// className="flex items-center justify-between py-10 md:py-28"
// >
// <div className="w-[40%]">
//   <HeadingThree cssClass="text-[5rem]" title="WordPress" />
//   <p className="mt-2 mb-4 md:mt-8 md:mb-14 font-medium paragraph text-black">
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
