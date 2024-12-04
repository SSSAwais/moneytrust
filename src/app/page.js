import Calculator from "@/components/Calculator";
import FlagSlider from "@/components/FlagSlider";
import Hero from "@/components/Hero";
// import HeroCard from "@/components/Hero/HeroCard";
import { Images } from "@/utils/Images";
import Image from "next/image";
import { BiPlusMedical } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { PiStarThin } from "react-icons/pi";

export default function Home() {
  const workArray = [
    {
      img: Images.progress.src,
      heading: "Get The Exchange Rate",
      desc: "Call our office or simply walk-in to know the latest exchange rate.",
    },
    {
      img: Images.chart.src,
      heading: "Confirm The Transfer",
      desc: "Confirm the exchange rate and the service fee and pay the equivalent money to our office cashier. Also provide the destinaion account/contact information.",
    },
    {
      img: Images.success.src,
      heading: "Track your transfer",
      desc: "We process your money transfer as soon as possible and will update you when the money is delivered or transferred to the destination account/person.",
    },
  ];

  const chooseArray = [
    {
      icon: "",
      title: "Secure and Reliable",
      desc: "We are regulated by FINTRAC and have a segregated account at major Canadian financial institution. With our state-of-the-art currency order management system, you are at a relief by using an extremely secure service.",
    },
    {
      icon: "",
      title: "Responsive Staff",
      desc: "Our Staff is well trained to handle multiple queries at a time, you will be pleased with our customer management experience, your satisfaction is our top priority.",
    },
    {
      icon: "",
      title: "Fast Service",
      desc: "We offer same day delivery of funds to your desired destination if booked before bank cut-off.Our instant money transfer service takes less time than you would usually imagine.",
    },
    {
      icon: "",
      title: "Best Rate",
      desc: "We guarantee to beat your bank’s exchange rate. You can save hundreds to thousands of dollars.",
    },
  ];

  const servicesArray = [
    {
      title: "Western Union Transfers",
      desc: "A desirable choice for individuals who want to get the most for their money because of its dedication to offering reasonably priced services.",
    },
    {
      title: "Foreign Currency Banknotes",
      desc: "Guarantees a smooth and effective procedure for obtaining the banknotes you require, regardless of whether you are a traveller or business.",
    },
    {
      title: "Money Gram Transfers",
      desc: "One of the best options for individuals who value efficiency in their international financial transactions because of its speedy money transfer service",
    },
    {
      title: "Ria Money Transfer",
      desc: "Our Ria Money Transfer service offers people wishing to transfer and receive money worldwide a dependable and easy-to-use option.",
    },
  ];

  const planArray = [
    {
      img: Images.currency.src,
      title: "Easy Currency Conversion",
      desc: "Our foreign student currency exchange service guarantees that students have the financial freedom needed for both daily expenses and academic endeavours by enabling them to convert their native currency to Canadian dollars or any other essential currency with ease.",
    },
    {
      img: Images.assis.src,
      title: "Banking Assistance",
      desc: "To help students seamlessly integrate into the local banking system, we offer Banking Assistance, which helps students open bank accounts in Canada. With the help of this service, students may easily access vital financial services and manage their finances more effectively by streamlining the frequently complicated account opening process.",
    },
    {
      img: Images.money.src,
      title: "Money Transfer",
      desc: "Finally, students may send and receive money worldwide or from their home country safely and effectively using our Student Money Transfer service. Our dependable transfer service makes sure that money reaches students quickly and safely, whether it's for living expenses, tuition, or other financial needs. This helps students have a stress-free financial experience while they study in Canada.",
    },
  ];

  const TestimonialArray = [
    {
      user: { img: Images.user.src, name: "Jonny Smith", job: "Banker" },
      desc: "“The bank that has secured quality and dictated taste in the banking sector, I wan to thanks to a brilliant rebranding and unique working methods. From the very first minute Ceve bank made us take a fresh and modern look.",
    },
    {
      user: { img: Images.user.src, name: "Victor James", job: "CEO of Solit" },
      desc: "“The best innovative and digital bank ,with the best service and staff.",
    },
    {
      user: {
        img: Images.user.src,
        name: "Jonathon Ronan",
        job: "Businessman",
      },
      desc: "“Excellent service, perfect and friendly staff in branch. I am very thankful to the Credit Services Depart ment, my loan was granted without any hassle - easy, fast and with quality.",
    },
    {
      user: {
        img: Images.user.src,
        name: "Johny Lorence",
        job: "Enterpreuner",
      },
      desc: "“We can confidently state that Ceve bank is one of our most innovative and brave partners.",
    },
  ];

  return (
    <main className="pb-10">
      <Hero />

      <section className="md:hidden px-5 md:px-0 pb-5 -mt-8 z-10 block relative">
        {/* <HeroCard /> */}
        <Calculator />
      </section>

      {/* popular countries section start here */}

      <section className="max-w-[1400px] px-4 sm:px-6 lg:px-8 flex pt[65px] lg:flex-row flex-col gap-y-3  mx-auto justify-between items-end mt-[65px]    mw-13:px-[25px] mw-xl:w-[100%] mw-lg:items-start mw-md:mt-[50px] mw-sm4:mt-[25px]">
        <div className=" w-[40%] mx-14:w-[35%] mw-lg:w-[100%] mw-lg:mb-[20px] mw-sm5:mb-[12px]">
          <h1 className="font-bold  text-[38px] mb-[37px] mw-xl:text-[32px] mw-14:mb-[30px] mw-sm4:text-[26px] mw-sm5:text-[18px] mw-sm5:leading-[22px] text-[#000] mw-sm4:mb-[20px] mw-sm5:mb-[10px] ">
            Popular Countries Our <br /> Customers Send Money
          </h1>
          <p className="text-[24px] font-normal leading-[32px] text-[#1f1e21] opacity-80 pr-[90px] mw-14:text-[20px] mw-sm4:text-[16px] mw-sm5:text-[12px] mw-sm5:leading-[20px] mw-sm4:text-[#000] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vel cursus eros, a finibus nibh. Donec porttitor ligula nec
          </p>
        </div>
        <div className="w-[60%] mx-14:w-[65%] mw-lg:w-[100%]">
          <FlagSlider />
        </div>
      </section>

      {/* popular countries section end here */}

      {/* money transfer section start here */}

      <section className="max-w-[1400px] px-4 sm:px-6 lg:px-8 flex flex-col items-center mx-auto gap-y-3 mt-[160px] mw-md:mt-[60px] mw-sm4:mt-[30px]">
        <h1 className="text-[38px] text-center font-bold  font-poppinss text-[#000] mw-xl:text-[32px] mw-sm4:text-[26px] mw-sm5:text-[18px] mw-sm5:hidden">
          How Does Money Transfer Work?
        </h1>
        <h1 className="hidden text-[38px] text-center font-bold  font-poppinss text-[#000] mw-xl:text-[32px] mw-sm4:text-[26px] mw-sm5:text-[18px] mw-sm5:block">
          How Does Money <br /> Transfer Work?
        </h1>
        <div className="flex justify-center">
          <p className="md:text-lg mt-2 text-center max-w-[600px] font-poppinss font-normal text-[#000]  mw-md:text-[16px] mw-sm5:text-[12px] mw-sm5:px-[34px]">
            Mobile banking differs from mobile payments, which involves the use
            of a mobile device.
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 flex-col items-center md:mt-10 justify-between max-w-[1225px] w-full relative">
          {workArray?.map((item, i) => (
            <div
              key={i}
              className="z-10 flex items-center w-full justify-start p-4"
            >
              <img
                src={item.img}
                className={`h-64 flex justify-start items-start w-full rounded-lg ${
                  i === 2 ? "pb-8" : ""
                }`}
                alt=""
              />
            </div>
          ))}
          <img
            className="absolute lg:rotate-0 rotate-90 h-full w-full "
            src={Images.waveLine.src}
            alt=""
          />
        </div>
        <div className="items-start flex lg:flex-row  flex-col md:mt-10 justify-between max-w-[1225px] w-full relative mw-lg:items-center">
          {workArray?.map((item, i) => (
            <div
              key={i}
              className="z-10 flex flex-col items-center justify-center  p-4"
            >
              <div className="flex flex-col w-full">
                <Image
                  src={item.img}
                  className={`h-[256px] flex lg:hidden justify-start items-start w-full rounded-lg  ${
                    i === 2 ? "lg:pb-8" : ""
                  }`}
                  alt=""
                  height={256}
                  width={256}
                />
                <h1 className="md:text-2xl text-xl font-bold  mt-5 flex items-center justify-center font-poppinss text-[#000] mw-11:text-[22px] mw-sm5:text-[14px] ">
                  {item?.heading}
                </h1>
              </div>
              <p className="max-w-xs text-center mt-4 font-poppinss text-[#000] text-[18px] mw-11:text-[16px] mw-sm5:text-[12px] mw-sm5:px-[33px]">
                {item?.desc}
              </p>
            </div>
          ))}
          <img
            className="absolute lg:hidden rotate-90 h-full w-full "
            src={Images.waveLine.src}
            alt=""
          />
        </div>
      </section>

      {/* money transfer section start here */}

      {/* why choose us section starts here */}

      <section className="max-w-[1400px] px-4 sm:px-6 mx-auto flex pb-3 lg:flex-row flex-col md:gap-5 mt-[165px] mw-md:mt-[50px] mw-sm4:mt-[25px]">
        <img src={Images.chose.src} className=" rounded-lg lg:w-1/2" alt="" />
        <div className="lg:pl-28 mw-12:pl-[50px] mw-lg:pl-[0px]">
          <h1 className="text-[38px] text-[#091133] font-bold flex items-center leading-[48px] mw-xl:text-[32px] mw-sm4:text-[26px] mw-sm5:text-[18px] mw-sm5:leading-[22px] mw-md:pt-[20px]">
            Why Choose Us?
          </h1>
          <p className="text-[18px] pt-4 text-[#000] leading-[26px] font-normal mw-11:text-[16px] mw-11:leading-[22px] mw-md:text-[14px] mw-md:leading-[20px] mw-sm4:text-[12px] ">
            {
              "When it comes to your currency exchange needs in North York, Toronto, look no further than us. We understand the value of accurate and speedy transactions at our exchange office, and our committed team is always available to help you with a degree of responsiveness that guarantees your peace of mind. Select us for your currency exchange needs, and discover why we're the go-to option in North York—our combination of security, dependability, and quickness."
            }
          </p>
          <section className="md:mt-8 grid grid-cols-1 mt-2 md:grid-cols-2 gap-3">
            {chooseArray.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <img src={Images.checkGreen.src} className="mt-1" alt="" />
                <div>
                  <h1 className="font-medium text-[#091133] text-[16px] leading-[26px] mb-[6px] mw-sm4:text-[14px]">
                    {item.title}
                  </h1>
                  <p className=" text-[15px] font-normal text-[#464646] leading-[20px] mw-sm4:text-[12px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>

      {/* why choose us section ends here */}

      {/* our services glance starts here */}

      <section className="bg-gray3  pt-[100px] pb-[148px] mt-[80px] mw-md:mt-[50px] mw-md:pt-[50px] mw-md:pb-[50px] mw-sm4:py-[25px] mw-sm4:mt-[25px]">
        <div className="max-w-[1400px] px-4 sm:px-6 mx-auto">
          <div className="flex justify-between md:flex-row flex-col mb-[50px] mw-sm4:mb-[25px]">
            <h4 className="text-[14px] hidden mw-md:block text-[#94c99d] leading-[21px]">
              Core Services
            </h4>
            <h1 className="text-[38px] font-bold max-w-[320px] flex sm:flex-row flex-col gap-3 leading-10 text-[#070f38] items-start leading-[60px]  mw-xl:text-[32px] mw-xl:leading-[52px] mw-sm4:text-[26px] mw-xl:leading-[44px]  mw-sm5:text-[18px] mw-sm5:leading-[22px] mw-md:max-w-full">
              <img
                src={Images.CoreServices.src}
                className="sm:block hidden mw-md:hidden"
                alt=""
              />
              <p className="text-[#070f38] sm:hidden text-[38px] mw-md:hidden">
                Core Services
              </p>
              Our Services At A Glance
            </h1>
            <div className="flex justify-end flex-col items-end gap-2 mw-md:justify-start mw-md:items-start">
              <p className="sm:text-end text-start max-w-[500px] text-[#707070] mw-xl:text-[14px] mw-md:text-start ">
                Quickly and easily send, receive and request money online with
                Money Trust.
              </p>
              <button className="bg-[#1f3661] text-white hidden md:flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-[16px] font-medium  md:px-6 px-3 py-3 rounded-full mt-[23px] mw-xl:text-[14px] mw-xl:py-[10px] mw-xl:px-[20px] ">
                View More
                <img src={Images.plus.src} className="h-5" alt="ico" />
              </button>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
            {servicesArray.map((item, i) => (
              <div
                key={i}
                className="bg-white flex flex-col pt-[30px] pb-[50px] px-[20px]"
              >
                <BiPlusMedical
                  className={`${
                    i === 0 ? "text-[#7CBF88]" : ""
                  } text-[#7203E3]`}
                />
                <h1 className="font-bold pr-[100px] text-[20px]  text-[#212529] leading-[24px] mt-[39px] mw-lg:text-[18px] mw-md:text-[16px] mw-md:pr-[0px] mw-md:mt-[20px]">
                  {item.title}
                </h1>
                <p className="text-end self-end text-[16px] max-w-[90%] text-[#707070] leading-[28px] mt-[40px] mw-md:mt-[20px] mw-md:text-[14px] mw-md:leading-[22px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center py-5 md:hidden mw-md:pb-[0px]">
            <button className="bg-[#94C99D] text-white flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full">
              View More
              <img src={Images.plus.src} className="h-5" alt="ico" />
            </button>
          </div>
        </div>
      </section>

      {/* our services glance ends here */}

      {/* international students starts here */}

      <section className="max-w-[1400px] px-4 sm:px-6 mx-auto  md:flex lg:flex-row flex-col gap-5 mt-[134px] mw-md:mt-[50px] mw-sm4:mt-[25px]">
        <div className="flex-1 mw-md:pb-[50px] mw-sm4:pb-[25px]">
          <strong className="font-bold text-[16px] pb-[14px] font-Figtree leading-[16px] text-[#000] mw-md:hidden">
            Best plan
          </strong>
          <h1 className="text-[38px] leading-[52px] font-bold text-[#0d0e10] mw-xl:text-[32px] mw-sm4:text-[26px] mw-sm5:text-[18px] mw-sm5:leading-[22px] mw-md:leading-[40px]">
            International Students <br /> Are Welcome
          </h1>
          <div className="flex flex-col gap-4 pt-[60px] mw-md:pt-[30px]">
            {planArray.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-start mb-[40px] mw-md:mb-[20px]"
              >
                <img
                  src={item.img}
                  alt="ico"
                  className="mw-sm4:w-[34px] mw-sm4:h=[34px]"
                />
                <div>
                  <h1 className="font-bold text-[#0D0E10] text-[20px] leading-[20px] pb-[13px] font-Figtree mw-md:text-[18px]">
                    {item.title}
                  </h1>
                  <p className="text-[#676879] font-normal text-[15px] font-Figtree leading-[20px] mw-md:text-[14px] mw-sm4:text-[12px] mw-sm4:leading-[16px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            <button className="bg-blue1 text-white w-fit flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-[16px]   px-[33px] py-[20px] rounded-full font-Figtree font-bold mw-lg:text-[14px] mw-lg:py-[16px] mw-lg:px-[26px] mw-sm5:text-[12px] mw-sm5:py-[9px] mw-sm5:px-[11px]">
              Discover More
              <GoArrowRight className="ml-[3px]" />
            </button>
          </div>
        </div>
        <img src={Images.plan.src} className="flex-1 lg:w-1/5" alt="" />
      </section>
      {/* international students ends here */}

      {/* hightlights of our services started here*/}
      <section className="bg-[#015180] pt-[117px] pb-[110px] mt-[137px] mw-md:mt-[50px] mw-md:pt-[50px] mw-md:pb-[50px] mw-sm4:py-[25px]">
        <div className="max-w-[1400px] px-4 sm:px-6 mx-auto  text-white gap-4 flex flex-row mw-lg:flex-col">
          <div className="w-[40%] mw-12:w-[48%] mw-lg:w-[100%]">
            <div className="max-w-[593px] w-[100%] mx-auto">
              <Image
                src={"/Images/girl.png"}
                width={593}
                height={883}
                alt=""
                className="md:block hidden w-[593px] h-[850px] mw-xl:h-[770px]"
              />
            </div>
          </div>

          <div className="w-[60%] mw-12:w-[62%] mw-lg:w-[100%]">
            <h1 className="px-5 md:px-0 text-[38px] font-bold pb-[22px] leading-[30px] text-white mw-xl:text-[32px] mw-sm4:text-[26px] mw-sm5:text-[18px] mw-md:pl-[0px]">
              Highlights Of Our Services
            </h1>
            <p className="px-5 md:px-0 text-[17px] font-Montserrat leading-[20px] pr-[80px] mw-md:px-[0px]">
              This summer camp is designed for international students aged 10-18
              with an interest in AI and entrepreneurship. Participants should
              be eager to engage in hands-on activities in Singapore and explore
              how AI applies to business innovation.
            </p>
            <div className="pt-[24px] ">
              <div className="flex px-5 md:px-0">
                <strong className="font-poppinss border border-b-0 border-[#B8B8B8] font-semibold md:text-2xl text-[23px] md:h-[80px] h-[50px] flex justify-center items-center flex-1 px-1 whitespace-nowrap mw-xl:h-[60px] mw-xl:text-[20px] mw-9:text-[18px] mw-md:text-[16px] mw-sm4:text-[14px] mw-sm5:text-[12px]">
                  Security
                </strong>
                <strong className="font-poppinss md:text-2xl text-[23px] font-semibold  md:h-[80px] h-[50px] flex justify-center items-center flex-1 px-1 whitespace-nowrap mw-xl:h-[60px] mw-xl:text-[20px] mw-9:text-[18px] mw-md:text-[16px] mw-sm4:text-[14px] mw-sm5:text-[12px]">
                  No Hidden Fees
                </strong>
                <strong className="font-poppinss md:text-2xl text-[23px] font-semibold  md:h-[80px] h-[50px] flex justify-center items-center flex-1 px-1 whitespace-nowrap mw-xl:h-[60px] mw-xl:text-[20px] mw-9:text-[18px] mw-md:text-[16px] mw-sm4:text-[14px] mw-sm5:text-[12px]">
                  Speed
                </strong>
              </div>
              <img
                src={"/Images/mobile_imag.png"}
                alt=""
                className="md:hidden block max-h-[200px] w-full object-cover object-center h-full"
              />
              <div
                className="pt-[34px] pl-[28px] pr-[45px] md:border border-[#B8B8B8] pb-[65px] mw-13:pb-[12px] mw-xl:p-[20px] 
              mw-md:px-[20px] mw-sm4:px-[0px]  "
              >
                <p className="leading-9 font-poppinss text-[18px] leading-[34px] font-normal pb-[40px] mw-12:text-[17px] mw-12:leading-[33px] mw-11:text-[16px] mw-md:text-[14px] mw-sm4:text-[12px] mw-sm4:leading-[22px] mw-sm4:pb-[16px] ">
                  {
                    "To protect our clients' financial transactions, we use strong and advanced security measures at every stage of the currency conversion procedure. Our cutting-edge solutions shield critical data using cutting-edge encryption technology, guaranteeing that it stays private and unreadable by other parties. Furthermore, our qualified staff is educated to follow stringent security guidelines, ensuring the integrity of every transaction. Our steadfast focus to upholding the highest security standards highlights our commitment to providing a safe and secure environment for all currency exchange transactions at our Toronto and North Vancouver branches. We place a high priority on the trust and confidence of our clients."
                  }
                </p>
                <div className="flex flex-col gap-4 pb-10 items-start mw-md:pb-[0px]">
                  <div className="flex items-center gap-2">
                    <img src={Images.checkGreen.src} className="h-5" alt="" />
                    <span className=" text-[14px] leading-[27px] font-normal mw-sm4:text-[12px]">
                      Great Exchange rate
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Images.checkGreen.src} className="h-5" alt="" />
                    <span className=" text-[14px] leading-[27px] font-normal mw-sm4:text-[12px]">
                      24/7 Transfer
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Images.checkGreen.src} className="h-5" alt="" />
                    <span className=" text-[14px] leading-[27px] font-normal mw-sm4:text-[12px]">
                      No Hidden Fees
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hightlights of our services ended here*/}

      {/* feedback section starts here */}

      <section className="bg-[#FAFAFA]  py-[100px] mw-md:py-[50px] mw-sm4:py-[25px]">
        <div className="max-w-[1400px] px-4 sm:px-6 mx-auto ">
          <div className="flex justify-between md:flex-row flex-col items-start">
            <p className="hidden mw-md:block text-[14px] text-[#015180] leading-[21px] font-medium mw-sm4:text-[12px] mb-[6px]">
              Testimonial
            </p>
            <h1 className="text-[50px] font-bold  flex sm:flex-row flex-col gap-3 leading-[60px] text-[#070f38] mw-14:text-[42px] mw-xl:text-[32px] mw-xl:leading-[50px] mw-sm4:text-[26px] mw-sm5:text-[18px] mw-sm4:leading-[26px]">
              <img
                src={Images.Testimonial.src}
                className="mr-[25px] mw-md:hidden"
                alt=""
              />
              <p className="text-blue1 hidden text-lg mw-md:text-[14px] mw-sm4:text-[12px] font-medium mw-sm4:mb-[6px] leading-[21px]">
                Testimonial
              </p>
              Our client's feedback <br /> is our strength
            </h1>
            <p className="hidden text-[14px] font-normal text-[#000] mw-md:block mw-sm4:text-[12px] mt-[20px]">
              Quickly and easily send, receive and request money online with
              Money Trust.
            </p>
            <div className="flex items-center text-gray-400 mw-md:hidden">
              <div className="inline-block h-3 w-3 bg-blue1 rounded-[50%]"></div>
              ---------
              <div className="inline-block h-3 w-3 bg-gray-400 rounded-[50%]"></div>
            </div>
          </div>
          <div className="mt-[50px] flex scrollbar-hide overflow-x-auto">
            {TestimonialArray.map((item, i) => (
              <div
                key={i}
                className="bg-white min-w-[310px] md:min-w-[390px] h-full flex flex-col pt-[40px] pl-[30px] pr-[50px] mw-sm4:px-[20px]"
              >
                <div className="flex items-center gap-2">
                  {Array(i + 2)
                    .fill(i + 2)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="bg-[#94C99D] flex justify-center items-center w-5 h-5 "
                      >
                        <PiStarThin className="text-white" />
                      </div>
                    ))}
                </div>
                <p className="pt-[29px] text-[#070F38] text-[18px] leading-[32px] pr-[70px] mw-md:text-[16px] mw-md:leading-[28px] mw-sm4:text-[14px] mw-sm4:leading-[26px] mw-sm5:text-[12px] mw-sm5:leading-[24px] mw-sm4:pr-[0px] ">
                  {item.desc}
                </p>
                <div className="pt-[30px] flex gap-3 pb-[40px] mw-sm4:pt-[10px] mw-sm4:pb-[10px]">
                  <img
                    className="w-[50px] h-[50px]"
                    src={item.user.img}
                    alt=""
                  />
                  <div>
                    <h1 className="font-medium text-[18px] leading-[22px] text-[#015180]">
                      {item.user.name}
                    </h1>
                    <h1 className="font-medium text-[14px] leading-[21px] text-[#707070]">
                      {item.user.job}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* feedback section ends here */}

      <section className="bg-[#F4F4F4] p-5 md:p-10 ">
        <div className="container md:px-20 mx-auto ">
          <h1 className="text-center font-bold text-xl md:text-4xl pt-5">
            We Are Trusted By
          </h1>
          <div className="flex  mt-3 justify-center">
            <div className="w-56 h-[2px] bg-[#94C99D]"></div>
          </div>
          <div className="flex justify-center flex-wrap lg:flex-nowrap gap-5 pt-10">
            <img
              src={Images.trust1.src}
              alt=""
              className="w-[130px] sm:w-auto"
            />
            <img
              src={Images.trust2.src}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
