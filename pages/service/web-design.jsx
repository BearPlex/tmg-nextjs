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
import Expertise from "../../src/components/expertise/Expertise";
import axios from "axios";
import Footer from "../../src/components/footer/Footer";

function WebDesign() {
  const [work, setWork] = useState([]);
  // {console.log("Work",blogsData)}
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/work-kinimos?populate=*")
      .then((res) => {
        console.log("Res", res.data.data);
        setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <>
      <div className="pt-20">
        <Header />
      </div>
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 px-20 gap-4 pt-12 items-center">
            <div className="w-full text-center mt-10 xl:mt-10">
              <img
                src={brand1.src}
                alt="kota canvas"
                loading="lazy"
                className="max-w-full "
              />
              <img
                src={brand2.src}
                alt="kota canvas"
                loading="lazy"
                className="max-w-full mt-10"
              />
            </div>
            <div className="w-full">
              <h4 className="mb-6 text-3xl md:ext-7xl font-bold leading-tight">
                Highly{" "}
                <span className="text-orange_theme-500"> Optimized </span>
                Converting Websites 
              </h4>
              <p className="text-2xl">
                We have been helping our partners in creating responsive and
                eye-catching websites that leave every viewer in awe of their
                scale and seamlessness. Our team of certified developers with
                years of experience in multiple niches know what would stand out
                at the end of the day. 
                <br />
                <br />
                We strongly keep up with the latest trends in the development
                world, so you can be sure that your website will always be up to
                date and functional. Our team also works closely with you to
                fully grasp your vision and create a perfect landing site that
                you envisioned for your business. optimization{" "}
              </p>
              <button class="relative w-72  h-14 mt-12 rounded-full overflow-hidden">
                <div className="">
                  <div class="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                  <div class="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                  <p class="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                    Book Free{" "}
                    <span className="text-pink-500 relative ml-[5px]">
                      {" "}
                      Consultation Today
                    </span>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="bg-white">
          <div class="relative isolate ">
            <div class="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10">
              <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <h1
                  className={`mb-6 font-sofia-bold font-black leading-none text-zinc-700 text-3xl md:text-6xl max-w-xl`}
                >
                  Modern designs that
                  <span className="text-orange_theme-500">
                    {" "}
                    creates identity
                  </span>{" "}
                </h1>
              </div>
              <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  A well-designed website will have a lasting impression on
                  visitors, and can even increase conversion rates. Everything
                  from using attractive visuals, to writing compelling content
                  and delivering a top-notch user experience holds its
                  importance. We conduct brainstorming sessions with you to make
                  the most out of our collaboration and provide you with the
                  best result that lands above your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="background-gradient py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <dd class="mt-10 text-white relative text-6xl top-6 max-w-xs">
                  What makes us sooo good at it?
                </dd>
              </div>
              <div>
                <dt class="font-semibold text-white text-5xl">
                  Expert Development
                </dt>
                <dd class="mt-6 text-white text-base ">
                  User-centric designs, practical and result-oriented marketing
                  tools, and in-house built features are among our exponential
                  services we provide. 
                </dd>

                <dt class="font-semibold text-white text-5xl xl:mt-10">
                  Maintenance
                </dt>
                <dd class="mt-6 text-white text-base">
                  We ensure to keep your backend updated after the completion of
                  the project and provide instantaneous online support whenever
                  you or your business requires. 
                </dd>
              </div>
              <div>
                <dt class="font-semibold text-white text-5xl ">Technology</dt>
                <dd class="mt-6 text-white text-base">
                  We are extremely versed in technology upgrades. By utilizing
                  the latest tools and following best practices, we deliver
                  high-quality results.
                </dd>
                <dt class="font-semibold text-white text-5xl xl:mt-4">
                  Functionality
                </dt>
                <dd class="mt-6 text-white text-base">
                  A visually appealing and high functional website with regular
                  updates can help your business grab the attention of visitors
                  globally. We are open to provide custom functionality based
                  solutions as per the need.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div class="bg-black">
          <div class="relative isolate pt-14">
            <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
              <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1 class="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                  Ecommerce Websites
                </h1>
                <p class="mt-6 text-xl leading-8 text-white font-normal">
                  If you're considering developing an e-Commerce website, it is
                  time to let us take the lead and assist you in providing a
                  seamless online shopping experience to your customers. We
                  offer Shopify as a highly converting platform for businesses
                  where you can simply focus on managing the inventory part of
                  business and let us handle the entire "How to" process. 
                </p>
                <div class=" flex items-center gap-x-6">
                  <button class="relative w-48  h-14 mt-12 rounded-full overflow-hidden">
                    <div className="">
                      <div class="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                      <div class="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                      <p class="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                        Learn{" "}
                        <span className="text-pink-500 relative ml-[5px]">
                          {" "}
                          More
                        </span>
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <img
                  src={book.src}
                  alt=""
                  className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          <div class="relative isolate ">
            <div class="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
              <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <img
                  src={mobile3.src}
                  alt=""
                  className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
                />
              </div>
              <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1 class="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                  Software as a Service
                </h1>
                <p class="mt-6 text-xl leading-8 text-white font-normal">
                  We offer Software-as-a-Service to clients in order to help
                  them utilize resources more efficiently and make well-informed
                  business decisions. Through better strategic planning and
                  trend forecasting, our SaaS products help businesses grow
                  exponentially and make their debut in untapped markets. We
                  provide accurate guidance and hands-on assistance with the CMS
                  implementation process.   
                </p>
                <div class=" flex items-center gap-x-6">
                  <button class="relative w-48  h-14 mt-12 rounded-full overflow-hidden">
                    <div className="">
                      <div class="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                      <div class="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                      <p class="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                        Learn{" "}
                        <span className="text-pink-500 relative ml-[5px]">
                          {" "}
                          More
                        </span>
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="relative isolate pt-14">
            <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
              <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1 class="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                  Business Websites{" "}
                </h1>
                <p class="mt-6 text-xl leading-8 text-white font-normal">
                  If you're considering developing a business website, it is
                  time to let us take the lead and assist you in providing a
                  seamless browsing experience to your leads. We offer
                  Woo-commerce as a stable hosting CMS platform for businesses
                  where you can simply focus on managing the service part of
                  business and let us handle the entire "How to" process.  TMG
                  provides content optimization services to help make your
                  content more effective, and improve quality, making it more
                  informative and engaging for your audience. We can also help
                  you target specific keywords and topics to ensure that your
                  content is being seen by the right people.
                </p>
                <div class=" flex items-center gap-x-6">
                  <button class="relative w-48  h-14 mt-12 rounded-full overflow-hidden">
                    <div className="">
                      <div class="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                      <div class="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                      <p class="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                        Learn{" "}
                        <span className="text-pink-500 relative ml-[5px]">
                          {" "}
                          More
                        </span>
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <img
                  src={mobile2.src}
                  alt=""
                  className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          <div class="relative isolate ">
            <div class="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
              <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <img
                  src={tmg.src}
                  alt=""
                  className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
                />
              </div>
              <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1 class="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                  What else?
                </h1>
                <p class="mt-6 text-xl leading-8 text-white font-normal">
                  As your dedicated SEO agency, we go a step further than just
                  make your website perform well. We strategize with reasoning
                  and depend on the market research so we can showcase the
                  results to you, that would help your business get authentic
                  traffic without spending another dime on it. 
                </p>
                <div class=" flex items-center gap-x-6">
                  <button class="relative w-48  h-14 mt-12 rounded-full overflow-hidden">
                    <div className="">
                      <div class="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                      <div class="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                      <p class="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                        Learn{" "}
                        <span className="text-pink-500 relative ml-[5px]">
                          {" "}
                          More
                        </span>
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Tabs className="p-20 px-28 tabs-wrapper">
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

      <section className="background-gradient pb-16">
        <div class="relative isolate ">
          <div class="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <img
                src={hand.src}
                alt=""
                className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
              />
            </div>
            <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 class="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                Dedicated Resource Allocation
              </h1>
              <p class="mt-6 text-xl leading-8 text-white font-normal">
                At TMG, we understand that your brand is much more than just a
                logo or a name. It is the overall look and feel that a customer
                experiences - from your website and marketing materials to the
                way you interact with your customers. That's why we offer
                dedicated resources based on needs that fit your job
                requirement.
                <br />
                <br />
                From Website Developers, Content Creators and Managers to SEO
                Experts - we make sure that your daily work requirement is
                fulfilled remotely.
              </p>
              <div class=" flex items-center gap-x-6">
                {/* <button class="relative w-48  h-14 mt-12 rounded-full overflow-hidden">
                  <div className="">
                    <div class="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                    <div class="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                    <p class="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                      Learn <span className="text-pink-500"> More</span>
                    </p>
                  </div>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="-mt-28">
        <Footer />
      </div>
    </>
  );
}

export default WebDesign;
