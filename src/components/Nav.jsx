import ScrollLink from "./ScrollLink";

export default function Nav() {
  return (
    <nav className=" fixed w-full  top-0 z-100">
      <div
        className="mt-3 mx-auto rounded-sm text-sm md:text-base  w-[60vw] bg-white/10 backdrop-blur-md max-w-150
      flex items-center justify-between  px-[10px] md:px-4 py-1 sm:py-2 
      shadow-2xl shadow-black/15 text-black
     "
      >
        <div className="space-x-2 md:space-x-4">
          <ScrollLink href="#work" className="  relative inline-block group ">
            Work
            <span
              className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-left
            scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 ease-in-out"
            ></span>
          </ScrollLink>
          <ScrollLink href="#about" className="  relative inline-block group ">
            About
            <span
              className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-left
            scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 ease-in-out"
            ></span>
          </ScrollLink>
        </div>

        <h1 className="text-3xl sm:text-4xl text-black font-MoonTime">
          Shagoto
        </h1>

        <div className="space-x-2 md:space-x-4">
          <a href="#" className="max-sm:hidden  relative inline-block group  ">
            GitHub
            <span
              className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-left
            scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 ease-in-out"
            ></span>
          </a>
          <a href="#" className="   relative inline-block group  ">
            Mail
            <span
              className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-left
            scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 ease-in-out"
            ></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
