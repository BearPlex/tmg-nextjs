import React, { useEffect, useState } from 'react'
import workFeature from "../../src/assets/images/work-feature.png"
import Header from '../../src/components/header/Header'
import Section1 from "../../src/components/works/section1"
import ScreenShot from "../../src/assets/images/kinimo-ss1.png"
import Section2Image from "../../src/components/works/section2Image"
import axios from 'axios'
import Section3Image from '../../src/components/works/section3Image'
import Section4card from '../../src/components/works/section4card'
const workDescription1st="Meet Kinimo Cosmetics: A Pakistani beauty brand founded in 2019, that focuses on the new age definition of beauty, offering high-quality natural products that inspire confidence and passion in everyone"
const workdescription2nd="They reached out to us for content creation, and website development along with SEO and since then our connection has been fruitful."
const imageGallery1=[
  {source:ScreenShot}
]

function richMond() {
  const [work,setWork]=useState([])
  // {console.log("Work",blogsData)}
  useEffect(()=>{
  axios.get("http://localhost:1337/api/work-kinimos?populate=*").then((res)=>{
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
      <Section1 work={work[7]?.attributes} featureImage={workFeature} title1st="KINIMO" title2nd="COSMETICS" workHeading="Execute" workDescription1st={workDescription1st} workdescription2nd={workdescription2nd}/>
      <Section2Image work={work[7]?.attributes} imageGallery1={imageGallery1}/>
      <Section3Image work={work[7]?.attributes}/>
      <Section4card/>
  </section>
   </>
  )
}

export default richMond;