"use client";
import { Images } from "@/utils/Images";
import Calculator from "../Calculator";
import { useState } from "react";
import FlagSlider from "../FlagSlider";
import "./hero.css";
const Hero = () => {
  const [cartData, setCartData] = useState([]);

  return (
    <div
      className={`main_wrapper_hero relative md:pt-[152px] mw-md:pt-[100px]  bg-cover bg-center h-full lg:py-0 py-16 mw-lg:block mw-md:pb-[50px]       ${
        cartData.length > 0 ? "lg:min-h-[1150px]" : "lg:min-h-[881px]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full flex  flex-col lg:flex-row items-center  pb-[352px]  mw-lg:items-start pt-[220px] mw-lg:pt-[75px] mw-lg:pb-[150px] mw-md:pt-[0px] mw-md:pb-[100px] mw-sm4:pb-[50px] mw-md:pr-[20px]">
        <div className="w-[60%] mw-12:w-[55%] mw-lg:w-[100%] mw-lg:mb-[50px] mw-sm4:mb-[20px]">
          <div className="flex items-center space-x-4 text-sm mw-md:pt-[22px]">
            <div className="mb-[14px] flex">
              <div className="flex items-center mr-[18px] ">
                <img
                  src={Images.checkGreen.src}
                  alt="ico"
                  className="md:h-auto h-4 mr-[15px] mw-sm4:mr-[3px]"
                />
                <span className="text-[14px] md:text-sm whitespace-nowrap mw-sm4:text-[8px] text-white">
                  24/7 Transfer
                </span>
              </div>
              <div className="flex items-center mr-[18px]">
                <img
                  src={Images.checkGreen.src}
                  alt="ico"
                  className="md:h-auto h-4 mr-[15px] mw-sm4:mr-[3px]"
                />
                <span className="text-[14px] md:text-sm whitespace-nowrap mw-sm4:text-[8px] text-white">
                  No Hidden Fees
                </span>
              </div>
              <div className="flex items-center mr-[18px]">
                <img
                  src={Images.checkGreen.src}
                  alt="ico"
                  className="md:h-auto h-4 mr-[15px] mw-sm4:mr-[3px]"
                />
                <span className="text-[14px] md:text-sm whitespace-nowrap mw-sm4:text-[8px] text-white">
                  Great Exchange Rate
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-[62px] text-white leading-[66px] font-bold mw-14:text-[50px] mw-12:text-[42px] mw-12:leading-[58px] mw-md:text-[38px] mw-sm4:text-[32px] mw-sm4:leading-[36px] mw-sm5:text-[24px] mw-sm5:leading-[26px]">
            Fast, Reliable, and Secure Currency Exchange
          </h1>
          <p className="text-[20px] opacity-90 mx-12:text-[18px] mw-md:text-[16px] mw-sm4:text-[14px] font-satoshi text-white mt-[23px] pr-[110px] mw-sm4:pr-[0px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text e
          </p>
          <p className="text-[20px] font-bold leading-[30px] text-[#015180] mt-[36px] mw-12:text-[18px] mw-sm4:mt-[16px] mw-sm4:text-[16px] mw-sm4:leading-[24px]">
            Have questions? Call us now at{" "}
            <span className="text-white"> + 14165742222 </span> to get started!
          </p>
          <div>
            <div className="flex space-x-4 mt-[34px] mw-sm4:mt-[16px]">
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
        <div className="w-[40%] mw-12:w-[45%]  flex lg:justify-end flex-1  mw-lg:w-[100%] mw-lg:justify-center">
          {/* <HeroCard /> */}
          <Calculator setCartData={setCartData} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
