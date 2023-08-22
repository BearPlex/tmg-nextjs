import React from "react";
import Image from "../Image/Image";
import { convertStringForImage } from "../../helpers/Helpers";
function section2Image(props) {
  const { imageGallery1, work } = props;
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {work?.gallery_second_title && work?.gallery_second_title !== "" && (
          <Image
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
            alt="attributes"
            src={`https://beta.themediagale.com/public_images/${convertStringForImage(
              work?.gallery_second_title
            )}.png`}
            className="pb-10"
          />
        )}
      </div>
    </>
  );
}

export default section2Image;
