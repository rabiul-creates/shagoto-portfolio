import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export default function Welcome() {
  const welcomeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".draw-this", {
      strokeDashoffset: 0,
      delay: 1,
      duration: 5,

      ease: "none",
    });

    tl.to(
      ".draw-this",
      {
        fillOpacity: 1,
        duration: 1,

        ease: "none",
      },
      "<1",
    );
    tl.to(
      ".draw-this",
      {
        opacity: 0,
        duration: 4,

        ease: "ease.in",
      },
      ">1",
    );
    tl.to(
      welcomeRef.current,
      {
        opacity: 0,

        duration: 2,
        ease: "ease.in",
      },
      ">",
    );

    tl.to(
      welcomeRef.current,
      {
        y: "-100%",
        duration: 0.1,
        ease: "none",
      },
      ">",
    );
  });

  return (
    <section
      ref={welcomeRef}
      className=" w-screen h-screen fixed top-0 z-99 bg-sky-600 flex items-center justify-center font-MoonTime  text-white"
    >
      <svg className="draw-this" viewBox="0 0 600 330">
        <text x="50%" y="50%" dy="0.32em" textAnchor="middle" fontSize="70">
          Shagoto Rahman
        </text>
      </svg>
    </section>
  );
}
