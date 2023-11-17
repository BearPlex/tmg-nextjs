/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "../../src/components/header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ExpertiseSmall from "../../src/components/expertise/ExpertiseSmall";
import axios from "axios";
import Footer from "../../src/components/footer/Footer";
import GradientButton from "../../src/components/button/GradientButton";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import TextWithImageContainer from "../../src/components/containers/TextWithImageContainer";
import TextWithVideoContainer from "../../src/components/containers/TextWithVideoContainer";
import SEOHeader from "../../src/components/MetaData/SEOHeader";
import Image from "../../src/components/Image/Image";
import staffAugmentationImage from "../../public/webp/staff-augmentation.5366d6f6.webp";
import book from "../../public/webp/design1.7396c58e.webp";
import mobile3 from "../../public/webp/design2.e2144eed.webp";
import mobile2 from "../../public/webp/design3.977aed45.webp";
import tmg from "../../public/webp/tmg.e74e1631.webp";

import "react-tabs/style/react-tabs.css";

function WebDesign({ metaData }) {
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
    <>
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <section className="w-full">
          <TextWithVideoContainer>
            <div className="w-full">
              <h1 className="mb-2 md:mb-6 headingBlack">
                Top Rated{" "}
                <span className="gradientText ">
                  Website Development Company
                </span>
              </h1>
              <p className="paragraph blackDescriptionText mb-6 md:mb-8">
                We have been helping our partners in creating responsive and
                eye-catching websites that leave every viewer in awe of their
                scale and seamlessness. Our team of certified developers with
                years of experience in multiple niches know what would stand out
                at the end of the day. 
              </p>
              <GradientButton
                text="Book free Consultation Today "
                route="/contact"
              />
            </div>
          </TextWithVideoContainer>

          <section>
            <div className="bgWhite mt-10 py-10 md:py-20 w-full">
              <div className="pagePaddingX w-full max-w-7xl mx-auto">
                <div className="w-full py-4 sm:py-10 flex flex-col items-center md:flex-row componentsMainGap md:py-10">
                  <div className="lg:flex-shrink-0 w-full md:w-1/2 lg:flex-grow justify-between">
                    <h2 className="heading blackHeadingText">
                      Modern designs that
                      <span className="gradientText">
                        {" "}
                        Creates Identity
                      </span>{" "}
                    </h2>
                  </div>
                  <div className="lg:flex-auto w-full md:w-1/2">
                    <p className="mt-2 lg:mt-6 paragraph  blackDescriptionText">
                      A well-designed website will have a lasting impression on
                      visitors, and can even increase conversion rates.<br></br>
                      <br></br>
                      Everything from using attractive visuals, to writing
                      compelling content and delivering a top-notch user
                      experience holds its importance. We conduct brainstorming
                      sessions with you to make the most out of our
                      collaboration and provide you with the best result that
                      lands above your expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="background-gradient py-10 md:py-20">
              <div className="pagePaddingX max-w-7xl mx-auto">
                <dl className="flex flex-col lg:flex-row componentsMainGap">
                  <div className="mx-auto items-center">
                    <dd className="relative headingWhite">
                      What makes us sooo good at it?
                    </dd>
                  </div>
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:gap-14 md:gap-10 sm-:gap-0">
                    <div>
                      <div className="headingWhite">Development</div>
                      <div className="mt-2 lg:mt-6  paragraphWhite">
                        User-centric designs, practical and result-oriented
                        marketing tools, and in-house built features are among
                        our exponential services we provide. 
                      </div>
                    </div>

                    <div>
                      <div className="headingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Technology
                      </div>
                      <div className="mt-2 lg:mt-6 paragraphWhite ">
                        We are extremely versed in technology upgrades. By
                        utilizing the latest tools and following best practices,
                        we deliver high-quality results.
                      </div>
                    </div>
                    <div>
                      <div className=" headingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Maintenance
                      </div>
                      <div className="mt-2 lg:mt-6 paragraphWhite ">
                        We ensure to keep your backend updated after the
                        completion of the project and provide instantaneous
                        online support whenever you or your business requires. 
                      </div>
                    </div>
                    <div>
                      <div className="headingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Functionality
                      </div>
                      <div className="mt-2 lg:mt-6 paragraphWhite ">
                        A visually appealing and high functional website with
                        regular updates can help your business grab the
                        attention of visitors globally. We are open to provide
                        custom functionality based solutions as per the need.
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
                    Ecommerce Websites
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    If you're considering developing an e-Commerce website, it
                    is time to let us take the lead and assist you in providing
                    a seamless online shopping experience to your customers. We
                    offer Shopify as a highly converting platform for businesses
                    where you can simply focus on managing the inventory part of
                    business and let us handle the entire "How to" process. 
                  </p>
                  {/* <div className="flex items-center gap-x-6  mt-5 md:mt-8">
                    <GradientButton
                      text="Learn More"
                      route="/"
                      bgBlack={true}
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
                    Software As A Service
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    We offer Software-as-a-Service to clients in order to help
                    them utilize resources more efficiently and make
                    well-informed business decisions. Through better strategic
                    planning and trend forecasting, our SaaS products help
                    businesses grow exponentially and make their debut in
                    untapped markets. We provide accurate guidance and hands-on
                    assistance with the CMS implementation process.
                  </p>
                  {/* <div className="flex items-center gap-x-6  mt-5 md:mt-8">
                    <GradientButton
                      text="Learn More"
                      route="/"
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
                  <h2 className="mt-6 md:mt-10 heading whiteHeadingText">
                    Business Websites{" "}
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    If you're considering developing a business website, it is
                    time to let us take the lead and assist you in providing a
                    seamless browsing experience to your leads. We offer
                    Woo-commerce as a stable hosting CMS platform for businesses
                    where you can simply focus on managing the service part of
                    business and let us handle the entire "How to" process. 
                  </p>
                  {/* <div className="flex items-center gap-x-6 mt-5 md:mt-8 ">
                    <GradientButton
                      text="Learn More"
                      route="/"
                      bgBlack={true}
                    /> 
                  </div>*/}
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={tmg.src}
                imageAlt="tmg"
                blackContainer={true}
                imageRight={false}
              >
                <div>
                  <h2 className="mt-6 md:mt-10 heading whiteHeadingText">
                    What else?
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    As your dedicated SEO agency, we go a step further than just
                    make your website perform well. We strategize with reasoning
                    and depend on the market research so we can showcase the
                    results to you, that would help your business get authentic
                    traffic without spending another dime on it.  
                  </p>
                  {/* <div className="flex items-center gap-x-6  mt-5 md:mt-8 mb-10 md:mb-16">
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
                <TabPanel key={index + 500}>
                  <ExpertiseSmall
                    backGroundBlack={false}
                    list={work}
                    cssClass="blackHeading"
                  />
                </TabPanel>
              ))}
            </Tabs>
          </section>

          <section className="background-gradient py-8 md:py-20">
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
        </section>
      </PageWrapper>
    </>
  );
}

export default WebDesign;
export async function getServerSideProps(context) {
  const DoNotChange = "WebDesign";
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
