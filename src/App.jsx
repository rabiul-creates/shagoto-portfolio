import { useEffect, useRef } from "react";

import "./index.css";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import Background from "./components/Background";
import Nav from "./components/Nav";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
      <div className=" min-h-screen w-full relative">
        <Nav />
        <Background />
        <Hero />
        <About />
      </div>
    </ReactLenis>
  );
}

export default App;
