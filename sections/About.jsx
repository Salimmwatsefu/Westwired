'use client';
import Image from "next/image";

const About = () => (
  <section className=" bg-gray-100">
    <div className="pt-16 flex mx-auto">
      <div className="ml-10 w-1/3">
        <h1 className="font-bold text-xl">All-new Technology</h1>
        <p className="mt-5">News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.</p>
      </div>

      <div className="">
      <div className="w-[500px] h-full ml-52">
        <Image
        //src={"https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100"}
        src={'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=100'}
        alt="background"
        width={1900}
        height={1900}
        quality={100}
        priority={true}
        className=" object-cover w-full h-full  object-center"

        />
      </div>
    </div>
    </div>
  </section>
);

export default About;
