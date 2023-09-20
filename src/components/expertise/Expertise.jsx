/* eslint-disable */
import { useRouter } from "next/router";
import Image from "../Image/Image";
import mainImage from "../../assets/svg/home_work_logo.svg";
import WorkCard from "../card/workCard";
const Expertise = (props) => {
  const { list, cssClass, backGroundBlack } = props;
  const router = useRouter();
  const pushWork = (id) => {
    router.push(`/work-detail/${id}`);
  };
  return (
    <>
      <div className="w-full">
        <div className="w-full hidden md:block">
          <div className="isolate grid grid-cols-2 componentsMainGap">
            <div className="w-full mb-20 ">
              <div className="md:w-4/5 w-[40%] lg:w-full   md:mr-auto mb-32">
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
                      key={index + 1400}
                      className="w-full mb-4 md:mb-20 cursor-pointer"
                      onClick={() => pushWork(item?.attributes?.slug)}
                    >
                      <WorkCard
                        backGroundBlack={backGroundBlack}
                        imageSrc={`${item.attributes?.cardImage?.data?.attributes?.url}`}
                        featured_title={item.attributes?.featured_title}
                        gallery_first_description={
                          item.attributes?.gallery_first_description
                        }
                        cardText={item.attributes?.cardText}
                        website_tag={item?.attributes?.website_tag}
                        branding_tag={item?.attributes?.branding_tag}
                        marketing_tag={item?.attributes?.marketing_tag}
                        seo_tag={item?.attributes?.seo_tag}
                        index={index + 1500}
                        bfBlack={false}
                      />
                    </div>
                  )
                );
              })}
            </div>
            <div className="w-full items-center">
              <div className="md:w-full mt-10 md:mt-[18vw] xl:mt-[23vw] 2xl:mt-[250px] md:mb-[10vw] xl:mb-[15vw] 2xl:mb-[300px]">
                <p className="headingWhite lg:text-5xl">
                  Collaborating with trending brands
                </p>
              </div>
              {list.map((item, index) => {
                return (
                  index % 2 !== 0 && (
                    <div
                      key={index + 1600}
                      className="w-full mb-4 md:mb-20 cursor-pointer"
                      onClick={() => pushWork(item?.attributes?.slug)}
                    >
                      <WorkCard
                        backGroundBlack={backGroundBlack}
                        imageSrc={`${item.attributes?.cardImage?.data?.attributes?.url}`}
                        featured_title={item.attributes?.featured_title}
                        gallery_first_description={
                          item.attributes?.gallery_first_description
                        }
                        website_tag={item?.attributes?.website_tag}
                        branding_tag={item?.attributes?.branding_tag}
                        cardText={item.attributes?.cardText}
                        marketing_tag={item?.attributes?.marketing_tag}
                        seo_tag={item?.attributes?.seo_tag}
                        index={index + 1700}
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
              <div className="w-full lg:w-full md:mr-auto md:mb-10 my-3 md:my-5">
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
              <div className="w-full mb-10 md:mb-20 flex justify-center items-center">
                <p className="largeHeadingWhite text-center">
                  Collaborating with trending brands
                </p>
              </div>
              {list.map((item, index) => {
                return (
                  <div
                    key={index + 1800}
                    className="w-full mb-10 md:mb-16 lg:mb-20 cursor-pointer"
                    onClick={() => pushWork(item?.attributes?.slug)}
                  >
                    <WorkCard
                      backGroundBlack={backGroundBlack}
                      imageSrc={`${item.attributes?.cardImage?.data?.attributes?.url}`}
                      cardText={item.attributes?.cardText}
                      featured_title={item.attributes?.featured_title}
                      gallery_first_description={
                        item.attributes?.gallery_first_description
                      }
                      website_tag={item?.attributes?.website_tag}
                      branding_tag={item?.attributes?.branding_tag}
                      marketing_tag={item?.attributes?.marketing_tag}
                      seo_tag={item?.attributes?.seo_tag}
                      index={index + 1900}
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
