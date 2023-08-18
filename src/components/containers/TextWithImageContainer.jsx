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
          } max-w-7xl mx-auto`}
        >
          <section
            id={id}
            className="imageRounded flex flex-col md:flex-row items-center justify-between componentsMainGap py-8 md:py-10"
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
                className={`image-animation ${
                  blackContainer ? "" : ""
                } w-full h-auto imageRounded`}
              />
            </div>
          </section>
        </section>
      ) : (
        <section
          className={`${
            blackContainer ? "pagePaddingX" : ""
          } max-w-7xl mx-auto`}
        >
          <section
            id={id}
            className="imageRounded flex flex-col md:flex-row items-center justify-between componentsMainGap pt-10 py-10 md:py-20"
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
                className={`image-animation ${
                  blackContainer ? "" : ""
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
