import Header from "../src/components/header/Header";
import danLogo from "../src/assets/images/dan_grey@2x.png";
import drumLogo from "../src/assets/images/the-drum-logo.png";
import kotaLogo from "../public/webp/tmg-logo.82b8a7c1.webp";
import clutchLogo from "../src/assets/images/Clutch_grey@2x.png";
import awardLogo from "../src/assets/images/awward_grey@2x.png";
import cssDesignLogo from "../src/assets/images/css-design-awards.png";
import Services from "../src/components/services/Services";
import Clients from "../src/components/clients/Clients";
import Articles from "../src/components/articles/Articles";
import Footer from "../src/components/footer/Footer";
import Expertise from "../src/components/expertise/Expertise";
import ScrollingImage from "../src/components/ScrollingImage/ScrollingImage";
import { work } from "../src/helpers/Helpers";
import React, { useEffect, useState } from "react";
import axios from "axios";
import hero from "../public/webp/hero-1.a07c081b.webp";
import workFeaturedImage from "../src/assets/images/work-featured-1.png";
import workGallery1 from "../src/assets/images/work-gall-1.png";
import workGallery2 from "../src/assets/images/work-gall-2.png";
import ExpertiseStatic from "../src/components/expertise/ExpertiseStatic";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import SEOHeader from "../src/components/MetaData/SEOHeader";
import Image from "../src/components/Image/Image";
import HeroContainer from "../src/components/containers/HeroContainer";
import GradientButton from "../src/components/button/GradientButton";

export default function Home({ metaData }) {
  const [work, setWork] = useState([]);
  useEffect(() => {
    axios
      .get("https://portal.themediagale.com/api/work-kinimos?populate=*")
      .then((res) => {
        const sortedWork = [...res.data.data].sort((a, b) => {
          const dateA = new Date(a.attributes.publishedAt);
          const dateB = new Date(b.attributes.publishedAt);
          return dateA - dateB;
        });

        setWork(sortedWork);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <React.Fragment>
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <div>
          <HeroContainer imageSrc={kotaLogo} landingPage={true}>
            <div className="w-full">
              <h1 className="heading blackHeading md:text-7xl">
                Full Service
                <span className="gradientText heading md:text-7xl">
                  {" "}
                  Digital Marketing Agency
                </span>{" "}
              </h1>
              <p className="paragraph blackDescriptionText mt-2 lg:mt-6">
                We offer 360-degree marketing solutions such as PPC
                Advertisement, Search Engine Optimization and Web Development
                Services. Our team is technically and professionally equipped to
                make every{" "}
                <span className="gradientText paragraph">
                  brand a success story.
                </span>
              </p>
            </div>
          </HeroContainer>

          <section className="w-full bgWhite overflow-x-hidden max-w-7xl mx-auto ">
            <div className="flex flex-col md:flex-row componentsMainGap pagePaddingX pt-0 md:pt-10 sm:pb-32 lg:py-40 ">
              <div className="w-full md:w-1/2 md:h-[500px] flex flex-col justify-center">
                <h2 className="heading  blackHeading mt-10 md:mt-0">
                  Providing Exponential
                  <span className="gradientText heading"> User Experience</span>
                </h2>
                <p className="mt-2 lg:mt-6 paragraph blackDescriptionText y">
                  Let’s face it, first impressions matter. Why waste and settle
                  for something less?
                  <br />
                  <br />
                  With user-centric designs, result oriented designing tools,
                  and in-house built features, we help increase sales and add
                  value to your Business and e-Commerce ventures.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:relative ">
                <div className="md:absolute inset-[-7vw] left-0 flex items-center justify-center">
                  <Image
                    width={1000}
                    height={400}
                    src={hero.src}
                    alt="App screenshot"
                    className="w-full h-full ring-1 ring-gray-900/10 object-cover image-animation rounded-xl sm:rounded-none"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="py-9 pt-12 md:py-0 md:pt-16 max-w-7xl mx-auto">
            <div className="w-full flex items-center justify-center pb-7 md:pb-16 pagePaddingX">
              <h2 className="w-full text-center largeHeading  blackHeading">
                Our team bootstraps the growth of your business using these{" "}
                <span className="gradientText">4 Elements</span>
              </h2>
            </div>
            <ScrollingImage />
          </div>
          <Services />

          <section className="bgBlack h-auto  ">
            <div className="pagePaddingX pb-10 pt-14 md:pb-28 md:pt-36 max-w-7xl mx-auto">
              <div className="isolate componentsMainGap grid grid-cols-1 auto-rows-auto">
                {work && work.length && (
                  <Expertise
                    backGroundBlack={true}
                    list={work}
                    cssClass="text-white"
                  />
                )}
              </div>
              <div className="flex w-full items-center mt-5 justify-center">
                <GradientButton text="View more" route="/work" bgBlack={true} />
              </div>
            </div>
          </section>
          <Clients />
          <Articles />
          <Footer />
        </div>
      </PageWrapper>
    </React.Fragment>
  );
}
export async function getServerSideProps(context) {
  const DoNotChange = "Home";
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
