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
    <h1 className="largeHeading blackHeading mt-10 mb-10">{children}</h1>
  );
  const CustomH2 = ({ children }) => (
    <h2 className="heading blackHeading mt-8 mb-8">{children}</h2>
  );
  const CustomH3 = ({ children }) => (
    <h2 className="smallHeading blackHeading font-bold mt-6 mb-6">
      {children}
    </h2>
  );
  // const CustomOL = ({ children }) => (
  //   <ol className="custom-counter paragraph blackDescriptionText">
  //     {children}
  //   </ol>
  // );

  const CustomLI = ({ children }) => (
    <li className="custom-list-item paragraph blackDescriptionText">
      {children}
    </li>
  );

  // const CustomUL = ({ children }) => <ul className="custom-ul">{children}</ul>;
  const CustomOL = ({ children }) => (
    <ol className="custom-counter paragraph blackDescriptionText">
      {children}
    </ol>
  );

  const CustomUL = ({ children }) => (
    <ul className="custom-ul paragraph blackDescriptionText">{children}</ul>
  );

  const CustomP = ({ children }) => (
    <p className="paragraph blackDescriptionText mt-4 mb-4">{children}</p>
  );
  const CustomImage = ({ src, alt }) => (
    <span className="isolate">
      <Image
        src={src}
        alt={alt}
        width={10}
        height={10}
        className="aspect-[16/10] w-full object-cover mt-16 mb-16"
      />
    </span>
  );
  const CustomLink = ({ href, children }) => (
    <a
      href={href}
      className="custom-link paragraph"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

  const renderers = {
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    p: CustomP,
    img: CustomImage,
    ol: CustomOL,
    li: CustomLI,
    ul: CustomUL,
    a: CustomLink,
  };
  return (
    <div>
      <ReactMarkdown components={renderers}>{data}</ReactMarkdown>
    </div>
  );
};
export default ReactMarkdownComponent;
