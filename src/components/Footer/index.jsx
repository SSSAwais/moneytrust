import { Images } from "@/utils/Images";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-[78px] mw-lg:pb-[50px] mw-lg:pt-[0px]">
      <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex   md:px-0 flex-row gap-10 mw-lg:flex-col	">
          {/* Logo and Newsletter */}
          <div className="flex-1 flex flex-col items-start ">
            <Image
              src={Images.HeaderLogo.src} // Replace with your logo path
              alt="Logo"
              width={115}
              height={115}
              className="mb-[24px] mw-lg:w-[100px] mw-lg:h-[100px] mw-md:w-[75px] mw-md:h-[75px] mw-sm4:mb-[20px]"
            />
            <p
              className="text-[16px] leading-[24px] font-normal  text-[#000] mb-[24px] mw-md:text-[14px] mw-sm4:text-[12px]"
              style={{ fontFamily: "Satoshi" }}
            >
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex items-center mb-2 w-[92%]">
              <input
                style={{ fontFamily: "Satoshi" }}
                type="email"
                placeholder="Enter your email"
                className="border border-black rounded-md text-[16px] font-normal p-[12px] text-[#505050] placeholder:text-[16px] placeholder:text-[#505050] mr-2 w-[58%] focus:outline-none mw-md:text-[14px] mw-sm4:text-[12px] mw-sm4:p-[12] mw-sm4:placeholder:text-[12px]"
              />
              <button className=" rounded-md text-[16px] text-[#000] py-[12px] px-[24px] border border-black font-lexand leading-[24px] mw-md:text-[14px] mw-sm4:text-[12px] mw-sm4:py-[12px] mw-sm4:px-[24px] mw-sm4:leading-[18px]">
                Subscribe
              </button>
            </div>
            <p
              className="mt-[16px] text-[12px] leading-[14px] text-[#000] pr-[176px] mw-sm4:pr-[0px]"
              style={{ fontFamily: "Satoshi" }}
            >
              By subscribing you agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and consent to receive updates from our company.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 flex-1">
            {/* Links Columns */}
            <div className="col-span-1">
              <h3 className="font-semibold font-lexand  text-[16px] leading-[24px] text-[#000] mb-[16px]">
                Column One
              </h3>
              <ul className="">
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal mb-[8px]"
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link One
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal"
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link Two
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link Three
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link Four
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link Five
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold font-lexand  text-[16px] leading-[24px] text-[#000] mb-[16px]">
                Column One
              </h3>
              <ul className="">
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link Six
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link Seven
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal"
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link Eight
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link Nine
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal"
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Link Ten
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="col-span-1">
              <h3 className="font-semibold font-lexand  text-[16px] leading-[24px] text-[#000] mb-[16px]">
                Follow Us
              </h3>
              <ul className="">
                <li className="flex items-center mb-[10px]">
                  <FaFacebookF className="mr-2 w-[18px] h-[18px]" />
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex items-center mb-[10px]">
                  <FaInstagram className="mr-2 w-[18px] h-[18px]" />
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Instagram
                  </a>
                </li>
                <li className="flex items-center mb-[10px]">
                  <FaTwitter className="mr-2 w-[18px] h-[18px]" />
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    Twitter
                  </a>
                </li>
                <li className="flex items-center ">
                  <FaLinkedinIn className="mr-2 w-[18px] h-[18px]" />
                  <a
                    href="#"
                    className="hover:underline text-[14px] leading-[20px] text-[#000] font-normal "
                    style={{ fontFamily: "Satoshi" }}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-[80px] flex flex-col md:flex-row justify-between items-center mw-md:mt-[50px] mw-sm4:mt-[25px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[14px] ledaing-[20px] text-[#000] font-normal"
          >
            © 2023 Relume. All rights reserved.
          </p>
          <div className="flex mt-4 space-x-3 md:mt-0">
            <a
              href="#"
              style={{ fontFamily: "Satoshi" }}
              className="underline  whitespace-nowrap text-[14px] leading-[20px] text-[#000] font-normal"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              c
              style={{ fontFamily: "Satoshi" }}
              className="underline  whitespace-nowrap text-[14px] leading-[20px] text-[#000] font-normal"
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={{ fontFamily: "Satoshi" }}
              className="underline  whitespace-nowrap text-[14px] leading-[20px] text-[#000] font-normal"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
