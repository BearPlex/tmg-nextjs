/* eslint-disable */
import blogImage from "../src/assets/images/blog-img.png";
import Footer from "../src/components/footer/Footer";
import Image from "../src/components/Image/Image";

const blogDetail = () => {
  return (
    <div className="my-8 md:my-10 px-28">
      <span className="text-pink-400 smallText tracking-widest">
        05ht August 2022
      </span>
      <div className="headingBlack">Designing more sustainable websites.</div>
      <div>
        <span className="text-base text-pink-400 uppercase mt-3">BY IZZY</span>
      </div>
      <div className="max-w-2xl w-full mx-auto">
        <div className="heading text-pink-400">Introduction</div>
        <p className="paragraphBlack pb-7 md:pb-20">
          Did you know that if the internet was a country, it would be the
          world’s 7th biggest polluter, emitting 1.6 billion annual tons in
          greenhouse gas emissions? As a planet, we are currently facing
          unprecedented levels of climate change, and the internet plays a
          sizeable part in this problem. From websites to cryptocurrencies, it
          consumes large amounts of electricity in data centres, telecom
          networks, and end-user devices. Find out how web technology can still
          be efficient with low-carbon digital products and services.
        </p>
        <div className="heading text-pink-400 pb-10">
          Understanding your digital footprint.
        </div>
        <p className="paragraphBlack">
          As organisations produce more content, such as launching websites and
          hosting viral workshops, their digital footprint grows and expands. It
          can be seen that while many organisations assess the environmental
          impact of their office space, supply chain, or business practices,
          it’s not common for them to evaluate the carbon footprint of their
          online properties. Considering the rate at which the internet is
          expanding, this is a problem that needs to be addressed.
          <span className="gradientText">Digital Beacon</span> is a great tool
          for calculating the environmental impact of your website, analysing
          the breakdown and learning what measures can be taken to improve it.
          You can enter any website URL and receive a score rating and breakdown
          of the areas that are causing the most impact and how much extra C02
          is contributing to the atmosphere. We highly recommend everyone do
          this as a starter.
        </p>
        <div>
          <Image
            decoding="async"
            width={0}
            height={0}
            src={blogImage}
            objectFit="cover"
            alt="blog image"
          />
          <p className="paragraphBlack">
            Sustainable web design is the process of designing digital products
            that put people and the planet first. Tom Greenwood, author of{" "}
            <span className="gradientText">Sustainable Web Design</span>{" "}
            explains
          </p>
          <p className="paragraphBlack">
            “Sustainable web design is an approach to{" "}
            <i>
              designing web services that prioritises the health of our home
              planet;
            </i>
            at its core is a focus on reducing carbon emissions and energy
            consumption. Business, design, and technology can be part of the
            solution, but only if environmental protection is at the core of key
            decisions and not an afterthought.”
          </p>
          <p className="paragraphBlack">
            It follows the principles of the Sustainable Web Manifesto, which
            calls for an internet that is:
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default blogDetail;
