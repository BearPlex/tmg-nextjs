import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/Blog-pic.png";
import bannerImage from '../src/assets/images/header-image-1.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import {blogs} from "../src/helpers/Helpers";
import Card from "../src/components/card/Card";
import Footer from "../src/components/footer/Footer";

import { useEffect, useState } from "react";
import axios from "axios";
// {console.log("Work",blogsData)}

const Blog = () => {
    const [blogs,setBlogs]=useState([])
useEffect(()=>{
axios.get("http://localhost:1337/api/blogs?populate=*").then((res)=>{
    console.log("Res Blogs",res.data.data)
    setBlogs(res.data.data)
}).catch((err)=>{
    console.log("Error",err)
})
},[])
    return(
        <section className="pt-40">
            <Header />
            <section className="grid grid-cols-2 px-20 gap-4 pt-12 items-center">
                <div className="w-full text-center">
                    <img src={kotaLogo.src} alt="kota canvas" loading="lazy" className="max-w-full" />
                </div>
                <div className="w-full">
                    <h4 className="mb-6 text-7xl font-bold leading-tight">News, insights, and creative culture from TMG.</h4>
                    <p className="text-2xl">Because it should never just be work, it should
be<span className="text-[#F79B60]"> a work of art</span> </p>
<button class="relative w-72  h-14 mt-12 rounded-full overflow-hidden">
    <div className="">
  <div class="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
  <div class="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
  <p class="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
    Book Free  {" "}<span className="text-pink-500">  {" "}Consultation Today</span>
  </p>
  </div>
</button>
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