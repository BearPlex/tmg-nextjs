/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "../../src/components/header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import Footer from "../../src/components/footer/Footer";
import GradientButton from "../../src/components/button/GradientButton";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import TextWithImageContainer from "../../src/components/containers/TextWithImageContainer";
import TextWithVideoContainer from "../../src/components/containers/TextWithVideoContainer";
import ExpertiseSmall from "../../src/components/expertise/ExpertiseSmall";
import SEOHeader from "../../src/components/MetaData/SEOHeader";
import Image from "../../src/components/Image/Image";

import staffAugmentationImage from "../../public/webp/staff-augmentation.5366d6f6.webp";
import book from "../../public/webp/brand1-brand.3461a625.webp";
import mobile3 from "../../public/webp/brand2-brand.21e3546a.webp";
import mobile2 from "../../public/webp/brand3-brand.93ca46d9.webp";
import tmg from "../../public/webp/tmg.e74e1631.webp";

import "react-tabs/style/react-tabs.css";

function Seo({ metaData }) {
  const [work, setWork] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://portal.themediagale.com/api/work-kinimos?populate=*&pagination[pageSize]=1000"
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
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <setcion className="w-full">
          <TextWithVideoContainer>
            <div className="w-full">
              <h1 className="mb-2 md:mb-6 headingBlack">
                Top{" "}
                <span className="gradientText">
                  Graphic Design and Management Agency
                </span>
              </h1>
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
            <div className="bgWhite mt-10 py-10 md:py-20 w-full">
              <div className="pagePaddingX w-full max-w-7xl mx-auto">
                <div className="w-full py-4 sm:py-10 flex flex-col items-center md:flex-row componentsMainGap md:py-10">
                  <div className="lg:flex-shrink-0 w-full md:w-1/2 lg:flex-grow justify-between">
                    <h2 className="headingBlack">
                      Specialized branding services that
                      <span className="gradientText"> Creates Trust</span>{" "}
                    </h2>
                  </div>
                  <div className="lg:flex-auto w-full md:w-1/2">
                    <p className="mt-2 lg:mt-6 paragraph  blackDescriptionText">
                      Every brand must have a distinctive design, coherence and
                      a story that keeps the audience engaged. <br></br>
                      <br></br>
                      From brand positioning, logo design, design collaterals,
                      and packaging, we collaborate closely with your team to
                      ensure your branding embraces the essence of your
                      business.<br></br>
                      <br></br>
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
            <div className="background-gradient-new py-10 md:py-20">
              <div className="pagePaddingX max-w-7xl mx-auto">
                <dl className="flex flex-col lg:flex-row componentsMainGap">
                  <div className="mx-auto items-center">
                    <dd className="relative headingWhite">
                      What makes us sooo good at it?
                    </dd>
                  </div>
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:gap-14 md:gap-10 sm-:gap-0">
                    <div>
                      <div className="headingWhite">Experience</div>
                      <div className="mt-2 lg:mt-6  paragraphWhite">
                        We’ve worked with brands from a huge range of industries
                        to showcase their differences through strategic design
                        that positions them perfectly. 
                      </div>
                    </div>

                    <div>
                      <div className="headingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Creativity
                      </div>
                      <div className="mt-2 lg:mt-6 paragraphWhite ">
                        Guided by your vision and values, our branding services
                        will bring your business to life with artistic flair and
                        attention to detail, to create a brand that is unique
                        and memorable.
                      </div>
                    </div>
                    <div>
                      <div className=" headingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Strategy
                      </div>
                      <div className="mt-2 lg:mt-6 paragraphWhite ">
                        With our certified team, we ensure to create effective
                        cost saving strategies that help campaigns perform well
                        so you can focus more on counting sales.
                      </div>
                    </div>
                    <div>
                      <div className="headingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Sustainability
                      </div>
                      <div className="mt-2 lg:mt-6 paragraphWhite ">
                        We ensure that the image that has been forged to the
                        consumer mind stays on top with consistent artistic
                        content to increase engagement and recall value.
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section>
            <div className="bgBlack w-full py-8 md:py-10">
              <TextWithImageContainer
                imageSrc={book.src}
                imageAlt="book"
                blackContainer={true}
                imageRight={true}
              >
                <div>
                  <h2 className="mt-6 md:mt-10 heading whiteHeadingText">
                    Brand Image
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    Building a brand image is one of the most important aspects
                    of any business. It is what sets your company apart from the
                    competition and helps you build a loyal customer base.
                    <br />
                    <br />
                    Your brand image should be consistent and should stand out
                    across all channels - from your website to your social media
                    accounts and your physical collateral. 
                  </p>
                  {/* <div className="flex items-center gap-x-6 mt-5 md:mt-8">
                    <GradientButton
                      bgBlack={true}
                      text="Learn More"
                      route="/service/web-design"
                    />
                  </div> */}
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={mobile3.src}
                imageAlt="mobile3"
                blackContainer={true}
                imageRight={false}
              >
                <div>
                  <h2 className="mt-6 md:mt-10 heading whiteHeadingText">
                    Social Presence
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    The internet has massively impacted the way businesses
                    operate and reach their customer base. To build a strong
                    social presence, businesses need to have an effective brand
                    strategy that helps them dig their feet further into the
                    existing industry and stick around for longer. 
                    <br />
                    <br />
                    We create customized branding solutions  which are designed
                    to help businesses reach their target audience and achieve
                    their desired results.  
                  </p>
                  {/* <div className="flex items-center gap-x-6 mt-5 md:mt-8">
                    <GradientButton
                      text="Learn More"
                      route="/service/seo"
                      bgBlack={true}
                    />
                  </div> */}
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={mobile2.src}
                imageAlt="mobile2"
                blackContainer={true}
                imageRight={true}
              >
                <div>
                  <h2 className="mt-6 md:mt-10 max-w-lg heading whiteHeadingText">
                    Tone of Voice{" "}
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    A unique tone of voice helps brands build trust and become
                    memorable in the minds of their audience. We’ll collaborate
                    with your team to devise a tone that resonates with your
                    customers and inspires them to action.
                  </p>
                  {/* <div className="flex items-center gap-x-6 mt-5 md:mt-8">
                    <GradientButton
                      text="Learn More"
                      route="/agency"
                      bgBlack={true}
                    />
                  </div> */}
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={tmg.src}
                imageAlt="tmg"
                blackContainer={true}
                imageRight={false}
              >
                <div>
                  <h2 className="mt-6 md:mt-10 max-w-lg heading whiteHeadingText">
                    What Else?
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    As your dedicated SEO agency, we go a step further than just
                    make your website perform well. We strategize with reasoning
                    and depend on the market research so we can showcase the
                    results to you, that would help your business get authentic
                    traffic without spending another dime on it. 
                  </p>
                  {/* <div className="flex items-center gap-x-6 mt-5 md:mt-8 mb-10 md:mb-16">
                    <GradientButton
                      text="Learn More"
                      route="/"
                      bgBlack={true}
                    />
                  </div> */}
                </div>
              </TextWithImageContainer>
            </div>
          </section>
          <section className="pagePaddingX w-full max-w-7xl mx-auto">
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
          <section className="background-gradient-new py-8 md:py-20">
            <div className="max-w-7xl mx-auto">
              <TextWithImageContainer
                imageSrc={staffAugmentationImage.src}
                imageAlt="Staff Augmentation - The MediaGale"
                blackContainer={true}
                width={500}
                height={300}
                imageRight={false}
              >
                <div className="">
                  <h2 className="mt-5 md:mt-10 heading whiteHeadingText">
                    Dedicated Resource Allocation
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteHeadingText">
                    At TMG, we understand that your brand is much more than just
                    a logo or a name. It is the overall look and feel that a
                    customer experiences - from your website and marketing
                    materials to the way you interact with your customers.
                    That's why we offer dedicated resources based on needs that
                    fit your job requirement.<br></br>
                    <br></br>
                    From Website Developers, Content Creators and Managers to
                    SEO Experts - we make sure that your daily work requirement
                    is fulfilled remotely.
                  </p>
                </div>
              </TextWithImageContainer>
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
export async function getServerSideProps(context) {
  const DoNotChange = "BrandManagement";
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
