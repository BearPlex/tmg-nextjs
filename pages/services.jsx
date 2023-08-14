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

  return (
    <>
      <PageWrapper>
        <section>
          <HeroContainer imageSrc={kotaLogo.src}>
            <div className="w-full">
              <p className="mb-2 md:mb-6  paragraphBlack">
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
                <div className="flex flex-wrap gap-y-2 sm:gap-y-6 justify-between w-full mt-5">
                  <a
                    href="#web_design"
                    className="w-full sm:w-[47%] paragraphBlack inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-1"
                    />
                    Social Media Marketing
                  </a>

                  <a
                    href="#web_development"
                    className="w-full sm:w-[53%] paragraphBlack inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-1"
                    />
                    Search Engine Optimization
                  </a>
                  <a
                    href="#branding"
                    className="w-full sm:w-[47%] paragraphBlack inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-1"
                    />
                    Brand Management
                  </a>
                  <a
                    href="#digital_marketing"
                    className="w-full sm:w-[53%] paragraphBlack inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-1"
                    />
                    Website Design & Dev.
                  </a>
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
            >
              <div>
                <div className="headingBlack">Social Media Marketing</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 paragraphBlack">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton
                  text="Learn More"
                  route="/service/social-media-marketing"
                />
              </div>
            </TextWithImageContainer>

            <TextWithImageContainer
              id="web_development"
              imageSrc={developmentImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Brand Management</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 paragraphBlack">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton
                  text="Learn More"
                  route="/service/brand-management"
                />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="branding"
              imageSrc={digitalImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Search Engine Optimization</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 paragraphBlack">
                  Through personal and digital mediums, we provide fast and
                  clear communication to keep information flow open.
                </p>
                <GradientButton text="Learn More" route="/service/seo" />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="digital_marketing"
              imageSrc={marketingImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Website Design & Development</div>
                <p className="mt-2 mb-4 md:mt-8 md:mb-14 paragraphBlack">
                  Through personal and digital mediums, we provide fast and
                  clear communication to keep information flow open.
                </p>
                <div className="mb-10">
                  <GradientButton
                    text="Learn More"
                    route="/service/web-design"
                  />
                </div>
              </div>
            </TextWithImageContainer>
          </div>
          <div className="mt-4 md:mt-10">
            <Footer />
          </div>
        </section>
      </PageWrapper>
    </>
  );
};
export default Services;
