import Header from "../src/components/header/Header";
import Input from "../src/components/input/Input";
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
import axios from "axios";
import SEOHeader from "../src/components/MetaData/SEOHeader";
const Contact = ({ metaData }) => {
  return (
    <>
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <div className="flex gap-x-5 justify-between mb-4 md:mb-10 pagePaddingX max-w-7xl mx-auto">
          <div className="w-[100%] flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[30%] mt-8 md:mt-0 order-2 md:order-1">
              <h4 className="gradientText smallHeading  md:text-5xl font-extrabold mb-2 md:mb-6">
                U.S.A.
              </h4>
              <div className="blackDescriptionText font-bold text-xl md:text-2xl">
                <p className="block md:hidden">
                  447 Broadway, 2nd FL #202, New York, NY 10013.
                </p>
                <p className="hidden md:block whitespace-nowrap">
                  447 Broadway,
                  <br />
                  2nd FL #202,
                  <br />
                  New York, NY 10013.
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
                Pakistan.
              </h4>
              <div className="blackDescriptionText font-bold text-xl md:text-2xl">
                <p className="block md:hidden">
                  House 562 Sector A Askari 11 Lahore, 54000.
                </p>
                <p className="hidden md:block whitespace-nowrap">
                  House 562,
                  <br />
                  Sector A Askari 11,
                  <br />
                  Lahore, 54000.
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
export async function getServerSideProps(context) {
  const DoNotChange = "Contact";
  try {
    const res = await axios.get(
      `https://portal.themediagale.com/api/static-pages-metas?filters[DoNotChange][$eq]=${DoNotChange}&populate=*`,
      { timeout: 8000 }
    );
    const metaData =
      res.data.data && res.data.data?.length > 0
        ? res.data.data[0]?.attributes?.metaData
        : {};
    return { props: { metaData: metaData } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { metaData: {} } };
  }
}
