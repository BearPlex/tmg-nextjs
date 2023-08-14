import Image from "../Image/Image";

const TextWithImageContainer = ({
  blackContainer = false,
  imageSrc,
  imageRight = true,
  imageAlt = "services",
  id = "service",
  selectRoute = null,
  children,
}) => {
  return (
    <div>
      {imageRight ? (
        <section
          className={`${
            blackContainer ? "pagePaddingX" : ""
          } w-full 3xl:max-w-7xl 3xl:mx-auto`}
        >
          <section
            id={id}
            className="imageRounded flex flex-col md:flex-row items-center justify-between componentsMainGap pt-10 py-0 md:py-16 cursor-pointer"
            onClick={selectRoute ? selectRoute : null}
          >
            <div className="w-full md:w-[50%] order-2 md:order-1">
              {children}
            </div>
            <div className="w-full md:w-[50%] order-1 md:order-2">
              <Image
                width={500}
                height={300}
                src={imageSrc}
                alt={imageAlt}
                layout="responsive"
                objectFit="cover"
                className={`${
                  blackContainer ? "" : "md:shadow-xl"
                } w-full h-auto imageRounded`}
              />
            </div>
          </section>
        </section>
      ) : (
        <section
          className={`${
            blackContainer ? "pagePaddingX" : ""
          } w-full 3xl:max-w-7xl 3xl:mx-auto`}
        >
          <section
            id={id}
            className="imageRounded flex flex-col md:flex-row items-center justify-between componentsMainGap pt-10 py-0 md:py-16 cursor-pointer"
            onClick={selectRoute ? selectRoute : null}
          >
            <div className="w-full md:w-[50%] order-1">
              <Image
                width={500}
                height={300}
                src={imageSrc}
                alt={imageAlt}
                layout="responsive"
                objectFit="cover"
                className={`${
                  blackContainer ? "" : "md:shadow-xl"
                } w-full h-auto imageRounded`}
              />
            </div>
            <div className="w-full md:w-[50%] order-2">{children}</div>
          </section>
        </section>
      )}
    </div>
  );
};

export default TextWithImageContainer;
