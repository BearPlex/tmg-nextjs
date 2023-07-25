/* eslint-disable */

import { useRouter } from "next/router";
import Image from "../Image/Image";
const ExpertiseStatic = (props) => {
  const { list, cssClass } = props;
  const router = useRouter();

  const pushWork = (id) => {
    // router.push(`/work-detail-static/1`);
  };
  return (
    <>
      <div className="w-full">
        <div className="flex mt-4 md:mt-14 items-center justify-between flex-wrap">
          {list.map((item, index) => (
            <div
              key={index + 2600}
              className="w-[100%] my-16 cursor-pointer"
              onClick={() => pushWork(item.id)}
            >
              <div className="w-full flex flex-row componentsMainGap">
                <div className="relative w-1/2">
                  <Image
                    width={500}
                    height={300}
                    src={item.featured_image.src}
                    alt="work images"
                    objectFit="cover"
                  />
                </div>
                <div className="group w-1/2">
                  <div className="my-4 transition group-hover:text-pink-400 group-hover:transition-all">
                    {item.featured_title}
                  </div>
                  <p
                    className={`${cssClass} paragraph font-medium max-w-[90%]`}
                  >
                    {item.gallery_first_description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ExpertiseStatic;
