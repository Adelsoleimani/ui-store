"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Slider_1() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="text-center">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e2fc3f348912c129e312583df9813896d50bb1ed_1781364388.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="advertisement"
            width={1000}
            height={1000}
            className="w-full h-full object-center"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4bde66f7226c2cc7bc6687c81a123324d5260519_1778056660.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="advertisement"
            width={1000}
            height={1000}
            className="w-full h-full object-center"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/106a9545642ec0528d7bcb59f56625689ccac627_1781703061.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="advertisement"
            width={1000}
            height={1000}
            className="w-full h-full object-center"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
