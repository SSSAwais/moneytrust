import Image from "next/image";
import React, { useState } from "react";
import Location from "../Location";
import Link from "next/link";

const AddressSection = () => {
  const [contactList, setContactList] = useState([
    {
      icons: "/Images/mail.svg",
      heading: "Email",
      detail: "Our friendly team is here to help.",
      email: "hi@nurona.com",
    },
    {
      icons: "/Images/whatsapp.png",
      heading: "Live chat",
      detail: "Our friendly team is here to help.",
      email: "Start new chat",
    },
    {
      icons: "/Images/map-pin.svg",
      heading: "Live Location",
      detail: "Come say hello at our office HQ.",
      email: "100 Smith Street <br/> Collingwood VIC 3066 ",
    },
    {
      icons: "/Images/phone.png",
      heading: "Phone",
      detail: "Mon-Fri from 8am to 5pm.",
      email: "+1 (555) 000-0000",
    },
  ]);
  return (
    <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto pb-[196px] mw-xl:pb-[100px] mw-md:pb-[50px] mw-sm4:pb-[25px]">
      <div className="grid grid-cols-2 gap-4 mt-[64px] mw-lg:grid-cols-1 mw-lg:mt-[50px] mw-sm4:mt-[25px]">
        <div>
          <div className="flex flex-wrap ">
            {contactList.map((e, idx) => {
              return (
                <div
                  className="w-[50%] mb-[48px] mw-lg:mb-[25px] mw-sm3:w-full"
                  key={idx}
                >
                  <Image
                    src={e.icons}
                    alt=""
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px]"
                  />
                  <h4
                    style={{ fontFamily: "TestSignifier" }}
                    className="text-[20px] text-[#101828] leading-[30px] font-normal mt-[16px] mw-md:text-[16px] mw-sm4:text-[12px] mw-sm4:mt-[8px]"
                  >
                    {e.heading}
                  </h4>
                  <h5
                    style={{ fontFamily: "TestSignifier" }}
                    className="text-[16px] leading-[24px] text-[#667085] pt-[8px] mw-sm4:text-[12px]"
                  >
                    {e.detail}
                  </h5>
                  {e.email === "hi@nurona.com" ? (
                    <Link href="mailto:hi@nurona.com">
                      {" "}
                      <p
                        style={{ fontFamily: "TestSignifier" }}
                        className="text-[18px] leading-[28px] font-normal text-[#000] mt-[16px] mw-sm4:mt-[8px] mw-md:text-[16px] mw-sm4:text-[12px]"
                        dangerouslySetInnerHTML={{ __html: e.email }}
                      ></p>
                    </Link>
                  ) : (
                    <p
                      style={{ fontFamily: "TestSignifier" }}
                      className="text-[18px] leading-[28px] font-normal text-[#000] mt-[16px] mw-sm4:mt-[8px] mw-md:text-[16px] mw-sm4:text-[12px]"
                      dangerouslySetInnerHTML={{ __html: e.email }}
                    ></p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-[16px] ">
            <Location />
          </div>
        </div>
        <div className="bg-[#f1faff] rounded-[16px] py-[90px] px-[32px] mw-lg:mt-[50px] mw-sm4:mt-[25px] mw-md:px-[20px] mw-md:py-[50px] mw-sm4:py-[38px]">
          <div className="flex justify-between mw-sm4:flex-col">
            <div className="flex flex-col w-[48%] mw-sm4:w-full">
              <label className="font-lexand  font-light text-[14px] leading-[22px] text-[#334054] pb-[6px] mw-sm4:text-[12px]">
                First name
              </label>
              <input
                placeholder="First Name"
                className="border-[#D0D5DD] border font-lexand text-[16px] font-light py-[12px] px-[16px] rounded-[8px] placeholder:font-lexand placeholder:text-[16px] placeholder:font-light placeholder:text-[#667085] text-[#667085] focus:outline-none mw-sm4:text-[12px] mw-sm4:py-[6px] mw-sm4:px-[10px] rounded-[4px] mw-sm4:placeholder:text-[12px] "
              />
            </div>
            <div className="flex flex-col w-[48%] mw-sm4:w-full mw-sm4:mt-[8px]">
              <label className="font-lexand  font-light text-[14px] leading-[22px] text-[#334054] pb-[6px] mw-sm4:text-[12px] ">
                Last name
              </label>
              <input
                placeholder="Last Name"
                className="border-[#D0D5DD] border font-lexand text-[16px] font-light py-[12px] px-[16px] rounded-[8px] placeholder:font-lexand placeholder:text-[16px] placeholder:font-light placeholder:text-[#667085] text-[#667085] focus:outline-none mw-sm4:text-[12px] mw-sm4:py-[6px] mw-sm4:px-[10px] rounded-[4px] mw-sm4:placeholder:text-[12px] "
              />
            </div>
          </div>
          <div className="flex flex-col pt-[24px] mw-sm4:pt-[8px]">
            <label className="font-lexand  font-light text-[14px] leading-[22px] text-[#334054] pb-[6px] mw-sm4:text-[12px]">
              Email
            </label>
            <input
              placeholder="you@company.com"
              className="border-[#D0D5DD] border font-lexand text-[16px] font-light py-[12px] px-[16px] rounded-[8px] placeholder:font-lexand placeholder:text-[16px] placeholder:font-light placeholder:text-[#667085] text-[#667085] focus:outline-none mw-sm4:text-[12px] mw-sm4:py-[6px] mw-sm4:px-[10px] rounded-[4px] mw-sm4:placeholder:text-[12px]"
            />
          </div>
          <div className="flex flex-col pt-[24px] mw-sm4:pt-[8px]">
            <label className="font-lexand  font-light text-[14px] leading-[22px] text-[#334054] pb-[6px] mw-sm4:text-[12px]">
              Phone Number
            </label>
            <input
              placeholder="+123 456789123"
              className="border-[#D0D5DD] border font-lexand text-[16px] font-light py-[12px] px-[16px] rounded-[8px] placeholder:font-lexand placeholder:text-[16px] placeholder:font-light placeholder:text-[#667085] text-[#667085] focus:outline-none mw-sm4:text-[12px] mw-sm4:py-[6px] mw-sm4:px-[10px] rounded-[4px] mw-sm4:placeholder:text-[12px]"
            />
          </div>
          <div className="flex flex-col pt-[24px] mw-sm4:pt-[8px]">
            <label className="font-lexand  font-light text-[14px] leading-[22px] text-[#334054] pb-[6px] mw-sm4:text-[12px]">
              Message
            </label>
            <textarea
              rows={5}
              className="border-[#D0D5DD] border font-lexand text-[16px] font-light py-[12px] px-[16px] rounded-[8px] placeholder:font-lexand placeholder:text-[16px] placeholder:font-light placeholder:text-[#667085] text-[#667085] focus:outline-none mw-sm4:text-[12px] mw-sm4:py-[6px] mw-sm4:px-[10px] rounded-[4px] mw-sm4:placeholder:text-[12px]"
            ></textarea>
          </div>
          <div className="pt-[24px] mw-sm4:pt-[8px]">
            <label className="flex items-center ">
              <input
                type="checkbox"
                className="border-[#D0D5DD] border w-[20px] h-[20px] rounded-[6px] appearance-none checked:bg-blue-500 checked:border-blue-500 checked:before:content-['✔'] checked:before:text-white checked:before:block checked:before:text-center checked:before:leading-[20px] mw-sm4:text-[12px]  "
                placeholder="Message"
              />
              <span className="font-lexand font-light leading-[24px] ml-[12px] text-[#667085] text-[16px]  mw-sm4:text-[12px]">
                You agree to our friendly privacy policy.
              </span>
            </label>
          </div>
          <button className="font-lexand font-normal text-[20px] leading-[30px] text-[#fff] bg-[#015180] py-[14px] text-center w-[100%] rounded-[50px] mt-[40px] mw-sm4:text-[12px] mw-sm4:py-[6px] mw-sm4:px-[10px] border border-[#0066FF]">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
