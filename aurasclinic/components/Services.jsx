// import React from "react";

// const Services = () => {
//   return (
//     <div
//       className="w-full min-h-[100vh] border-2 border-black flex flex-col justify-center text-center gap-10  wrapper"
//       id="services" >
//       <h1 className="text-4xl">Our Services</h1>
//       <div className="w-full md:w-[90%] h-full flex justify-center gap-10 m-auto">
//         <div className="w-2/3 h-full border-2 flex justify-center flex-wrap gap-2">
//           <div className="w-[24%] h-[200px] bg-gray-200 flex justify-center items-center">
//             <div className="w-[125px] h-[125px] rounded-[50%] bg-white flex justify-center items-center">
//               <img src="/heart.png" alt="heart" className="w-[70%] h-[70%]"/>
//             </div>
//           </div>
//           <div className="w-[24%] h-[200px] bg-gray-200 flex justify-center items-center">
//             <div className="w-[125px] h-[125px] rounded-[50%] bg-white flex justify-center items-center">
//               <img src="/heart.png" alt="heart" className="w-[70%] h-[70%]"/>
//             </div>
//           </div>
//           <div className="w-[24%] h-[200px] bg-gray-200 flex justify-center items-center">
//             <div className="w-[125px] h-[125px] rounded-[50%] bg-white flex justify-center items-center">
//               <img src="/heart.png" alt="heart" className="w-[70%] h-[70%]"/>
//             </div>
//           </div>
//           <div className="w-[24%] h-[200px] bg-gray-200 flex justify-center items-center">
//             <div className="w-[125px] h-[125px] rounded-[50%] bg-white flex justify-center items-center">
//               <img src="/heart.png" alt="heart" className="w-[70%] h-[70%]"/>
//             </div>
//           </div>
//           <div className="w-[24%] h-[200px] bg-gray-200 flex justify-center items-center">
//             <div className="w-[125px] h-[125px] rounded-[50%] bg-white flex justify-center items-center">
//               <img src="/heart.png" alt="heart" className="w-[70%] h-[70%]"/>
//             </div>
//           </div>
//           <div className="w-[24%] h-[200px] bg-gray-200 flex justify-center items-center">
//             <div className="w-[125px] h-[125px] rounded-[50%] bg-white flex justify-center items-center">
//               <img src="/heart.png" alt="heart" className="w-[70%] h-[70%]"/>
//             </div>
//           </div>
//           <div className="w-[24%] h-[200px] bg-gray-200 flex justify-center items-center">
//             <div className="w-[125px] h-[125px] rounded-[50%] bg-white flex justify-center items-center">
//               <img src="/heart.png" alt="heart" className="w-[70%] h-[70%]"/>
//             </div>
//           </div>
//           <div className="w-[24%] h-[200px] bg-gray-200 flex justify-center items-center">
//             <div className="w-[125px] h-[125px] rounded-[50%] bg-white flex justify-center items-center">
//               <img src="/heart.png" alt="heart" className="w-[70%] h-[70%]"/>
//             </div>
//           </div>
//         </div>
//         <div className="w-1/3 h-full border-2">

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Sample service data (you can change icons & descriptions)
const serviceData = [
  {
    id: 1,
    title: "Psychiatry",
    icon: "/pshyciatry.png",
    description: (
      <div className="flex flex-col justify-center gap-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
          temporibus
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Laboratory",
    icon: "/laboratory.png",
    description: (
      <div className="flex flex-col justify-center gap-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
          temporibus
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Dental Medicine",
    icon: "/dental.png",
    description: (
      <div className="flex flex-col justify-center gap-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
          temporibus
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Cardiology",
    icon: "/cardiology.png",
    description: (
      <div className="flex flex-col justify-center gap-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
          temporibus
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Gynecology",
    icon: "/gynecology.png",
    description: (
      <div className="flex flex-col justify-center gap-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
          temporibus
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Medicine",
    icon: "/medicine.png",
    description: (
      <div className="flex flex-col justify-center gap-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
          temporibus
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Traumatology",
    icon: "/traumatology.png",
    description: (
      <div className="flex flex-col justify-center gap-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
          temporibus
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Pediatrics",
    icon: "/pediatrics.png",
    description: (
      <div className="flex flex-col justify-center gap-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          veritatis libero minima debitis! Vel quo nostrum quisquam illo nobis
          harum, ipsa dolorem quod deserunt tempore sint, possimus, nesciunt
          temporibus
        </p>
      </div>
    ),
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(serviceData[0]);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      className="w-full min-h-[100vh] flex flex-col justify-center text-center gap-10 pb-5 wrapper"
      id="services"
    >
      <h1 className="text-4xl">Our Services</h1>
      {isMobile ? (
        <>
          <div className="relative block md:hidden w-full px-4">
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src="/previous.png" alt="" className="w-[30px] h-[30px] " />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src="/next.png" alt="" className="w-[30px] h-[30px] " />
            </button>

            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              pagination={{ clickable: true }}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {serviceData.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="bg-gray-100 rounded-xl p-6 text-center shadow-md">
                    <div className="w-20 h-20 mx-auto mb-4">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <div className="text-sm text-gray-600">
                      {service.description}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>


          </div>


        </>
      ) : (
        <>
          <div className="w-full md:w-[90%] h-full flex flex-col lg:flex-row justify-center gap-10 m-auto">
            {/* Left - Services Grid */}
            <div className="w-full lg:w-2/3 h-full flex justify-center flex-wrap gap-4">
              {serviceData.map((service) => (
                <div
                  key={service.id}
                  className={`w-[23%] min-w-[120px] h-[200px] cursor-pointer transition-all duration-300  hover:bg-blue-500 hover:text-white flex flex-col justify-center items-center rounded-md ${
                    selectedService.id === service.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center mb-2">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-[70%] h-[70%]"
                    />
                  </div>
                  <h2 className="text-sm font-semibold">{service.title}</h2>
                </div>
              ))}
            </div>

            {/* Right - Description Panel */}
            <div className="w-full lg:w-1/3 h-auto text-left rounded-md p-6 bg-gray-50 flex flex-col gap-5">
              <h2 className="text-2xl font-bold mb-2">
                {selectedService.title}
              </h2>
              <div className="text-sm text-gray-700">
                {selectedService.description}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
