import { useEffect, useRef } from "react";

import "./index.css";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import Background from "./components/Background";
import Nav from "./components/Nav";
import About from "./components/About";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Footer from "./components/Footer";

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
      <div className=" min-h-screen w-full relative overflow-clip">
        <Nav />
        <Background />
        <Hero />
        <About />
        <Services />
        <Work />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
