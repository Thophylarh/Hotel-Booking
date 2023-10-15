import { franceImg, hotelFive, hotelFour, hotelOne, hotelTri, hotelTwo } from "@/assets/jpg";
import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";

const bestOfferData = [
  {
    id: 0,
    image: hotelOne,
    title: "7Seasons Apartments",
    locationIcon: <CiLocationOn size={14} />,
    likeIcon: <AiOutlineHeart size={14} />,
    cost: "$65,00",
    duration: "/ night",
    country: "Kensington/ London",
  },
  {
    id: 1,
    image: hotelTwo,
    title: "Along With The Villa",
    locationIcon: <CiLocationOn size={14} />,
    likeIcon: <AiOutlineHeart size={14} />,
    cost: "$65,00",
    duration: "/ night",
    country: "Hungary/ Budapest",
  },
  {
    id: 2,
    image: hotelTri,
    title: "Resort and Recreation",
    locationIcon: <CiLocationOn size={14} />,
    likeIcon: <AiOutlineHeart size={14} />,
    cost: "$65,00",
    duration: "/ night",
    country: "Williamstreet / Boxon",
  },
  {
    id: 3,
    image: hotelFour,
    title: "Beautiful and Classy",
    locationIcon: <CiLocationOn size={14} />,
    likeIcon: <AiOutlineHeart size={14} />,
    cost: "$65,00",
    duration: "/ night",
    country: "Citadines Opera  / France",
  },
  {
    id: 4,
    image: hotelFive,
    title: "Permanent Peace",
    locationIcon: <CiLocationOn size={14} />,
    likeIcon: <AiOutlineHeart size={14} />,
    cost: "$65,00",
    duration: "/ night",
    country: "Sugar Apartments / Brazil",
  },
  {
    id: 5,
    image: franceImg,
    title: "Permanent Peace",
    locationIcon: <CiLocationOn size={14} />,
    likeIcon: <AiOutlineHeart size={14} />,
    cost: "$65,00",
    duration: "/ night",
    country: "Sugar Apartments / Brazil",
  },
];

function BestOffer() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between py-2">
        <h5 className="text-[#1a1b22] text-xl font-medium">Best Offer</h5>
        <p className="text-sm">View All</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-2 md:gap-y-0">
        {bestOfferData.map(
          ({
            id,
            country,
            duration,
            image,
            locationIcon,
            title,
            likeIcon,
            cost,
          }) => (
            <div
              className="bg-white rounded-lg border w-fit gap-x-4 p-4 transition-transform duration-300 cursor-pointer hover:scale-105"
              key={id}
            >
              <div className="relative w-40 h-20 rounded-lg border">
                <Image
                  src={image}
                  alt=""
                  className=" absolute object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="text-base font-medium pt-3"> {title}</p>
                <div className="flex items-center gap-x-2">
                  <div className="text-[#919191]">{locationIcon}</div>

                  <p className=" text-[#919191] text-xs">{country}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    {cost} <span className=" text-[#919191] text-xs">{duration}</span>
                  </p>
                  <div className="border w-6 h-6 rounded-lg  text-[#919191] flex items-center justify-center">
                    {likeIcon}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default BestOffer;
