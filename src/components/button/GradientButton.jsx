import React from "react";
import { useRouter } from "next/router";

const GradientButton = ({ route, text, bgBlack = false }) => {
  const router = useRouter();
  return (
    <button
      className={`rounded-full  uppercase ${
        bgBlack
          ? "gradient-button-bgBlack scale-text-on-hover"
          : "gradient-button border-2 "
      }`}
      onClick={() => router.push(`${route}`)}
    >
      <span
        className={`w-full h-full mx-0 my-0 paragraph ${
          bgBlack ? "gradient-span-bgBlack" : "gradient-span"
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default GradientButton;
