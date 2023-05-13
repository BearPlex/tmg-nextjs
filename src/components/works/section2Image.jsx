import React from 'react'

function section2Image(props) {
  const {imageGallery1,work}=props
  console.log("Imageeeee",work?.gallery1.data[0].attributes.url)
  return (
<>
<div className='flex flex-col justify-center items-center'>
    {work?.gallery1.data.map((data)=>{
      return(
        <img src={`http://localhost:1337${data?.attributes.url}`} className="mb-10 "/>
      )
    })}
</div>
</>
  )
}

export default section2Image;