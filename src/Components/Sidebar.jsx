import React, { useState } from 'react';
import { FaHome, FaChartBar, FaClipboardList, FaShoppingBag, FaWallet } from 'react-icons/fa';

const Sidebar = () => {
  const [active, setActive] = useState('home');

  const icons = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'chart', icon: <FaChartBar />, label: 'Chart' },
    { id: 'list', icon: <FaClipboardList />, label: 'List' },
    { id: 'user', icon: <FaShoppingBag />, label: 'User' },
    { id: 'settings', icon: <FaWallet />, label: 'Settings' },
  ];

  return (
    <div className="h-full w-20 bg-gray-800 text-white flex flex-col items-start py-4">
      {icons.map(({ id, icon }) => (
        <div
          key={id}
          className={`text-2xl my-3 cursor-pointer hover:text-gray-400 ${
            active === id ? 'text-sky-400 border-l-4 border-sky-400' : 'border-l-4 border-gray-800'
          }`}
          onClick={() => setActive(id)}
        >
          <div className='flex item-center p-3'>
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
