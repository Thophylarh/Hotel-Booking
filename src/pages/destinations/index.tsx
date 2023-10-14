import React from "react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import {
  belairImg,
  franceImg,
  londonImg,
  nigeriaImg,
  turkeyImg,
} from "@/assets/jpg";

const destinationsData = [
  {
    id: 0,
    image: franceImg,
    location: "Montmarte, France",
    starIcon: <AiOutlineStar />,
    ratings: "4/5",
    content: "visiting the best tourist area chosen by the audience",
    price: "$450,000,00",
  },
  {
    id: 1,
    image: turkeyImg,
    location: "Istanbul, Turkey",
    starIcon: <AiOutlineStar />,
    ratings: "5/5",
    content:
      "One of our best-selling tours to Turkey and visiting its regions ...",
    price: "$600,000,00",
  },
  {
    id: 2,
    image: londonImg,
    location: "London, UK",
    starIcon: <AiOutlineStar />,
    ratings: "4/5",
    content: "London is one of the most beautiful places to visit that ...",
    price: "$450,000,00",
  },
  {
    id: 3,
    image: belairImg,
    location: " Belair, US",
    starIcon: <AiOutlineStar />,
    ratings: "4/5",
    content: "visiting the best tourist area chosen by the audience",
    price: "$450,000,00",
  },
  {
    id: 4,
    image: nigeriaImg,
    location: "Abuja, Nigeria",
    starIcon: <AiOutlineStar />,
    ratings: "4/5",
    content: "visiting the best tourist area chosen by the audience",
    price: "$450,000,00",
  },
  {
    id: 5,
    image: franceImg,
    location: "Montmarte, France",
    starIcon: <AiOutlineStar />,
    ratings: "4/5",
    content: "visiting the best tourist area chosen by the audience",
    price: "$450,000,00",
  },
  {
    id: 6,
    image: belairImg,
    location: "Montmarte, France",
    starIcon: <AiOutlineStar />,
    ratings: "4/5",
    content: "visiting the best tourist area chosen by the audience",
    price: "$450,000,00",
  },
];

type Props = {};

function Destinations({}: Props) {
  return (
    <div className="p-4">
      <h3>Trending destinations</h3>
      <div className="swiper-container">
        <div className="swiper-button image-swiper-button-next">
          <MdKeyboardArrowRight />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <MdKeyboardArrowLeft />
        </div>
        <Swiper
          modules={[A11y, Navigation]}
          slidesPerView={2}
          autoplay
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
         <SwiperSlide className="swiper-slide">
  <div className=" space-x-4 p-4 transition-transform duration-300 cursor-pointer interview-container hover:scale-105 card-bg">
    <div className="relative flex items-center justify-center h-full">
    {destinationsData.map(
      ({
        id,
        image,
        location,
        content,
        starIcon,
        ratings,
        price,
      }) => (
        <div className="flex items-center gap-x-8" key={id}>
          <Image
            src={image}
            alt="destination-image"
            className="w-40 h-40 rounded-lg"
          />
          <div className="text-center">
            <h5>{location}</h5>
            <div className="flex items-center justify-center">
              <div className="text-[#f59f00]">{starIcon}</div>
              <p>{ratings}</p>
            </div>
            <p>{content}</p>
            <p>{price}</p>
          </div>
        </div>
      )
    )}
    </div>
   
  </div>
</SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

export default Destinations;
