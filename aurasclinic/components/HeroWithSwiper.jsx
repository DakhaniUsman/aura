"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroWithSwiper = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/hero1.jpg')" }}>
            <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                24/7 Emergency Medical Care
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/hero2.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                Trusted Home Visit & Health Checkups
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroWithSwiper;
