import PagesHero from "@/components/pagesHero";
import { Images } from "@/utils/Images";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const page = () => {
  return (
    <div className=" ]">
      <PagesHero page={"About US"} />
      <section className="bg-white pt-[73px] mw-lg:pt-[50px] mw-sm4:pt-[25px] pb-[100px] mw-lg:pb-[50px] mw-sm4:pb-[25px]">
        {/* Company Information Section */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid mw-lg:grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text Section */}

          {/* Illustration Section (Placeholder) */}
          <div className="flex justify-center mt-[77px]">
            <Image
              width={483}
              height={481}
              src={Images.cover.src}
              alt="Currency Exchange Illustration"
              className=""
            />
          </div>
          <div>
            <h2 className="text-[37px] uppercase font-bold text-[#015180] mb-[36px] leading-[45px] mw-xl:text-[32px] mw-xl:leading-[40px] mw-12:mb-[20px] mw-md:text-[26px] mw-sm4:text-[18px] mw-sm4:leading-[27px] mw-sm5:leading-[22px] tracking-[5%]">
              About Money Trust Currency Exchange
            </h2>
            <p className="text-[14px] leading-[45px] font-light  font-poppinss mw-lg:leading-[30px] text-[#000] uppercase">
              For over a decade, Money Trust Currency Exchange has been a
              trusted name in the financial services industry, providing
              reliable and secure currency exchange solutions across Canada. Our
              journey began with a vision to offer transparent and
              customer-focused services, and today, we are proud to be
              recognized for our professionalism and dedication.
            </p>
            <p className="text-[14px] leading-[45px] font-light  font-poppinss mw-lg:leading-[30px] text-[#000] uppercase">
              With two key branches located in Toronto and North Vancouver, we
              have grown to serve a diverse clientele, from individuals to
              businesses, ensuring their financial needs are met with precision
              and care. Our expertise spans across a wide range of currency
              exchange services, tailored to deliver the best value, speed, and
              reliability.
            </p>
            <p className="text-[14px] leading-[45px] font-light  font-poppinss mw-lg:leading-[30px] text-[#000] uppercase">
              At Money Trust, we believe in building lasting relationships by
              putting our customers first. Whether it’s offering competitive
              exchange rates, ensuring secure transactions, or delivering
              exceptional service, we are here to make your financial journey
              seamless and stress-free.
            </p>

            <h4 className="font-poppinss text-[36px] leading-[45px] font-bold text-[#94c99d] my-[26px] mw-xl:text-[32px] mw-md:hidden mw-lg:my-[20px] uppercase">
              Why Choose Us?
            </h4>
            <p className="font-poppinss text-[18px] leading-[24px] font-light text-[#000] mb-[12px] mw-md:hidden mw-xl:text-[16px] mw-xl:leading-[22px] ">
              Trusted Expertise: A decade of experience in currency exchange
              solutions. Convenience: Strategically located branches for easy
              access. Reliability: Secure and transparent transactions with no
              hidden fees. Customer Focus: Dedicated to meeting the unique needs
              of our clients
            </p>
            <p className="font-poppinss text-[18px] leading-[24px] font-normal text-[#707070] mb-[67px] mw-md:hidden mw-xl:text-[16px] mw-xl:leading-[22px] mw-xl:mb-[50px] mw-lg:mb-[25px]">
              Let Money Trust Currency Exchange be your partner in achieving
              your financial goals. Experience the difference with a team that
              cares about your success.
            </p>
            <button
              style={{ fontFamily: "TestSignifier" }}
              className=" px-[32px] font-medium py-[19px] leading-[26px] text-[20px] border-[#015180] border rounded-[8px] mw-lg:leading-[30px] text-[#015180] mw-xl:px-[26px] mw-xl:py-[16px] mw-xl:text-[18px] mw-lg:py-[12px] mw-lg:text-[14px] mw-sm4:text-[12px] mw-lg:mt-[20px]"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
