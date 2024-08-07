import React, { useState } from "react";
import SearchBox from "./SearchBox";
import UserAvatar from "./UserAvatar";
import { FaEnvelope, FaCog, FaBell, FaTh, FaUser } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className=" min-w-[760px] flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex">
        <TbLayoutDashboardFilled className="hidden md:block mr-16 text-3xl text-sky-400" />
        <SearchBox className="hidden md:block" />
      </div>
      <div className="relative">
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-700">
            <FaEnvelope className="cursor-pointer hover:text-sky-400" />
          </div>
          <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-700">
            <FaBell className="cursor-pointer hover:text-sky-400" />
          </div>
          <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-700">
            <FaCog className="cursor-pointer hover:text-sky-400" />
          </div>
          <div onClick={toggleDropdown} className="cursor-pointer">
            <UserAvatar />
          </div>
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
            <div className="flex items-center p-2 hover:bg-gray-200 cursor-pointer">
              <TbLayoutDashboardFilled className="mr-2" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-200 cursor-pointer">
              <FaUser className="mr-2" />
              <span>Profile</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-200 cursor-pointer">
              <FaEnvelope className="mr-2" />
              <span>Messages</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-200 cursor-pointer">
              <FaBell className="mr-2" />
              <span>Notifications</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-200 cursor-pointer">
              <FaCog className="mr-2" />
              <span>Settings</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
