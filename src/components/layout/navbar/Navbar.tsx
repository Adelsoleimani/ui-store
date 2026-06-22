import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="py-4">
      <ul className="flex gap-4  items-center flex-wrap justify-between">
        <li>
          <Link href="/">
            <Image
              src="https://webeto.co/uploads/Global/Webeto317.png"
              alt="logo"
              width={150}
              height={150}
              className="w-30 h-10"
            />
          </Link>
        </li>
        <li className="relative">
          <input
            type="text"
            placeholder=" جستجو در محصولات ..."
            className="w-90 max-md:w-60 px-4 text-right p-2.5 outline-0 bg-gray-300 rounded-2xl"
          />
          <Search className="absolute left-0.5 top-2.5" />
        </li>
        <li className="flex gap-4  ">
          <Link
            href=""
            className="flex gap-2 rounded-2xl shadow-olive-900 shadow-2xl px-1 py-3"
          >
            <ShoppingCart />
            {"سبد خرید"}
          </Link>
          <Link
            href=""
            className="flex gap-2 rounded-2xl shadow-olive-900 shadow-2xl px-1 py-3"
          >
            <User />
            {"ورود"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
