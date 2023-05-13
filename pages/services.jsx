import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/services-logo.png";
import HeadingThree from "../src/components/headings/HeadingThree";
import Link from "next/link";
import homePageImage from "../src/assets/images/social-media-marketing.png";
import developmentImage from "../src/assets/images/brand-management.png";
import digitalImage from "../src/assets/images/seo.png";
import marketingImage from "../src/assets/images/tmg.png";
import eCommerceImage from "../src/assets/images/e-commerce.png";
import wordPressImage from "../src/assets/images/wordpress-4.png";
import Footer from "../src/components/footer/Footer";
import ScrollspyNav from "react-scrollspy-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
const Services = () => {
  const router = useRouter();
  const pushServiceSocial=()=>{
    router.push("/service/social-media-marketing")
  }
  const pushServiceBrand=()=>{
    router.push("/service/brand-management")
  }
  const pushServiceSeo=()=>{
    router.push("/service/seo")
  }
  const pushServiceDesign=()=>{
    router.push("/service/web-design")
  }
  return (
    <>
      <section className="pt-20">
        <Header />
        <section className="grid grid-cols-2 px-28 gap-4 pt-12 items-center">
          <div className="w-full text-center">
            <img
              src={kotaLogo.src}
              alt="kota canvas"
              loading="lazy"
              className="max-w-full"
            />
          </div>
          <div className="w-full">
            <p className="mb-6 text-black font-medium text-[1.16rem]">
              {/* Crafting{" "}
              <span className="text-pink-400">
                standout websites and branding
              </span>{" "} */}
              Fusing astounding visuals with compelling content  while backed by solid strategy, we assist our clients  in building a magnetic online presence to transform every click into a conversion.

            </p>
            
            <p className="text-black font-medium text-[1.16rem]">Explore our services to see how we can <span className="text-pink-400">transform your business into a brand.</span> </p>
            <ScrollspyNav
              scrollTargetIds={[
                "web_design",
                "web_development",
                "branding",
                "digital_marketing",
                // "e_commerce",
                // "wordpress",
              ]}
              activeNavClass="is-active"
            >
              <div className="flex flex-wrap gap-y-8 justify-between max-w-[85%] mt-5">
              {/* <Link href="/webDevelopment">
                <a className="w-1/2 text-base font-medium text-black inline-block">
                  Learn More
                </a>
              </Link>
              <Link href="/webDevelopment">
                <a className="w-1/2 text-base font-medium text-black inline-block">
                  Learn More
                </a>
              </Link> */}
                <a
                  href="#web_design"
                  className="w-1/2 text-base font-medium text-black inline-block"
                
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
                  Social Media Marketing
                </a>
              
                <a
                  href="#web_development"
                  className="w-1/2 text-base font-medium text-black inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
                  Search Engine Optimization
                </a>
                <a
                  href="#branding"
                  className="w-1/2 text-base font-medium text-black inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
                 Brand Management
                </a>
                <a
                  href="#digital_marketing"
                  className="w-1/2 text-base font-medium text-black inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
Website Design & Dev.   
             </a>
                {/* <a
                  href="#e_commerce"
                  className="w-1/2 text-lg font-medium text-black inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
                  E-Commerce
                </a>
                <a
                  href="#wordpress"
                  className="w-1/2 text-lg font-medium text-black inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
                  WordPress
                </a> */}
              </div>
            </ScrollspyNav>
            <button class="relative w-72  h-14 mt-12 rounded-full overflow-hidden">
                    <div className="">
                      <div class="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                      <div class="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                      <p class="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                        Book Free <span className="text-pink-500"> Consultation Today</span>
                      </p>
                    </div>
                  </button>
          </div>
          
        </section>

        <div className="px-28">
          <section
            id="web_design"
            className="flex items-center justify-between py-28 cursor-pointer"
            onClick={pushServiceSocial}

          >
            <div className="w-[40%]">
              <HeadingThree
                cssClass="text-[4rem]"
                title="Social Media Marketing"
              />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
              Analyzing the market and consumer data 
helps us provide customized solutions 
to everyday business challenges.

              </p>
              <Link href="/webDesign">
                <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="w-[55%]">
              <img
                src={homePageImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section>
          <section
            id="web_development"
            className="flex items-center justify-between py-28 cursor-pointer"
            onClick={pushServiceBrand}
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[4rem]" title="Brand Management" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
              Analyzing the market and consumer data 
helps us provide customized solutions 
to everyday business challenges.

              </p>
              <Link href="/webDevelopment">
                <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="w-[55%]">
              <img
                src={developmentImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section>
          <section
            id="branding"
            className="flex items-center justify-between py-28 cursor-pointer"
            onClick={pushServiceSeo}
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[4rem]" title="Search Engine Optimization" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
              Through personal and digital mediums, 
we provide fast and clear communication 
to keep information flow open.
              </p>
              <Link href="/webDevelopment">
                <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="w-[55%]">
              <img
                src={digitalImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section>
          <section
            id="digital_marketing"
            className="flex items-center justify-between py-28 cursor-pointer"
            onClick={pushServiceDesign}
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[4rem]" title="Website Design & Development" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
              Through personal and digital mediums, 
we provide fast and clear communication 
to keep information flow open.
              </p>
              <Link href="/webDevelopment">
                <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="w-[55%]">
              <img
                src={marketingImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section>
          {/* <section
            id="e_commerce"
            className="flex items-center justify-between py-28"
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[5rem]" title="E-Commerce" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                Reinvent your online store with an expert team who know what it
                takes to turn clicks into customers and keep them coming back.
              </p>
              <Link href="/webDevelopment">
                <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="w-[55%]">
              <img
                src={eCommerceImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section> */}
          {/* <section
            id="wordpress"
            className="flex items-center justify-between py-28"
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[5rem]" title="WordPress" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                Our approach decouples WordPress CMS from the front end
                technology to tighten security and improve overall speed.
              </p>
              <Link href="/webDevelopment">
                <a className="text-pink-400 font-medium text-md py-4 px-8 rounded-full  uppercase hover:bg-pink-400 border-2 border-pink-400 hover:text-white hover:transition-all">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="w-[55%]">
              <img
                src={wordPressImage.src}
                alt="services images"
                className="w-full h-100 shadow-2xl rounded-lg"
              />
            </div>
          </section> */}
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Services;