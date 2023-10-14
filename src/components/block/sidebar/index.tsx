import Image from "next/image";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { BsFillTicketDetailedFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { MdAddCircle } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import AvatarImg from "../../../assets/jpg/avatar.jpg";

type Props = {};

const sidebarItems = [
  {
    id: 0,
    icon: <AiFillHome />,
    title: "Dashboard",
  },
  {
    id: 1,
    icon: <TbGridDots />,
    title: "Explore City",
  },
  {
    id: 2,
    icon: <BsFillTicketDetailedFill />,
    title: "Ticket",
  },
  {
    id: 3,
    icon: <AiOutlineHeart />,
    title: "Favorites",
  },
  {
    id: 4,
    icon: <AiOutlineSetting />,
    title: "Settings",
  },
];

function Sidebar({}: Props) {
  return (
    <main className="max-h-screen lg:block overflow-y-scroll bg-[#fff] min-w-[250px] py-4">
      <div className="logo  flex flex-col items-center">
        <div className="">
          <div className="mx-auto flex flex-col items-center space-y-4">
            <h2 className="text-[#1a1b22] text-2xl font-bold">
              Mima <span className="text-[#636363]">Booking</span>{" "}
            </h2>
            <div className="relative">
              <div className="border-2 w-20 h-20 rounded-full flex items-center justify-center">
                <Image
                  src={AvatarImg}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="absolute -bottom-3 left-8">
                <MdAddCircle size={20} />
              </div>
            </div>

            <p className="text-[#636363] text-base font-medium">illa jan</p>
          </div>
        </div>
        <div className="nav-content ">
          <div className="py-20">
          <div className="space-y-5 ">
            {sidebarItems.map(({ icon, title, id }) => (
              <div key={id} className="flex items-center gap-x-4">
                <div className="text-[#919191]">{icon}</div>

                <p className="text-[#919191]">{title}</p>
              </div>
            ))}
          </div>
        
          </div>
          <div className="logout flex items-center gap-x-4 last:mb-0">
          <div className="text-[#919191]">
            <MdOutlineLogout />
          </div>

          <p className="text-[#919191]">Logout</p>
        </div>
        
        </div>
       
      </div>
    </main>
  );
}

export default Sidebar;
