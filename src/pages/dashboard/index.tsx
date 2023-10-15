import { hotelHeroImg } from "@/assets/jpg";
import Navbar from "@/components/block/nav";
import Sidebar from "@/components/block/sidebar";
import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Destinations from "../destinations";
import BestOffer from "../offer";

const selectData = [
  {
    id: 0,
    icon: <CiLocationOn size={20} />,
    title: "Where Are You Going ?",
    valueTwo: "Lorem ipsum",
    caretIcon: <MdKeyboardArrowDown />,
  },
  {
    id: 1,
    icon: <AiFillSchedule size={20} />,
    title: "Check-in Date",
    valueTwo: "Check-out Date",
    caretIcon: <MdKeyboardArrowDown />,
  },
  {
    id: 2,
    icon: <BsFillPersonFill size={20} />,
    title: "3 adults",
    valueTwo: "12 kids",
    caretIcon: <MdKeyboardArrowDown />,
  },
];

type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="">
      <div className="flex">
        <Sidebar />
        <div className="bg-[#f9f9f9] h-full w-10/12 overflow-hidden">
          <div>
            <Navbar />
          </div>
          {/* section 1 */}
          <section className="p-4">
            <div className=" relative">
              <Image
                src={hotelHeroImg}
                alt="Hotel-image"
                className="rounded-lg md:w-full md:h-[300px] w-[100%] h-[350px] object-cover"
              />
              <div className="bg-[#ffffff] w-full md:w-[80%] left-0 md:left-[10%] absolute -bottom-6 md:rounded-lg p-2">
                <div className="md:flex items-center md:gap-x-12 px-4 block ">
                  {selectData.map(
                    ({ id, title, icon, caretIcon, valueTwo }) => (
                      <div key={id} className="relative group">
                        <select className="bg-white text-[#c6ccd6] pl-10 pr-4 py-2 rounded-lg border-none  focus:ring focus:ring-blue-300 focus:ring-opacity-50 w-[240px] cursor-pointer appearance-none">
                          <option value={title}>{title}</option>
                          <option value="placeholder">{valueTwo}</option>
                        </select>

                        <div className="absolute inset-y-0 left-3 flex items-center text-[#c6ccd6]">
                          {icon}
                        </div>

                        <div className="absolute inset-y-0 right-3 flex items-center text-[#c6ccd6] group-hover:text-[#000] cursor-pointer">
                          {caretIcon}
                        </div>
                      </div>
                    )
                  )}

                  <button className="bg-[#494d72] text-sm rounded-lg py-2 px-4 text-[#fff]">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* section 3 */}
          <section className="py-4">
            <Destinations />
          </section>
          {/* section 2 */}
          <section className="py-2">
            <BestOffer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
