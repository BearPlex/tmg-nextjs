import React, { useRef, useState, useEffect } from "react";

const MainVideoContainer = ({
  videoSrc,
  videoAlt = "services",
  cssClass,
  isMobileScreen = false,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(!isMobileScreen);
  const handleVideoClickDiv = () => {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current.pause();
    } else {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };
  return (
    <div className={`w-full h-auto ${cssClass}`} onClick={handleVideoClickDiv}>
      <div className="relative h-auto md:h-auto">
        <video
          id="videoElement"
          ref={videoRef}
          className="object-cover cursor-pointer max-h-[40vh] sm:max-h-[55vh] md:max-h-fit imageRounded hover:opacity-90 transition duration-300 ease-in-out"
          autoPlay={!isMobileScreen}
          muted={true}
          playsInline={true}
          src="/video/themediagale-video.mp4"
        />

        {isPlaying ? null : (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              className="w-12 h-12 md:w-16 md:h-16 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => videoRef.current.play()}
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainVideoContainer;
