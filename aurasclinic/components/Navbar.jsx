"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-2xl z-50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* <h1 className="text-xl font-bold text-blue-500">AURA'S CLINIC</h1> */}
          <div className="w-[180px] md:w-[200px] h-full ">
            <img src="/logo.png" alt="" className="w-full " />
          </div>

          {/* Desktop Menu */}
          <div className="space-x-6 hidden md:flex items-center">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </a>
            <a
              href="tel:+919619338404"
              className="px-5 py-3 rounded-[90px] bg-red-500 text-white border-2 hover:bg-white hover:text-red-500 hover:border-red-500 duration-300 ease-in-out uppercase font-bold"
            >
              Emergency
            </a>
          </div>

          <a
            href="tel:+919619338404"
            className="md:hidden inline-block px-5 py-3 rounded-[90px] bg-red-500 text-white border-2 hover:bg-white hover:text-red-500 hover:border-red-500 duration-300 ease-in-out uppercase font-bold"
          >
            Emergency
          </a>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-blue-500">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 mt-20 space-y-6 text-center">
          <a
            onClick={toggleMenu}
            href="#home"
            className="block text-gray-700 hover:text-blue-500 duration-300 ease-in-out font-medium"
          >
            Home
          </a>
          <a
            onClick={toggleMenu}
            href="#about"
            className="block text-gray-700 hover:text-blue-500 duration-300 ease-in-out font-medium"
          >
            About
          </a>
          <a
            onClick={toggleMenu}
            href="#services"
            className="block text-gray-700 hover:text-blue-500 duration-300 ease-in-out font-medium"
          >
            Services
          </a>
          <a
            onClick={toggleMenu}
            href="#contact"
            className="block text-gray-700 hover:text-blue-500 duration-300 ease-in-out font-medium"
          >
            Contact
          </a>
          <a
            onClick={toggleMenu}
            href="tel:+919619338404"
            className="inline-block px-5 py-3 rounded-[90px] bg-red-500 text-white border-2 hover:bg-white hover:text-red-500 hover:border-red-500 duration-300 ease-in-out uppercase font-bold"
          >
            Emergency
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 backdrop-blur-md bg-opacity-40 z-30 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;
