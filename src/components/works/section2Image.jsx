import React from "react";
import Image from "../src/components/Image/Image";
function section2Image(props) {
  const { imageGallery1, work } = props;
  console.log("Imageeeee", work?.gallery1.data[0].attributes.url);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {work?.gallery1.data.map((data) => {
          return (
            <Image
              width={500}
              height={300}
              alt="attributes"
              key={data?.attributes.id}
              src={`http://localhost:1337${data?.attributes.url}`}
              className="my-10 "
            />
          );
        })}
      </div>
    </>
  );
}

export default section2Image;
