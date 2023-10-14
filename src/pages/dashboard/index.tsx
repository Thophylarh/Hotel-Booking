import Navbar from "@/components/block/nav";
import Sidebar from "@/components/block/sidebar";
import React from "react";

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
        
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
