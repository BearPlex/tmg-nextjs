import Header from "../src/components/header/Header";
import Input from "../src/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileZipper } from "@fortawesome/free-solid-svg-icons";
import {facebookSvg, instagramSvg, linkedinSvg, twitterSvg} from "../src/helpers/Helpers";

const Contact = () => {
  return (
    <div className="pt-40">
      <Header />
      <div className="flex gap-x-5 justify-between px-28">
        <div className="w-[30%]">
          <h4 className="text-pink-400 font-bold text-5xl mb-6 uppercase">
            London
          </h4>
          <p className="font-bold leading-tight text-black text-2xl captilize whitespace-pre-wrap">
            KOTA
            <br />
            1-5 Clerkenwell Road
            <br />
            London
            <br />
            EC1M 5PA
          </p>
          <p className="mt-10">
            <a
              href="tel:+44(0)20 3951 0562"
              className="inline-block text-pink-400 font-bold text-2xl hover:text-black transition-all"
            >
              +44(0)20 3951 0562
            </a>
          </p>
          <p className="group mt-10 relative">
            <a
              href="mailto:hello@kota.co.uk"
              className="inline-block text-pink-400 font-bold text-2xl hover:text-black transition-all"
            >
              hello@kota.co.uk
            </a>
            <span className="absolute hidden text-pink-400 text-lg font-bold cursor-pointer group-hover:block">
              Copy to clipboard
            </span>
          </p>
            <div className="flex gap-6 mt-20 justify-start contact-wrapper">
              <a href="#" className="inline-block">{twitterSvg()}</a>
              <a href="#" className="inline-block">{instagramSvg()}</a>
              <a href="#" className="inline-block">{facebookSvg()}</a>
              <a href="#" className="inline-block">{linkedinSvg()}</a>
            </div>
        </div>
        <div className="w-[30%]">
          <h4 className="text-pink-400 font-bold text-5xl mb-6 uppercase">
            New York
          </h4>
          <p className="font-bold leading-tight text-black text-2xl captilize whitespace-pre-wrap">
            477 Madison Ave,
            <br />
            Midtown Manhattan,
            <br />
            6th Floor,
            <br />
            NY 10022
          </p>
          <p className="mt-10">
            <a
              href="tel:+1 833 502 0267"
              className="inline-block text-pink-400 font-bold text-2xl hover:text-black transition-all"
            >
              +1 833 502 0267
            </a>
          </p>
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
                      className="text-pink-400 text-xl"
                  />
                </div>
                 <div className="hidden-icon right-2 absolute z-0">
                   <FontAwesomeIcon
                       icon={faFileZipper}
                       className="text-pink-400  text-xl"
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
                          className="form-check-input mt-2 appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-pink-400 checked:border-gray-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                          type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                    </li>
                    <li className="ml-8">
                      <label htmlFor="flexRadioDefault10"
                             className="text-xs leading-none text-base font-medium text-zinc-700">I'm happy to receive a seriously cool monthly newsletter from KOTA.</label>
                    </li>
                  </ul>
                <ul className="form-check mb-4 d-flex items-center pl-0">
                  <li>
                    <input
                        className="form-check-input mt-2 appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-pink-400 checked:border-gray-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        type="radio" name="flexRadioDefault" id="flexRadioDefault20" />
                  </li>
                  <li className="ml-8">
                    <label htmlFor="flexRadioDefault20"
                           className="text-xs font-medium text-zinc-700 leading-4">I understand that KOTA will securely hold my data in accordance with their privacy policy.</label>
                  </li>
                </ul>
                <button className="border-2 border-pink-400 float-right rounded-full min-w-[100px] w-[50%] px-6 py-4 font-bold text-xs text-pink-400 bg-white hover:bg-pink-400 hover:text-white transition hover:transition-all uppercase">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
