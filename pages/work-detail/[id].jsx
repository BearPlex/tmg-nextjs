import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Header from '../../src/components/header/Header';
import Section1 from "../../src/components/works/section1"
import ScreenShot from "../../src/assets/images/kinimo-ss1.png"
import Section2Image from "../../src/components/works/section2Image"
import axios from 'axios'
import Section3Image from '../../src/components/works/section3Image'
import Section4card from '../../src/components/works/section4card'
import Footer from '../../src/components/footer/Footer';
function WorkDetail() {
    const router = useRouter();
  
    const {
      query: { id  },
    } = router;
    const props = {
     
      id,
   
    };
    const [work,setWork]=useState([])
    // {console.log("Work",blogsData)}
    useEffect(()=>{
    axios.get(`http://localhost:1337/api/work-kinimos/${id}?populate=*`).then((res)=>{
        console.log("Res",res.data.data)
        setWork(res.data.data)
    }).catch((err)=>{
        console.log("Error",err)
    })
    },[])
  return (
   <>
    <section className="pt-20">
                <Header />
      <Section1 work={work?.attributes}  title1st="KINIMO" title2nd="COSMETICS" workHeading="Execute" />
      <Section2Image work={work?.attributes}/>
      <Section3Image work={work?.attributes}/>
      <Section4card/>
    <Footer/>
  </section>
   </>
  )
}

export default WorkDetail