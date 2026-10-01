import { useEffect, useRef } from "react";
import cloudsVideo from "/src/assets/sky4.mp4";

export default function Background() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);
  return (
    <div className="">
      <div className="h-screen w-full fixed z-0 top-0 overflow-clip pointer-events-none ">
        <div className="  h-screen w-full  relative flex items-center justify-center  overflow-hidden ">
          <div className="h-full w-full  absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 overflow-hidden   ">
            <video
              ref={videoRef}
              className=" h-full w-full object-cover object-center bg-sky-700"
              src={cloudsVideo}
              type="video/mp4"
              autoPlay
              muted
              loop
              preload="true"
              playsInline
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
