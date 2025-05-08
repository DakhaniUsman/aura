import React from "react";

const About = () => {
  return (
    <>
      <div
        className="w-full lg:w-[90%] m-auto h-full px-5 py-10 flex flex-col md:flex-row justify-center items-center gap-10 wrapper"
        id="about"
      >
        <div className="w-full md:w-1/2 h-full">
          <div className="w-full sm:w-[70%] md:w-[80%] h-[520px] m-auto rounded-2xl  border-blue-500 ">
            <img src="/dr-farheen.jpg" alt="dr farheen" className="w-full h-full object-cover rounded-tr-[50px] rounded-tl-sm rounded-bl-[50px] rounded-br-sm "/>
          </div>
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
            Hi, I’m Dr. Farheen, a dedicated medical professional and graduate of MUHS (Dr. G. D. Pol Foundation, Kharghar), Class of 2020. During the COVID-19 pandemic, I served at both Primary Health Centers (PHC) and Central Hospitals, gaining critical experience in high-pressure environments.
            </p>
            <p>
            I completed my residency training in ICU and Cardiac Care at Inamdar Hospital, Pune, and currently work as an Emergency Room and ICU Resident at Kharghar Medicity Hospital. Alongside this, I proudly serve as a General and Family Physician at AURA’S Clinic & Emergency Care Centre, providing accessible, compassionate care to the local community.
            </p>
            <p>
            At AURA’S Clinic, I combine clinical expertise with diagnostic testing to identify the root causes of illness, empowering patients to make informed health decisions and lead longer, healthier lives.
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
