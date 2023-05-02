import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/Kota_logo.png";
import HeadingThree from "../src/components/headings/HeadingThree";
import Link from "next/link";
import homePageImage from "../src/assets/images/homepage-sym.png";
import developmentImage from "../src/assets/images/design-development.png";
import digitalImage from "../src/assets/images/digital.png";
import marketingImage from "../src/assets/images/marketing.png";
import eCommerceImage from "../src/assets/images/e-commerce.png";
import wordPressImage from "../src/assets/images/wordpress-4.png";
import Footer from "../src/components/footer/Footer";
import ScrollspyNav from "react-scrollspy-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
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
              Crafting{" "}
              <span className="text-pink-400">
                standout websites and branding
              </span>{" "}
              using sound strategic thinking and eye-catching digital, that
              creates instant impact and sparks emotion. To really see what we
              can do, take a look at our full range of digital creative agency
              services.
            </p>
            <ScrollspyNav
              scrollTargetIds={[
                "web_design",
                "web_development",
                "branding",
                "digital_marketing",
                "e_commerce",
                "wordpress",
              ]}
              activeNavClass="is-active"
            >
              <div className="flex flex-wrap gap-y-8 justify-between max-w-[85%]">
                <a
                  href="#web_design"
                  className="w-1/2 text-lg font-medium text-black inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
                  Creative Web Design
                </a>
                <a
                  href="#web_development"
                  className="w-1/2 text-lg font-medium text-black inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
                  Web Development
                </a>
                <a
                  href="#branding"
                  className="w-1/2 text-lg font-medium text-black inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
                  Branding
                </a>
                <a
                  href="#digital_marketing"
                  className="w-1/2 text-lg font-medium text-black inline-block"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink-400 text-lg mr-3"
                  />
                  Digital Marketing
                </a>
                <a
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
                </a>
              </div>
            </ScrollspyNav>
          </div>
        </section>

        <div className="px-28">
          <section
            id="web_design"
            className="flex items-center justify-between py-28"
          >
            <div className="w-[40%]">
              <HeadingThree
                cssClass="text-[5rem]"
                title="Creative Web Design"
              />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                Bring your brand to life online with a bespoke website that
                boosts engagement and brings a return on creativity.
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
            className="flex items-center justify-between py-28"
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[5rem]" title="Web development" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                We’ll build your site to suit your specific needs, creating the
                custom functions to make it faster and more secure.
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
            className="flex items-center justify-between py-28"
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[5rem]" title="Branding" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                KOTA combines strategic direction with creative design to build
                a unique brand identity that your customers want to be a part
                of.
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
            className="flex items-center justify-between py-28"
          >
            <div className="w-[40%]">
              <HeadingThree cssClass="text-[5rem]" title="Digital Marketing" />
              <p className="mt-8 mb-14 font-medium text-xl text-black">
                With a proven track record for game-changing results, our
                marketing experts design digital campaigns that captivate and
                convert.
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
          <section
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
          </section>
          <section
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
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Services;
