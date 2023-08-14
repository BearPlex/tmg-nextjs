/* eslint-disable */
import React, { useEffect, useState } from "react";
import kotaLogo from "../../src/assets/images/Blog-pic.png";
import brand1 from "../../src/assets/images/brand-img.png";
import brand2 from "../../src/assets/images/brand-img2.png";
import book from "../../src/assets/images/brand1-brand.png";
import mobile3 from "../../src/assets/images/brand2-brand.png";
import mobile2 from "../../src/assets/images/brand3-brand.png";
import tmg from "../../src/assets/images/TMG-pic.png";
import hand from "../../src/assets/images/hand.png";
import Header from "../../src/components/header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import GradientButton from "../../src/components/button/GradientButton";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import TextWithImageContainer from "../../src/components/containers/TextWithImageContainer";
import TextWithVideoContainer from "../../src/components/containers/TextWithVideoContainer";
import ExpertiseSmall from "../../src/components/expertise/ExpertiseSmall";
function Seo() {
  const [work, setWork] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://tmg-strapi-w6pu3.ondigitalocean.app/api/work-kinimos?populate=*"
      )
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
    <>
      <PageWrapper>
        <setcion className="w-full">
          <TextWithVideoContainer>
            <div className="w-full">
              <h4 className="mb-2 md:mb-6 heading blackDescriptionText">
                <span className="gradientText">Brand Identity</span> And
                Creative Management Services
              </h4>
              <p className="paragraph blackDescriptionText mb-6">
                TMG combines strategic directions with creative designs to
                ensure{" "}
                <span className="gradientText">unique brand identity.</span>{" "}
              </p>
              <GradientButton
                text="Book Free Consultation Today"
                route="/contact"
              />
            </div>
          </TextWithVideoContainer>
          <section>
            <div className="bgWhite py-6 md:py-20 w-full">
              <div className="pagePaddingX w-full 3xl:max-w-7xl 3xl:mx-auto">
                <div className="w-full py-4 sm:py-10 flex flex-col items-center md:flex-row componentsMainGap md:py-10">
                  <div className="mt-1 md:mt-5 lg:mt-16 sm:mt-24 lg:flex-shrink-0 w-full md:w-1/2 lg:flex-grow">
                    <h1 className="blackDescriptionText largeHeading">
                      Specialized branding services that
                      <span className="gradientText"> creates trust</span>{" "}
                    </h1>
                  </div>
                  <div className="lg:flex-auto w-full md:w-1/2">
                    <p className="mt-0 md:mt-2 lg:mt-6 paragraph  blackDescriptionText">
                      Every brand must have a distinctive design, coherence and
                      a story that keeps the audience engaged. 
                      <br />
                      From brand positioning, logo design, design collaterals,
                      and packaging, we collaborate closely with your team to
                      ensure your branding embraces the essence of your
                      business.
                      <br />
                      Our branding packages include{" "}
                      <span className="gradientText">
                        {" "}
                        Brand Image Creation, Social Presence and Tone of Voice{" "}
                      </span>
                      each delivering an expert-led service that starts with
                      discovery and ends with the fundamental elements your
                      business needs to become unmissable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="background-gradient py-10 sm:py-28 md:py-40">
              <div className="pagePaddingX 3xl:max-w-7xl 3xl:mx-auto">
                <dl className="flex flex-col lg:flex-row componentsMainGap">
                  <div className="mx-auto items-center">
                    <dd className="relative  extraLargeHeadingWhite">
                      What makes us sooo good at it?
                    </dd>
                  </div>
                  <div className="flex flex-col md:flex-row componentsMainGap">
                    <div>
                      <dt className="largeHeadingWhite">Experience</dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite  ">
                        We’ve worked with brands from a huge range of industries
                        to showcase their differences through strategic design
                        that positions them perfectly. 
                      </dd>

                      <dt className=" largeHeadingWhite xl:mt-10">Strategy</dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        With our certified team, we ensure to create effective
                        cost saving strategies that help campaigns perform well
                        so you can focus more on counting sales.
                      </dd>
                    </div>
                    <div>
                      <dt className="largeHeadingWhite ">Creativity</dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        Guided by your vision and values, our branding services
                        will bring your business to life with artistic flair and
                        attention to detail, to create a brand that is unique
                        and memorable.
                      </dd>
                      <dt className="largeHeadingWhite  xl:mt-4">
                        Sustainability
                      </dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        We ensure that the image that has been forged to the
                        consumer mind stays on top with consistent artistic
                        content to increase engagement and recall value.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section>
            <div className="bgBlack w-full">
              <TextWithImageContainer
                imageSrc={book.src}
                imageAlt="book"
                blackContainer={true}
                imageRight={true}
              >
                <div>
                  <h1 className="mt-4 md:mt-10 heading whiteHeadingText">
                    Brand Image
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    Building a brand image is one of the most important aspects
                    of any business. It is what sets your company apart from the
                    competition and helps you build a loyal customer base.
                    <br />
                    Your brand image should be consistent and should stand out
                    across all channels - from your website to your social media
                    accounts and your physical collateral. 
                  </p>
                  <div className="flex items-center gap-x-6 mt-5 md:mt-8">
                    <GradientButton
                      bgBlack={true}
                      text="Learn More"
                      route="/service/web-design"
                    />
                  </div>
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={mobile3.src}
                imageAlt="mobile3"
                blackContainer={true}
                imageRight={false}
              >
                <div>
                  <h1 className="mt-4 md:mt-10 heading whiteHeadingText">
                    Social Presence
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    The internet has massively impacted the way businesses
                    operate and reach their customer base. To build a strong
                    social presence, businesses need to have an effective brand
                    strategy that helps them dig their feet further into the
                    existing industry and stick around for longer. 
                    <br />
                    We create customized branding solutions  which are designed
                    to help businesses reach their target audience and achieve
                    their desired results.  
                  </p>
                  <div className="flex items-center gap-x-6 mt-5 md:mt-8">
                    <GradientButton
                      text="Learn More"
                      route="/service/seo"
                      bgBlack={true}
                    />
                  </div>
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={mobile2.src}
                imageAlt="mobile2"
                blackContainer={true}
                imageRight={true}
              >
                <div>
                  <h1 className="mt-4 md:mt-10 max-w-lg heading whiteHeadingText">
                    Tone of Voice{" "}
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    A unique tone of voice helps brands build trust and become
                    memorable in the minds of their audience. We’ll collaborate
                    with your team to devise a tone that resonates with your
                    customers and inspires them to action.
                  </p>
                  <div className="flex items-center gap-x-6 mt-5 md:mt-8">
                    <GradientButton
                      text="Learn More"
                      route="/studio"
                      bgBlack={true}
                    />
                  </div>
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={tmg.src}
                imageAlt="tmg"
                blackContainer={true}
                imageRight={false}
              >
                <div>
                  <h1 className="mt-4 md:mt-10 max-w-lg heading whiteHeadingText">
                    What Else?
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    As your dedicated SEO agency, we go a step further than just
                    make your website perform well. We strategize with reasoning
                    and depend on the market research so we can showcase the
                    results to you, that would help your business get authentic
                    traffic without spending another dime on it. 
                  </p>
                  <div className="flex items-center gap-x-6 mt-5 md:mt-8 mb-10 md:mb-16">
                    <GradientButton
                      text="Learn More"
                      route="/"
                      bgBlack={true}
                    />
                  </div>
                </div>
              </TextWithImageContainer>
            </div>
          </section>
          <section className="pagePaddingX w-full 3xl:max-w-7xl 3xl:mx-auto">
            <Tabs className="tabs-wrapper">
              {work.map((item, index) => (
                <TabPanel key={index + 400}>
                  <ExpertiseSmall
                    backGroundBlack={false}
                    list={work}
                    cssClass="blackHeading"
                  />
                </TabPanel>
              ))}
            </Tabs>
          </section>
          <section className="background-gradient pb-10 md:pb-0">
            <div className="w-full 3xl:max-w-7xl 3xl:mx-auto">
              <div className="flex flex-col md:flex-row items-center 3xl:px-0 3xl:pl-0 ">
                <div className="w-full md:w-1/2">
                  <Image
                    width={500}
                    height={300}
                    src={hand.src}
                    alt="hand"
                    className="w-[658px] h-[836px] drop-shadow-xl"
                  />
                </div>
                <div className="pagePaddingX w-full md:w-1/2  ">
                  <h1 className="mt-5 md:mt-10 largeHeading whiteHeadingText">
                    Dedicated Resource Allocation
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteHeadingText">
                    At TMG, we understand that your brand is much more than just
                    a logo or a name. It is the overall look and feel that a
                    customer experiences - from your website and marketing
                    materials to the way you interact with your customers.
                    That's why we offer dedicated resources based on needs that
                    fit your job requirement.
                    <br />
                    From Website Developers, Content Creators and Managers to
                    SEO Experts - we make sure that your daily work requirement
                    is fulfilled remotely.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-0">
            <Footer />
          </div>
        </setcion>
      </PageWrapper>
    </>
  );
}

export default Seo;
