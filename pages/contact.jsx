import Header from "../src/components/header/Header";
import Input from "../src/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileZipper } from "@fortawesome/free-solid-svg-icons";
import {
  facebookSvg,
  instagramSvg,
  linkedinSvg,
  twitterSvg,
} from "../src/helpers/Helpers";
import ContactFormIframe from "../src/components/iframe/ContactFormIframe";
import Footer from "../src/components/footer/Footer";
import GradientButton from "../src/components/button/GradientButton";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
const Contact = () => {
  return (
    <>
      <PageWrapper>
        <div className="flex gap-x-5 justify-between mb-4 md:mb-10 pagePaddingX max-w-7xl mx-auto xl:px-0 xl:pl-0">
          <div className="w-[100%] flex flex-col md:flex-row md:w-[100%]">
            <div className="w-[30%] md:w-[30%] md:order-2 order-6 hidden md:block">
              <h4 className="gradientText text-5xl font-extrabold mb-2 md:mb-6">
                New York
              </h4>
              <p className="blackDescriptionText text-2xl font-bold">
                Brooklyn,
                <br />
                New York,
                <br />
                U.S.A.
              </p>
              <p className="mt-10 md:mt-32">
                <a
                  href="tel:+1 (917) 970-1353"
                  className="inline-block text-orange_theme-500 smallHeading font-bold hover:text-orange_theme-400  transition-all"
                >
                  +1 (917) 970-1353
                </a>
              </p>
              <p className="group mt:4 md:mt-10 relative">
                <a
                  href="mailto:info@themediagale.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-orange_theme-500 smallHeading font-bold hover:text-orange_theme-400  transition-all py-1"
                >
                  info@themediagale.com
                </a>
                <br />
                <a
                  href="mailto:support@themediagale.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-orange_theme-500 smallHeading font-bold hover:text-orange_theme-400  transition-all py-1"
                >
                  support@themediagale.com
                </a>
                <br />
                <a
                  href="mailto:contact@themediagale.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-orange_theme-500 smallHeading font-bold hover:text-orange_theme-400 transition-all py-1"
                >
                  contact@themediagale.com
                </a>
              </p>
              <div className="flex gap-4 mt-9 md:mt-20 justify-start contact-wrapper text-[#EE2760]">
                <a
                  href="https://twitter.com/themediagale"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  {twitterSvg()}
                </a>
                <a
                  href="https://www.instagram.com/themediagale/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  {instagramSvg()}
                </a>
                <a
                  href="https://www.facebook.com/themediagale/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  {facebookSvg()}
                </a>
                <a
                  href="https://www.linkedin.com/company/themediagale/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  {linkedinSvg()}
                </a>
              </div>
            </div>

            <div className="md:order-4 order-4 w-[100%] md:w-[30%] flex flex-col ">
              <div className="w-full md:w-[30%] block md:hidden">
                <h4 className="gradientText smallHeading font-extrabold mb-2 md:mb-6">
                  New York
                </h4>
                <p className="blackDescriptionText font-bold text-2xl flex flex-col mb-4 whitespace-nowrap">
                  Brooklyn, New York, U.S.A.
                </p>
              </div>
              <div className=" mb-4 md:mb-0">
                <h4 className="gradientText text-5xl font-extrabold mb-2 md:mb-6 w-full">
                  Lahore
                </h4>
                <div className="blackDescriptionText font-bold text-2xl whitespace-nowrap">
                  <p className="block md:hidden">
                    DHA Phase 5, Lahore, Pakistan
                  </p>
                  <p className="hidden md:block">
                    DHA Phase 5,
                    <br />
                    Lahore,
                    <br />
                    Pakistan.
                  </p>
                </div>
              </div>
              <div className="block md:hidden">
                <p className="mt-2 md:mt-10 mb-4">
                  <a
                    href="tel:+44(0)20 3951 0562"
                    className="inline-block text-orange_theme-500 smallHeading font-bold hover:text-orange_theme-400  transition-all"
                  >
                    +1 (917) 970-1353
                  </a>
                </p>
                <p className="group mt:4 md:mt-10 mb-8 md:mb-10 relative">
                  <a
                    href="mailto:info@themediagale.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-orange_theme-500 smallHeading font-bold hover:text-orange_theme-400  transition-all py-1"
                  >
                    info@themediagale.com
                  </a>
                  <br />
                  <a
                    href="mailto:support@themediagale.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-orange_theme-500 smallHeading font-bold hover:text-orange_theme-400  transition-all py-1"
                  >
                    support@themediagale.com
                  </a>
                  <br />
                  <a
                    href="mailto:contact@themediagale.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-orange_theme-500 smallHeading font-bold hover:text-orange_theme-400 transition-all py-1"
                  >
                    contact@themediagale.com
                  </a>
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] md:py-0 md:order-6 order-2">
              <ContactFormIframe />
            </div>
          </div>
        </div>
        <Footer />
      </PageWrapper>
    </>
  );
};
export default Contact;
