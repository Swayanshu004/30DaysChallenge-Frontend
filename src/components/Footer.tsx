"use client";
import React from "react";
const Footer= () =>{
    return(
        <footer className="bg-gray-800 text-orange-500  flex flex-col md:flex-row items-center justify-around rounded-t-full overflow-hidden">
        
        <div className="flex items-center justify-center mt-4">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className=" flex items-center   px-4 py-2  sm:w-auto rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      />
      <button 
        className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
        Submit
      </button>
    </div>
        <div className=" text-center py-2  text-orange-500">
          &copy; a product by codingaashram community
        </div>
      </footer>
      
    )
    }
    export default  Footer;
    