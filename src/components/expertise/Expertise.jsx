/* eslint-disable */
import { useRouter } from "next/router";
import Image from "../Image/Image";
import mainImage from "../../assets/svg/home_work_logo.svg";
import WorkCard from "../card/WorkCard";
import { convertStringForImage } from "../../helpers/Helpers";
const Expertise = (props) => {
  const { list, cssClass, backGroundBlack } = props;
  const router = useRouter();
  const pushWork = (id) => {
    router.push(`/work-detail/${id}`);
    // console.log("Id", id);
  };
  console.log(list);
  console.log("list");
  return (
    <>
      <div className="w-full">
        <div className="w-full hidden md:block">
          <div className="isolate grid grid-cols-2 componentsMainGap">
            <div className="w-full mb-20 ">
              <div className="md:w-4/5 w-[50%] lg:w-full   md:mr-auto mb-32">
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
                // console.log(https://tmg-strapi-w6pu3.ondigitalocean.app/public_images/);
                console.log("");
                console.log("");
                console.log("");
                console.log(item.attributes?.featured_title);
                console.log("item.attributes?.featured_title");
                console.log("");
                console.log("");
                return (
                  index % 2 === 0 && (
                    <div
                      key={index}
                      className="w-full mb-4 md:mb-20 cursor-pointer"
                      onClick={() => pushWork(item.id)}
                    >
                      {console.log("ITEM", item)}
                      <WorkCard
                        backGroundBlack={backGroundBlack}
                        // imageSrc="https://beta.themediagale.com/public_images/women-rise1.png"
                        imageSrc={`https://beta.themediagale.com/public_images/${convertStringForImage(
                          item.attributes?.featured_title
                        )}.png`}
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
                      <WorkCard
                        backGroundBlack={backGroundBlack}
                        imageSrc={`https://beta.themediagale.com/public_images/${convertStringForImage(
                          item.attributes?.featured_title
                        )}.png`}
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
        </div>
        <div className="w-full block md:hidden">
          <div className="grid grid-cols-1 componentsMainGap">
            <div className="w-full ">
              <div className="w-full lg:w-full md:mr-auto mb-10 my-5">
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
                    className="w-full mb-24 lg:mb-4 md:mb-20 cursor-pointer"
                    onClick={() => pushWork(item.id)}
                  >
                    {console.log("ITEM", item)}
                    <WorkCard
                      backGroundBlack={backGroundBlack}
                      imageSrc={`https://beta.themediagale.com/public_images/${convertStringForImage(
                        item.attributes?.featured_title
                      )}.png`}
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
        </div>
      </div>
    </>
  );
};
export default Expertise;
