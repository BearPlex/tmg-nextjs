/* eslint-disable */
import { useRouter } from "next/router";
import Image from "../Image/Image";
const Expertise = (props) => {
  const { list, cssClass } = props;
  const router = useRouter();

  const pushWork = (id) => {
    router.push(`/work-detail/${id}`);
    // console.log("Id", id);
  };
  // console.log("Expertise Called");
  return (
    <>
      <div className="w-full">
        <div className="flex mt-4 md:mt-14 items-center componentsMainGap justify-between flex-wrap">
          {list.map((item, index) => (
            <div
              key={index}
              className="w-[47%] mb-4 md:mb-10 cursor-pointer"
              onClick={() => pushWork(item.id)}
            >
              {/* {console.log("List", item)} */}
              <div>
                <div className="relative work-images h-full">
                  <Image
                    width={500}
                    height={300}
                    src={`http://localhost:1337${item.attributes?.featured_image.data.attributes?.url}`}
                    alt="work images"
                    className="h-full block max-w-full object-cover"
                  />
                </div>
                {/* {console.log("UR", item.attributes)} */}
                <div className="group">
                  {
                    // item.tags.map((tag, index) => <span key={index} className="inline-block mt-4 text-pink-400 uppercase text-md font-medium mr-4 tracking-widest">{tag}</span>
                    // )
                    // <span  className="inline-block mt-4 text-pink-400 uppercase text-md font-medium mr-4 tracking-widest">{    item.attributes?.work1Keyword1} {item.attributes?.work1Keyword2} {item.attributes?.work1Keyword3}</span>
                  }
                  <div className="my-4 heading leading-tight tracking-[-0.075rem] transition group-hover:text-pink-400 group-hover:transition-all">
                    {item.attributes?.featured_title}
                  </div>
                  <p className={`${cssClass} paragraph max-w-[90%]`}>
                    {item.attributes?.gallery_first_description}
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
export default Expertise;
