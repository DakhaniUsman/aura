// 'use client';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation, Zoom, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import HeroText from './HeroText';

// const bgImages = [
//   '/hero-1.jpg',
//   '/hero-2.jpg'
// ];

// export default function HeroSlider() {
//   return (
//     <div id="home" className="relative w-full h-screen overflow-hidden">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={false}
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         effect={"fade"}
//         fadeEffect={{crossFade : true}}
//         className="h-full"
//       >
//         {bgImages.map((src, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-screen bg-cover bg-center"
//               style={{ backgroundImage: `url(${src})` }}
//             ></div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Overlay Text */}
//       <HeroText />
//     </div>
//   );
// }


// 'use client';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import HeroText from './HeroText';
// import { useEffect, useState } from 'react';

// const bgImages = [
//   '/hero-1.jpg',
//   '/hero-2.jpg'
// ];

// export default function HeroSlider() {
//     const [showOverlay, setShowOverlay] = useState(true);

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setShowOverlay(false);
//       }, 500); // 0.5 seconds
//       return () => clearTimeout(timer);
//     }, []);
  
//   return (
//     <div id="home" className="relative w-full h-screen overflow-hidden">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={false}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         className="h-full"
//       >
//         {bgImages.map((src, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-screen bg-cover bg-center zoom-bg"
//               style={{ backgroundImage: `url(${src})` }}
//             ></div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Overlay Text */}
//       <HeroText />
//     </div>
//   );
// }


// 'use client';
// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import HeroText from './HeroText';

// const bgImages = [
//   '/hero-1.jpg',
//   '/hero-2.jpg'
// ];

// export default function HeroSlider() {
//   const [showOverlay, setShowOverlay] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowOverlay(false);
//     }, 500); // 0.5 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div id="home" className="relative w-full h-screen overflow-hidden">

//       {/* Blue Overlay */}
//       {showOverlay && (
//         <div className="absolute inset-0 bg-blue-500 z-50 animate-fadeOut"></div>
//       )}

//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={false}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         className="h-full"
//       >
//         {bgImages.map((src, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-screen bg-cover bg-center zoom-bg"
//               style={{ backgroundImage: `url(${src})` }}
//             ></div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <HeroText />
//     </div>
//   );
// }



'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HeroText from './HeroText';

export default function HeroSlider() {
  const [isMobile, setIsMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Remove overlay after 0.5s
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const bgImages = isMobile
    ? ['/hero-1-mbl.jpeg', '/hero-2-mbl.jpeg']
    : ['/hero-1.jpg', '/hero-2.jpg'];

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">

      {showOverlay && (
        <div className="absolute inset-0 bg-blue-500 z-50 animate-fadeOut"></div>
      )}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full"
      >
        {bgImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center zoom-bg"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <HeroText />
    </div>
  );
}
