/* eslint-disable */
import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/services-logo.png";
import Link from "next/link";
import homePageImage from "../src/assets/images/social-media-marketing.png";
import developmentImage from "../src/assets/images/brand-management.png";
import digitalImage from "../src/assets/images/seo.png";
import marketingImage from "../src/assets/images/tmg.png";
import eCommerceImage from "../src/assets/images/e-commerce.png";
import wordPressImage from "../src/assets/images/wordpress-4.png";
import Footer from "../src/components/footer/Footer";
import ScrollspyNav from "react-scrollspy-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "../src/components/Image/Image";
import GradientButton from "../src/components/button/GradientButton";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import HeroContainer from "../src/components/containers/HeroContainer";
import TextWithImageContainer from "../src/components/containers/TextWithImageContainer";
const Services = () => {
  const router = useRouter();
  const pushServiceSocial = () => {
    router.push("/service/social-media-marketing");
  };
  const pushServiceBrand = () => {
    router.push("/service/brand-management");
  };
  const pushServiceSeo = () => {
    router.push("/service/seo");
  };
  const pushServiceDesign = () => {
    router.push("/service/web-design");
  };
  return (
    <>
      <PageWrapper>
        <section>
          <HeroContainer imageSrc={kotaLogo.src}>
            <div className="w-full">
              <p className="mb-m md:mb-6  paragraphBlack">
                Fusing astounding visuals with compelling content while backed
                by solid strategy, we assist our clients in building a magnetic
                online presence to transform every click into a conversion.
              </p>

              <p className="paragraphBlack">
                Explore our services to see how we can{" "}
                <span className="gradientText">
                  transform your business into a brand.
                </span>{" "}
              </p>
              <ScrollspyNav
                scrollTargetIds={[
                  "web_design",
                  "web_development",
                  "branding",
                  "digital_marketing",
                  // "e_commerce",
                  // "wordpress",
                ]}
                activeNavClass="is-active"
              >
                <div className="flex flex-wrap gap-y-8 justify-between w-full md:max-w-[85%] mt-5">
                  {/* <Link href="/webDevelopment">
                <a className="w-1/2 font-medium paragraphBlack inline-block">
                  Learn More
                </a>
              </Link>
              <Link href="/webDevelopment">
                <a className="w-1/2 font-medium paragraphBlack inline-block">
                  Learn More
                </a>
              </Link> */}
                  <a
                    href="#web_design"
                    className="w-1/2 font-medium paragraphBlack inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-3"
                    />
                    Social Media Marketing
                  </a>

                  <a
                    href="#web_development"
                    className="w-1/2 font-medium paragraphBlack inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-3"
                    />
                    Search Engine Optimization
                  </a>
                  <a
                    href="#branding"
                    className="w-1/2 font-medium paragraphBlack inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-3"
                    />
                    Brand Management
                  </a>
                  <a
                    href="#digital_marketing"
                    className="w-1/2 font-medium paragraphBlack inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-3"
                    />
                    Website Design & Dev.
                  </a>
                  {/* <a
                  href="#e_commerce"
                  className="w-1/2 smallText font-medium paragraphBlack inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 smallText mr-3"
                  />
                  E-Commerce
                </a>
                <a
                  href="#wordpress"
                  className="w-1/2 smallText font-medium paragraphBlack inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 smallText mr-3"
                  />
                  WordPress
                </a> */}
                </div>
              </ScrollspyNav>
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
              selectRoute={pushServiceSocial}
            >
              <div>
                <div className="headingBlack">Social Media Marketing</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 paragraphBlack">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Learn More" route="/service/web-design" />
              </div>
            </TextWithImageContainer>

            <TextWithImageContainer
              id="web_development"
              imageSrc={developmentImage.src}
              imageAlt="services images"
              selectRoute={pushServiceBrand}
            >
              <div>
                <div className="headingBlack">Brand Management</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 paragraphBlack">
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
              selectRoute={pushServiceSeo}
            >
              <div>
                <div className="headingBlack">Search Engine Optimization</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 paragraphBlack">
                  Through personal and digital mediums, we provide fast and
                  clear communication to keep information flow open.
                </p>
                <GradientButton text="Learn More" route="/webDevelopment" />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="digital_marketing"
              imageSrc={marketingImage.src}
              imageAlt="services images"
              selectRoute={pushServiceDesign}
            >
              <div>
                <div className="headingBlack">Website Design & Development</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 paragraphBlack">
                  Through personal and digital mediums, we provide fast and
                  clear communication to keep information flow open.
                </p>
                <GradientButton text="Learn More" route="/webDevelopment" />
              </div>
            </TextWithImageContainer>
          </div>
          <Footer />
        </section>
      </PageWrapper>
    </>
  );
};
export default Services;

//   {/* <section
//   id="e_commerce"
//   className="flex items-center justify-between py-10 md:py-28"
// >
//   <div className="w-[40%]">
//     <HeadingThree cssClass="text-[5rem]" title="E-Commerce" />
//     <p className="mt-2 mb-4 md:mt-8 md:mb-14 font-medium paragraph text-black">
//       Reinvent your online store with an expert team who know what it
//       takes to turn clicks into customers and keep them coming back.
//     </p>
//     <Link href="/webDevelopment">
//       <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
//         Learn More
//       </a>
//     </Link>
//   </div>
//   <div className="w-[55%]">
//     <Image decoding="async" width={500} height={300}
//       src={eCommerceImage.src}
//       alt="services images"
//       className="w-full h-100 shadow-2xl rounded-lg"
//     />
//   </div>
// </section> */}
//   {/* <section
//   id="wordpress"
//   className="flex items-center justify-between py-10 md:py-28"
// >
//   <div className="w-[40%]">
//     <HeadingThree cssClass="text-[5rem]" title="WordPress" />
//     <p className="mt-2 mb-4 md:mt-8 md:mb-14 font-medium paragraph text-black">
//       Our approach decouples WordPress CMS from the front end
//       technology to tighten security and improve overall speed.
//     </p>
//     <Link href="/webDevelopment">
//       <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
//         Learn More
//       </a>
//     </Link>
//   </div>
//   <div className="w-[55%]">
//     <Image decoding="async" width={500} height={300}
//       src={wordPressImage.src}
//       alt="services images"
//       className="w-full h-100 shadow-2xl rounded-lg"
//     />
//   </div>
// </section> */}
