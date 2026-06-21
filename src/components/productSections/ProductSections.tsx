import Image from "next/image";
import SliderProduct from "../slieder-product/Slider-product";
import { product } from "@/types/products";
import { products1 } from "@/db-fake";

function ProductSections() {
  const products: product[] = products1;
  return (
    <>
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
    </>
  );
}

export default ProductSections;
