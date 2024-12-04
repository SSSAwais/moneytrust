import PagesHero from "@/components/pagesHero";
import { Images } from "@/utils/Images";
import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="">
      <PagesHero page={"About US"} />
      <section className="bg-white pt-[60px] mw-lg:pt-[50px] mw-sm4:pt-[25px]">
        {/* Company Information Section */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid mw-lg:grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}

          {/* Illustration Section (Placeholder) */}
          <div className="flex justify-center">
            <img
              src={Images.cover.src}
              alt="Currency Exchange Illustration"
              className="w-full max-w-sm"
            />
          </div>
          <div>
            <h2 className="text-[38px] font-bold text-[#015180] mb-[36px] leading-[45px] mw-xl:text-[32px] mw-xl:leading-[40px] mw-12:mb-[20px] mw-md:text-[26px] mw-sm4:text-[18px] mw-sm4:leading-[27px] mw-sm5:leading-[22px] tracking-[5%]">
              MONEY TRUST CURRENCY EXCHANGE
            </h2>
            <p className="text-[14px] leading-[45px] font-light mb-4 font-poppinss mw-lg:leading-[30px] text-[#000]">
              After ten years of unrelenting dedication to quality, our currency
              exchange business has established a reliable reputation across
              Canada. Founded with the goal of offering trustworthy financial
              solutions, we are proud of our ten-year history of professionalism
              and experience.
            </p>
            <p className="text-[14px] leading-[45px] font-light mb-4 font-poppinss mw-lg:leading-[30px] text-[#000]">
              We have grown and expanded continuously throughout the years, and
              we today have two well-known branches in Toronto and North
              Vancouver.
            </p>
            <p className="text-[14px] leading-[45px] font-light mb-4 font-poppinss mw-lg:leading-[30px] text-[#000]">
              Our ability to serve a wide range of clients and meet the
              financial needs of people and businesses in various locations is
              made possible by our regional presence.
            </p>
            <button className="px-[32px] py-[19px] leading-[26px] text-[20px] border-[#015180] border rounded-[8px] mw-lg:leading-[30px] text-[#015180] mw-xl:px-[26px] mw-xl:py-[16px] mw-xl:text-[18px] mw-lg:py-[12px] mw-lg:text-[14px] mw-sm4:text-[12px] ">
              Learn More
            </button>
          </div>
        </div>

        {/* Expert Team Section */}
        <div className="mt-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mw-lg:mt-[50px] mw-sm4:mt-[25px]">
          <h3 className="text-[38px] font-bold text-[#015180] mb-[36px] leading-[45px] mw-xl:text-[32px] mw-xl:leading-[40px] mw-12:mb-[20px] mw-md:text-[26px] mw-sm4:text-[18px] mw-sm4:leading-[27px] mw-sm5:leading-[22px] tracking-[5%] text-center">
            We Have Expert Team
          </h3>
          <p className="text-gray-600 text-center mb-12">
            Meet our expert management team members
          </p>

          {/* Team Members Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
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

            {/* Team Member 2 */}
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

            {/* Team Member 3 */}
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
        </div>
      </section>
    </div>
  );
};

export default page;
