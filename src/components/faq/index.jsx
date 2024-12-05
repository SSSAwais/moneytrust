"use client";
import { useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How does one go about exchanging money?",
      answer:
        "You must bring a valid government-issued picture ID, like a passport or driver’s license, to one of our locations in order to exchange money. After confirming your identity, a member of our staff will finish the exchange process on your behalf.",
    },
    {
      question: "Where in Canada can I exchange money?",
      answer:
        "You can exchange money at any of our authorized exchange locations across Canada.",
    },
    {
      question: "How do I know if I'm getting a fair exchange rate?",
      answer:
        "We provide transparent exchange rates that you can compare with current market rates.",
    },
    {
      question:
        "Do you provide special prices for large-scale currency exchanges?",
      answer:
        "Yes, we offer special rates for large transactions. Contact our customer support for more details.",
    },
    {
      question: "If I am not a citizen of Canada, may I exchange money?",
      answer:
        "Yes, non-citizens can exchange money as long as they provide a valid photo ID.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1074px]  sm:px-6 mx-auto  py-[65px] px-4 mw-lg:py-[50px] mw-sm4:py-[25px] ">
      <h2 className="text-[40px] leading-[48px] text-[#000] font-extrabold text-center mb-[49px] mw-xl:text-[38px] mw-lg:text-[32px] mw-md:text-[26px] mw-sm4:text-[18px] mw-sm4:leading-[22px] mw-sm4:mb-[25px] mw-lg:mb-[40px]">
        Frequently Asked Questions
      </h2>
      <div className="">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={` rounded-lg py-[35px] px-[52px] bg-[#F1FAFF] mb-[49px] mw-sm4:py-[9px] mw-sm4:px-[10px] mw-md:mb-[30px] mw-sm4:mb-[22px] ${
              activeIndex === index ? "bg-[#F1FAFF]" : ""
            } cursor-pointer`}
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[30px] leading-[36px] text-[#000] font-semibold mw-lg:text-[26px] mw-lg:leading-[32px] mw-md:text-[18px]  mw-md:leading-[24px] mw-sm4:text-[14px] mw-sm4:leading-[16px] mw-sm5:text-[12px]">
                {item.question}
              </h3>
              {activeIndex === index ? (
                <IoArrowUpCircleOutline className="text-[#0C0B0B] text-[40px] mw-sm4:text-[21px]" />
              ) : (
                <IoArrowDownCircleOutline className="text-[#0C0B0B] text-[40px] mw-sm4:text-[21px]" />
              )}
            </div>
            {activeIndex === index && (
              <p className="mt-[16px] text-[20px] font-normal leading-[24px] text-[#000] mw-lg:text-[18px] mw-md:text-[16px] mw-sm4:text-[12px] mw-sm4:leading-[14px]">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
