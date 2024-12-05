"use client";
import Slider from "react-slick";
import Image from "next/image";
import { Images } from "@/utils/Images";
import "./FlagSlider.css";
const FlagSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // Mobile view
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 576, // Tablet view
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const flags = [
    { src: Images.usFlag.src, alt: "USA", label: "USA" },
    { src: Images.hongkongFlag.src, alt: "Hong Kong", label: "Hong Kong" },
    { src: Images.cadFlag.src, alt: "Canada", label: "Canada" },
    { src: Images.chinaFlag.src, alt: "China", label: "China" },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {flags.map((flag, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center main_image_wrapper"
          >
            <Image
              src={flag.src}
              alt={flag.alt}
              width={191}
              height={128}
              className="!w-[190px]   mw-md:w-[100%] mw-md:h-[80px]  mw-sm5:w-[65px] mw-sm5:h-[44px]"
            />
            <p className="text-[14px] text-[#1F1E21] text-center mt-2 lable_heading font-normal mw-sm4:hidden">
              {flag.label}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlagSlider;
