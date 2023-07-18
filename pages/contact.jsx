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
import Footer from "../src/components/footer/Footer";
import GradientButton from "../src/components/button/GradientButton";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
const Contact = () => {
  return (
    <>
      <PageWrapper>
        <div className="flex gap-x-5 justify-between mb-4 md:mb-10 pagePaddingX 3xl:max-w-7xl 3xl:mx-auto 3xl:px-0 3xl:pl-0">
          <div className="w-[100%] flex flex-col md:flex-row md:w-[100%]">
            <div className="w-[30%] md:w-[30%] md:order-2 order-6 hidden md:block">
              <h4 className=" headingBlack mb-2 md:mb-6  uppercase">
                new york
              </h4>
              <p className="leading-tight blackDescriptionText smallHeading captilize whitespace-pre-wrap">
                Brooklyn,
                <br />
                New York,
                <br />
                U.S.A.
              </p>
              <p className="mt-4 md:mt-10">
                <a
                  href="tel:+1 (917) 970-1353"
                  className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all"
                >
                  +1 (917) 970-1353
                </a>
              </p>
              <p className="group mt:4 md:mt-10 relative">
                <a
                  href="https://info@themediagale.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all py-1"
                >
                  info@themediagale.com
                </a>
                <br />
                <a
                  href="mailto:info@themediagale.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all py-1"
                >
                  support@themediagale.com
                </a>
                <br />
                <a
                  href="https://contacus@themediagale.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400 transition-all py-1"
                >
                  contact@themediagale.com
                </a>
              </p>
              <div className="flex gap-6 mt-9 md:mt-20 justify-start contact-wrapper text-[#EE2760]">
                <a
                  href="https://twitter.com/bearplexdigital"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  {twitterSvg()}
                </a>
                <a
                  href="https://www.facebook.com/BearPlex/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  {instagramSvg()}
                </a>
                <a
                  href="https://www.facebook.com/BearPlex/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  {facebookSvg()}
                </a>
                <a
                  href="https://www.linkedin.com/company/bearplex/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  {linkedinSvg()}
                </a>
              </div>
            </div>

            <div className="md:order-4 order-4 w-[100%] md:w-[30%] flex mt-10 md:mt-0">
              <div className="w-[30%] md:w-[30%]  block md:hidden">
                <h4 className=" headingBlack mb-2 md:mb-6  uppercase">
                  new york
                </h4>
                <p className="leading-tight blackDescriptionText smallHeading captilize whitespace-pre-wrap">
                  Brooklyn,
                  <br />
                  New York,
                  <br />
                  U.S.A.
                </p>
              </div>
              <div className="w-[30%] md:w-[30%] ">
                <h4 className=" headingBlack mb-2 md:mb-6  uppercase">
                  Lahore
                </h4>
                <p className="leading-tight blackDescriptionText smallHeading captilize whitespace-pre-wrap">
                  <span className="whitespace-nowrap">DHA Phase 5,</span>
                  <br />
                  Lahore,
                  <br />
                  Pakistan
                </p>
              </div>
              <div className="block md:hidden">
                <p className="mt-2 md:mt-10">
                  <a
                    href="tel:+44(0)20 3951 0562"
                    className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all"
                  >
                    +1 (917) 970-1353
                  </a>
                </p>
                <p className="group mt:4 md:mt-10 relative">
                  <a
                    href="https://info@themediagale.com"
                    className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all py-1"
                  >
                    info@themediagale.com
                  </a>
                  <br />
                  <a
                    href="https://info@themediagale.com"
                    className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all py-1"
                  >
                    support@themediagale.com
                  </a>
                  <br />
                  <a
                    href="https://contacus@themediagale.com"
                    className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400 transition-all py-1"
                  >
                    contact@themediagale.com
                  </a>
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] py-10 md:py-0 md:order-6 order-2">
              <div className="flex flex-wrap justify-between gap-6 gap-y-8 ">
                <div className="w-[100%] md:w-[45%]">
                  <Input title="First Name" type="text" />
                </div>
                <div className="w-[100%] md:w-[45%]">
                  <Input title="Last Name" type="text" />
                </div>
                <div className="w-full">
                  <Input title="Email" type="email" />
                </div>
                <div className="w-full">
                  <div className="file-upload border-b border-b-black relative">
                    <input type="file" className="relative w-full opacity-0" />
                    <div className="file-icon right-2 absolute z-0">
                      <FontAwesomeIcon
                        icon={faFileZipper}
                        className="text-pink-400 paragraph"
                      />
                    </div>
                    <div className="hidden-icon right-2 absolute z-0">
                      <FontAwesomeIcon
                        icon={faFileZipper}
                        className="text-pink-400  paragraph"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <textarea
                    className="w-full px-3 py-2 border placeholder-gray-700::placeholder border-black resize-none h-24"
                    placeholder="Message"
                  ></textarea>

                  <div className="mt-0 md:mt-2 lg:mt-6">
                    <ul className="form-check mb-4 d-flex items-center pl-0">
                      <li>
                        <input
                          className="form-check-input mt-2 appearance-none rounded-full h-4 w-4 border border-gray-400 bgWhite checked:bg-pink-400 checked:border-gray-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault10"
                        />
                      </li>
                      <li className="ml-8">
                        <label
                          htmlFor="flexRadioDefault10"
                          className="paragraph leading-none  font-medium blackDescriptionText"
                        >
                          Im happy to receive a seriously cool monthly
                          newsletter from KOTA.
                        </label>
                      </li>
                    </ul>
                    <ul className="form-check mb-4 d-flex items-center pl-0">
                      <li>
                        <input
                          className="form-check-input mt-2 appearance-none rounded-full h-4 w-4 border border-gray-400 bgWhite checked:bg-pink-400 checked:border-gray-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault20"
                        />
                      </li>
                      <li className="ml-8">
                        <label
                          htmlFor="flexRadioDefault20"
                          className="paragraph font-medium blackDescriptionText leading-4"
                        >
                          I understand that KOTA will securely hold my data in
                          accordance with their privacy policy.
                        </label>
                      </li>
                    </ul>
                    <GradientButton text="Submit" route="/" />
                  </div>
                </div>
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
