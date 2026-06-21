import Slider_1 from "@/components/slider/Slider1";
import Slider2 from "@/components/slider/Slider2";
import SliderProduct from "@/components/slieder-product/Slider-product";
import { products1 } from "@/db-fake";
import { product } from "@/types/products";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products: product[] = products1;
export default function Home() {
  return (
    <>
      {/* The beginning of the page */}
      <div className="grid grid-cols-3 h-110 gap-2 grid-rows-3 mb-8">
        <div className="row-span-2 col-span-2 bg-amber-500 rounded-2xl overflow-hidden">
          <Slider_1 />
        </div>
        <div className="row-span-1 col-span-1 bg-amber-500 rounded-2xl overflow-hidden">
          <Image
            src="https://toprayan.com/uploads/images/1880X400-TopRAYAN-3978.jpg"
            alt="advertisement"
            width={800}
            height={600}
            className="w-full h-full object-center"
          />
        </div>
        <div className="row-start-3 row-span-1 col-span-1 bg-amber-500 rounded-2xl overflow-hidden">
          <Image
            src="https://toprayan.com/uploads/images/05-%20%D8%A8%D9%86%D8%B1%20%D9%88%D8%A7%DB%8C%D8%AF%20%D9%88%D8%B3%D8%B7%20%D8%B5%D9%81%D8%AD%D9%87%20copy-7729.webp"
            alt="advertisement"
            width={800}
            height={600}
            className="w-full h-full object-center"
          />
        </div>
        <div className="row-start-3 row-span-1 col-span-1 col-start-2 bg-amber-500 rounded-2xl overflow-hidden">
          <Image
            src="https://toprayan.com/uploads/images/04-%20%D8%A8%D9%86%D8%B1%20%D9%85%D8%A7%D9%86%DB%8C%D8%AA%D9%88%D8%B1%20%D8%AE%D9%85%DB%8C%D8%AF%D9%87%20%D9%88%D8%B3%D8%B7%20%D8%B5%D9%81%D8%AD%D9%87%20copy-3848.webp"
            alt="advertisement"
            width={800}
            height={600}
            className="w-full h-full object-center"
          />
        </div>
        <div className="row-span-2 row-start-2 col-span-1 col-start-3 bg-amber-500 rounded-2xl overflow-hidden">
          <Image
            src="https://toprayan.com/uploads/images/03-%20%D8%A8%D9%86%D8%B1%20%D9%85%D8%A7%D9%86%DB%8C%D8%AA%D9%88%D8%B1%20%DA%AF%DB%8C%D9%85%DB%8C%D9%86%DA%AF%20%D9%88%D8%B3%D8%B7%20%D8%B5%D9%81%D8%AD%D9%87%20copy-8349.webp"
            alt="advertisement"
            width={800}
            height={600}
            className="w-full h-full object-center"
          />
        </div>
      </div>

      {/*Special offers section  */}
      <div className="h-90 py-5 rounded-2xl flex bg-blue-500 overflow-hidden">
        <div className="h-full text-white flex flex-col items-center w-1/4 rounded-xl mx-4 bg-emerald-500">
          <span>
            <CircleDollarSign size={120} />
          </span>
          <h2 className="text-3xl py-2">پیشنهاد ویژه</h2>
          <h3 className="text-xl">تخفیف نوروزی</h3>

          <Link
            href=""
            className="text-xl text-blue-600 hover:cursor-pointer bg-white py-2 px-8 rounded-md mt-10 "
          >
            مشاهده همه {"->"}
          </Link>
        </div>
        <Slider2 />
      </div>

      {/* New products section */}
      <SliderProduct title="محصولات جدید" products={products} />

      <div className="grid grid-cols-4 gap-5 my-8 ">
        <div className="bg-red-700 col-span-1 h-60  rounded-2xl overflow-hidden">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c56fbd1c04dc08daee85554c10bcb1fc63d90087_1781615287.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-center"
          />
        </div>
        <div className="bg-red-700 col-span-1 h-60  rounded-2xl overflow-hidden">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/b1cd086bcd4ff587c70a3fbdea13dfe9539cc75e_1781939279.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-center"
          />
        </div>
        <div className="bg-red-700 col-span-1  h-60 rounded-2xl overflow-hidden">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/b0f4c0072b0ee80704ca3fcdb4be01fd45272415_1781685650.gif?x-oss-process=image?x-oss-process=image/format,webp"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-center"
          />
        </div>
        <div className="bg-red-700 col-span-1  h-60 rounded-2xl overflow-hidden">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/28270a6e83f62d40a4c224ff92c4a461e55f2b14_1781615447.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-center"
          />
        </div>
      </div>
      <SliderProduct title="پربازدید ترین ها" products={products} />
      <div className="grid grid-cols-4 gap-5 my-8 ">
        <div className="bg-red-700 col-span-2 h-60  rounded-2xl overflow-hidden">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bcea1f5664619f8f47255d9e10e9dc107179e210_1781694792.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-center"
          />
        </div>
        <div className="bg-red-700 col-span-2 h-60  rounded-2xl overflow-hidden">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c7b79c2fd979fe0deba353dd12db509b874204ce_1781694702.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-center"
          />
        </div>
      </div>
      <SliderProduct title="پر فروش ترین ها " products={products} />

      <div className="grid grid-cols-2  my-8 ">
        <div className="bg-red-700 col-span-2 h-50  rounded-2xl overflow-hidden">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/693460c45dd2548bf68f885ddaace53586a198fd_1781688239.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            width={1000}
            height={500}
            className="w-full h-full object-center"
          />
        </div>
      </div>
      <SliderProduct title="محبوب ترین ها" products={products} />

      {/* The previous part of the footer */}
      <div className="grid grid-cols-6 grid-rows-2 h-100 gap-1">
        <div className="relative col-span-1 col-start-1 overflow-hidden rounded-md row-start-1 row-span-2">
          <Image
            src="https://padmira.ir/upload/product/thumb_IMG_0824_1780990542.jpg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-between items-center text-white w-full bottom-0 h-1/2 bg-gray-700/60">
            <h2 className=" line-clamp-1">رکابی مردانه</h2>
            <p className=" line-clamp-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
            <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
        <div className=" relative col-span-1 col-start-2 overflow-hidden rounded-md row-start-1 row-span-1">
          <Image
            src="https://padmira.ir/upload/product/thumb_DSC09440_1778920967.jpg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-between items-center text-white w-full bottom-0 h-2/3 bg-gray-700/60">
            <h2 className="py-1 line-clamp-1">تیشرت مردانه پلیمری</h2>
            <p className=" line-clamp-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامون و سطرآنچنان که لازم
              است
            </p>
            <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
        <div className=" relative col-span-1 col-start-2 overflow-hidden rounded-md row-start-2 row-span-1">
          <Image
            src="https://padmira.ir/upload/product/thumb_DSC05351_1771405960.jpg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-between items-center text-white w-full bottom-0 h-2/3 bg-gray-700/60">
            <h2 className="py-1 line-clamp-1">تیشرت مردانه پلیمری</h2>
            <p className=" line-clamp-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامون و سطرآنچنان که لازم
              است
            </p>
            <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
        <div className=" relative col-span-2 col-start-3 overflow-hidden rounded-md row-start-1 row-span-2">
          <Image
            src="https://padmira.ir/upload/product/thumb_C2626006-93B7-4D6A-A080-D3317CC12974_1780922157.jpeg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-between items-center text-white w-full bottom-0 h-1/2 bg-gray-700/60">
            <h2 className=" line-clamp-1">تیشرت مردانه پلیمری</h2>
            <p className=" line-clamp-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
            <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
        <div className=" relative col-span-1 col-start-5 overflow-hidden rounded-md row-start-1 row-span-1">
          <Image
            src="https://padmira.ir/upload/product/thumb_78E99E20-64D8-4E4D-ACC6-06CE2CC780C2_1780900560.jpeg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-between items-center text-white w-full bottom-0 h-2/3 bg-gray-700/60">
            <h2 className="py-1 line-clamp-1">تیشرت مردانه پلیمری</h2>
            <p className=" line-clamp-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامون و سطرآنچنان که لازم
              است
            </p>
            <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
        <div className=" relative col-span-1 col-start-6 overflow-hidden rounded-md row-start-1 row-span-2">
          <Image
            src="https://padmira.ir/upload/product/thumb_DSC07987_1772954252.jpg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-between items-center text-white w-full bottom-0 h-1/2 bg-gray-700/60">
            <h2 className=" line-clamp-1">تیشرت مردانه پلیمری</h2>
            <p className=" line-clamp-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
            <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
        <div className=" relative col-span-1 col-start-5 overflow-hidden rounded-md row-start-2 row-span-1">
          <Image
            src="https://padmira.ir/upload/product/thumb_IMG_3167_1781120717.jpeg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-between items-center text-white w-full bottom-0 h-2/3 bg-gray-700/60">
            <h2 className="py-1 line-clamp-1">تیشرت مردانه پلیمری</h2>
            <p className=" line-clamp-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامون و سطرآنچنان که لازم
              است
            </p>
            <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
