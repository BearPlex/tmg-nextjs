import React from "react";
import Image from "../Image/Image";
import ReactMarkdown from "react-markdown";
const ReactMarkdownComponent = ({ data }) => {
  const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  };
  const CustomH1 = ({ children }) => (
    <h1 className="largeHeading blackHeading mt-8 mb-8">{children}</h1>
  );
  const CustomH2 = ({ children }) => (
    <h2 className="heading blackHeading mt-6 mb-6">{children}</h2>
  );
  const CustomH3 = ({ children }) => (
    <h2 className="smallHeading blackHeading  mt-4 mb-4">{children}</h2>
  );
  const CustomP = ({ children }) => (
    <p className="paragraph blackDescriptionText">{children}</p>
  );
  const CustomImage = ({ src, alt }) => (
    <div className="mt-16 mb-16">
      <Image
        src={src}
        alt={alt}
        width={10}
        height={10}
        className="aspect-[16/10] w-full object-cover"
      />
    </div>
  );
  const renderers = {
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    p: CustomP,
    img: CustomImage,
  };
  return (
    <div>
      <ReactMarkdown components={renderers}>{data}</ReactMarkdown>
    </div>
  );
};
export default ReactMarkdownComponent;
