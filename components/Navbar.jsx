'use client';

import Link from "next/link";

const Navbar = () => (

  <nav>
    <div className="bg-transparent px-10">
      <div className="py-3 flex ">

        <div className="ml-10 font-bold uppercase">
                  West Wired
      </div>

      <div className=" w-4/5 flex items-center justify-center ">
        <ul className="flex gap-10 font-semibold ">
          <Link href={'/'}> <li>Home</li></Link>
          <Link href={''}> <li>About</li></Link>
          <Link href={''}> <li>Contacts</li></Link>
        
        
        </ul>
        
      </div>

      <div>
        <button>User</button>
      </div>
      </div>
    </div>
  </nav>
   

);

export default Navbar;
