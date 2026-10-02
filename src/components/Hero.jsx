import { useEffect, useRef } from "react";

import { useId } from "react";

export default function Hero() {
  const videoRef = useRef(null);
  const maskId = useId();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <section className="hero-section min-h-[200vh] w-full sticky top-0 overflow-clip ">
      <div className="  h-screen w-full  relative flex items-center justify-center  overflow-hidden ">
        <svg
          viewBox="0 0 600 330"
          className="hero-text absolute left-1/2 top-1/2 w-[95vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-xs shadow-2xl  shadow-black/20 drop-shadow-2xl drop-shadow-black/20"
        >
          <defs>
            <mask id={maskId}>
              {/* White card */}
              <rect width="600" height="330" fill="white" />

              {/* Text = holes */}
              <text
                x="220"
                y="100"
                fill="black"
                fontSize="80"
                fontFamily="Moontime, serif"
                fontStyle="italic"
              >
                I am a
              </text>

              <text
                x="60"
                y="160"
                fill="black"
                fontSize="32"
                fontWeight="700"
                fontFamily="Arial, sans-serif"
              >
                Shopify
              </text>

              <text
                x="270"
                y="200"
                fill="black"
                fontSize="80"
                fontWeight="400"
                fontFamily="Arial, sans-serif"
              >
                +
              </text>

              <text
                x="560"
                y="160"
                textAnchor="end"
                fill="black"
                fontSize="32"
                fontWeight="700"
                fontFamily="Arial, sans-serif"
              >
                Ecommerce
              </text>

              <text
                x="60"
                y="200"
                fill="black"
                fontSize="32"
                fontWeight="700"
                fontFamily="Arial, sans-serif"
              >
                Developer
              </text>

              <text
                x="478"
                y="200"
                textAnchor="end"
                fill="black"
                fontSize="32"
                fontWeight="700"
                fontFamily="Arial, sans-serif"
              >
                Expert
              </text>

              <circle cx="0" cy="35" r="10" fill="black" />
              <circle cx="0" cy="80" r="10" fill="black" />
              <circle cx="0" cy="125" r="10" fill="black" />
              <circle cx="0" cy="170" r="10" fill="black" />
              <circle cx="0" cy="215" r="10" fill="black" />
              <circle cx="0" cy="260" r="10" fill="black" />
              <circle cx="0" cy="305" r="10" fill="black" />

              {/* Name */}

              <text
                x="290"
                y="285"
                textAnchor="end"
                fill="black"
                fontSize="20"
                fontWeight="600"
                fontFamily="Arial, sans-serif"
              >
                Shagoto
              </text>

              <text
                x="380"
                y="285"
                textAnchor="end"
                fill="black"
                fontSize="20"
                fontWeight="600"
                fontFamily="Arial, sans-serif"
              >
                Rahman
              </text>
            </mask>
          </defs>

          {/* The actual white card */}
          <rect
            width="600"
            height="330"
            fill="white"
            mask={`url(#${maskId})`}
          />
        </svg>
        <div
          className="hero-text absolute top-4/5 left-1/2 -translate-x-1/2 max-w-[600px]
      text-center text-2xl md:text-3xl lg:text-4xl text-white text-shadow-lg text-shadow-black/20 "
        >
          <p>Clear skies for your storefront. </p>
        </div>
      </div>
    </section>
  );
}
