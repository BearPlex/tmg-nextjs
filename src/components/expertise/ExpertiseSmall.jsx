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
  };
  return (
    <>
      <div className="w-full">
        <div className="w-full hidden md:block">
          <div className="isolate items-end  ">
            <div className="w-full flex flex-row justify-end items-end mb-20 h-full componentsMainGap">
              <div className="w-[50%] h-full xl2Heading text-[#EE2760] bg-red-500-200 flex-col">
                <div className="my-16 w-[50%] ">Featured Projects</div>
                {list.map((item, index) => {
                  return (
                    index === 1 && (
                      <div
                        key={index}
                        className="w-full mb-4 md:mb-20 cursor-pointer"
                        onClick={() => pushWork(item.id)}
                      >
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
              <div className="w-[50%] h-full">
                {list.map((item, index) => {
                  return (
                    index == 0 && (
                      <div
                        key={index}
                        className="w-full mb-4 md:mb-20 cursor-pointer"
                        onClick={() => pushWork(item.id)}
                      >
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
        </div>
        <div className="w-full block md:hidden">
          <div className="grid grid-cols-1 pt-10">
            <div className="w-full ">
              <div className="w-full mt-0 md:mt-16 xl2Heading lg:w-full md:mr-auto text-[#EE2760]">
                Featured Projects
              </div>
            </div>
            <div className="w-full items-center">
              {list.map((item, index) => {
                if (index <= 1) {
                  return (
                    <div
                      key={index}
                      className="w-full mb-10 md:mb-16 lg:mb-20 cursor-pointer"
                      onClick={() => pushWork(item.id)}
                    >
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
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Expertise;
