import React from "react";
import Image from "../Image/Image";
import arrowUp from "../../assets/images/arrow-up.png";
//

// BEING USED IN WORK

//

function section4card({
  conversionRate = 99.99,
  sessionRate = 99.99,
  bounceRate = 99.99,
}) {
  return (
    <>
      <section className="background-gradient ">
        <div className="">
          <div className="py-8 h-auto md:h-auto pagePaddingX max-w-7xl mx-auto">
            <h2 className="largeHeading text-white font-bold my-5 md:my-12">
              Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 componentsMainGap justify-center items-center pb-10">
              <div className=" imageRounded shadow-lg bg-[#D17172]  py-3 md:py-10 px-4">
                <Image
                  width={500}
                  height={300}
                  src={arrowUp.src}
                  alt="Logo 1"
                  //   loading="lazy"
                  // layout="responsive"
                  // objectFit="cover"
                  className="w-12 object-cover rounded-t-lg relative top-5"
                />
                <div className="p-4">
                  <h2 className="largeHeading leading-[70px] font-bold mb-2 text-white">
                    {conversionRate?.rate}%
                  </h2>
                  <p className="text-white">{conversionRate?.name}</p>
                </div>
              </div>

              <div className=" imageRounded shadow-lg bg-[#D17172] py-3 md:py-10 px-4">
                <Image
                  width={500}
                  height={300}
                  src={arrowUp.src}
                  alt="Logo 1"
                  className="w-12 object-cover rounded-t-lg relative top-5"
                />
                <div className="p-4">
                  <h2 className="largeHeading text-white font-bold mb-2">
                    {sessionRate?.rate}%{" "}
                  </h2>
                  <p className="text-white">{sessionRate?.name}</p>
                </div>
              </div>

              <div className=" imageRounded shadow-lg bg-[#D17172] py-3 md:py-10 px-4">
                <Image
                  width={500}
                  height={300}
                  src={arrowUp.src}
                  alt="Logo 1"
                  className="w-12 object-cover rounded-t-lg relative top-5"
                />
                <div className="p-4">
                  <h2 className="largeHeading  font-bold mb-2 text-white">
                    {bounceRate?.rate}%
                  </h2>
                  <p className="text-white">{bounceRate?.name}</p>
                </div>
              </div>
            </div>
            <h2 className="py-3 md:py-10 text-white">
              Data collected every 3 months.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default section4card;
