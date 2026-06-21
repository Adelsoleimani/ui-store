import Image from "next/image";
import Slider_1 from "@/components/slider/Slider1";

function HeroSection() {
  return (
    <div className="grid grid-cols-3 h-110 gap-2 grid-rows-3 mb-8">
      <div className="row-span-2 col-span-2 bg-amber-500 rounded-2xl overflow-hidden">
        <Slider_1 />
      </div>
      <div className="row-span-1 col-span-1 bg-amber-500 rounded-2xl overflow-hidden">
        <Image
          src="https://toprayan.com/uploads/images/1880X400-TopRAYAN-3978.jpg"
          alt="advertisement"
          width={1000}
          height={800}
          className="w-full h-full object-center"
        />
      </div>
      <div className="row-start-3 row-span-1 col-span-1 bg-amber-500 rounded-2xl overflow-hidden">
        <Image
          src="https://toprayan.com/uploads/images/05-%20%D8%A8%D9%86%D8%B1%20%D9%88%D8%A7%DB%8C%D8%AF%20%D9%88%D8%B3%D8%B7%20%D8%B5%D9%81%D8%AD%D9%87%20copy-7729.webp"
          alt="advertisement"
          width={1000}
          height={800}
          className="w-full h-full object-center"
        />
      </div>
      <div className="row-start-3 row-span-1 col-span-1 col-start-2 bg-amber-500 rounded-2xl overflow-hidden">
        <Image
          src="https://toprayan.com/uploads/images/04-%20%D8%A8%D9%86%D8%B1%20%D9%85%D8%A7%D9%86%DB%8C%D8%AA%D9%88%D8%B1%20%D8%AE%D9%85%DB%8C%D8%AF%D9%87%20%D9%88%D8%B3%D8%B7%20%D8%B5%D9%81%D8%AD%D9%87%20copy-3848.webp"
          alt="advertisement"
          width={1000}
          height={800}
          className="w-full h-full object-center"
        />
      </div>
      <div className="row-span-2 row-start-2 col-span-1 col-start-3 bg-amber-500 rounded-2xl overflow-hidden">
        <Image
          src="https://toprayan.com/uploads/images/03-%20%D8%A8%D9%86%D8%B1%20%D9%85%D8%A7%D9%86%DB%8C%D8%AA%D9%88%D8%B1%20%DA%AF%DB%8C%D9%85%DB%8C%D9%86%DA%AF%20%D9%88%D8%B3%D8%B7%20%D8%B5%D9%81%D8%AD%D9%87%20copy-8349.webp"
          alt="advertisement"
          width={1000}
          height={800}
          className="w-full h-full object-center"
        />
      </div>
    </div>
  );
}

export default HeroSection;
