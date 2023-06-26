import React from "react";
import arrowUp from "../../assets/images/arrow-up.png";
import Image from "../Image/Image";
function section4card() {
  return (
    <>
      <section className="background-gradient ">
        <div className="max-w-7xl mx-auto">
          <div className="  py-8 h-auto md:h-auto ">
            <h1 className="text-[50px] text-white font-bold mx-10 lg:mx-40 my:5 md:my-12">
              Results
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mx-10 lg:mx-40 justify-center items-center pb-12">
              <div className=" rounded-lg shadow-lg bg-[#D17172]  py-5 md:py-14 px-4">
                <Image
                  width={500}
                  height={300}
                  src={arrowUp.src}
                  alt="Logo 1"
                  className="w-12 object-cover rounded-t-lg relative top-5"
                />
                <div className="p-4">
                  <h2 className="text-[50px] leading-[70px] font-bold mb-2 text-white">
                    99.95%
                  </h2>
                  <p className="text-white">Increase in conversions</p>
                </div>
              </div>

              <div className=" rounded-lg shadow-lg bg-[#D17172] py-5 md:py-14 px-4">
                <Image
                  width={500}
                  height={300}
                  src={arrowUp.src}
                  alt="Logo 1"
                  className="w-12 object-cover rounded-t-lg relative top-5"
                />
                <div className="p-4">
                  <h2 className="text-[50px] text-white font-bold mb-2">
                    99.95%{" "}
                  </h2>
                  <p className="text-white">Increase in avg. session</p>
                </div>
              </div>

              <div className=" rounded-lg shadow-lg bg-[#D17172] py-5 md:py-14 px-4">
                <Image
                  decoding="async"
                  width={500}
                  height={300}
                  src={arrowUp.src}
                  alt="Logo 1"
                  className="w-12 object-cover rounded-t-lg relative top-5"
                />
                <div className="p-4">
                  <h2 className="text-[50px]  font-bold mb-2 text-white">
                    99.95%
                  </h2>
                  <p className="text-white">Decrease in Bounce Rate</p>
                </div>
              </div>
            </div>
            <h1 className="mx-10 lg:mx-40 py-5 md:py-14 text-white">
              Data collected every 3 months.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default section4card;
