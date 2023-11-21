/* eslint-disable */
import Header from "../src/components/header/Header";
import servicesPic from "../src/assets/images/SERVICES.png";
import Link from "next/link";
import Footer from "../src/components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import GradientButton from "../src/components/button/GradientButton";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import HeroContainer from "../src/components/containers/HeroContainer";
import TextWithImageContainer from "../src/components/containers/TextWithImageContainer";
import TextWithVideoContainer from "../src/components/containers/TextWithVideoContainer";
import SEOHeader from "../src/components/MetaData/SEOHeader";
import ScrollspyNav from "react-scrollspy-nav";
import axios from "axios";
import Image from "../src/components/Image/Image";
import homePageImage from "../public/webp/social-media-marketing.8dfe3a17.webp";
import developmentImage from "../public/webp/brand-management.2f1a3d14.webp";
import digitalImage from "../public/webp/seo.854f12df.webp";
import marketingImage from "../public/webp/tmg.e74e1631.webp";
const Services = ({ metaData }) => {
  return (
    <>
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <section>
          <HeroContainer imageSrc={servicesPic.src}>
            <div className="w-full">
              <p className="mb-2 md:mb-6 mt-6 paragraphBlack">
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
                  "web_development",
                  "branding",
                  "digital_marketing",
                  "seo",
                  // "wordpress",
                ]}
                activeNavClass="is-active"
              >
                <div className="flex flex-wrap gap-y-2 sm:gap-y-6 justify-between w-full mt-5">
                  <a
                    href="#digital_marketing"
                    className="w-full sm:w-[50%] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-1"
                    />
                    <span className="gradientHoverBlack">
                      Social Media Marketing
                    </span>
                  </a>
                  <a
                    href="#web_development"
                    className="w-full sm:w-[50%] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-1"
                    />
                    <span className="gradientHoverBlack">
                      Web Development & Design
                    </span>
                  </a>
                  <a
                    href="#seo"
                    className="w-full sm:w-[50%] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-1"
                    />
                    <span className="gradientHoverBlack">
                      Search Engine Optimization
                    </span>
                  </a>
                  <a
                    href="#branding"
                    className="w-full sm:w-[50%] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] inline-block"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink-400 smallText mr-1"
                    />
                    <span className="gradientHoverBlack">
                      Branding & Design
                    </span>
                  </a>
                </div>
              </ScrollspyNav>
              <div className="mt-6 md:mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </HeroContainer>
          <div className="max-w-7xl mx-auto pagePaddingX  py-8 md:py-10">
            <TextWithImageContainer
              id="digital_marketing"
              imageSrc={homePageImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Social Media Marketing</div>
                <p className="mt-2 mb-6 md:mt-8 md:mb-14 paragraphBlack">
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
              imageSrc={marketingImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Web Development & Design</div>
                <p className="mt-2 mb-6 md:mt-8 md:mb-14 paragraphBlack">
                  Through personal and digital mediums, we provide fast and
                  clear communication to keep information flow open.
                </p>
                <div className="">
                  <GradientButton
                    text="Learn More"
                    route="/service/web-design"
                  />
                </div>
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="seo"
              imageSrc={digitalImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Search Engine Optimization</div>
                <p className="mt-2 mb-6 md:mt-8 md:mb-14 paragraphBlack">
                  Through personal and digital mediums, we provide fast and
                  clear communication to keep information flow open.
                </p>
                <GradientButton text="Learn More" route="/service/seo" />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="branding"
              imageSrc={developmentImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Branding & Design</div>
                <p className="mt-2 mb-6 md:mt-8 md:mb-14 paragraphBlack">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton
                  text="Learn More"
                  route="/service/brand-management"
                />
              </div>
            </TextWithImageContainer>
          </div>
          <div className="mt-6 md:mt-10">
            <Footer />
          </div>
        </section>
      </PageWrapper>
    </>
  );
};
export default Services;
export async function getServerSideProps(context) {
  const DoNotChange = "Services";
  try {
    const res = await axios.get(
      `https://portal.themediagale.com/api/static-pages-metas?filters[DoNotChange][$eq]=${DoNotChange}&populate=*`,
      { timeout: 8000 }
    );
    const metaData =
      res.data.data && res.data.data?.length > 0
        ? res.data.data[0]?.attributes?.metaData
        : {};
    return { props: { metaData: metaData } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { metaData: {} } };
  }
}
