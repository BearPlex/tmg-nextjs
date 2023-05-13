import Header from "../src/components/header/Header";
// import kotaLogo from "../src/assets/images/Kota_logo.png";
import kotaLogo from "../src/assets/images/tmg-logo.png";
import {work} from "../src/helpers/Helpers";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Expertise from "../src/components/expertise/Expertise";
import Footer from "../src/components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
// export async function getStaticProps(context) {

   
//     var blogsData;
   
//     try {
   
    
//       const res2 = await fetch("http://localhost:1337/api/works?populate=*");
//       blogsData = await res2.json();
    
   
//   console.log("Blogs",blogsData)
     
     
  
     
//     } catch (error) {
//       console.log("Error", error);
   
//       blogsData = null;
//     }
  
//     return {
//       props: { blogsData }, // props will be passed to the page
//     };
//   }
const Work = () => {
    const [work,setWork]=useState([])
    // {console.log("Work",blogsData)}
    useEffect(()=>{
    axios.get("http://localhost:1337/api/works?populate=*").then((res)=>{
        console.log("Res",res.data.data)
    
        axios.get("http://localhost:1337/api/work-kinimos?populate=*").then((res)=>{
            console.log("Dataaaaaaaaaa",res.data.data)
            setWork(res.data.data)
        })
    }).catch((err)=>{
        console.log("Error",err)
    })
    },[])
    return(
        <>
        {console.log("Wrok Array",work)}
     
            <section className="pt-20">
                <Header />
                <section className="">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 px-28 gap-10 pt-12 items-center">

                       
                    <div className="w-full text-center">
                        <img src={kotaLogo.src} alt="kota canvas" loading="lazy" className="max-w-full" />
                    </div>
                    <div className="w-full">
                        <h4 className="mb-6 text-7xl font-bold leading-tight">We are experts in bringing brands to life digitally.</h4>
                        <p className="text-black font-medium text-[1.16rem]">
                            TMG is a progressive and insightful design agency, technically and creatively skilled to translate your brand into its best digital self. Our design and development approach creates impactful,
                            engaging brands and immersive digital experiences that bring you a return on creativity.
                        </p>
                    </div>
                    </div>
                    </div>
                </section>
                <Tabs className="p-20 px-28 tabs-wrapper">
                    <TabList>
                        {
                            // work.filter(x => x.hasOwnProperty('tabTitle')).map((item, index) => <Tab key={index}>{item.tabTitle}</Tab>)
                            // work.map((item, index) => <Tab key={index}>Hello</Tab>)
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