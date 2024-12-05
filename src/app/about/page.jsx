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
      <section className="bg-white pt-[60px] mw-lg:pt-[50px] mw-sm4:pt-[25px] pb-[100px] mw-lg:pb-[50px] mw-sm4:pb-[25px]">
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
            <h2 className="text-[38px] font-bold text-[#015180] mb-[36px] leading-[45px] mw-xl:text-[32px] mw-xl:leading-[40px] mw-12:mb-[20px] mw-md:text-[26px] mw-sm4:text-[18px] mw-sm4:leading-[27px] mw-sm5:leading-[22px] tracking-[5%]">
              About Money Trust Currency Exchange
            </h2>
            <p className="text-[14px] leading-[45px] font-light  font-poppinss mw-lg:leading-[30px] text-[#000]">
              For over a decade, Money Trust Currency Exchange has been a
              trusted name in the financial services industry, providing
              reliable and secure currency exchange solutions across Canada. Our
              journey began with a vision to offer transparent and
              customer-focused services, and today, we are proud to be
              recognized for our professionalism and dedication.
            </p>
            <p className="text-[14px] leading-[45px] font-light  font-poppinss mw-lg:leading-[30px] text-[#000]">
              With two key branches located in Toronto and North Vancouver, we
              have grown to serve a diverse clientele, from individuals to
              businesses, ensuring their financial needs are met with precision
              and care. Our expertise spans across a wide range of currency
              exchange services, tailored to deliver the best value, speed, and
              reliability.
            </p>
            <p className="text-[14px] leading-[45px] font-light  font-poppinss mw-lg:leading-[30px] text-[#000]">
              At Money Trust, we believe in building lasting relationships by
              putting our customers first. Whether it’s offering competitive
              exchange rates, ensuring secure transactions, or delivering
              exceptional service, we are here to make your financial journey
              seamless and stress-free.
            </p>

            <h4 className="font-poppinss text-[36px] leading-[45px] font-bold text-[#94c99d] my-[26px] mw-xl:text-[32px] mw-md:hidden mw-lg:my-[20px]">
              Why Choose Us?
            </h4>
            <p className="font-poppinss text-[18px] leading-[24px] font-light text-[#000] mb-[12px] mw-md:hidden mw-xl:text-[16px] mw-xl:leading-[22px]">
              Trusted Expertise: A decade of experience in currency exchange
              solutions. Convenience: Strategically located branches for easy
              access. Reliability: Secure and transparent transactions with no
              hidden fees. Customer Focus: Dedicated to meeting the unique needs
              of our clients
            </p>
            <p className="font-poppinss text-[18px] leading-[24px] font-light text-[#707070] mb-[67px] mw-md:hidden mw-xl:text-[16px] mw-xl:leading-[22px] mw-xl:mb-[50px] mw-lg:mb-[25px]">
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

        {/* <div className="mt-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mw-lg:mt-[50px] mw-sm4:mt-[25px]">
          <h3 className="text-[38px] font-bold text-[#015180] mb-[36px] leading-[45px] mw-xl:text-[32px] mw-xl:leading-[40px] mw-12:mb-[20px] mw-md:text-[26px] mw-sm4:text-[18px] mw-sm4:leading-[27px] mw-sm5:leading-[22px] tracking-[5%] text-center">
            We Have Expert Team
          </h3>
          <p className="text-gray-600 text-center mb-12">
            Meet our expert management team members
          </p>

       
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       
            <div className="flex flex-col items-center">
              <div className="bg-white w-full shadow-lg rounded-lg text-center">
                <img
                  src={Images.user1.src}
                  alt="Andry Tait."
                  className="mx-auto w-full"
                />
              </div>
              <div className="flex justify-between w-full pt-4 md:flex-row flex-col items-start">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Jhon Doe</h4>
                  <p className="text-sm text-gray-600 mb-4">Founder & CEO</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <FaTwitter className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                  <FaFacebookF className="text-blue-700 hover:text-blue-800 cursor-pointer" />
                  <RiLinkedinFill className="text-blue-800 hover:text-blue-900 cursor-pointer" />
                </div>
              </div>
            </div>

         
            <div className="flex flex-col items-center">
              <div className="bg-white w-full shadow-lg rounded-lg text-center">
                <img
                  src={Images.user2.src}
                  alt="Andry Tait."
                  className="mx-auto w-full"
                />
              </div>
              <div className="flex justify-between w-full pt-4 md:flex-row flex-col items-start">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Jhonson H.</h4>
                  <p className="text-sm text-gray-600 mb-4">Project Manager</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <FaTwitter className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                  <FaFacebookF className="text-blue-700 hover:text-blue-800 cursor-pointer" />
                  <RiLinkedinFill className="text-blue-800 hover:text-blue-900 cursor-pointer" />
                </div>
              </div>
            </div>

       
            <div className="flex flex-col items-center">
              <div className="bg-white w-full shadow-lg rounded-lg text-center">
                <img
                  src={Images.user3.src}
                  alt="Andry Tait."
                  className="mx-auto w-full"
                />
              </div>
              <div className="flex justify-between w-full pt-4 md:flex-row flex-col items-start">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Andry Tait.</h4>
                  <p className="text-sm text-gray-600 mb-4">Developer</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <FaTwitter className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                  <FaFacebookF className="text-blue-700 hover:text-blue-800 cursor-pointer" />
                  <RiLinkedinFill className="text-blue-800 hover:text-blue-900 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default page;
