import PagesHero from "@/components/pagesHero";
import { Images } from "@/utils/Images";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const services = [
  {
    icon: "/Images/dollar.svg",
    title: "Currency Exchange",
    description:
      "A smooth and effective way to meet a range of financial needs to both individual and commercial clients through our currency exchange service.",
  },
  {
    icon: "/Images/laptop.svg",
    title: "Wire Transfer",
    description:
      "We use a secure network to make it easier for money to move between financial institutions, ensuring that money gets to its destination on time.",
  },
  {
    icon: "/Images/laptop.svg",
    title: "Ria Money Transfer",
    description:
      "Our Ria Money Transfer service offers people wishing to transfer and receive money worldwide a dependable and easy-to-use option.",
  },
  {
    icon: "/Images/lock.svg",
    title: "Money Gram Transfers",
    description:
      "One of the best options for individuals who value efficiency in their international financial transactions due to its speedy service.",
  },
  {
    icon: "/Images/cloud.svg",
    title: "Western Union Transfer",
    description:
      "A desirable choice for individuals who want to get the most for their money due to its dedication to offering reasonably priced services.",
  },
  {
    icon: "/Images/laptop.svg",
    title: "Foreign Currency Banknotes",
    description:
      "Guarantees a smooth and effective procedure for obtaining the banknotes you require, whether you are a traveler or a business.",
  },
  {
    icon: "/Images/lock.svg",
    title: "Property Transactions",
    description:
      "Within the ever-changing realm of real estate transactions, our services offer Canada-wide sellers and buyers important assistance.",
  },
  {
    icon: "/Images/cloud.svg",
    title: "Currency Conversions",
    description:
      "Our all-inclusive service guarantees that our clients may conduct foreign transactions with peace of mind.",
  },
  {
    icon: "/Images/laptop.svg",
    title: "Paying for College and University",
    description:
      "Pay for college, university, and dormitory registration fees across Canada.",
  },
];

const page = () => {
  return (
    <div className="">
      <PagesHero page={"Services"} />
      <section className="bg-gray-50 pt-[86px] pb-[86px] mw-lg:py-[50px] mw-sm4:py-[25px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[44px] text-[#0d0e10] font-semibold text-center mb-8 font-Figtree mw-xl:text-[38px] mw-lg:text-[32px] mw-md:text-[26px] mw-sm4:text-[18px] leading-[52px]">
            Our Services At A Glance
          </h2>

          <div className="grid mw-sm4:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[7px] shadow-lg p-6 flex flex-col items-start justify-between"
              >
                <div className="w-[80px] h-[80px] bg-[#e7ebf7] rounded-[50px] flex items-center justify-center mw-md:w-[60px] mw-md:h-[60px]">
                  <Image
                    className="mw-md:w-[30px] mw-md:h-[30px]"
                    src={service.icon}
                    alt=""
                    width={39}
                    height={39}
                  />
                </div>
                <h3 className="text-[20px] leading-[20px] font-Figtree text-[#0d0e10] font-bold  mt-[29px] mw-lg:text-[18px] mw-md:text-[16px]  mw-sm4:text-[14px]  mw-sm5:text-[12px] mw-sm4:mt-[15px]">
                  {service.title}
                </h3>
                <p className="font-Figtree text-[#015180] text-[16px] leading-[28px] mt-[11px] mb-[42px] mw-md:text-[14px] mw-md:leading-[26px] mw-sm4:text-[12px] mw-sm4:leading-[16px] mw-sm4:mb-[16px]">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="font-bold  text-[#0d0e10] text-[18px] mw-lg:text-[16px] mw-md:font-medium mw-md:text-[14px] mw-sm4:text-[12px] leading-[18px] font-Figtree flex items-center hover:text-blue-700"
                >
                  Learn More <AiOutlineArrowRight className="ml-2 -rotate-45" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
