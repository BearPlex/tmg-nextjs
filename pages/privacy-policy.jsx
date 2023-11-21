/* eslint-disable */
import Footer from "../src/components/footer/Footer";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import axios from "axios";
import SEOHeader from "../src/components/MetaData/SEOHeader";
const PrivacyPolicy = ({ metaData }) => {
  return (
    <>
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <div className="">
          {/* <Header /> */}
          <div className="pagePaddingX max-w-7xl mx-auto">
            <div className="mb-14">
              <h1 className="heading text-pink-500 mb-8">
                Privacy Policy and Guidelines
              </h1>
              <p className="paragraphBlack">
                At The MediaGale, accessible from https://themediagale.com/, one
                of our main priorities is the privacy of our visitors. This
                Privacy Policy document contains types of information that is
                collected and recorded by The MediaGale and how we use it.
                <div className="py-3" />
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us.
                <div className="py-3" />
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in The MediaGale.
                This policy is not applicable to any information collected
                offline or via channels other than this website.
              </p>
              <div className="my-5">
                <div className="smallHeading text-pink-500 py-4">Consent</div>
                <p className="paragraphBlack">
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  Information we collect
                </div>
                <p className="paragraphBlack">
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                  <div className="py-3" />
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and/or attachments you may
                  send us, and any other information you may choose to provide.
                  <div className="py-3" />
                  When you register for an Account, we may ask for your contact
                  information, including items such as name, company name,
                  address, email address, and telephone number.
                </p>
                <div className="py-3" />
                <div className="smallHeading text-pink-500 py-4">
                  How we use your information
                </div>
                <p className="paragraphBlack">
                  We use the information we collect in various ways, including
                  to:
                </p>

                <ul className="custom-dot-list paragraphBlack my-3">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>
                    Communicate with you, either directly or through one of our
                    partners, including for customer service, to provide you
                    with updates and other information relating to the website,
                    and for marketing and promotional purposes
                  </li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ul>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">Log Files</div>
                <p className="paragraphBlack">
                  {" "}
                  The MediaGale follows a standard procedure of using log files.
                  These files log visitors when they visit websites. All hosting
                  companies do this and a part of hosting services&apos;
                  analytics. The information collected by log files include
                  internet protocol (IP) addresses, browser type, Internet
                  Service Provider (ISP), date and time stamp, referring/exit
                  pages, and possibly the number of clicks. These are not linked
                  to any information that is personally identifiable. The
                  purpose of the information is for analyzing trends,
                  administering the site, tracking users&apos; movement on the
                  website, and gathering demographic information.
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  Cookies and Web Beacons
                </div>
                <p className="paragraphBlack">
                  Like any other website, The MediaGale uses "cookies". These
                  cookies are used to store information including visitors&apos;
                  preferences, and the pages on the website that the visitor
                  accessed or visited. The information is used to optimize the
                  users&apos; experience by customizing our web page content
                  based on visitors&apos; browser type and/or other information.
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  Our Advertising Partners
                </div>
                <p className="paragraphBlack">
                  Some of advertisers on our site may use cookies and web
                  beacons. Our advertising partners are listed below. Each of
                  our advertising partners has their own Privacy Policy for
                  their policies on user data. For easier access, we hyperlinked
                  to their Privacy Policies below.
                  <div className="py-3" />
                  <ul className="custom-dot-list paragraphBlack my-3">
                    <li className="mb-2 paragraphBlack">
                      <span className="paragraphBlack  ">
                        Google https:
                        <div className="py-3" />
                        //policies.google.com/technologies/ads
                      </span>
                    </li>
                  </ul>
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  Advertising Partners Privacy Policies
                </div>
                <p className="paragraphBlack">
                  You may consult this list to find the Privacy Policy for each
                  of the advertising partners of The MediaGale.
                  <div className="py-3" />
                  Third-party ad servers or ad networks uses technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on The
                  MediaGale, which are sent directly to users&apos; browser.
                  They automatically receive your IP address when this occurs.
                  These technologies are used to measure the effectiveness of
                  their advertising campaigns and/or to personalize the
                  advertising content that you see on websites that you visit.
                  <div className="py-3" />
                  Note that The MediaGale has no access to or control over these
                  cookies that are used by third-party advertisers.
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  Third Party Privacy Policies
                </div>
                <p className="paragraphBlack">
                  The MediaGale&apos;s Privacy Policy does not apply to other
                  advertisers or websites. Thus, we are advising you to consult
                  the respective Privacy Policies of these third-party ad
                  servers for more detailed information. It may include their
                  practices and instructions about how to opt-out of certain
                  options.
                  <div className="py-3" />
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers&apos; respective websites.
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  CCPA Privacy Rights (Do Not Sell My Personal Information)
                </div>
                <p className="paragraphBlack">
                  Under the CCPA, among other rights, California consumers have
                  the right to:
                  <div className="py-3" />
                  Request that a business that collects a consumer&apos;s
                  personal data disclose the categories and specific pieces of
                  personal data that a business has collected about consumers.
                  <div className="py-3" />
                  Request that a business delete any personal data about the
                  consumer that a business has collected.
                  <div className="py-3" />
                  Request that a business that sells a consumer&apos;s personal
                  data, not sell the consumer&apos;s personal data.
                  <div className="py-3" />
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  GDPR Data Protection Rights
                </div>
                <p className="paragraphBlack">
                  We would like to make sure you are fully aware of all of your
                  data protection rights. Every user is entitled to the
                  following:
                  <div className="py-3" />
                  The right to access – You have the right to request copies of
                  your personal data. We may charge you a small fee for this
                  service.
                  <div className="py-3" />
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate. You
                  also have the right to request that we complete the
                  information you believe is incomplete.
                  <div className="py-3" />
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                  <div className="py-3" />
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                  <div className="py-3" />
                  The right to object to processing – You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                  <div className="py-3" />
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you, under certain conditions.
                  <div className="py-3" />
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  Children&apos;s Information
                </div>
                <p className="paragraphBlack">
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.
                  <div className="py-3" />
                  The MediaGale does not knowingly collect any Personal
                  Identifiable Information from children under the age of 13. If
                  you think that your child provided this kind of information on
                  our website, we strongly encourage you to contact us
                  immediately and we will do our best efforts to promptly remove
                  such information from our records.
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  Changes to This Privacy Policy
                </div>
                <p className="paragraphBlack">
                  We may update our Privacy Policy from time to time. Thus, we
                  advise you to review this page periodically for any changes.
                  We will notify you of any changes by posting the new Privacy
                  Policy on this page. These changes are effective immediately,
                  after they are posted on this page.
                  <div className="py-3" />
                  Our Privacy Policy was created with the help of the Privacy
                  Policy Generator.
                </p>
                <div className="py-3" />

                <div className="smallHeading text-pink-500 py-4">
                  Contact Us
                </div>
                <p className="paragraphBlack">
                  If you have any questions or suggestions about our Privacy
                  Policy, do not hesitate to contact us.
                  <div className="py-3" />
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </PageWrapper>
    </>
  );
};
export default PrivacyPolicy;
export async function getServerSideProps(context) {
  const DoNotChange = "PrivacyPolicy";
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
