import ScrollLink from "./ScrollLink";

export default function Footer() {
  return (
    <>
      <div className="w-screen max-w-[120rem] mx-auto h-[50vh] -mt-[50vh] relative  ">
        <div className="w-full   h-full pt-20 pb-5 px-3 sm:px-8 flex items-end justify-center  gap-3 sm:gap-4 md:gap-6 ">
          <div
            className=" w-full h-100 rounded-sm bg-black/15 backdrop-blur-xl shadow-xl shadow-black/15 p-2
          flex flex-col items-center justify-around text-white"
          >
            <h1 className="text-2xl sm:text-4xl font-NewKansasSwash ">
              Let's Talk
            </h1>
            <div className="text-md sm:text-xl space-y-2 text-center">
              <p>
                Have{" "}
                <span className="text-black underline underline-offset-2 ">
                  dark clouds
                </span>{" "}
                over your store?
              </p>
              <p>I can show you the silver lining.</p>
            </div>

            <button className="px-1.5 py-2 sm:px-3 sm:py-3 rounded-sm  text-sm sm:text-md text-white bg-neutral-800 hover:bg-sky-200 active:bg-sky-200  transition-all duration-500  active:scale-96 hover:text-black active:text-black ease-in-out  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ">
              Tell me about your store
            </button>
          </div>
          {/* bg-linear-to-tl  from-neutral-200/80  via-gray-500/80  to-gray-400/80  text-sm sm:text-md hover:text-white hover:via-gray-600/90 active:hover:via-gray-600/90 transition-all duration-300  active:scale-98 active:text-white ease-in-out */}
          <div className=" w-full h-100 flex flex-col justify-between items-center  ">
            <div className="  w-full h-full flex items-center justify-center">
              <h1 className="font-MoonTime text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center ">
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  S
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  h
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  a
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  g
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  o
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  t
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  o
                </span>{" "}
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  R
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  a
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  h
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  m
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  a
                </span>
                <span className="hover:text-white transition-colors active:text-white duration-300  ease-in-out">
                  n
                </span>
              </h1>
            </div>
            <div className="bg-white/10 backdrop-blur-xl shadow-xl shadow-black/15  w-full h-50 rounded-sm px-4  lg:px-12 flex items-center justify-between gap-4 text-xs sm:text-sm md:text-base ">
              <div className="space-y-3 ">
                <h1 className="text-[10px] sm:text-xs">Site</h1>

                <ul className=" md:flex gap-3 space-y-2">
                  <li className="hover:text-white transition-colors active:text-white duration-300 ease-in-out  ">
                    <ScrollLink href="#about">About</ScrollLink>
                  </li>
                  <li className="hover:text-white transition-colors active:text-white duration-300 ease-in-out  ">
                    <ScrollLink href="#services">Services</ScrollLink>
                  </li>
                  <li className="hover:text-white transition-colors active:text-white duration-300 ease-in-out  ">
                    <ScrollLink href="#work">Work</ScrollLink>
                  </li>
                </ul>
              </div>
              <div className=" h-20 border-r  border-white"></div>
              <div className="space-y-3 ">
                <h1 className="text-[10px] sm:text-xs">Social</h1>
                <ul className="md:flex gap-3 space-y-2">
                  <li className="hover:text-white transition-colors active:text-white duration-300 ease-in-out  ">
                    <a href="">LinkedIn</a>
                  </li>
                  <li className="hover:text-white transition-colors active:text-white duration-300 ease-in-out  ">
                    <a href="">GitHub</a>
                  </li>
                  <li className="hover:text-white transition-colors active:text-white duration-300 ease-in-out  ">
                    <a href="">Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
