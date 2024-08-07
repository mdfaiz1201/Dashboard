import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <div className="flex items-center border-0 rounded-lg px-4 py-2 text-black bg-gray-600 shadow-md">
      <FaSearch className="text-gray-300" />
      <input 
        type="text" 
        placeholder="Search..." 
        className="ml-2 border-none outline-none text-gray-300 bg-gray-600 focus:ring-0"
      />
    </div>
  );
};

export default SearchBox;
