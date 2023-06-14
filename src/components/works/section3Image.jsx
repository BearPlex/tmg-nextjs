import React from 'react'
import approch from "../../assets/images/approch1.png"
function section3Image(props) {
    const {work}=props
    console.log("Approch Data",work)
  return (
   <>
    <div className='flex  flex-col items-center justify-center'>
    <div className="pb-60 max-w-[80%] mt-16" >
                    <h2 id='beautyRef'  className="text-secondary-size mb-5 font-bold text-zinc-700 leading-none relative pl-6"><sup className="text-sm text-pink-400 font-medium inline-block absolute top-3 left-0">02</sup>{work?.gallery_second_title}</h2>
                    <p className="text-text-medium font-medium font-circular-medium text-zinc-700 pl-5">{work?.gallery_second_description}</p>
                </div>
                </div>

                <div className='flex justify-center'>
  
                <div className='flex justify-center'>
    {work?.gallery2.data.map((data)=>{
      return(
        // <img key={data?.attributes.id} src={`http://localhost:1337${data?.attributes.url}`} className="pb-12"/>
     <>
     </>
        )
    })}
</div>
 
</div>
   </>
  )
}

export default section3Image