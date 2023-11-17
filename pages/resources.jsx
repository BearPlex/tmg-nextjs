import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/resources-hero.png";
import Link from "next/link";
import homePageImage from "../src/assets/images/seo-resource.png";
import developmentImage from "../src/assets/images/ppc-resource.png";
import digitalImage from "../src/assets/images/design-resource.png";
import marketingImage from "../src/assets/images/content-resource.png";
import eCommerceImage from "../src/assets/images/e-commerce.png";
import wordPressImage from "../src/assets/images/wordpress-4.png";
import Footer from "../src/components/footer/Footer";
import SEOHeader from "../src/components/MetaData/SEOHeader";
import axios from "axios";
import Image from "../src/components/Image/Image";
import GradientButton from "../src/components/button/GradientButton";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import HeroContainer from "../src/components/containers/HeroContainer";
import TextWithImageContainer from "../src/components/containers/TextWithImageContainer";
const Resources = ({ metaData }) => {
  return (
    <>
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <section>
          <HeroContainer imageSrc={kotaLogo.src}>
            <div className="w-full">
              <h1 className="mb-2 md:mb-6  mt-10 headingBlack">
                Resource Outsourcing{" "}
                <span className="gradientText">Services</span>
              </h1>
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
              <div className="mt-6 md:mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </HeroContainer>

          <div className="pagePaddingX pt-8 md:pt-10 max-w-7xl mx-auto">
            <TextWithImageContainer
              id="web_design"
              imageSrc={homePageImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">SEO Resource</div>
                <p className="mt-2 mb-6 md:mt-8 md:mb-14 paragraphBlack">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Get a Quote" route="/contact" />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="web_development"
              imageSrc={developmentImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">PPC Resource</div>
                <p className="mt-2 mb-6 md:mt-8 md:mb-14 text-style">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Get a Quote" route="/contact" />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="branding"
              imageSrc={digitalImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Design Resource</div>
                <p className="mt-2 mb-6 md:mt-8 md:mb-14 paragraphBlack">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <GradientButton text="Get a Quote" route="/contact" />
              </div>
            </TextWithImageContainer>
            <TextWithImageContainer
              id="digital_marketing"
              imageSrc={marketingImage.src}
              imageAlt="services images"
            >
              <div>
                <div className="headingBlack">Content Resource</div>
                <p className="mt-2 mb-6 md:mt-8 md:mb-14 text-style">
                  Analyzing the market and consumer data helps us provide
                  customized solutions to everyday business challenges.
                </p>
                <div className="mb-10">
                  <GradientButton text="Get a Quote" route="/contact" />
                </div>
              </div>
            </TextWithImageContainer>
          </div>
        </section>
        <div className="mt-6 md:mt-10">
          <Footer />
        </div>
      </PageWrapper>
    </>
  );
};
export default Resources;
export async function getServerSideProps(context) {
  const DoNotChange = "Resources";
  try {
    const res = await axios.get(
      `https://portal.themediagale.com/api/static-pages-metas?filters[DoNotChange][$eq]=${DoNotChange}&populate=*`
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
