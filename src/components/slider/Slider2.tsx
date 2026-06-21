"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { formatNumber } from "@/utils/formatNumber";
function Slider2() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-3/4 h-full"
      >
        <SwiperSlide className="text-center rounded-xl bg-white flex justify-center items-center">
          <Link href="">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-products/0fad99cd725323d7a28cd67eef6d3649ae39660a_1706438398.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              alt="product"
              width={400}
              height={500}
              className="w-9/10  h-1/2 object-contain"
            />

            <h3 className="text-xl py-2 line-clamp-2">
              هدفون بلوتوثی مدل A1210-apel
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="line-through text-gray-400">
                {formatNumber(2500000)}
              </span>

              <span className="font-bold text-red-500">
                قیمت: {formatNumber(2100000)}
              </span>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="text-center rounded-xl bg-white flex justify-center items-center">
          <Link href="">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-products/0fad99cd725323d7a28cd67eef6d3649ae39660a_1706438398.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              alt="product"
              width={400}
              height={500}
              className="w-9/10  h-1/2 object-contain"
            />

            <h3 className="text-xl py-2 line-clamp-2">
              هدفون بلوتوثی مدل A1210-apel
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="line-through text-gray-400">
                {formatNumber(2500000)}
              </span>

              <span className="font-bold text-red-500">
                قیمت: {formatNumber(2100000)}
              </span>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="text-center rounded-xl bg-white flex justify-center items-center">
          <Link href="">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-products/0fad99cd725323d7a28cd67eef6d3649ae39660a_1706438398.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              alt="product"
              width={400}
              height={500}
              className="w-9/10  h-1/2 object-contain"
            />

            <h3 className="text-xl py-2 line-clamp-2">
              هدفون بلوتوثی مدل A1210-apel
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="line-through text-gray-400">
                {formatNumber(2500000)}
              </span>

              <span className="font-bold text-red-500">
                قیمت: {formatNumber(2100000)}
              </span>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="text-center rounded-xl  bg-white flex justify-center items-center">
          <Link href="">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-products/0fad99cd725323d7a28cd67eef6d3649ae39660a_1706438398.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              alt="product"
              width={400}
              height={500}
              className="w-9/10  h-1/2 object-contain"
            />

            <h3 className="text-xl py-2 line-clamp-2">
              هدفون بلوتوثی مدل A1210-apel
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="line-through text-gray-400">
                {formatNumber(2500000)}
              </span>

              <span className="font-bold text-red-500">
                قیمت: {formatNumber(2100000)}
              </span>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="text-center rounded-xl  bg-white flex justify-center items-center">
          <Link href="">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-products/0fad99cd725323d7a28cd67eef6d3649ae39660a_1706438398.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              alt="product"
              width={400}
              height={500}
              className="w-9/10  h-1/2 object-contain"
            />

            <h3 className="text-xl py-2 line-clamp-2">
              هدفون بلوتوثی مدل A1210-apel
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="line-through text-gray-400">
                {formatNumber(2500000)}
              </span>

              <span className="font-bold text-red-500">
                قیمت: {formatNumber(2100000)}
              </span>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="text-center rounded-xl bg-white flex justify-center items-center">
          <Link href="">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-products/0fad99cd725323d7a28cd67eef6d3649ae39660a_1706438398.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              alt="product"
              width={400}
              height={500}
              className="w-9/10  h-1/2 object-contain"
            />

            <h3 className="text-xl py-2 line-clamp-2">
              هدفون بلوتوثی مدل A1210-apel
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="line-through text-gray-400">
                {formatNumber(2500000)}
              </span>

              <span className="font-bold text-red-500">
                قیمت: {formatNumber(2100000)}
              </span>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="text-center rounded-xl bg-white flex justify-center items-center">
          <Link href="">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-products/0fad99cd725323d7a28cd67eef6d3649ae39660a_1706438398.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              alt="product"
              width={400}
              height={500}
              className="w-9/10  h-1/2 object-contain"
            />

            <h3 className="text-xl py-2 line-clamp-2">
              هدفون بلوتوثی مدل A1210-apel
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="line-through text-gray-400">
                {formatNumber(2500000)}
              </span>

              <span className="font-bold text-red-500">
                قیمت: {formatNumber(2100000)}
              </span>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider2;
