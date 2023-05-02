import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/Kota_logo.png";
import bannerImage from '../src/assets/images/header-image-1.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {blogs} from "../src/helpers/Helpers";
import Card from "../src/components/card/Card";
import Footer from "../src/components/footer/Footer";

const Blog = () => {
    return(
        <section className="pt-40">
            <Header />
            <section className="grid grid-cols-2 px-20 gap-4 pt-12 items-center">
                <div className="w-full text-center">
                    <img src={kotaLogo.src} alt="kota canvas" loading="lazy" className="max-w-full" />
                </div>
                <div className="w-full">
                    <h4 className="mb-6 text-7xl font-bold leading-tight">News, insights, and creative culture from KOTA studio.</h4>
                </div>
            </section>
            <div className="px-28 pt-20 h-[570px]">
                <a href="" className="relative blog-banner w-full h-full">
                    <img src={bannerImage.src} alt="banner" className="w-full h-full object-cover" />
                    <div className="absolute left-10 bottom-10">
                        <span className="text-pink-400 inline-block text-sm uppercase tracking-[1.5px] font-circular-medium pb-5">Featured News</span>
                        <h3 className="text-white max-w-[55%] font-sofia-bold text-[50px] leading-none">
                            5 examples of great E-Commerce product pages.
                        </h3>
                    </div>
                </a>
            </div>
            <div className="mt-4">
                <Tabs className="p-20 px-28 tabs-wrapper blog-tabs-wrapper w-full">
                    <TabList>
                             <Tab>All</Tab>
                             <Tab>Expertise</Tab>
                             <Tab>Inspiration</Tab>
                             <Tab>Our Work</Tab>
                             <Tab>Studio</Tab>
                    </TabList>
                    {
                        blogs.map((item, index) => <TabPanel key={index}>
                            <Card item={blogs} />
                        </TabPanel>
                        )
                    }
                </Tabs>
            </div>
            <Footer />
        </section>
    )
}
export default Blog;