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
import Expertise from "../../src/components/expertise/Expertise";
import axios from "axios";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import GradientButton from "../../src/components/button/GradientButton";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import TextWithImageContainer from "../../src/components/containers/TextWithImageContainer";
function Socialmediamarketing() {
  const [work, setWork] = useState([]);
  // {console.log("Work",blogsData)}
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/work-kinimos?populate=*")
      .then((res) => {
        // console.log("Res", res.data.data);
        setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <>
      <PageWrapper>
        <section className="w-full">
          <section>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 componentsMainGap pagePaddingX pt-12 items-center">
                <div className="w-full text-center mt:4 md:mt-10 xl:mt-10">
                  <Image
                    width={500}
                    height={300}
                    src={body.src}
                    alt="kota canvas"
                    loading="lazy"
                    layout="responsive"
                    objectFit="cover"
                  />
                  <Image
                    width={500}
                    height={300}
                    src={serviceBottle.src}
                    alt="kota canvas"
                    loading="lazy"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full">
                  <h4 className="mb-m md:mb-6  heading blackDescriptionText  ">
                    Performance Driven{" "}
                    <span className="gradientText ">Digital Marketing</span>{" "}
                    Services
                  </h4>
                  <p className="paragraph blackDescriptionText">
                    With proven game changing results, our award winning
                    performance experts ensure that all the leads turn into a{" "}
                    <span className="gradientText ">
                      profitable conversion.
                    </span>{" "}
                  </p>
                  <GradientButton
                    text="Book Free Consultation Today"
                    route="/contact"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="bgWhite">
              <div className="relative isolate ">
                <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10">
                  <div className="mt-5 md:mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <h1
                      className={`mb-m md:mb-6    blackDescriptionText  largeHeading max-w-xl`}
                    >
                      High Performance
                      <span className="gradientText">
                        {" "}
                        breakthrough{" "}
                        <span className="gradientText">campaigns</span>
                      </span>{" "}
                    </h1>
                  </div>
                  <div className="lg:mx-0 w-1/2 lg:flex-auto">
                    <p className="mt-2 md:mt-6 paragraph  blackDescriptionText">
                      Getting noticed and remembered by the right audience is a
                      slow delicate process. It takes multiple testing, creative
                      input and high performing campaign structures to ensure
                      better conversions.
                      <br />
                      We specialize in performance marketing campaigns using
                      content and audience building strategies that support our
                      campaigns to perform well. With our in-house team of
                      experienced and certified marketers, we ensure that your
                      advertisement is well remembered.
                      <br />
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
            <div className="background-gradient py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  <div>
                    <dd className="mt-4 md:mt-10  relative  top-6 max-w-xs   extraLargeHeadingWhite">
                      What makes us sooo good at it?
                    </dd>
                  </div>
                  <div>
                    <dt className="largeHeadingWhite">Experience</dt>
                    <dd className="mt-2 md:mt-6 smallTextWhite  ">
                      We’ve worked with brands from a huge range of industries
                      to showcase their differences through strategic design
                      that positions them perfectly. 
                    </dd>

                    <dt className=" largeHeadingWhite xl:mt-10">Strategy</dt>
                    <dd className="mt-2 md:mt-6 smallTextWhite ">
                      With our certified team, we ensure to create effective
                      cost saving strategies that help campaigns perform well so
                      you can focus more on counting sales.
                    </dd>
                  </div>
                  <div>
                    <dt className="largeHeadingWhite ">Creativity</dt>
                    <dd className="mt-2 md:mt-6 smallTextWhite ">
                      Guided by your vision and values, our branding services
                      will bring your business to life with artistic flair and
                      attention to detail, to create a brand that is unique and
                      memorable.
                    </dd>
                    <dt className="largeHeadingWhite  xl:mt-4">
                      Sustainability
                    </dt>
                    <dd className="mt-2 md:mt-6 smallTextWhite ">
                      We ensure that the image that has been forged to the
                      consumer mind stays on top with consistent artistic
                      content to increase engagement and recall value.
                    </dd>
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
                  <h1 className="mt-4 md:mt-10 heading whiteHeadingText ">
                    Creative Campaigns
                  </h1>
                  <p className="mt-2 md:mt-6 paragraph whiteDescriptionText">
                    From creating modern design content to animated videos, we
                    create high performing campaigns to create a long lasting
                    impact that truly reflects your brand and resonates with
                    your target market. 
                  </p>
                  <div className="flex items-center gap-x-6 mt-3 md:mt-8">
                    <GradientButton text="Learn More" route="/" />
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
                  <h1 className="mt-4 md:mt-10 max-w-lg heading whiteHeadingText">
                    Emails & Workflows
                  </h1>
                  <p className="mt-2 md:mt-6 paragraph whiteDescriptionText">
                    At TMG, our creative and design team work together to
                    deliver email campaigns that are both visually appealing and
                    highly effective. We pay close attention to every detail,
                    from the layout and design to the messaging, call to action
                    and workflow management. 
                  </p>
                  <div className="flex items-center gap-x-6 mt-3 md:mt-8">
                    <GradientButton text="Learn More" route="/" />
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
                    Social Media Management
                  </h1>
                  <p className="mt-2 md:mt-6 paragraph whiteDescriptionText">
                    We offer a comprehensive suite of social media management
                    services that are designed to help businesses connect with
                    their customers and build a strong online presence. We
                    handle everything from building social media strategy and
                    planning to creating content and community management.  
                  </p>
                  <div className="flex items-center gap-x-6 mt-3 md:mt-8">
                    <GradientButton text="Learn More" route="/" />
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
                  <p className="mt-2 md:mt-6 paragraph whiteDescriptionText">
                    As a 360 digital agency, we also specialize in search engine
                    optimization which keeps our clients ahead of the
                    competition. To help you reach a wide organic audience, our
                    SEO experts craft specific needs to optimize your website
                    and rank highest in the Google search results. This leads to
                    increase in traffic - helping your business get more
                    visibility.
                  </p>
                  <div className="flex items-center gap-x-6 mt-3 md:mt-8">
                    <GradientButton text="Learn More" route="/" />
                  </div>
                </div>
              </TextWithImageContainer>
            </div>
          </section>

          <section>
            <Tabs className="  tabs-wrapper">
              <TabList>
                {
                  // work.filter(x => x.hasOwnProperty('tabTitle')).map((item, index) => <Tab key={index}>{item.tabTitle}</Tab>)
                  // work.map((item, index) => <Tab key={index}>Hello</Tab>)
                }
              </TabList>
              {work.map((item, index) => (
                <TabPanel key={index}>
                  {" "}
                  <Expertise list={work} cssClass="text-black" />
                </TabPanel>
              ))}
            </Tabs>
          </section>

          <section className="background-gradient">
            <div className="relative isolate ">
              <div className="max-w-7xl   lg:flex lg:items-center lg:gap-x-10">
                <div className="lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                  <Image
                    width={500}
                    height={300}
                    src={hand.src}
                    alt="hand"
                    className="w-[658px] h-[836px] drop-shadow-xl"
                  />
                </div>
                <div className="lg:mx-0 w-1/2 lg:flex-auto">
                  <h1 className="mt-4 md:mt-10 max-w-lg largeHeading whiteHeadingText">
                    Dedicated Resource Allocation
                  </h1>
                  <p className="mt-2 md:mt-6 paragraph whiteHeadingText ">
                    At TMG, we understand that your brand is much more than just
                    a logo or a name. It is the overall look and feel that a
                    customer experiences - from your website and marketing
                    materials to the way you interact with your customers.
                    That's why we offer dedicated resources based on needs that
                    fit your job requirement. From Website Developers, Content
                    Creators and Managers to SEO Experts - we make sure that
                    your daily work requirement is fulfilled remotely.
                  </p>
                  <div className=" flex items-center gap-x-6">
                    {/* <button className="relative w-48  h-14 mt-12 rounded-full overflow-hidden">
                  <div className="">
                    <div className="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                    <div className="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                    <p className="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                      Learn <span className="text-pink-500"> More</span>
                    </p>
                  </div>
                </button> */}
                  </div>
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
