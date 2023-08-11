/* eslint-disable */
import React from "react";
import bottle from "../src/assets/images/bottle-img.png";
import logo from "../src/assets/images/circle-logo.png";
import testimonial from "../src/assets/images/testimonial1.png";
import prev from "../src/assets/images/prev-button.png";
import next from "../src/assets/images/next-button.png";
import Image from "../src/components/Image/Image";
function evolver() {
  return (
    <>
      {/* <div className="bgWhite">
  <div className="  ">
  
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
   
<svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 gradient" aria-hidden="true">
  <circle cx="512" cy="512" r="512" className="fill-current text-transparent" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
  <defs>
    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
      <stop stop-color="#7775D6" />
      <stop offset="1" stop-color="#E935C1" />
    </radialGradient>
  </defs>
</svg>


      <h2 className="mx-auto max-w-2xl smallHeading font-bold tracking-tight text-white sm:heading">Boost your productivity today.</h2>
      <p className="mx-auto mt-0 md:mt-2 lg:mt-6 max-w-xl smallText leading-8 blackDescriptionText">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div className="mt-4 md:mt-10 flex items-center justify-center gap-x-6">
        <a href="#" className="rounded-md bgWhite px-3.5 py-2.5 smallText font-semibold blackDescriptionText shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
        <a href="#" className="smallText font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
      </div>
     
    </div>
  </div>
</div> */}

      <main className="py-14  bg-gradient-to-b from-blue-900 to-black">
        <div className=" overflow-hidden  px-6 py-24 text-center  sm:px-16">
          <div className="flex justify-center pb-10">
            <Image
              width={500}
              height={300}
              src={logo.src}
              alt="logo"
              className="items-center"
            />
          </div>

          <h2 className="mx-auto max-w-2xl smallHeading font-bold tracking-tight text-white sm:heading">
            Try QUANTUMiND risk-free for 20 days you can even keep the bottles
          </h2>
          <p className="mx-auto mt-0 md:mt-2 lg:mt-6 max-w-xl paragraph leading-8 blackHeadingText">
            if QUANTUMIND doesn’t transform your life or you don’t feel the
            difference for up to 20 days since your purchase, email our support
            team and we’ll give you a complete refund - no questions asked. You
            can even keep the bottles (limited to one bottle).
          </p>
        </div>

        <div className=" px-2 sm:px-0" id="cart-section">
          <div className="mx-auto  grid max-w-lg grid-cols-1 items-center gap-y-6  sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 gap-8 ">
            <div className="rounded-2xl transition duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-50 hover:opacity-80">
              <Image
                width={500}
                height={300}
                src={bottle.src}
                alt="bottle"
                className="rounded-3xl  hover:border-[#15abc9]"
              />
              <div className="mx-auto mt-5 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                  <div className="my-8 md:my-0 ">
                    <Image
                      width={500}
                      height={300}
                      src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/checkouts%201.svg"
                      alt="evolvere-repo"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 relative bg-[#F9FAFB] ">
                            <h3 id="tier-enterprise" className=" font-bold heading leading-9 text-[#1B1B1B]">
                            QUANTUMiND

                            </h3>
                            <div>
                            <p className="mt-4 text-base leading-7 blackDescriptionText font-bold">
                            20 Servings

                            </p>
                            <span className=''>
                            Price on Website:<span className=' line-through text-red-600'> $54.99</span>

                            </span>
                            </div>
                            <p className="mt-4 text-base leading-5 blackDescriptionText font-semibold">
                            Price for facebook and instagram<br/> users today:

                            </p>
                            <div className="text-[#1B1B1B] font-semibold heading mt-2">
                          $48.74 
                          </div>
                         
                                                <div className="flex gap-2 items-center mt-4 pt-2">
                          
                          <Image decoding="async" width={500} height={300} src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Featured%20icon%20(4).svg" alt=""/>
        
                        
                  <p className="font-poppins-regular smallText blackDescriptionText ">
                  One-time payment SAVE 20%
                  </p>
        
                      </div>
                      <div className="flex gap-2 items-center mt-4 pt-2">
                          
                          <Image decoding="async" width={500} height={300} src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Featured%20icon%20(4).svg" alt=""/>
        
                        
                  <p className="font-poppins-regular smallText blackDescriptionText ">
                  20-DAY Money back guarantee for first - time orders
                  </p>
        
                      </div>
                      <div className="flex gap-2 items-center mt-4 pt-2">
                          
                          <Image decoding="async" width={500} height={300} src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Featured%20icon%20(4).svg" alt=""/>
        
                        
                  <p className="font-poppins-regular smallText blackDescriptionText ">
                  Subscribe & Save + Free Shipping

                  </p>
        
                      </div>
                                            <a href="https://youtube.com" id="subscribe-button" className="mt-5 block  py-2.5 px-3.5 text-center smallText lg:smallText font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-6 bg-[#12B76A] text-white shadow-sm rounded-full hover:bg-[#0f9cb9] lg:py-4">Try Risk Free</a>

                        
                          </div> */}
            <div className="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 relative bg-[#F9FAFB] ">
              <h3
                id="tier-enterprise"
                className=" font-bold headingBlack leading-9"
              >
                EQUILIBRIUM
              </h3>

              <p className="mt-4 leading-7 paragraphBlack">
                Premium adaptogenic blend for a calmer, more stress-resilient
                brain. Take 2-3 capsules per day.
              </p>
              <div className="mt-0 md:mt-2 lg:mt-6 relative flex py-3 flex-col bg-[#FFFFFF] border border-[#12ABC9] px-3  rounded-2xl">
                <div className="font-poppins-regular text-base blackDescriptionText flex justify-between items-center">
                  Subscribe &amp; save 25% + free shipping:
                  <input
                    type="radio"
                    name="billing-frequency"
                    value="monthly"
                    id="monthly-radio"
                    checked=""
                    onclick="UpdateButton()"
                  />
                </div>

                <div className="headingBlack font-semibold heading mt-2">
                  $48.74
                </div>
              </div>
              <div className="mt-0 md:mt-2 lg:mt-6 relative flex py-3 flex-col bg-[#F9FAFB] border border-[#12ABC9] px-3  rounded-2xl">
                <div className="font-poppins-regular text-base blackDescriptionText flex justify-between">
                  One-time purchase:
                  <input
                    type="radio"
                    name="billing-frequency"
                    value="monthly"
                    id="monthly-radio"
                    onclick="updateButton()"
                  />
                </div>
                <div className="font-semibold headingBlack mt-2">$64.99</div>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <div className="">
                  <dh-component>
                    <div>
                      <a
                        tabindex="0"
                        aria-label="tooltip 3"
                        role="link"
                        className=" rounded-full flex gap-2 items-center relative"
                        onmouseover="showTooltip(3)"
                        onfocus="showTooltip(3)"
                        onmouseout="hideTooltip(3)"
                      >
                        <div className=" cursor-pointer">
                          <Image
                            width={500}
                            height={300}
                            src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Icon%20(16).svg"
                            alt="evolvere-repo"
                          />
                        </div>
                        <div
                          id="tooltip3"
                          role="tooltip"
                          className="z-20 w-64 absolute transition duration-150 ease-in-out left-0 mt-40 shadow-lg bg-[#FFFFFF] p-4 rounded-[25px] tooltip hidden"
                        >
                          <p className="paragraph pb-1">
                            How subscription works?
                          </p>
                          <p className="paragraph leading-4 blackDescriptionText pb-0 md:pb-3">
                            Products are automatically delivered on your
                            schedule. No obligation, modify or cancel your
                            subscription anytime.
                          </p>
                          <p className="paragraph leading-4 blackDescriptionText pb-0 md:pb-3">
                            <b>Note: </b> 30-Days Money Back Guarantee only
                            applies on first purchase.
                          </p>
                        </div>
                        <div className="font-poppins-regular smallText blackDescriptionText whitespace-nowrap cursor-pointer">
                          Subscription Details
                        </div>
                      </a>
                    </div>
                  </dh-component>
                </div>

                <div></div>
              </div>
              <a
                href="https://youtube.com"
                id="subscribe-button"
                className="mt-5 block  py-2.5 px-3.5 text-center smallText lg:smallText font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-6 bg-[#12ABC9] text-white shadow-sm rounded-full hover:bg-[#0f9cb9] lg:py-4"
              >
                Subscribe Now
              </a>

              <div className="flex gap-2 items-center mt-4 pt-2">
                <Image
                  width={500}
                  height={300}
                  src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Featured%20icon%20(4).svg"
                  alt="evolvere-repo"
                />

                <p className="font-poppins-regular smallText blackDescriptionText ">
                  20-day Money Back Guarantee on First Purchase
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Checkout Options Image --> */}

        {/* <!-- FAQ section --> */}
      </main>

      {/* Testmonials Section */}

      <section className="bgWhite px-6 pagePaddingX 3xl:max-w-7xl 3xl:mx-auto">
        <div className="flex justify-between componentsMainGap">
          <figure className="">
            <p className="sr-only">5 out of 5 stars</p>
            <div className="flex gap-x-1 text-yellow-500">
              <svg
                className="h-5 w-5 flex-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-5 w-5 flex-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-5 w-5 flex-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-5 w-5 flex-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-5 w-5 flex-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <blockquote className="mt-4 md:mt-10 paragraph font-semibold leading-8 tracking-tight text-gray-900 sm:largeParagraph sm:leading-9">
              <p>
                “I’ve taken Adderall when I was in college and this is the best
                clean supplement you take every single day that enhances your
                mental creativity, cognition, and everything else that you need
                to be the best, most successful, positive, healthy, and fit
                version of yourself so I highly recommend it. Not even making a
                bold claim here”
              </p>
            </blockquote>
            <figcaption className="mt-4 md:mt-10 flex justify-between gap-x-6">
              <div className="smallText leading-6">
                <div className=" text-gray-900 smallText font-bold">
                  Mounir L.
                </div>
                <div className="mt-0.5 text-gray-600">United States</div>
              </div>
              <div className="flex gap-x-12">
                <Image
                  width={500}
                  height={300}
                  src={prev.src}
                  alt="prev"
                  className="cursor-pointer"
                />
                <Image
                  width={500}
                  height={300}
                  src={next.src}
                  alt="prev"
                  className="cursor-pointer"
                />
              </div>
            </figcaption>
          </figure>
          <Image
            width={500}
            height={300}
            alt="testimonial"
            src={testimonial.src}
          />
        </div>
      </section>
    </>
  );
}

export default evolver;
