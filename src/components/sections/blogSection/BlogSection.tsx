import Image from "next/image";
import Link from "next/link";

function BlogSection() {
  return (
    <div className="grid grid-cols-6 max-md:grid-rows-4 grid-rows-2 h-100 gap-1 my-8">
      <div className="relative col-span-1 col-start-1  max-md:col-span-2 max-md:row-span-2 overflow-hidden rounded-md row-start-1 row-span-2">
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
      <div className=" relative col-span-1 col-start-2 max-md:col-span-2 max-md:col-start-3   overflow-hidden rounded-md row-start-1 row-span-1">
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامون و سطرآنچنان که لازم است
          </p>
          <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
      <div className=" relative col-span-1 col-start-2 max-md:col-span-2 max-md:col-start-3  overflow-hidden rounded-md row-start-2 row-span-1">
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامون و سطرآنچنان که لازم است
          </p>
          <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
      <div className=" relative col-span-2 col-start-3 max-md:col-span-2 max-md:col-start-5 overflow-hidden rounded-md row-start-1 row-span-2">
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
      <div className=" relative col-span-1 col-start-5 max-md:col-span-2 max-md:row-span-2 max-md:row-start-3 overflow-hidden rounded-md row-start-1 row-span-1">
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامون و سطرآنچنان که لازم است
          </p>
          <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
      <div className=" relative col-span-1 col-start-6  max-md:col-span-2 max-md:col-start-5 max-md:row-start-3 overflow-hidden rounded-md row-start-1 row-span-2">
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
      <div className=" relative col-span-1 col-start-5 max-md:row-span-2 max-md:col-start-3 max-md:col-span-2 max-md:row-start-3 overflow-hidden rounded-md row-start-2 row-span-1">
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامون و سطرآنچنان که لازم است
          </p>
          <Link href="" className="py-2 my-1 bg-blue-500 px-4 rounded-xl">
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
