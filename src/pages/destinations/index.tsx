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
    <div className="px-4">
      <h3 className="text-[#1a1b22] text-xl font-medium">Trending destinations</h3>
      <div className="swiper-container relative">
        <div className="flex items-center gap-x-2 py-6 ">
        <div className="swiper-button image-swiper-button-prev border w-6 h-6 rounded-md flex items-center justify-center text-[#919191] absolute right-10">
          <MdKeyboardArrowLeft />
        </div>
        <div className="swiper-button image-swiper-button-next border w-6 h-6 rounded-md flex items-center justify-center text-[#919191] absolute right-0 ">
          <MdKeyboardArrowRight />
        </div>
       
        </div>
       
        <Swiper
          modules={[A11y, Navigation]}
          slidesPerView={3}
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
          {destinationsData.map(
            ({ id, content, image, ratings, starIcon, price, location }) => (
              <SwiperSlide className="swiper-slider !w-fit" key={id}>
                <div className="">
                  <div className="bg-white rounded-lg border flex w-fit gap-x-4 p-4">
                    <div className="relative w-20 h-20 rounded-lg border">
                      <Image
                        src={image}
                        alt="img"
                        className="absolute object-cover w-full h-full rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center justify-between ">
                        <h5>{location}</h5>
                        <div className="gap-x-2 flex items-center">
                        <div className="text-[#f59f00]">{starIcon}</div>
                        <p>{ratings}</p>
                        </div>
                       
                      </div>

                      <p className="text-xs">{content}</p>
                      <p>{price}</p>
                    </div>
                  </div>
                </div>
               
                 
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default Destinations;
