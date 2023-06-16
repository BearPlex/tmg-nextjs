import React from "react";
import bottle from "../src/assets/images/bottle-img.png";
import logo from "../src/assets/images/circle-logo.png";
import testimonial from "../src/assets/images/testimonial1.png";
import prev from "../src/assets/images/prev-button.png";
import next from "../src/assets/images/next-button.png";
function evolver() {
  return (
    <>
      {/* <div class="bg-white">
  <div class="  ">
  
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
   
<svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 gradient" aria-hidden="true">
  <circle cx="512" cy="512" r="512" class="fill-current text-transparent" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
  <defs>
    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
      <stop stop-color="#7775D6" />
      <stop offset="1" stop-color="#E935C1" />
    </radialGradient>
  </defs>
</svg>


      <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity today.</h2>
      <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
        <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
      </div>
     
    </div>
  </div>
</div> */}

      <main class="py-14  bg-gradient-to-b from-blue-900 to-black">
        <div class=" overflow-hidden  px-6 py-24 text-center  sm:px-16">
          <div class="flex justify-center pb-10">
            <img src={logo.src} class="items-center" />
          </div>

          <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Try QUANTUMiND risk-free for 20 days you can even keep the bottles
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            if QUANTUMIND doesn’t transform your life or you don’t feel the
            difference for up to 20 days since your purchase, email our support
            team and we’ll give you a complete refund - no questions asked. You
            can even keep the bottles (limited to one bottle).
          </p>
        </div>

        <div class=" px-2 sm:px-0" id="cart-section">
          <div class="mx-auto  grid max-w-lg grid-cols-1 items-center gap-y-6  sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 gap-8 ">
            <div class="rounded-2xl transition duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-50 hover:opacity-80">
              <img
                src={bottle.src}
                alt=""
                class="rounded-3xl  hover:border-[#15abc9]"
              />
              <div class="mx-auto mt-5 max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
                  <div class="my-8 md:my-0 ">
                    <img
                      src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/checkouts%201.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 relative bg-[#F9FAFB] ">
                            <h3 id="tier-enterprise" class=" font-bold text-4xl leading-9 text-[#1B1B1B]">
                            QUANTUMiND

                            </h3>
                            <div>
                            <p class="mt-4 text-base leading-7 text-gray-700 font-bold">
                            20 Servings

                            </p>
                            <span class=''>
                            Price on Website:<span class=' line-through text-red-600'> $54.99</span>

                            </span>
                            </div>
                            <p class="mt-4 text-base leading-5 text-gray-700 font-semibold">
                            Price for facebook and instagram<br/> users today:

                            </p>
                            <div class="text-[#1B1B1B] font-semibold text-4xl mt-2">
                          $48.74 
                          </div>
                         
                                                <div class="flex gap-2 items-center mt-4 pt-2">
                          
                          <img src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Featured%20icon%20(4).svg" alt=""/>
        
                        
                  <p class="font-normal text-sm text-gray-700 ">
                  One-time payment SAVE 20%
                  </p>
        
                      </div>
                      <div class="flex gap-2 items-center mt-4 pt-2">
                          
                          <img src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Featured%20icon%20(4).svg" alt=""/>
        
                        
                  <p class="font-normal text-sm text-gray-700 ">
                  20-DAY Money back guarantee for first - time orders
                  </p>
        
                      </div>
                      <div class="flex gap-2 items-center mt-4 pt-2">
                          
                          <img src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Featured%20icon%20(4).svg" alt=""/>
        
                        
                  <p class="font-normal text-sm text-gray-700 ">
                  Subscribe & Save + Free Shipping

                  </p>
        
                      </div>
                                            <a href="https://youtube.com" id="subscribe-button" class="mt-5 block  py-2.5 px-3.5 text-center text-sm lg:text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-6 bg-[#12B76A] text-white shadow-sm rounded-full hover:bg-[#0f9cb9] lg:py-4">Try Risk Free</a>

                        
                          </div> */}
            <div class="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 relative bg-[#F9FAFB] ">
              <h3
                id="tier-enterprise"
                class=" font-bold text-4xl leading-9 text-[#1B1B1B]"
              >
                EQUILIBRIUM
              </h3>

              <p class="mt-4 text-base leading-7 text-gray-700">
                Premium adaptogenic blend for a calmer, more stress-resilient
                brain. Take 2-3 capsules per day.
              </p>
              <div class="mt-6 relative flex py-3 flex-col bg-[#FFFFFF] border border-[#12ABC9] px-3  rounded-2xl">
                <div class="font-normal text-base text-[#1F2937] flex justify-between items-center">
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

                <div class="text-[#1B1B1B] font-semibold text-4xl mt-2">
                  $48.74
                </div>
              </div>
              <div class="mt-6 relative flex py-3 flex-col bg-[#F9FAFB] border border-[#12ABC9] px-3  rounded-2xl">
                <div class="font-normal text-base text-[#1F2937] flex justify-between">
                  One-time purchase:
                  <input
                    type="radio"
                    name="billing-frequency"
                    value="monthly"
                    id="monthly-radio"
                    onclick="updateButton()"
                  />
                </div>
                <div class="text-[#1B1B1B] font-semibold text-4xl mt-2">
                  $64.99
                </div>
              </div>
              <div class="flex gap-2 items-center mt-4">
                <div class="">
                  <dh-component>
                    <div>
                      <a
                        tabindex="0"
                        aria-label="tooltip 3"
                        role="link"
                        class=" rounded-full flex gap-2 items-center relative"
                        onmouseover="showTooltip(3)"
                        onfocus="showTooltip(3)"
                        onmouseout="hideTooltip(3)"
                      >
                        <div class=" cursor-pointer">
                          <img
                            src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Icon%20(16).svg"
                            alt=""
                          />
                        </div>
                        <div
                          id="tooltip3"
                          role="tooltip"
                          class="z-20 w-64 absolute transition duration-150 ease-in-out left-0 mt-40 shadow-lg bg-[#FFFFFF] p-4 rounded-[25px] tooltip hidden"
                        >
                          <p class="text-sm font-medium text-[#1B1B1B] pb-1">
                            How subscription works?
                          </p>
                          <p class="text-xs leading-4 text-[#1F2937] pb-3">
                            Products are automatically delivered on your
                            schedule. No obligation, modify or cancel your
                            subscription anytime.
                          </p>
                          <p class="text-xs leading-4 text-[#1F2937] pb-3">
                            <b>Note: </b> 30-Days Money Back Guarantee only
                            applies on first purchase.
                          </p>
                        </div>
                        <div class="font-normal text-sm text-gray-700 whitespace-nowrap cursor-pointer">
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
                class="mt-5 block  py-2.5 px-3.5 text-center text-sm lg:text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-6 bg-[#12ABC9] text-white shadow-sm rounded-full hover:bg-[#0f9cb9] lg:py-4"
              >
                Subscribe Now
              </a>

              <div class="flex gap-2 items-center mt-4 pt-2">
                <img
                  src="https://evolvere-repo.s3.us-west-2.amazonaws.com/assets/equilibrium/Featured%20icon%20(4).svg"
                  alt=""
                />

                <p class="font-normal text-sm text-gray-700 ">
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

      <section class="bg-white px-6 py-24 sm:py-32 lg:px-8 max-w-7xl mx-auto">
        <div class="flex justify-between gap-20">
          <figure class="">
            <p class="sr-only">5 out of 5 stars</p>
            <div class="flex gap-x-1 text-yellow-500">
              <svg
                class="h-5 w-5 flex-none"
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
                class="h-5 w-5 flex-none"
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
                class="h-5 w-5 flex-none"
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
                class="h-5 w-5 flex-none"
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
                class="h-5 w-5 flex-none"
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
            <blockquote class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “I’ve taken Adderall when I was in college and this is the best
                clean supplement you take every single day that enhances your
                mental creativity, cognition, and everything else that you need
                to be the best, most successful, positive, healthy, and fit
                version of yourself so I highly recommend it. Not even making a
                bold claim here”
              </p>
            </blockquote>
            <figcaption class="mt-10 flex justify-between gap-x-6">
              {/* <img class="h-12 w-12 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80" alt=""/> */}
              <div class="text-sm leading-6">
                <div class=" text-gray-900 text-lg font-bold">Mounir L.</div>
                <div class="mt-0.5 text-gray-600">United States</div>
              </div>
              <div class="flex gap-x-12">
                <img src={prev.src} class="cursor-pointer" />
                <img src={next.src} class="cursor-pointer" />
              </div>
            </figcaption>
          </figure>
          <img src={testimonial.src} />
        </div>
      </section>
    </>
  );
}

export default evolver;
