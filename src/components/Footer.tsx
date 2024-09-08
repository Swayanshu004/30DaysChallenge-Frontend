"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-orange-500 flex flex-col items-center justify-center rounded-t-full overflow-hidden p-4">
      <div className="flex items-center justify-center space-x-6 mb-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-white transition-colors duration-300"
        >
          <FaGithub className="h-8 w-8" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-white transition-colors duration-300"
        >
          <FaLinkedin className="h-8 w-8" />
        </a>
      </div>

      <div className="text-center py-2 text-orange-500">
        &copy; a product by codingआश्रम community
      </div>
    </footer>
  );
};

export default Footer;
