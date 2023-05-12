"use client"

import Link from "next/link";
import { useState } from "react"; // import useState hook from React
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi"; // import hamburger menu icons from react-icons
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // set isOpen state to false by default using useState hook

  const toggleMenu = () => {
    setIsOpen(!isOpen); // toggle isOpen state when menu icon is clicked
  };

  return (
    <nav
      
      className="bg-transparent px-10"
    >
      <div className="md:py-3 py-2 flex ">
        <div
          className="md:ml-10 font-bold uppercase w-32 "
          
        >
          West Wired
        </div>

        {/* Render desktop navbar when screen size is medium and above */}
        <div className="w-4/5 flex items-center justify-center">
          <ul className="hidden md:flex gap-10 font-semibold">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/headphones"}>
              <li>Headphones</li>
            </Link>
            <Link href={""}>
              <li>Contacts</li>
            </Link>
          </ul>

          {/* Render hamburger menu icon when screen size is small */}
          <div className="md:hidden ml-44">
            {isOpen ? (
              <HiX onClick={toggleMenu} className="text-2xl" />
            ) : (
              <HiMenu onClick={toggleMenu} className="text-2xl" />
            )}
          </div>
        </div>

        {/* Render mobile navbar when menu icon is clicked */}
        {isOpen && (
          <div className="md:hidden absolute top-11 right-0 w-full bg-white p-4 z-[900px] ">
            <ul className="flex flex-col gap-1  ">
              <Link href={"/"}>
                <li className="hover:bg-gray-500 py-1">Home</li>
              </Link>
              <Link href={"/headphones"}>
                <li className="hover:bg-gray-500 py-1">Headphones</li>
              </Link>
              <Link href={""}>
                <li className="hover:bg-gray-500 py-1">Contacts</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


