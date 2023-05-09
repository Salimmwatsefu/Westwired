'use client';
import Image from "next/image";

const Hero = () => (
  <section>
    <div>

      <div>
        <Image
        src={"https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100"}
        //src={'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=100'}
        alt="background"
        width={1900}
        height={1900}
        quality={100}
        priority={true}
        className=" object-cover w-[200vh] h-[92vh] object-center"

        />

        <div className="absolute -mt-[450px] ml-32 text-7xl">
          <p className=" font-light">The Westmire</p>
          <p className=" font-extrabold">A56 Headset</p>

          <div className="mt-3">
            <button className=" text-lg font-bold bg-black text-white rounded-full">
              <p className="mx-10 my-3">Buy Now</p>
              </button>

              <button className=" text-lg font-bold bg-gray-500 text-black rounded-full ml-7">
              <p className="mx-10 my-3">Shop All</p>
              </button>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Hero;
