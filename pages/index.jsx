/* eslint-disable */

import Header from "../src/components/header/Header";
import danLogo from "../src/assets/images/dan_grey@2x.png";
import drumLogo from "../src/assets/images/the-drum-logo.png";
import kotaLogo from "../src/assets/images/tmg-logo.png";
import clutchLogo from "../src/assets/images/Clutch_grey@2x.png";
import awardLogo from "../src/assets/images/awward_grey@2x.png";
import cssDesignLogo from "../src/assets/images/css-design-awards.png";
import Services from "../src/components/services/Services";
import Clients from "../src/components/clients/Clients";
import Articles from "../src/components/articles/Articles";
import Footer from "../src/components/footer/Footer";
import Expertise from "../src/components/expertise/Expertise";
import Agency from "../src/components/agency/Agency";
import { work } from "../src/helpers/Helpers";
import React, { useEffect, useState } from "react";
import axios from "axios";
import hero from "../src/assets/images/hero-1.png";
import workFeaturedImage from "../src/assets/images/work-featured-1.png";
import workGallery1 from "../src/assets/images/work-gall-1.png";
import workGallery2 from "../src/assets/images/work-gall-2.png";
import ExpertiseStatic from "../src/components/expertise/ExpertiseStatic";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import Image from "../src/components/Image/Image";
import HeroContainer from "../src/components/containers/HeroContainer";
import GradientButton from "../src/components/button/GradientButton";

// import "swiper/css/bundle";
// import "./styles.css";
// const workStatic = [
//   {
//     featured_image: workFeaturedImage,
//     featured_title: "KINIMO COSMETICS",
//     gallery_first_title: "The Brief",
//     gallery_first_description:
//       "Meet Kinimo Cosmetics: A Pakistani beauty brand founded in 2019, that focuses on the new age definition of beauty, offering high-quality natural products that inspire confidence and passion in everyone.They reached out to us for content creation, and website development along with SEO and since then our connection has been fruitful.",
//     gallery1: workGallery1,
//     gallery_second_title: "",
//     gallery_second_description: "",
//     gallery2: workGallery2,
//   },
// ];
export default function Home() {
  const [work, setWork] = useState([]);
  console.log("Work", work);
  useEffect(() => {
    axios
      .get(
        "https://tmg-strapi-w6pu3.ondigitalocean.app/api/work-kinimos?populate=*"
      )
      .then((res) => {
        console.log("Res", res.data.data);
        const sortedWork = [...res.data.data].sort((a, b) => {
          const dateA = new Date(a.attributes.publishedAt);
          const dateB = new Date(b.attributes.publishedAt);
          return dateA - dateB;
        });

        // Update the state with the sorted array
        setWork(sortedWork);

        // setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <React.Fragment>
      <PageWrapper>
        <div>
          <HeroContainer imageSrc={kotaLogo} landingPage={true}>
            <div className="w-full">
              <h1 className="heading  blackHeading">
                Transforming Businesses into
                <span className="gradientText heading"> Brands</span>{" "}
              </h1>
              <p className="paragraph blackDescriptionText ">
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

          <section className="w-full bgWhite overflow-x-hidden">
            <div className="flex flex-col md:flex-row componentsMainGap pagePaddingX pt-0 md:pt-10 sm:pb-32 lg:py-40 3xl:max-w-7xl 3xl:mx-auto">
              <div className="w-full md:w-1/2 md:h-[500px] flex flex-col justify-center">
                <h1 className="heading  blackHeading">
                  Providing Exponential
                  <span className="gradientText heading"> User Experience</span>
                </h1>
                <p className="mt-0 md:mt-2 lg:mt-6 paragraph blackDescriptionText">
                  Let’s face it, first impressions matter. Why waste and settle
                  for something less?
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
                    className="w-full h-full ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="py-9 pt-12 md:py-20 md:pt-16">
            <div className="w-full flex items-center justify-center pb-7 md:pb-16">
              <h2 className="md:w-4/5 w-full text-center heading  blackHeading">
                Our team bootstraps the growth of your business using these{" "}
                <span className="gradientText">4 Elements</span>
              </h2>
            </div>
            <Agency />
          </div>
          <Services />

          <section className="bgBlack h-auto  ">
            <div className="pagePaddingX pb-12 pt-14 md:pb-28 md:pt-36 3xl:max-w-7xl 3xl:mx-auto 3xl:px-0 3xl:pl-0">
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
                <GradientButton text="View more" route="/blog" bgBlack={true} />

                {/* <ExpertiseStatic list={workStatic} cssClass="text-white" /> */}
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
