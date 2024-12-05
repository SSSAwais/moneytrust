"use client";
import { Images } from "@/utils/Images";
import Calculator from "../Calculator";
import { useState } from "react";

const Hero = () => {
  const [cartData, setCartData] = useState([]);

  return (
    <div
      className={` relative md:pt-[152px] flex justify-center bg-cover bg-center h-full lg:py-0 py-16 mw-lg:block mw-md:pb-[50px] ${
        cartData.length > 0 ? "lg:min-h-[1150px]" : "lg:min-h-[881px]"
      }`}
      // style={{ backgroundImage: `url(${Images.HeroBg.src})` }}
      style={{
        background: "linear-gradient(to bottom, #0a457b, #9fd1a4)",
      }}
    >
      <div className="max-w-[1400px] px-4 sm:px-6 w-full flex  flex-col lg:flex-row items-center   mw-lg:items-start ">
        <div className="w-[60%]">
          <div className="flex items-center space-x-4 text-sm mw-md:pt-[22px]">
            <div className="mb-[14px] flex">
              <div className="flex items-center mr-[18px]">
                <img
                  src={Images.checkGreen.src}
                  alt="ico"
                  className="md:h-auto h-4 mr-[15px]"
                />
                <span className="text-[14px] md:text-sm whitespace-nowrap mw-sm4:text-[8px] text-white">
                  24/7 Transfer
                </span>
              </div>
              <div className="flex items-center mr-[18px]">
                <img
                  src={Images.checkGreen.src}
                  alt="ico"
                  className="md:h-auto h-4 mr-[15px]"
                />
                <span className="text-[14px] md:text-sm whitespace-nowrap mw-sm4:text-[8px] text-white">
                  No Hidden Fees
                </span>
              </div>
              <div className="flex items-center mr-[18px]">
                <img
                  src={Images.checkGreen.src}
                  alt="ico"
                  className="md:h-auto h-4 mr-[15px]"
                />
                <span className="text-[14px] md:text-sm whitespace-nowrap mw-sm4:text-[8px] text-white">
                  Great Exchange Rate
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-[62px] text-white leading-[66px] font-bold mx-14:text-[50px] mw-11:text-[42px] mw-11:leading-[58px] mw-md:text-[38px] mw-sm4:text-[32px] mw-sm4:leading-[36px] mw-sm5:text-[24px] mw-sm5:leading-[26px]">
            Fast, Reliable, and Secure Currency Exchange
          </h1>
          <p className="text-[20px] opacity-90 mx-14:text-[18px] mw-md:text-[16px] mw-sm4:text-[14px] font-satoshi text-white mt-[23px] pr-[110px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text e
          </p>
          <p className="text-[20px] font-bold leading-[30px] text-[#015180] mt-[36px]">
            Have questions? Call us now at{" "}
            <span className="text-white"> + 14165742222 </span> to get started!
          </p>
          <div>
            <div className="flex space-x-4 mt-[34px]">
              <button className="bg-blue1 text-white flex justify-center font-medium items-center md:gap-3 gap-2 whitespace-nowrap text-[16px] md:text-[16px] px-[30px] py-[20px]  rounded-full mw-md:py-[16px] mw-md:text-[14px] mw-sm4:text-[12px] mw-sm4:py-[9px] mw-sm4:px-[11px]">
                Transfer Money
                <img src={Images.plus.src} className="h-5" alt="ico" />
              </button>
              <button className="border flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-[16px] md:text-[16px] border-white text-white px-[30px] py-[20px] rounded-full font-medium mw-md:py-[16px] mw-md:text-[14px] mw-sm4:text-[12px] mw-sm4:py-[9px] mw-sm4:px-[11px]">
                See How It Works
                <img src={Images.work.src} className="h-5" alt="ico" />
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Right Side Form --> */}
        <div className="w-[40%] md:flex lg:justify-end flex-1 hidden mw-lg:w-[100%]">
          {/* <HeroCard /> */}
          <Calculator setCartData={setCartData} />
        </div>
      </div>
    </div>
    // <div
    //   className={`relative md:pt-[152px] pt-[84px] flex justify-center bg-cover bg-center h-full lg:py-0 py-16 ${
    //     cartData.length > 0 ? "lg:min-h-[1150px]" : "lg:min-h-[881px]"
    //   }`}
    //   // style={{ backgroundImage: `url(${Images.HeroBg.src})` }}
    //   style={{
    //     background: "linear-gradient(to bottom, #0a457b, #9fd1a4)",
    //   }}
    // >
    //   <div className="px-4 md:mx-20 flex  flex-col lg:flex-row items-center gap-10">
    //     <div className="text-white flex-1 space-y-4">
    //       <div className="flex items-center space-x-4 text-sm">
    //         <div className="flex items-center space-x-1">
    //           <img
    //             src={Images.checkGreen.src}
    //             alt="ico"
    //             className="md:h-auto h-4"
    //           />
    //           <span className="text-[8px] md:text-sm whitespace-nowrap">
    //             24/7 Transfer
    //           </span>
    //         </div>
    //         <div className="flex items-center space-x-1">
    //           <img
    //             src={Images.checkGreen.src}
    //             alt="ico"
    //             className="md:h-auto h-4"
    //           />
    //           <span className="text-[8px] md:text-sm whitespace-nowrap">
    //             No Hidden Fees
    //           </span>
    //         </div>
    //         <div className="flex items-center space-x-1">
    //           <img
    //             src={Images.checkGreen.src}
    //             alt="ico"
    //             className="md:h-auto h-4"
    //           />
    //           <span className="text-[8px] md:text-sm whitespace-nowrap">
    //             Great Exchange Rate
    //           </span>
    //         </div>
    //       </div>
    //       <h1 className="md:text-[62px] text-[24px] font-bold">
    //         Fast, Reliable, and Secure Currency Exchange
    //       </h1>
    //       <p className="md:text-[20px] opacity-90">
    //         {
    //           "Experience seamless money transfers at great exchange rates with no hidden fees. Whether you’re sending funds internationally or buying gold, our 24/7 service ensures your money moves when you need it. Trust us for hassle-free, transparent, and efficient currency exchange solutions."
    //         }
    //       </p>
    //       <p className="md:text-[20px] opacity-90 !m-0">
    //         {"Have questions? Call us now at +14165742222 to get started!"}
    //       </p>
    //       <div className="flex space-x-4 mt-6">
    //         <button className="bg-blue1 text-white flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full">
    //           Transfer Money
    //           <img src={Images.plus.src} className="h-5" alt="ico" />
    //         </button>
    //         <button className="border flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg border-white text-white md:px-6 px-3 py-3 rounded-full">
    //           See How It Works
    //           <img src={Images.work.src} className="h-5" alt="ico" />
    //         </button>
    //       </div>
    //     </div>

    //     {/* <!-- Right Side Form --> */}
    //     <div className="md:flex lg:justify-end flex-1 hidden">
    //       {/* <HeroCard /> */}
    //       <Calculator setCartData={setCartData} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
