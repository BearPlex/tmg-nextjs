import React from "react";
import Image from "../Image/Image";
function section2Image(props) {
  const { imageGallery1, work } = props;
  function convertString(str) {
    return str.replace(/ /g, "-");
  }
  // console.log("Imageeeee", work?.gallery1.data[0].attributes.url);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {work?.gallery1?.data?.map((data) => {
          return (
            <>
              <div key={data?.attributes?.id}>{data?.attributes?.url}</div>
              {/* <Image
                width={500}
                height={300}
                alt="attributes"
                src={`https://tmg-strapi-w6pu3.ondigitalocean.app${data?.attributes.url}`}
                className="my-4 md:my-10 "
              /> */}
            </>
          );
        })}
      </div>
    </>
  );
}

export default section2Image;
