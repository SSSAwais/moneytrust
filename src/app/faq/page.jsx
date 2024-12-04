import Faq from "@/components/faq";
import PagesHero from "@/components/pagesHero";
import { Images } from "@/utils/Images";
import React from "react";

const page = () => {
  return (
    <div className="">
      <PagesHero page={"FAQ's"} />

      <Faq />
      <div className="bg-[#E5E7EB]  rounded-xl max-w-[1074px]  sm:px-6 mx-auto shadow-md py-[32px]">
        <div className="text-center">
          <h2 className="text-[25px] text-[#111827] leading-[24px] font-semibold mb-[8px] mw-lg:text-[22px] mw-md:text-[20px]  mw-sm4:text-[18px] mw-sm4:leading-[24px]">
            Still Have Questions?
          </h2>
          <p className="text-[16px] leading-[24px] text-[#374151] mb-[24px] font-archivo mw-sm4:text-[14px] ">
            Our team is ready to answer any of your questions.
          </p>
          <button className="bg-blue1 font-medium text-[20px] leading-[20px] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 mw-lg:text-[18px] mw-md:text-[16px] mw-sm4:text-[14px] mw-sm5:text-[12px] mw-sm5:px[22px] mw-sm5:py-[8px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
