import React from "react";
import { useRouter } from "next/router";

const GradientButton = (props) => {
  const router = useRouter();
  const { route, text } = props;
  return (
    <button
      className="border-2 rounded-full  uppercase gradient-button"
      onClick={() => router.push(`${route}`)}
    >
      <span className="w-full h-full mx-0 my-0 gradient-span paragraph ">
        {text}
      </span>
    </button>
  );
};

export default GradientButton;
