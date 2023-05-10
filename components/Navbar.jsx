"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => (
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

      <motion.div
        className="w-4/5 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <ul className="flex gap-10 font-semibold">
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, type: "spring" }}
      >
        <button>User</button>
      </motion.div>
    </div>
  </motion.nav>
);

export default Navbar;
