export default function Work() {
  return (
    <div
      id="work"
      className="w-full mx-auto max-w-[120rem] h-screen  relative -translate-y-full text-black  "
    >
      <div className="w-full h-full">
        <div className="w-full h-[8vh]  flex items-start justify-start bg-sky-100">
          <div className="w-60 bg-white h-full flex items-end justify-center rounded-tr-md ">
            <h1 className="text-4xl font-NewKansasSwash">Work </h1>
          </div>
        </div>

        <div className="w-full h-[92vh] bg-white text-base  flex flex-col items-start justify-around px-4 sm:px-8 md:px-16 lg:px-32 space-y-10 py-10 ">
          <div className="w-full text-gray-800 ">
            <p>Some of my work and case studies</p>
            <div className="w-full border-b border-gray-400 mt-5" />
          </div>

          <div className="w-full max-w-[71rem] mx-auto h-full flex  items-center justify-center sm:justify-between flex-col sm:flex-row  gap-10 sm:gap-12 md:gap-15 ">
            <div className="w-full h-full flex flex-col  justify-center mx-auto">
              <div className="w-full h-full max-h-60 max-w-120 mb-12 sm:mb-25 ">
                <div className="w-full h-full">
                  <div className="w-1/2 h-6 sm:h-10 bg-sky-300 rounded-t-sm"></div>
                  <div className="w-full h-full bg-sky-300 rounded-b-sm rounded-tr-sm pt-1 sm:pt-2">
                    <div className="w-full h-5 sm:h-8 relative">
                      <div className="absolute bottom-0 left-10  w-1/4 h-2 sm:h-3 bg-white"></div>
                      <div className="absolute right-0 bottom-0  w-2/3 h-5 sm:h-8 bg-sky-200 rounded-t-2xl"></div>
                    </div>

                    <div className="w-full h-full bg-sky-200 rounded-b-sm rounded-tl-2xl flex items-center justify-center font-MoonTime text-4xl sm:text-5xl">
                      <h1>Voci Perfuma</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between max-w-120 ">
                <h1 className="text-base sm:text-lg md:text-xl">
                  Voci Perfuma
                </h1>
                <h2 className="text-xs sm:text-sm text-gray-800">
                  In progress, 2026
                </h2>
              </div>
            </div>
            <div className="w-full h-full flex flex-col  justify-center mx-auto">
              <div className="w-full h-full max-h-60 max-w-120 mb-12 sm:mb-25 ">
                <div className="w-full h-full">
                  <div className="w-1/2 h-6 sm:h-10 bg-sky-300 rounded-t-sm"></div>
                  <div className="w-full h-full bg-sky-300 rounded-b-sm rounded-tr-sm pt-1 sm:pt-2">
                    <div className="w-full h-5 sm:h-8 relative">
                      <div className="absolute bottom-0 left-10  w-1/4 h-2 sm:h-3 bg-white"></div>
                      <div className="absolute right-0 bottom-0  w-2/3 h-5 sm:h-8 bg-sky-200 rounded-t-2xl"></div>
                    </div>

                    <div className="w-full h-full bg-sky-200 rounded-b-sm rounded-tl-2xl flex items-center justify-center font-MoonTime text-4xl sm:text-5xl">
                      <h1>Era Gardena</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between max-w-120 ">
                <h1 className="text-base sm:text-lg md:text-xl">Era Gardena</h1>
                <h2 className="text-xs sm:text-sm text-gray-800">
                  In progress, 2026
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
