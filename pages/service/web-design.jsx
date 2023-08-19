/* eslint-disable */
import React, { useEffect, useState } from "react";
import kotaLogo from "../../src/assets/images/Blog-pic.png";
import brand1 from "../../src/assets/images/web1.png";
import brand2 from "../../src/assets/images/web2.png";
import book from "../../src/assets/images/design1.png";
import mobile3 from "../../src/assets/images/design2.png";
import mobile2 from "../../src/assets/images/design3.png";
import tmg from "../../src/assets/images/TMG-pic.png";
import hand from "../../src/assets/images/hand.png";
import Header from "../../src/components/header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ExpertiseSmall from "../../src/components/expertise/ExpertiseSmall";
import axios from "axios";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import GradientButton from "../../src/components/button/GradientButton";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import TextWithImageContainer from "../../src/components/containers/TextWithImageContainer";
import TextWithVideoContainer from "../../src/components/containers/TextWithVideoContainer";
import staffAugmentationImage from "../../src/assets/images/staff-augmentation.png";

function WebDesign() {
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
        <section className="w-full">
          <TextWithVideoContainer>
            <div className="w-full">
              <h4 className="mb-2 md:mb-6 headingBlack">
                Highly <span className="gradientText "> Optimized </span>
                Converting Websites 
              </h4>
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
            <div className="bgWhite py-10 md:py-20 w-full">
              <div className="pagePaddingX w-full max-w-7xl mx-auto">
                <div className="w-full py-4 sm:py-10 flex flex-col items-center md:flex-row componentsMainGap md:py-10">
                  <div className="mt-0 md:mt-10  lg:flex-shrink-0 w-full md:w-1/2 lg:flex-grow">
                    <h1 className="largeHeadingBlack">
                      Modern designs that
                      <span className="gradientText">
                        {" "}
                        Creates Identity
                      </span>{" "}
                    </h1>
                  </div>
                  <div className="lg:flex-auto w-full md:w-1/2">
                    <p className="mt-0 md:mt-2 lg:mt-6 paragraph  blackDescriptionText">
                      A well-designed website will have a lasting impression on
                      visitors, and can even increase conversion rates.<br></br>
                      <br></br>
                      <span className="mt-1 nextLineSpan" />
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
                    <dd className="relative  extraLargeHeadingWhite">
                      What makes us sooo good at it?
                    </dd>
                  </div>
                  <div className="flex flex-col md:flex-row componentsMainGap">
                    <div>
                      <dt className="largeHeadingWhite">Development</dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite  ">
                        User-centric designs, practical and result-oriented
                        marketing tools, and in-house built features are among
                        our exponential services we provide.
                      </dd>

                      <dt className=" largeHeadingWhite xl:mt-10">
                        Maintenance
                      </dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        We ensure to keep your backend updated after the
                        completion of the project and provide instantaneous
                        online support whenever you or your business requires.
                      </dd>
                    </div>
                    <div>
                      <dt className="largeHeadingWhite ">Technology</dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        We are extremely versed in technology upgrades. By
                        utilizing the latest tools and following best practices,
                        we deliver high-quality results.
                      </dd>
                      <dt className="largeHeadingWhite  xl:mt-4">
                        Functionality
                      </dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        A visually appealing and high functional website with
                        regular updates can help your business grab the
                        attention of visitors globally. We are open to provide
                        custom functionality based solutions as per the need.
                      </dd>
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
                  <h1 className="mt-6 md:mt-10 heading whiteHeadingText">
                    Ecommerce Websites
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
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
                  <h1 className="mt-6 md:mt-10 heading whiteHeadingText">
                    Software As A Service
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
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
                  <h1 className="mt-6 md:mt-10 heading whiteHeadingText">
                    Business Websites{" "}
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
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
                  <h1 className="mt-6 md:mt-10 heading whiteHeadingText">
                    What else?
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
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

          <section className="background-gradient py-28">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center mx-auto">
                <div className="w-full md:w-1/2">
                  <Image
                    width={500}
                    height={300}
                    src={staffAugmentationImage.src}
                    alt="Staff Augmentation - The MediaGale"
                    className=" h-auto object-contain image-animation"
                  />
                </div>
                <div className="pagePaddingX mt-12 sm:mt-0 w-full md:w-1/2">
                  <h1 className="mt-5 md:mt-10 heading whiteHeadingText">
                    Dedicated Resource Allocation
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteHeadingText">
                    At TMG, we understand that your brand is much more than just
                    a logo or a name. It is the overall look and feel that a
                    customer experiences - from your website and marketing
                    materials to the way you interact with your customers.
                    That's why we offer dedicated resources based on needs that
                    fit your job requirement.<br></br>
                    <br></br>
                    <span className="mt-1 nextLineSpan" />
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
        </section>
      </PageWrapper>
    </>
  );
}

export default WebDesign;
