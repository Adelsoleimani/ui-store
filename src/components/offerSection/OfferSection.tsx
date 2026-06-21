import Link from "next/link";
import Slider2 from "../slider/Slider2";
import { CircleDollarSign } from "lucide-react";

function OfferSection() {
  return (
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
  );
}

export default OfferSection;
