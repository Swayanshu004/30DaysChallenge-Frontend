"use client";
import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const MiddleSection = () => {
  return (
    <div className="p-4">
      {/* Top Section: Title, Search Bar, and Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Left: Title */}
        <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
          <div className="text-2xl text-orange-500 font-bold flex-grow">
            30DaysChallenge
          </div>

          {/* Icons for Small Screens */}
          <div className="flex items-center space-x-4 md:hidden">
            <FaSearch className="h-6 w-6 text-gray-500" />
            <FaFilter className="h-6 w-6 text-gray-500" />
          </div>
        </div>

        {/* Right: Search and Filter Bars */}
        <div className="flex items-center space-x-4  md:flex">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-48 pl-10 pr-4 rounded-lg bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
          {/* Filter Bar */}
          <div className="relative">
            <select
              className="h-10 w-32 pl-4 pr-8 rounded-lg bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option>Filter</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <FaFilter className="absolute top-3 right-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example Card 1 */}
        <div className="bg-orange-500 p-4 rounded-lg shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          <h3 className="text-lg font-semibold mb-2">Card1</h3>
        </div>
        {/* Example Card 2 */}
        <div className="bg-orange-500 p-4 rounded-lg shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          <h3 className="text-lg font-semibold mb-2">Card2</h3> 
        </div>
        {/* Example Card 3 */}
        <div className="bg-orange-500 p-4 rounded-lg shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          <h3 className="text-lg font-semibold mb-2">Card3</h3>
        </div>
        {/* Example Card 4 */}
        <div className="bg-orange-500 p-4 rounded-lg shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          <h3 className="text-lg font-semibold mb-2">Card4</h3>
        </div>
        {/* Example Card 5 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-900 transition-transform transform hover:scale-105 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          <h3 className="text-lg font-semibold mb-2">Card5</h3>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
