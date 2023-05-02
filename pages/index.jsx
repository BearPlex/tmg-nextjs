import Header from "../src/components/header/Header";
import kotaLogo from '../src/assets/images/Kota_logo.png';
import danLogo from '../src/assets/images/dan_grey@2x.png';
import drumLogo from '../src/assets/images/the-drum-logo.png';
import clutchLogo from '../src/assets/images/Clutch_grey@2x.png';
import awardLogo from '../src/assets/images/awward_grey@2x.png';
import cssDesignLogo from '../src/assets/images/css-design-awards.png';
import HeadingOne from "../src/components/headings/HeadingOne";
import HeadingTwo from "../src/components/headings/HeadingTwo";
import Services from "../src/components/services/Services";
import Clients from "../src/components/clients/Clients";
import Articles from "../src/components/articles/Articles";
import Footer from "../src/components/footer/Footer";
import Expertise from "../src/components/expertise/Expertise";
import Agency from "../src/components/agency/Agency";
import {work} from "../src/helpers/Helpers";
import mainImage from '../src/assets/svg/home_work_logo.svg';
// import "swiper/css/bundle";
// import "./styles.css";

export default function Home() {
  return (
      <>
          <div className="pt-20">
              <Header />
          </div>
          <section className="px-20 pt-12">
            <div className="w-full flex justify-between items-center">
                <div className="w-[50%] text-center">
                    <img src={kotaLogo.src} alt="kota canvas" loading="lazy" className="max-w-full" />
                </div>
                <div className="w-[40%]">
                    <HeadingOne title="Rebel against boring" cssClass="mb-6" />
                    <p className="text-zinc-700 font-circular-medium font-medium text-[1.375rem]">We’re a creative web design agency based in <br/> London
                        that crafts beautiful and original websites <br /> for brands who <span className="pink-color">refuse to blend in</span>.
                    </p>
                </div>
            </div>
              <div className="flex items-center gap-6">
                <img src={danLogo.src} alt="dan logo" loading="lazy" className="w-[100px] object-contain"  />
                <img src={drumLogo.src} alt="the drum logo" loading="lazy" className="w-[100px] object-contain" />
                <img src={clutchLogo.src} alt="clutch logo" loading="lazy" className="w-[100px] object-contain" />
                <img src={awardLogo.src} alt="award logo" loading="lazy" className="w-[100px] object-contain" />
                <img src={cssDesignLogo.src} alt="award logo" loading="lazy" className="w-[100px] object-contain" />
              </div>
          </section>

            {/* making brands better section*/}
            <section className="flex justify-between items-center pt-20 pr-20 gap-4">
                <div className="video-wrapper w-[50%]">
                    <img src={kotaLogo.src} alt="video here" />
                </div>
                <div className="w-[40%]">
                    <HeadingTwo title="Making brands a damn site better" cssClass="mb-6 text-zinc-700" />
                    <p className="paragraph">Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.</p>
                </div>
            </section>
            {/* creative digital agency section*/}

            <div className="p-20">
                <h2 className="max-w-[70%] w-full pb-60 font-bold font-sofia-bold text-zinc-700 text-secondary-size leading-tight">
                    Our creative digital agency designs and develops bespoke websites with <span className="pink-color">three things in mind;</span>
                </h2>
                <Agency />
            </div>

            <section className="bg-zinc-800 px-20 py-28 mt-28">
                <div className="flex items-center justify-between">
                    <div className="w-[47%]">
                        <img src={mainImage.src} className="w-96 mx-auto" alt="work images" />
                    </div>
                    <div className="w-[47%] pt-64">
                        <HeadingTwo cssClass="text-white" title="Shit-hot work for hot-shot brands" />
                    </div>
                </div>
                <Expertise list={work} cssClass="text-white" />
            </section>
            <Services />
            <Clients />
            <Articles />
            <Footer />
      </>
   )
}
