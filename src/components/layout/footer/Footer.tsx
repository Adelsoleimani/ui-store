import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-24 pb-4 flex-wrap items-baseline justify-center gap-3 flex px-16 max-md:px-12">
      <div className="w-2/7 max-md:w-full border border-gray-600 shadow-2xl rounded-2xl p-4">
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>
      <div className="w-1/7 max-md:w-2/5 flex gap-3 items-center flex-col">
        <h1 className="text-lg">لینک های مفید</h1>
        <Link className="text-gray-600 " href="">
          سوالات متدوال
        </Link>
        <Link className="text-gray-600" href="">
          قوانین و مقررات
        </Link>
        <Link className="text-gray-600" href="">
          شرایط و گارانتی
        </Link>
      </div>
      <div className="w-1/7 max-md:w-2/5 flex gap-3 items-center flex-col">
        <h1>گواهینامه ها</h1>
        <Image
          src="/images/logoetemad.png"
          alt="logo"
          width={200}
          height={200}
          className="h-auto w-auto"
        />
      </div>
      <div className="w-2/7 max-md:w-full flex gap-3 items-center flex-col">
        <h1 id="conet">ارتباط با ما</h1>
        <p className="text-gray-600">شماه تماس : 051-93242</p>
        <p className="text-gray-600">ایمیل کارخانه: bolbolianasdk@gmail.com</p>
        <p className="text-gray-600">
          ادرس شعبه اصلی : مشهد / شریعتی / بلوار سناباد / نبش پاساژ گلی ممد
        </p>
      </div>
    </footer>
  );
}

export default Footer;
