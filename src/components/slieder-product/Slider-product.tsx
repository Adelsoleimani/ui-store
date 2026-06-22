"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/products";
import { formatNumber } from "@/utils/formatNumber";

interface InSliderProduct {
  title: string;
  products: Product[];
}
function SliderProduct({ title, products }: InSliderProduct) {
  return (
    <div className="flex flex-col py-5">
      <div className="py-4 px-4 text-2xl border rounded-t-md border-gray-300">
        {title}
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 2 },
          500: { slidesPerView: 3 },
          786: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        }}
        modules={[Navigation]}
        className="mySwiper w-full h-85"
      >
        {products.map((product) => {
          return (
            <SwiperSlide
              key={product.id}
              className=" text-center flex justify-center border  border-gray-200 items-center"
            >
              <Link
                href={product.href}
                className="h-full w-full text-center flex flex-col justify-around items-center"
              >
                <Image
                  src={product.img}
                  alt={product.title}
                  width={400}
                  height={500}
                  className="w-9/10  h-1/2 object-contain"
                />

                <h3 className="text-xl py-2 line-clamp-2">{product.title}</h3>
                <p>قیمت : {formatNumber(product.price)}</p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SliderProduct;
