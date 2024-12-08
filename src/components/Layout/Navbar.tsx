"use client";
import { useState, useEffect } from "react";
import { IoArrowDown, IoClose } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import Form from "../Form";

// Define the type for menu items
type MenuItem = {
  name: string;
  href: string;
  heading?: string;
  subItems?: { name: string; href: string }[];
};

export const Navbar = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  console.log(menuItems, "menu items");
  return (
    <nav className="md:px-4 py-5 border-b border-light sticky top-0 z-50 bg-white dark:bg-[#13131c]">
      <div className="main-container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center">
            <p className="text-xl font-bold text-primary dark:text-offWhite">
              kade {menuItems[0]?.heading}
            </p>
          </Link>
        </div>

        {/* larger screens */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="cursor-pointer text-[17px] text-primary dark:text-offWhite leading-[24px] py-2 tracking-[0.25px] flex items-center"
              >
                {item.name}
              </Link>

              {/* Article Topics Dropdown */}
              {item.subItems && (
                <div
                  className="max-h-0 overflow-hidden group-hover:max-h-[500px] transition-all duration-300 ease-in-out absolute dark:bg-primaryNormal bg-white group-hover:pt-2 group-hover:pb-3 rounded mt-4 space-y-2 w-48"
                  style={{ zIndex: 50 }}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="px-4 py-2 flex justify-between items-center text-sm cursor-pointer drop__down"
                    >
                      {subItem.name}
                      <IoArrowDown className="-rotate-90 arrow" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section (Dark Mode, Early Access, Hamburger Menu) */}
        <div className="flex items-center space-x-4">
          <ThemeSwitch />
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on click
            className="bg-[#AC9BE3] text-[#1E0A4E] font-bold py-[11px] px-5 rounded-full text-sm border-0"
          >
            Early Access
          </button>

          {/* Hamburger menu for smaller screens - Right aligned */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-purple-400 focus:outline-none"
            >
              <HiMenuAlt4 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full dark:bg-primary bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 w-64`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="hover:text-purple-400 focus:outline-none p-4"
        >
          <IoClose className="w-6 h-6" />
        </button>
        <div className="mt-4 space-y-4">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              <div
                className="flex justify-between items-center py-2 px-4 transition-colors duration-300 cursor-pointer"
                onClick={() =>
                  item.subItems && setIsDropdownOpen(!isDropdownOpen)
                }
              >
                <Link href={item.href}>{item.name}</Link>
                {item.subItems && (
                  <IoArrowDown
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.subItems && isDropdownOpen && (
                <div className="mt-2 space-y-2 rounded-md py-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="dropdown-link block px-4 py-2 text-sm lg:text-base lg:leading-[1.5em] lg:font-medium lg:px-5 lg:py-[3.5em] transition-colors duration-[175ms] ease hover:bg-[#C7C4D8] cursor-pointer"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed top-0 inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50 scroll-my-0 ">
          <div className="bg-white  p-8  shadow-lg relative w-full max-w-full min-h-full scroll-my-0">
            <div className="flex justify-between mb-12">
              <h2 className="text-xl text-primary">KadeAi</h2>
              <button
                onClick={() => setIsModalOpen(false)} // Close modal on click
                className="absolute top-4 right-4   focus:outline-none"
              >
                <IoClose className="w-7 h-7 text-primary " />
              </button>
            </div>

            <Form
              data={{
                image: { url: "", filename: "" },
                formHeading: "",
                formSubHeading: "",
                name: "",
                email: "",
                altText: "",
                buttonName: "",
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
