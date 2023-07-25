import React from "react";
import Image from "../Image/Image";
import { convertStringForImage } from "../../helpers/Helpers";
function section2Image(props) {
  const { imageGallery1, work } = props;
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Image
          width={500}
          height={300}
          alt="attributes"
          src={`https://beta.themediagale.com/public_images/${
            work?.gallery_second_title && work?.gallery_second_title !== ""
              ? convertStringForImage(work?.gallery_second_title)
              : "Women-Rise"
          }.png`}
          className="pb-10"
        />
      </div>
    </>
  );
}

export default section2Image;
