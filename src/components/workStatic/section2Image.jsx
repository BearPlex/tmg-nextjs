import React from 'react'

function section2Image(props) {
  const {imageGallery1,work}=props
//   console.log("Imageeeee",work?.gallery1.data[0].attributes.url)
  return (
<>
<div className='flex flex-col justify-center items-center'>
<img src={work[0].gallery1.src} className="my-10 "/>
</div>
</>
  )
}

export default section2Image;