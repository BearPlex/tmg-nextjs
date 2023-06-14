import React from 'react'
import arrowUp from "../../assets/images/arrow-up.png"
function section4card() {
    
  return (
   <>
   <section className='background-gradient '>
    <div className='max-w-7xl mx-auto'>
    <div class="  py-8 h-auto md:h-auto ">
      <h1 className='text-[50px] text-white font-bold mx-10 lg:mx-40 my-12'>Results</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-16 mx-10 lg:mx-40 justify-center items-center pb-12">
     
      <div class=" rounded-lg shadow-lg bg-[#D17172]  py-14 px-4">
        <img src={arrowUp.src} alt="Logo 1" class="w-12 object-cover rounded-t-lg relative top-5"/>
        <div class="p-4">
          <h2 class="text-[50px] leading-[70px] font-bold mb-2 text-white">99.95%</h2>
          <p class="text-white">Increase in conversions</p>
        </div>
      </div>

   
      <div class=" rounded-lg shadow-lg bg-[#D17172] py-14 px-4">
        <img src={arrowUp.src} alt="Logo 1" class="w-12 object-cover rounded-t-lg relative top-5"/>
        <div class="p-4">
          <h2 class="text-[50px] text-white font-bold mb-2">99.95% </h2>
          <p class="text-white">Increase in avg. session</p>
        </div>
      </div>


      <div class=" rounded-lg shadow-lg bg-[#D17172] py-14 px-4">
        <img src={arrowUp.src} alt="Logo 1" class="w-12 object-cover rounded-t-lg relative top-5"/>
        <div class="p-4">
          <h2 class="text-[50px]  font-bold mb-2 text-white">99.95%</h2>
          <p class="text-white">Decrease in Bounce Rate</p>
        </div>
      </div>
    </div>
    <h1 className='mx-10 lg:mx-40 py-12 text-white'>Data collected every 3 months.</h1>
  </div>
  </div>
  </section>
   </>
  )
}

export default section4card