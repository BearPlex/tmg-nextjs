import React, { useRef, useState, useEffect } from "react";

const TextWithVideoContainer = ({
  videoSrc,
  videoAlt = "services",
  id = "service",
  children,
  cssClass,
  childcssClass,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    const pauseVideo = () => {
      if (videoElement && isPlaying) {
        videoElement.pause();
        setIsPlaying(false);
      }
    };

    const playVideo = () => {
      if (videoElement && !isPlaying) {
        videoElement.play();
        setIsPlaying(true);
      }
    };

    const handleVideoClick = () => {
      if (isPlaying) {
        pauseVideo();
      } else {
        playVideo();
      }
    };

    videoElement.addEventListener("click", handleVideoClick);

    return () => {
      videoElement.removeEventListener("click", handleVideoClick);
    };
  }, [videoRef, isPlaying]);

  return (
    <div>
      <section className="w-full 3xl:max-w-7xl 3xl:mx-auto componentsMainGap pagePaddingX">
        <section
          id={id}
          className="flex flex-col md:flex-row componentsMainGap py-0  3xl:py-28 lg:py-14 "
        >
          <div className={`w-full  h-auto ${cssClass}`} >
            <div className="relative h-auto md:h-auto">
              <video
                id="videoElement"
                ref={videoRef}
                className="object-cover h-fit rounded-lg"
                autoPlay={true}
                muted={true}
                playsInline={true}
                src="/video/hp.mp4"
              />

              {isPlaying ? null : (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="w-16 h-16 text-white cursor-pointer"
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
          <div className={`w-full ${childcssClass}`}>{children}</div>
        </section>
      </section>
    </div>
  );
};

export default TextWithVideoContainer;
