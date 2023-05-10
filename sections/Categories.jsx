'use client';

export default function Categories() {
  return (
    <section>
      <div>
        <h1 className="text-center pt-10">Shop by category</h1>

        <div className="mt-8">
          <div className=" w-[300px]  bg-gray-200 ml-10 rounded-tr-[80px] rounded-bl-[80px]">
            <div className="pt-5 mx-5">
            <img
            src="https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNhbXN1bmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100"
            alt=""
            className="object-cover w-[500px] h-[300px] rounded-tr-[80px]"
            />

            <h2 className="text-center uppercase font-extrabold text-lg mx-5 mt-3">Phones & Accessories</h2>
            <p className="text-center text-sm pt-3 pb-5">High class, high quality phones at affordable prices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
