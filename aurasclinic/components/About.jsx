import React from "react";

const About = () => {
  return (
    <>
      <div
        className="w-full lg:w-[90%] m-auto h-full px-5 py-10 flex flex-col md:flex-row justify-center items-center gap-10 wrapper"
        id="about"
      >
        <div className="w-full md:w-1/2 h-full">
          <div className="w-full sm:w-[70%] md:w-[80%] h-[520px] m-auto rounded-2xl bg-gray-200"></div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-8">
          <div className="flex flex-col justify-center gap-5">
            <p>Welcome to AURA'S CLINIC</p>
            <h2 className="text-3xl font-bold ">
              Meet <span className="text-blue-500">Dr. Farheen</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              molestias sed porro assumenda molestiae debitis voluptatibus a!
              Rem modi reiciendis commodi repellat optio, accusamus corrupti?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              molestias sed porro assumenda molestiae debitis voluptatibus a!
              Rem modi reiciendis commodi repellat optio, accusamus corrupti?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, pariatur.
            </p>
            <ul className="w-full md:w-[50%] h-full flex flex-wrap mx-3 px-3 list-disc">
              <li className="w-[50%]">Achievment</li>
              <li className="w-[50%]">Achievment</li>
              <li className="w-[50%]">Achievment</li>
              <li className="w-[50%]">Achievment</li>
            </ul>
            <button className="w-max px-5 py-3 rounded-[90px] border-2 font-bold border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 ease  duration-300 ease-in-out">
              <a href="#contact">Book Appointment</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
