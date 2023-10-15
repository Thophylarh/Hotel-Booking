import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { MdMenu } from "react-icons/md"; // Import the hamburger menu icon

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="p-4">
      <div className="md:flex items-center justify-between hidden ">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              className="py-2 pl-8 pr-4 block w-60 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300 outline-none"
              type="text"
              placeholder=" Search any things..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <p className="text-[#656974] font-semibold text-sm">
            Saturday, May 2023
          </p>
          <div className="relative">
            <p className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[#fff] text-xs absolute -top-2 -left-2">
              3
            </p>
            <div className="bg-[#efefef] w-8 h-8 flex items-center justify-center rounded-lg text-[#767b84]">
              <MdNotificationsNone size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-end">
          <MdMenu size={24} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
