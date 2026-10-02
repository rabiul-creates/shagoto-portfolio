export default function About() {
  return (
    <div
      id="about"
      className="w-full mx-auto max-w-[120rem] h-screen  relative -translate-y-full border-b border-white"
    >
      <div className="w-full h-full">
        <div className="w-full h-[8vh]  flex items-start justify-start ">
          <div className="w-60 bg-white h-full flex items-end justify-center rounded-tr-md ">
            <h1 className="text-4xl font-NewKansasSwash">About </h1>
          </div>
        </div>

        <div className="w-full h-[92vh] bg-white text-base  text-gray-800 flex flex-col items-start justify-around px-4 sm:px-8 md:px-16 lg:px-32 space-y-10 py-10 ">
          <div className="w-full">
            <p>A little note about myself</p>
            <div className="w-full border-b border-gray-400 mt-5" />
          </div>

          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-5">
            <div className="text-lg sm:text-xl md:text-2xl max-w-lg md:max-w-xl  ">
              <p>
                Hello, I am
                <span className="font-NewKansasSwash font-extrabold text-black">
                  {" "}
                  Shagoto Rahman
                </span>
                ,
              </p>
              <p>
                a Shopify developer. I help ecommerce brands launch fast and
                sell more. I also make sure the storefronts are good in design
                and look sharp.
              </p>
            </div>
            <div className="bg-gray-700 w-full max-w-lg h-full hidden md:block"></div>
          </div>

          <div className="w-full  flex gap-5 flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/3">
              <p>
                Building with a<span className="text-black "> mindset</span>
              </p>
              <p>
                Building with
                <span className="text-black "> perfection</span>
              </p>
            </div>

            <div className="text-xs  flex items-center justify-between w-full md:max-w-md flex-wrap   text-gray-800 text-left">
              <div className="px-2 py-2 border-l-4 border-sky-200  space-y-1">
                <p>Based in</p>
                <p className="text-black text-sm">Bangladesh</p>
              </div>
              <div className="px-2 py-2 border-l-4 border-sky-200  space-y-1">
                <p>Working</p>
                <p className="text-black text-sm">Globally</p>
              </div>
              <div className="px-2 py-2 border-l-4 border-sky-200  space-y-1">
                <p>Currently at</p>
                <p className="text-black text-sm">Xyz builders</p>
              </div>
            </div>
          </div>

          <div className="w-full  gap-3 flex items-center justify-between   md:hidden">
            <div className=" w-[20vw] max-w-80 aspect-square bg-neutral-800"></div>{" "}
            <div className=" w-[20vw] max-w-80 aspect-square bg-neutral-800"></div>{" "}
            <div className=" w-[20vw] max-w-80 aspect-square bg-neutral-800"></div>{" "}
            <div className=" w-[20vw] max-w-80 aspect-square bg-neutral-800"></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
//  <div className="w-full h-full flex flex-col items-start justify-around  px-4 sm:px-8  bg-white  ">

//   <div className="w-full  flex flex-col items-center justify-around  md:flex-row  ">
//     <div className=" w-full space-y-10  text-base text-gray-800">
//       <p className="text-lg max-w-xs lg:max-w-xl text-wrap">
//         I am
//         <span className="font-NewKansasSwash font-extrabold text-black">
//           {" "}
//           Shagoto Rahman
//         </span>
//         , a Shopify developer who helps ecommerce brands turn their blank
//         storefronts to working, sellable sites.
//       </p>
//       <p className="text-gray-600">
//         Building with
//         <span className="text-black "> perfection</span>
//       </p>
//     </div>

//     <div className="text-xs w-full gap-1 text-white grid grid-cols-2 grid-rows-3">
//       <div className="w-25  sm:w-35 lg:w-40 bg-neutral-700 p-2 sm:p-3 md:p-4 rounded-sm space-y-3 row-start-1 col-start-2 flex flex-col items-start justify-center ">
//         <p>Based in </p>
//         <p className=" uppercase text-center">#Bangladesh</p>
//       </div>
//       <div
//         className="w-25 sm:w-35
//        lg:w-40 bg-neutral-800  p-1 sm:p-3 md:p-4  aspect-square space-y-3 row-start-2 col-start-1 flex flex-col items-center justify-center rounded-full text-white "
//       >
//         <p>Working </p>
//         <p className=" uppercase  text-center">#Globally</p>
//       </div>
//       <div className="w-25 sm:w-35 lg:w-40 bg-neutral-500  p-2 sm:p-3 md:p-4 rounded-sm space-y-3 row-start-3 col-start-2 flex flex-col items-start justify-center">
//         <p>Currently building at</p>
//         <p className="uppercase  text-center"> XXcX XcXX</p>
//       </div>
//     </div>
//   </div>

// </div>
