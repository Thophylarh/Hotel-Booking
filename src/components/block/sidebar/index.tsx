import Image from "next/image";
import React from "react";
import {AiFillHome } from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import {BsFillTicketDetailedFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineSetting} from 'react-icons/ai';
import AvatarImg from "../../../assets/jpg/avatar.jpg"

type Props = {};

const sidebarItems = [
  {
    id: 0,
    icon: <AiFillHome/>,
    title: "Dashboard",
  },
  {
    id: 1,
    icon: <TbGridDots/>,
    title: "Explore City",
  },
  {
    id: 2,
    icon: <BsFillTicketDetailedFill/>,
    title: "Ticket",
  },
  {
    id: 3,
    icon: <AiOutlineHeart/>,
    title: "Favorites",
  },
  {
    id: 4,
    icon: <AiOutlineSetting/>,
    title: "Settings",
  },
];

function Sidebar({}: Props) {
  return (
    <main>
      <div className="logo">
        <div>
          <h2>Mima Booking</h2>
          <div>
            <Image src={AvatarImg} alt="Avatar" className="w-12 h-12 rounded-full" />
          </div>
          <p>illa jan</p>
        </div>
        <div className="nav-content">
          <div className="flex items-center gap-x-4">
            {sidebarItems.map(({ icon, title, id }) => (
              <div key={id}>
                {icon}
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Sidebar;
