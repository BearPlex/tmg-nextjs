/* eslint-disable */
import React, { useEffect, useState } from "react";
import kotaLogo from "../../src/assets/images/Blog-pic.png";
import serviceBottle from "../../src/assets/images/service-bottle.png";
import body from "../../src/assets/images/body-img.png";
import book from "../../src/assets/images/social2-img.png";
import mobile3 from "../../src/assets/images/social1-img.png";
import mobile2 from "../../src/assets/images/mobile1.png";
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
function Socialmediamarketing() {
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
          <TextWithVideoContainer
            cssClass="md:w-[50%]"
            childcssClass="md:w-[50%]"
          >
            <div className="w-full">
              <h4 className="mb-2 md:mb-6  headingBlack">
                Performance Driven{" "}
                <span className="gradientText ">Digital Marketing</span>{" "}
                Services
              </h4>
              <p className="paragraph blackDescriptionText">
                With proven game changing results, our award winning performance
                experts ensure that all the leads turn into a{" "}
                <span className="gradientText ">profitable conversion.</span>{" "}
              </p>
              <div className="mt-6 md:mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </TextWithVideoContainer>
          <section>
            <div className="bgWhite py-10 md:py-20 w-full">
              <div className="pagePaddingX w-full 3xl:max-w-7xl 3xl:mx-auto">
                <div className="w-full py-4 sm:py-10 flex flex-col items-center md:flex-row componentsMainGap md:py-10">
                  <div className="mt-0 md:mt-10  lg:flex-shrink-0 w-full md:w-1/2 lg:flex-grow">
                    <h1 className="largeHeadingBlack">
                      High Performance
                      <span className="gradientText">
                        {" "}
                        Breakthrough{" "}
                        <span className="gradientText">Campaigns</span>
                      </span>{" "}
                    </h1>
                  </div>
                  <div className="lg:flex-auto w-full md:w-1/2">
                    <p className="mt-0 md:mt-2 lg:mt-6 paragraph  blackDescriptionText">
                      Getting noticed and remembered by the right audience is a
                      slow delicate process. It takes multiple testing, creative
                      input and high performing campaign structures to ensure
                      better conversions.
                      <div className="mt-1" />
                      We specialize in performance marketing campaigns using
                      content and audience building strategies that support our
                      campaigns to perform well. With our in-house team of
                      experienced and certified marketers, we ensure that your
                      advertisement is well remembered.
                      <div className="mt-1" />
                      As a direct partnership or white labeled solutions, The
                      MediaGale ensures to enhance visibility, drive deeper
                      engagement and generate better quality conversions from
                      social and search engine platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="background-gradient py-10 md:py-20">
              <div className="pagePaddingX 3xl:max-w-7xl 3xl:mx-auto">
                <dl className="flex flex-col lg:flex-row componentsMainGap">
                  <div className="mx-auto items-center">
                    <dd className="relative  extraLargeHeadingWhite">
                      What makes us sooo good at it?
                    </dd>
                  </div>
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:gap-14 md:gap-10 sm-:gap-0">
                    <div>
                      <div className="largeHeadingWhite">Experience</div>
                      <div className="mt-0 md:mt-2 lg:mt-6 smallTextWhite  ">
                        We’ve worked with brands from a huge range of industries
                        to showcase their differences through strategic design
                        that positions them perfectly. 
                      </div>
                    </div>

                    <div>
                      <div className=" largeHeadingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Strategy
                      </div>
                      <div className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        With our certified team, we ensure to create effective
                        cost saving strategies that help campaigns perform well
                        so you can focus more on counting sales.
                      </div>
                    </div>

                    <div>
                      <div className="largeHeadingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Creativity
                      </div>
                      <div className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        Guided by your vision and values, our branding services
                        will bring your business to life with artistic flair and
                        attention to detail, to create a brand that is unique
                        and memorable.
                      </div>
                    </div>
                    <div>
                      <div className="largeHeadingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Sustainability
                      </div>
                      <div className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
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
                  <h1 className="mt-6 md:mt-10 heading whiteHeadingText ">
                    Creative Campaigns
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    From creating modern design content to animated videos, we
                    create high performing campaigns to create a long lasting
                    impact that truly reflects your brand and resonates with
                    your target market. 
                  </p>
                  {/* <div className="flex items-center gap-x-6 mt-5 md:mt-8">
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
                  <h1 className="mt-6 md:mt-10 max-w-lg heading whiteHeadingText">
                    Emails & Workflows
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    At TMG, our creative and design team work together to
                    deliver email campaigns that are both visually appealing and
                    highly effective. We pay close attention to every detail,
                    from the layout and design to the messaging, call to action
                    and workflow management. 
                  </p>
                  {/* <div className="flex items-center gap-x-6 mt-5 md:mt-8">
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
                  <h1 className="mt-6 md:mt-10 max-w-lg heading whiteHeadingText">
                    Social Media Management
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    We offer a comprehensive suite of social media management
                    services that are designed to help businesses connect with
                    their customers and build a strong online presence. We
                    handle everything from building social media strategy and
                    planning to creating content and community management.  
                  </p>
                  {/* <div className="flex items-center gap-x-6 mt-5 md:mt-8">
                    <GradientButton
                      text="Learn More"
                      route="/"
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
                  <h1 className="mt-6 md:mt-10 max-w-lg heading whiteHeadingText">
                    What Else?
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    As a 360 digital agency, we also specialize in search engine
                    optimization which keeps our clients ahead of the
                    competition. To help you reach a wide organic audience, our
                    SEO experts craft specific needs to optimize your website
                    and rank highest in the Google search results. This leads to
                    increase in traffic - helping your business get more
                    visibility.
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

          <section>
            <Tabs className=" pagePaddingX w-full 3xl:max-w-7xl 3xl:mx-auto tabs-wrapper">
              {work.map((item, index) => (
                <TabPanel key={index + 600}>
                  {" "}
                  <ExpertiseSmall
                    backgroundBlack={false}
                    list={work}
                    cssClass="blackHeading"
                  />
                </TabPanel>
              ))}
            </Tabs>
          </section>

          <section className="background-gradient pb-10 md:pb-0">
            <div className="w-full">
              <div className="flex flex-col md:flex-row items-center 3xl:px-0 3xl:pl-0 3xl:mx-auto">
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
                    <div className="mt-1" />
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

export default Socialmediamarketing;
