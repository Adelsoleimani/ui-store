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
import { specialProducts } from "@/db-fake";
import { Product } from "@/types/products";
function Slider2() {
  const products: Product[] = specialProducts;
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
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="text-center hover:scale-96 rounded-xl overflow-hidden bg-white flex justify-center items-center"
          >
            <Link href={product.href}>
              <Image
                src={product.img}
                alt={product.title}
                width={400}
                height={500}
                className="w-9/10  h-1/2 object-contain"
              />

              <h3 className="text-xl py-2 line-clamp-2">{product.title}</h3>
              <div className="flex flex-col items-center gap-2">
                <span className="line-through text-gray-400">
                  {formatNumber(product.oldPrice!)}
                </span>

                <span className="font-bold text-red-500">
                  قیمت: {formatNumber(product.price)}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider2;
