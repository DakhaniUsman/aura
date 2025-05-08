// components/HeroText.jsx (no "use client")
const HeroText = () => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white text-shadow-md text-shadow-blue-200 px-4 ">
      <h1 className="text-4xl md:text-5xl font-bold uppercase drop-shadow-lg">
        AURA'S CLINIC
      </h1>
      <h2 className="text-2xl md:text-4xl uppercase mt-4 drop-shadow-md">
        Your Health is Our Priority
      </h2>
      <p className="md:w-[60%] text-lg  text-shadow-none md:text-md mt-4">At AURA’S Clinic, we offer round-the-clock emergency care, home visits, general health checkups, and ECG services — ensuring your family receives trusted, timely, and affordable medical attention right in your neighborhood</p>
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <button className="px-6 py-3 rounded-full font-bold border-2 border-blue-500 bg-blue-500 text-white hover:bg-transparent active:bg-transparent hover:text-blue-500 active:text-blue-500 duration-500 ease-in-out">
          <a href="#services">Our Services</a>
        </button>

        <button className="px-6 py-3 rounded-full font-bold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 active:bg-blue-500  hover:text-white active:text-white duration-500 ease-in-out">
          <a href="#contact">Book Appointment</a>
        </button>
      </div>
    </div>
  );
};

export default HeroText;
