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
        <div className="flex gap-x-5 justify-between mb-10 px-28">
          <div className="w-[30%]">
            <h4 className=" headingBlack mb-6 uppercase">new york</h4>
            <p className="font-bold leading-tight text-black largeParagraph captilize whitespace-pre-wrap">
              Brooklyn,
              <br />
              New York,
              <br />
              USA,
              {/* <br />
            EC1M 5PA */}
            </p>
            <p className="mt-10">
              <a
                href="tel:+44(0)20 3951 0562"
                className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all"
              >
                +1 (917) 970-1353
              </a>
            </p>
            <p className="group mt-10 relative">
              <a
                href="mailto:info@themediagale.com"
                className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all"
              >
                info@themediagale.com
              </a>
              <a
                href="mailto:info@themediagale.com"
                className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all"
              >
                support@themediagale.com
              </a>
              <a
                href="mailto:contacus@themediagale.com"
                className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400 transition-all"
              >
                contact@themediagale.com
              </a>
              {/* <span className="absolute hidden text-orange_theme-500 smallText font-bold cursor-pointer group-hover:block">
              Copy to clipboard
            </span> */}
            </p>
            <div className="flex gap-6 mt-20 justify-start contact-wrapper">
              <a href="#" className="inline-block">
                {twitterSvg()}
              </a>
              <a href="#" className="inline-block">
                {instagramSvg()}
              </a>
              <a href="#" className="inline-block">
                {facebookSvg()}
              </a>
              <a href="#" className="inline-block">
                {linkedinSvg()}
              </a>
            </div>
          </div>
          <div className="w-[30%]">
            <h4 className=" headingBlack mb-6 uppercase">Lahore</h4>
            <p className="font-bold leading-tight text-black largeParagraph captilize whitespace-pre-wrap">
              Dha Phase-5,
              <br />
              Lahore,
              <br />
              Pakistan,
              {/* <br />
            NY 10022 */}
            </p>
            {/* <p className="mt-10">
            <a
              href="tel:+1 833 502 0267"
              className="inline-block text-orange_theme-500 font-bold largeParagraph hover:text-orange_theme-400  transition-all"
            >
              +1 (917) 970-1353
            </a>
          </p> */}
          </div>
          <div className="w-[40%] px-14">
            <div className="flex flex-wrap justify-between gap-6 gap-y-8">
              <div className="w-[45%]">
                <Input title="First Name" type="text" />
              </div>
              <div className="w-[45%]">
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

                <div className="mt-6">
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
                        className="paragraph leading-none  font-medium text-zinc-700"
                      >
                        Im happy to receive a seriously cool monthly newsletter
                        from KOTA.
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
                        className="paragraph font-medium text-zinc-700 leading-4"
                      >
                        I understand that KOTA will securely hold my data in
                        accordance with their privacy policy.
                      </label>
                    </li>
                  </ul>
                  <GradientButton text="Submit" route="/" />
                  {/* <button className="border-2 border-[#F58460] float-right rounded-full min-w-[100px] w-[50%] px-6 py-4 font-bold paragraph text-[#F58460] bgWhite hover:bg-gradient-to-r from-[#f79b60] to-[#ee245f] hover:text-white transition hover:transition-all uppercase">
                  Submit
                </button> */}
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
