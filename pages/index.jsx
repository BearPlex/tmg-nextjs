import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/tmg-logo.png";
import danLogo from "../src/assets/images/dan_grey@2x.png";
import drumLogo from "../src/assets/images/the-drum-logo.png";
import clutchLogo from "../src/assets/images/Clutch_grey@2x.png";
import awardLogo from "../src/assets/images/awward_grey@2x.png";
import cssDesignLogo from "../src/assets/images/css-design-awards.png";
import HeadingOne from "../src/components/headings/HeadingOne";
import HeadingTwo from "../src/components/headings/HeadingTwo";
import Services from "../src/components/services/Services";
import Clients from "../src/components/clients/Clients";
import Articles from "../src/components/articles/Articles";
import Footer from "../src/components/footer/Footer";
import Expertise from "../src/components/expertise/Expertise";
import Agency from "../src/components/agency/Agency";
import { work } from "../src/helpers/Helpers";
import mainImage from "../src/assets/svg/home_work_logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import hero from "../src/assets/images/hero-1.png"
import workFeaturedImage from "../src/assets/images/work-featured-1.png"
import workGallery1 from "../src/assets/images/work-gall-1.png"
import workGallery2 from "../src/assets/images/work-gall-2.png"
import ExpertiseStatic from "../src/components/expertise/ExpertiseStatic";
import Image from "next/image";
// import "swiper/css/bundle";
// import "./styles.css";
const workStatic=[
    {
        featured_image:workFeaturedImage,
        featured_title:"KINIMO COSMETICS",
        gallery_first_title:"The Brief",
        gallery_first_description:"Meet Kinimo Cosmetics: A Pakistani beauty brand founded in 2019, that focuses on the new age definition of beauty, offering high-quality natural products that inspire confidence and passion in everyone.They reached out to us for content creation, and website development along with SEO and since then our connection has been fruitful.",
        gallery1:workGallery1,
        gallery_second_title:"",
        gallery_second_description:"",
        gallery2:workGallery2
    }
]
export default function Home() {
    const [work,setWork]=useState([])
    // {console.log("Work",blogsData)}
    useEffect(()=>{
    axios.get("http://localhost:1337/api/work-kinimos?populate=*").then((res)=>{
        console.log("Res",res.data.data)
        setWork(res.data.data)
    }).catch((err)=>{

        console.log("Error",err)
    })
    },[])
  return (
    <>
      <div className="pt-20">
        <Header />
      </div>
      <section className="px-20 pt-12">
        <div className="w-full flex justify-between items-center">
          <div className="w-[50%] text-center">
            <img
              src={kotaLogo.src}
              alt="kota canvas"
              loading="lazy"
              className="max-w-full"
            />
          </div>
          <section className="px-20 pt-12">
            <div className="w-full flex justify-between items-center">
                <div className="w-[50%] text-center">
                    {/* <img src={kotaLogo.src} alt="kota canvas" loading="lazy" className="max-w-full" /> */}
                    <Image width={500} height={150} src={kotaLogo} alt="kota canvas" loading="lazy" className="max-w-full" />
                </div>
                <div className="w-[40%]">
                    {/* <HeadingOne title="Transforming Businesses into
Brands" cssClass="mb-6" /> */}
            <h1 className={`mb-6 heading-style`}>
              Transforming Businesses into
              <span className="text-orange_theme-400"> Brands</span>{" "}
            </h1>
            <p className="text-style">
              We offer 360-degree marketing solutions such as PPC Advertisement,
              Search Engine Optimization and Web Development Services. Our team
              is technically and professionally equipped to make every{" "}
              <span className="gradient-text">brand a success story.</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img
            src={danLogo.src}
            alt="dan logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
          <img
            src={drumLogo.src}
            alt="the drum logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
          <img
            src={clutchLogo.src}
            alt="clutch logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
          <img
            src={awardLogo.src}
            alt="award logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
          <img
            src={cssDesignLogo.src}
            alt="award logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
        </div>
      </section>

      {/* making brands better section*/}
      {/* <section className="flex justify-between items-center pt-20 pr-20 gap-4">
                <div className="video-wrapper w-[50%]">
                    <img src={kotaLogo.src} alt="video here" />
                </div>
                <div className="w-[40%]">
                    <HeadingTwo title="Making brands a damn site better" cssClass="mb-6 text-zinc-700" />
                    <p className="paragraph">Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.</p>
                </div>
            </section> */}

      {/* new hero section */}
      <section>
        <div class="relative isolate overflow-hidden bg-white">
          <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 class="mt-10  text-secondary-size heading-style ">
                Providing Exponential
                <span className="gradient-text"> User Experience</span>{" "}
              </h1>
              <p class="mt-6 text-style">
                Let’s face it, first impressions matter. Why waste and settle
                for something less?
                <br />
                <br />
                With user-centric designs, result oriented designing tools, and
                in-house built features, we help increase sales and add value to
                your Business and e-Commerce ventures.
              </p>
            </div>
            <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src={hero.src}
                    alt="App screenshot"
                    class="w-[40rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
             
                {
                    work==''?
                    <ExpertiseStatic list={workStatic} cssClass="text-white"/>:
                    <Expertise list={work} cssClass="text-white" />
                 
                }
            </section>
            <Services />
            <Clients />
            <Articles />
            <Footer />
      </>
   )
}
