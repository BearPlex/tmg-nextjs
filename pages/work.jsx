import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/Kota_logo.png";
import {work} from "../src/helpers/Helpers";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Expertise from "../src/components/expertise/Expertise";
import Footer from "../src/components/footer/Footer";
const Work = () => {
    return(
        <>
            <section className="pt-20">
                <Header />
                <section className="grid grid-cols-2 px-28 gap-4 pt-12 items-center">
                    <div className="w-full text-center">
                        <img src={kotaLogo.src} alt="kota canvas" loading="lazy" className="max-w-full" />
                    </div>
                    <div className="w-full">
                        <h4 className="mb-6 text-7xl font-bold leading-tight">We are experts in bringing brands to life digitally.</h4>
                        <p className="text-black font-medium text-[1.16rem]">
                            KOTA is a progressive and insightful design agency, technically and creatively skilled to translate your brand into its best digital self. Our design and development approach creates impactful,
                            engaging brands and immersive digital experiences that bring you a return on creativity.
                        </p>
                    </div>
                </section>
                <Tabs className="p-20 px-28 tabs-wrapper">
                    <TabList>
                        {
                            work.filter(x => x.hasOwnProperty('tabTitle')).map((item, index) => <Tab key={index}>{item.tabTitle}</Tab>)
                        }
                    </TabList>
                    {
                        work.map((item, index) => <TabPanel key={index}> <Expertise list={work} cssClass="text-black" /></TabPanel>)
                    }
                </Tabs>
            </section>

            <Footer />
        </>
    )
}
export default Work;