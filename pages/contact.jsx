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
        <div className="flex gap-x-5 justify-between mb-4 md:mb-10 pagePaddingX max-w-7xl mx-auto">
          <div className="w-[100%] flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[30%] mt-8 md:mt-0 order-2 md:order-1">
              <h4 className="gradientText smallHeading  md:text-5xl font-extrabold mb-2 md:mb-6">
                U.S.A.
              </h4>
              <div className="blackDescriptionText font-bold text-xl md:text-2xl whitespace-nowrap">
                <p className="block md:hidden">NY, New York.</p>
                <p className="hidden md:block">
                  {/* Brooklyn,
                  <br /> */}
                  NY,
                  <br />
                  New York.
                </p>
              </div>
              <div>
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
                </p>
              </div>
              <div className="hidden md:block gap-4 mt-9 md:mt-20 justify-start contact-wrapper text-[#EE2760] whitespace-nowrap">
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
            <div className="w-[100%] md:w-[30%] order-1 md:order-2">
              <h4 className="gradientText smallHeading  md:text-5xl font-extrabold mb-2 md:mb-6">
                Pakistan
              </h4>
              <div className="blackDescriptionText font-bold text-xl md:text-2xl whitespace-nowrap">
                <p className="block md:hidden">DHA Phase 5, Lahore.</p>
                <p className="hidden md:block">
                  DHA Phase 5,
                  <br />
                  Lahore.
                </p>
              </div>
            </div>
            <div className="w-[100%] md:w-[50%] md:py-0 order-3 ">
              <div>
                <div className="block md:hidden my-10 md:my-0 gradientText heading">
                  Shoot us an Email
                </div>
                <ContactFormIframe />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageWrapper>
    </>
  );
};
export default Contact;
