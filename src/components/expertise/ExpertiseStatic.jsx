/* eslint-disable */
import HeadingThree from "../headings/HeadingThree";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "../Image/Image";
const ExpertiseStatic = (props) => {
  const { list, cssClass } = props;
  const router = useRouter();

  const pushWork = (id) => {
    router.push(`/work-detail-static/1`);
    // console.log("Id",id)
  };
  // console.log("Expertise Static Called");
  useEffect(() => {
    // console.log("List", list);
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex mt-14 items-center justify-between flex-wrap">
          {list.map((item, index) => (
            <div
              key={index}
              className="w-[47%] mb-16 cursor-pointer"
              onClick={() => pushWork(item.id)}>
              {/* {console.log("List", item)} */}
              <div>
                <div className="relative work-images h-full">
                  {/* <Image
                    width={500}
                    height={300}
                    src={item.featured_image.src}
                    alt="work images"
                    className="h-full block max-w-full object-cover"
                  /> */}
                </div>
                {/* {console.log("UR", item.attributes)} */}
                <div className="group">
                  {
                    // item.tags.map((tag, index) => <span key={index} className="inline-block mt-4 text-pink-400 uppercase text-md font-medium mr-4 tracking-widest">{tag}</span>
                    // )
                    // <span  className="inline-block mt-4 text-pink-400 uppercase text-md font-medium mr-4 tracking-widest">{    item.attributes?.work1Keyword1} {item.attributes?.work1Keyword2} {item.attributes?.work1Keyword3}</span>
                  }
                  <HeadingThree
                    title={item.featured_title}
                    cssClass={`my-4 text-4xl ${cssClass} transition group-hover:text-pink-400 group-hover:transition-all`}
                  />
                  <p className={`${cssClass} text-xl font-medium max-w-[90%]`}>
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
