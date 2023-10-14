import { hotelHeroImg } from "@/assets/jpg";
import Navbar from "@/components/block/nav";
import Sidebar from "@/components/block/sidebar";
import Image from "next/image";
import React from "react";


const heroData =[
    {
        id:0,
        icon:"",
        title:'Where Are You Going?',
        caretIcon:""
    },
    {
        id:1,
        icon:"",
        title:'Check-in Date',
        caretIcon:""
    },
    {
        id:2,
        icon:"",
        title:'3 adults?',
        caretIcon:""
    },
   
 
]

type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="">
      <div className="flex">
        <Sidebar />
        <div className="bg-[#f9f9f9] w-full h-screen">
            <div>
            <Navbar />
            </div>
        {/* section 1 */}
        <section className="p-4">
            <div className=" ">
                <Image src={hotelHeroImg}  alt='Hotel-image' className="rounded-lg w-full h-[300px]" />
                <div className="bg-[#ffffff]">

                </div>
            </div>
        </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
