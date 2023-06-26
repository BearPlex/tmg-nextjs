import React, { useRef, useState } from "react";

const TextWithImageContainer = ({
  videoSrc,
  videoAlt = "services",
  id = "service",
  //   selectRoute = null,
  children,
}) => {
  const videoRef = useRef(null);
  //   const [isPlaying, setIsPlaying] = useState(true);
  //   const handlePlayPause = () => {
  //     if (videoRef.current) {
  //       console.log(isPlaying); // Check the current state
  //       console.log("isPlaying"); // Check the current state
  //       console.log(videoRef.current.paused);
  //       console.log("videoRef.current.paused");
  //       if (isPlaying) {
  //         videoRef.current.pause();
  //       } else {
  //         videoRef.current.play();
  //       }
  //       setIsPlaying(!isPlaying);
  //     }
  //   };
  return (
    <div>
      <section className="w-full 3xl:max-w-7xl 3xl:mx-auto componentsMainGap pagePaddingX">
        <section
          id={id}
          className="rounded-lg flex flex-col md:flex-row componentsMainGap py-0  3xl:py-28 lg:py-14 cursor-pointer"
          //   onClick={selectRoute ? selectRoute : null}
        >
          <div className="w-full md:w-[50%] h-[35vh]">
            {/* <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" loop={true} controls={false}> */}
            <div className="relative h-[35vh] md:h-[581px]">
              <video
                ref={videoRef}
                className="object-cover"
                loop={true}
                autoPlay
                controls={false}
                width="100%"
                height="100%"
              >
                <source src="/video/hp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">{children}</div>
        </section>
      </section>
    </div>
  );
};

export default TextWithImageContainer;

// video ref

//                 <button
//                   className=" play-button border-4 border-white  rounded-full w-[140px] h-[140px] flex items-center justify-center"
//                   //   onClick={handlePlayPause}
//                 >
//                   <svg
//                     className={isPlaying ? "hidden" : "w-10 h-10"}
//                     viewBox="0 0 26.139 37.458"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       id="Path_184"
//                       data-name="Path 184"
//                       d="M-1422.6-322.813v37.458l26.139-19.137Z"
//                       transform="translate(1422.604 322.813)"
//                       fill="#fff"
//                     ></path>
//                   </svg>
//                   {/* Add your Pause SVG icon here, it will be displayed when the video is playing */}
//                   <svg
//                     className={isPlaying ? "w-10 h-10" : "hidden"}
//                     viewBox="0 0 40 40"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     {/* Your Pause SVG icon paths go here */}
//                   </svg>
//                 </button>
