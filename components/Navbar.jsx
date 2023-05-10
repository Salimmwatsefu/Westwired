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
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-transparent px-10"
    >
      <div className="py-3 flex">
        <motion.div
          className="ml-10 font-bold uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          West Wired
        </motion.div>

        {/* Render desktop navbar when screen size is medium and above */}
        <div className="w-4/5 flex items-center justify-center">
          <ul className="hidden md:flex gap-10 font-semibold">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={""}>
              <li>About</li>
            </Link>
            <Link href={""}>
              <li>Contacts</li>
            </Link>
          </ul>

          {/* Render hamburger menu icon when screen size is small */}
          <div className="md:hidden">
            {isOpen ? (
              <HiX onClick={toggleMenu} className="text-2xl" />
            ) : (
              <HiMenu onClick={toggleMenu} className="text-2xl" />
            )}
          </div>
        </div>

        {/* Render mobile navbar when menu icon is clicked */}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 w-full bg-white p-4">
            <ul className="flex flex-col gap-4">
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <Link href={""}>
                <li>About</li>
              </Link>
              <Link href={""}>
                <li>Contacts</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;


