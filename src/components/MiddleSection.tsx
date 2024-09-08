"use client";
import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import Image from "next/image";
import { FocusCards } from "./ui/focus-cards";

// Main Component
const MiddleSectionWithCards = () => {
  const cards = [
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },
  ];

  return (
    <div className="p-4">
     
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
       
        <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
          <div className="text-2xl text-orange-500 font-bold flex-grow">
            30DaysChallenge
          </div>
          <div className="flex items-center space-x-4 md:hidden">
            <FaSearch className="h-6 w-6 text-gray-500" />
            <FaFilter className="h-6 w-6 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-4  md:flex">
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-48 pl-10 pr-4 rounded-lg bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
         
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       <div className="bg-orange-500 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Card1</h3>
        </div>
        
        <div className="bg-orange-500 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Card2</h3> 
        </div>
        
        <div className="bg-orange-500 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Card3</h3>
        </div>
        
        <div className="bg-orange-500 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Card4</h3>
        </div>
       
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Card5</h3>
        </div>
      </div>
    </div>
  );
};

export default MiddleSectionWithCards;
