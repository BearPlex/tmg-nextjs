/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/header/Header";
import Section1 from "../../src/components/works/section1";
import ScreenShot from "../../src/assets/images/kinimo-ss1.png";
import Section2Image from "../../src/components/works/section2Image";
import axios from "axios";
import Section3Image from "../../src/components/works/section3Image";
import Section4card from "../../src/components/works/section4card";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import ReactMark from "react-markdown";
function BlogDetail() {
  const router = useRouter();

  const {
    query: { id },
  } = router;
  const props = {
    id,
  };
  const [work, setWork] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/blogs/${id}?populate=*`)
      .then((res) => {
        console.log("Res", res.data.data);
        setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error123", err);
      });
  }, []);
  return (
    <>
      <section className="pt-20">
        <Header />
        {/* {console.log(
          "Image Check",
          work?.attributes?.blog_featured_image.data.attributes.url
        )} */}

        <div className="pt-7 md:pt-20 px-10 md:px-28">
          <span className="text-pink-400 text-base font-medium tracking-widest">
            {work?.attributes?.date}
          </span>

          <div className="headingBlack">{work?.attributes?.title}</div>
          <br />
          <p>{work?.attributes?.sub_title}</p>
          {/* <div>
                <Image decoding="async" width={500} height={300} src="" className="w-[50px] h-[50px] rounded-full "/>
                <span className="text-base text-pink-400 uppercase mt-3">BY IZZY</span>
            </div> */}

          <div className="w-full  mb-9 md:mb-20">
            {/* <Image decoding="async" width={500} height={300}
              className=" absolute w-[80%]  md:w-[85%]    object-contain md:mr-3 rounded-3xl max-w-7xl mx-auto"
              src={manPic}
              alt="Man Pic"
              width={500}
              height={500}
            /> */}
          </div>
          <div className="w-full my-4 md:my-10 xl:-ml-3">
            {/* <Image decoding="async" width={500} height={300}
              className="   "
              src={props.url ? props.url : manPic}
              alt="Man Pic"
              width={500}
              height={500}
            /> */}
            <Image
              width={500}
              height={300}
              src={`http://localhost:1337${work?.attributes?.blog_featured_image.data.attributes.url}`}
              alt="blog image"
              className="  rounded-3xl    w-5/6  h-[550px] object-cover  mx-auto  max-w-7xl"
            />
            {/* <Image decoding="async" width={500} height={300}
                className=" absolute w-[80%]  md:w-[85%]    object-contain md:mr-3 rounded-3xl max-w-7xl mx-auto"
                src={manPic}
                alt="Man Pic"
                width={500}
                height={500}
              /> */}
          </div>
          <div className="max-w-2xl w-full mx-auto">
            <div className="text-orange_theme-400">Introduction.</div>
            <p className="text-zinc-700 pb-7 md:pb-20  mt-3">
              Did you know that if the internet was a country, it would be the
              worlds 7th biggest polluter, emitting 1.6 billion annual tons in
              greenhouse gas emissions? As a planet, we are currently facing
              unprecedented levels of climate change, and the internet plays a
              sizeable part in this problem. From websites to cryptocurrencies,
              it consumes large amounts of electricity in data centres, telecom
              networks, and end-user devices. Find out how web technology can
              still be efficient with low-carbon digital products and services.
            </p>

            <ReactMark className="text-zinc-700 pb-7 md:pb-20">
              {work?.attributes?.blog_content}
            </ReactMark>
            {/* <HeadingThree title="Understanding your digital footprint." className="text-pink-400 pb-10" />
                <p className="text-zinc-400 text-base">
                    As organisations produce more content, such as launching websites and hosting viral workshops, their digital footprint grows and expands. It can be seen that while many organisations assess the environmental impact of their office space, supply chain, or business practices, it’s not common for them to evaluate the carbon footprint of their online properties.  Considering the rate at which the internet is expanding, this is a problem that needs to be addressed.

                    <span className="text-pink-400 text-base">Digital Beacon</span> is a great tool for calculating the environmental impact of your website, analysing the breakdown and learning what measures can be taken to improve it. You can enter any website URL and receive a score rating and breakdown of the areas that are causing the most impact and how much extra C02 is contributing to the atmosphere. We highly recommend everyone do this as a starter.
                </p>
                <div>
                    <Image decoding="async" width={500} height={300} src={`http://localhost:1337${work?.attributes?.blog_featured_image.data.attributes.url}`} alt="blog image" />
                    <p className="text-base">
                        Sustainable web design is the process of designing digital products that put people and the planet first. Tom Greenwood, author of <span className="text-pink-400">Sustainable Web Design</span> explains
                    </p>
                    <p className="text-base">
                        “Sustainable web design is an approach to <i>designing web services that prioritises the health of our home planet;</i>
                        at its core is a focus on reducing carbon emissions and energy consumption.

                        Business, design, and technology can be part of the solution, but only if environmental protection is at the core of key decisions and not an afterthought.”
                    </p>
                    <p>It follows the principles of the Sustainable Web Manifesto, which calls for an internet that is:</p>
                </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
