import React from "react";
import { useRouter } from "next/router";

const GradientButton = ({ route, text, bgBlack = false }) => {
  const router = useRouter();
  return (
    <button
      className={`rounded-full  uppercase px-4 hover:-translate-y-2 ease-in-out transition duration-300  ${
        bgBlack
          ? "gradient-button-bgBlack "
          : "gradient-button border-2 "
      }`}
      onClick={() => router.push(`${route}`)}
    >
      <span
        className={`w-full h-full mx-0 my-0 paragraph  ${
          bgBlack ? "gradient-span-bgBlack" : "gradient-span  "
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default GradientButton;
