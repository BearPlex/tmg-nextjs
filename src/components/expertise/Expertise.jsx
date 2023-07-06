/* eslint-disable */
import { useRouter } from "next/router";
import Image from "../Image/Image";
import mainImage from "../../assets/svg/home_work_logo.svg";
import MainCard from "./cardData";
const Expertise = (props) => {
  const { list, cssClass } = props;
  const router = useRouter();
  let mobileScreen = false;
  if (window.innerWidth < 768) {
    mobileScreen = true;
    console.log("Window width is less than 768");
  } else {
    mobileScreen = false;
    console.log("Window width is 768 or greater");
  }
  const pushWork = (id) => {
    router.push(`/work-detail/${id}`);
    // console.log("Id", id);
  };
  console.log(list);
  console.log("list");
  return (
    <>
      <div className="w-full">
        {!mobileScreen ? (
          <div className="grid grid-cols-2 componentsMainGap">
            <div className="w-full mb-20 ">
              <div className="md:w-4/5 w-full md:mr-auto mb-32">
                <Image
                  width={0}
                  height={0}
                  src={mainImage.src}
                  layout="responsive"
                  objectFit="cover"
                  alt="work images"
                />
              </div>
              {list.map((item, index) => {
                return (
                  index % 2 === 0 && (
                    <div
                      key={index}
                      className="w-full mb-4 md:mb-20 cursor-pointer"
                      onClick={() => pushWork(item.id)}
                    >
                      {console.log("ITEM", item)}
                      <MainCard
                        imageSrc={`http://localhost:1337${item?.attributes?.featured_image?.data?.attributes?.url}`}
                        featured_title={item.attributes?.featured_title}
                        gallery_first_description={
                          item.attributes?.gallery_first_description
                        }
                        website_tag={item?.attributes?.website_tag}
                        branding_tag={item?.attributes?.branding_tag}
                        marketing_tag={item?.attributes?.marketing_tag}
                        seo_tag={item?.attributes?.seo_tag}
                        index={index}
                        bfBlack={false}
                      />
                    </div>
                  )
                );
              })}
            </div>
            <div className="w-full items-center">
              <div className="md:w-5/6 mt-10 md:mt-[18vw] xl:mt-[23vw] 2xl:mt-[23vw] 3xl:mt-[250px] md:mb-[10vw] xl:mb-[15vw] 2xl:mb-[17vw] 3xl:mb-[300px] ">
                <p className="largeHeadingWhite">
                  Collaborating with trending brands
                </p>
              </div>
              {list.map((item, index) => {
                return (
                  index % 2 !== 0 && (
                    <div
                      key={index}
                      className="w-full mb-4 md:mb-20 cursor-pointer"
                      onClick={() => pushWork(item.id)}
                    >
                      {console.log("ITEM", item)}
                      <MainCard
                        imageSrc={`http://localhost:1337${item?.attributes?.featured_image?.data?.attributes?.url}`}
                        featured_title={item.attributes?.featured_title}
                        gallery_first_description={
                          item.attributes?.gallery_first_description
                        }
                        website_tag={item?.attributes?.website_tag}
                        branding_tag={item?.attributes?.branding_tag}
                        marketing_tag={item?.attributes?.marketing_tag}
                        seo_tag={item?.attributes?.seo_tag}
                        index={index}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 componentsMainGap">
            <div className="w-full">
              <div className="md:w-4/5 w-full md:mr-auto mb-32">
                <Image
                  width={0}
                  height={0}
                  src={mainImage.src}
                  layout="responsive"
                  objectFit="cover"
                  alt="work images"
                />
              </div>
            </div>
            <div className="w-full items-center">
              <div className="w-full mb-20 flex justify-center items-center">
                <p className="largeHeadingWhite">
                  Collaborating with trending brands
                </p>
              </div>
              {list.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full mb-4 md:mb-20 cursor-pointer"
                    onClick={() => pushWork(item.id)}
                  >
                    {console.log("ITEM", item)}
                    <MainCard
                      imageSrc={`http://localhost:1337${item?.attributes?.featured_image?.data?.attributes?.url}`}
                      featured_title={item.attributes?.featured_title}
                      gallery_first_description={
                        item.attributes?.gallery_first_description
                      }
                      website_tag={item?.attributes?.website_tag}
                      branding_tag={item?.attributes?.branding_tag}
                      marketing_tag={item?.attributes?.marketing_tag}
                      seo_tag={item?.attributes?.seo_tag}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Expertise;
