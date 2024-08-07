// src/components/MenuList.js
import React from 'react';
import { FaCog, FaHamburger, FaUtensils } from 'react-icons/fa';

const menuItems = [
  { id: 1, label: 'Goals', icon: <FaCog />, bgColor: 'bg-red-600' },
  { id: 2, label: 'Popular Dishes', icon: <FaHamburger />, bgColor: 'bg-blue-600' },
  { id: 3, label: 'Menus', icon: <FaUtensils />, bgColor: 'bg-teal-600' },
];

const MenuList = () => {
  return (
    <div className='w-full pb-4 h-full flex items-center'>
        <div className="bg-gray-800 p-4 w-full h-full rounded-lg flex flex-col align-center justify-center gap-2 md:gap-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 rounded-lg"
          >
            <div className="flex items-center">
              <div
                className={`text-4xl w-20 h-20 flex items-center justify-center rounded-full ${item.bgColor} text-white`}
              >
                {item.icon}
              </div>
              <div className="ml-4 text-white text-xl font-semibold">{item.label}</div>
            </div>
            <div className="text-gray-200 bg-gray-500 font-bold text-xl px-3 py-1 rounded-full">&gt;</div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default MenuList;
