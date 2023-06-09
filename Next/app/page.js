import Image from "next/image";
import img1 from "./images/1.webp";
import img2 from "./images/2.webp";
import img3 from "./images/3.webp";
import img4 from "./images/4.webp";
import img5 from "./images/5.webp";
import img6 from "./images/6.webp";
import baner from "./images/baner1.webp";
import baner2 from "./images/baner2.webp";
import prof from "./images/pro.webp";
import banerBlog from "./images/typewriter.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container px-40 mx-auto">
        <h1 className="text-lg my-3 font-bold text-blue-600">
          دسته بندی موضوعی :
        </h1>
        <div className="my-3 grid grid-rows-1 grid-cols-6 gap-6 w-full">
          <div className="relative">
            <div className="absolute w-full h-full bg-black opacity-50 rounded"></div>
            <Image src={img1} className="w-full h-16 rounded" />
            <p className="absolute top-5 right-16 font-bold text-lg text-white">
              دسته بندی
            </p>
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-black opacity-50 rounded"></div>
            <Image src={img2} className="w-full h-16 rounded" />
            <p className="absolute top-5 right-16 font-bold text-lg text-white">
              داستان
            </p>
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-black opacity-50 rounded"></div>
            <Image src={img3} className="w-full h-16 rounded" />
            <p className="absolute top-5 right-16 font-bold text-lg text-white">
              سفر
            </p>
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-black opacity-50 rounded"></div>
            <Image src={img4} className="w-full h-16 rounded" />
            <p className="absolute top-5 right-16 font-bold text-lg text-white">
              هوش مصنوعی
            </p>
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-black opacity-50 rounded"></div>
            <Image src={img5} className="w-full h-16 rounded" />
            <p className="absolute top-5 right-16 font-bold text-lg text-white">
              امنیت سایبری
            </p>
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-black opacity-50 rounded"></div>
            <Image src={img6} className="w-full h-16 rounded" />
            <p className="absolute top-5 right-16 font-bold text-lg text-white">
              هوا و فضا
            </p>
          </div>
        </div>
        <p className="text-right text-sm font-bold opacity-60 my-4">
          مطالب انتخابی برای شما
        </p>
        <div className="grid grid-rows-1 gap-2 grid-cols-3">
          <div className="col-span-2">
            <div className="relative">
              <div className="absolute w-full h-full bg-black opacity-30 rounded-lg"></div>
              <Image src={baner} className="w-full h-[280px] rounded-lg" />
              <div className="grid grid-rows-1 grid-cols-1">
                <div className="absolute bottom-2 right-5">
                  <p className="font-semibold text-lg text-white px-3">
                    آیا یک کمپین 360 درجه یک‌ماهه، می‌تواند بیزینس شما را نجات
                    دهد؟{" "}
                  </p>
                  <div className="grid grid-rows-1 grid-cols-2 mt-2">
                    <div className="mt-2">
                      <div className="grid w-auto grid-rows-1 grid-cols-4">
                        <div className="col-span-1 rounded-full">
                          <Image
                            src={prof}
                            width={55}
                            height={55}
                            className="rounded-full"
                          />
                        </div>
                        <div className="col-span-3">
                          <p className="text-white text-sm font-bold">
                            Dast Andaz
                          </p>
                          <p className="text-white text-xs mt-2 font-bold">
                            ۱۲ ماه پیش
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative">
              <div className="absolute w-full h-full bg-black opacity-30 rounded-lg"></div>
              <Image src={baner2} className="w-full h-[280px] rounded-lg" />
              <div className="grid grid-rows-1 grid-cols-1">
                <div className="absolute bottom-2 right-5">
                  <p className="font-semibold text-lg text-white px-3">
                    آیا یک کمپین 360 درجه یک‌ماهه، می‌تواند بیزینس شما را نجات
                    دهد؟{" "}
                  </p>
                  <div className="grid grid-rows-1 grid-cols-2 mt-2">
                    <div className="mt-2">
                      <div className="grid gap-3 grid-rows-1 grid-cols-3">
                        <div className="col-span-1 rounded-full">
                          <Image
                            src={prof}
                            width={55}
                            height={55}
                            className="rounded-full"
                          />
                        </div>
                        <div className="col-span-2">
                          <p className="text-white text-sm font-bold">
                            Dast Andaz
                          </p>
                          <p className="text-white text-xs mt-2 font-bold">
                            ۱۲ ماه پیش
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="bg-[#bfe8ff] rounded">
            <div className="grid grid-rows-1 grid-cols-3">
              <div className="col-span-2">
                <div className="mr-9 mt-20">
                  <h2 className="font-bold text-2xl ">
                    به ویرگول، دنیای کلمات خوش آمدید. 👋{" "}
                  </h2>
                  <p className="pl-8 mt-4">
                    ویرگول بستری برای خواندن، گفتگو درباره‌ی موضوعات مورد علاقه
                    و به اشتراک‌گذاری ایده‌های اصیل و عمیق در زندگی شخصی،
                    حرفه‌ای و اجتماعی است
                  </p>
                  <div className="flex gap-3 mt-8">
                    <button className="bg-cyan-600 hover:bg-cyan-700 font-bold w-40 text-white py-1 rounded">
                      شروع به کار
                    </button>
                    <button className="border border-black font-bold w-40 opacity-50 hover:opacity-100 justify-self-start py-1 rounded">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <Image src={banerBlog} className="h-72 rounded" />
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="grid gap-8 grid-rows-1 grid-cols-3">
            <div className="col-span-2">
              <div className="bg-white rounded shadow-sm p-4">
                <div className="flex">
                  <div className="pl-2 rounded-full">
                    <Image
                      src={prof}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-800 text-xs font-bold">
                      Dast Andaz
                    </p>
                    <p className="text-slate-400 text-xs mt-2 font-bold">
                      ۱۲ ماه پیش
                    </p>
                  </div>
                </div>
                <h2 className="font-bold text-xl my-3">نزدیک است ...</h2>
                <Image src={baner2} className="w-full h-[280px] rounded-sm" />
                <p className="font-bold text-gray-500 my-2">
                  # نکته های عسلی با سورباز!{" "}
                </p>
              </div>
              <div className="bg-white rounded shadow-sm p-4">
                <div className="flex">
                  <div className="pl-2 rounded-full">
                    <Image
                      src={prof}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-800 text-xs font-bold">
                      Dast Andaz
                    </p>
                    <p className="text-slate-400 text-xs mt-2 font-bold">
                      ۱۲ ماه پیش
                    </p>
                  </div>
                </div>
                <h2 className="font-bold text-xl my-3">نزدیک است ...</h2>
                <Image src={baner2} className="w-full h-[280px] rounded-sm" />
                <p className="font-bold text-gray-500 my-2">
                  # نکته های عسلی با سورباز!{" "}
                </p>
              </div>
              <div className="bg-white rounded shadow-sm p-4">
                <div className="flex">
                  <div className="pl-2 rounded-full">
                    <Image
                      src={prof}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-800 text-xs font-bold">
                      Dast Andaz
                    </p>
                    <p className="text-slate-400 text-xs mt-2 font-bold">
                      ۱۲ ماه پیش
                    </p>
                  </div>
                </div>
                <h2 className="font-bold text-xl my-3">نزدیک است ...</h2>
                <Image src={baner2} className="w-full h-[280px] rounded-sm" />
                <p className="font-bold text-gray-500 my-2">
                  # نکته های عسلی با سورباز!{" "}
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="font-bold">به ویرگول خوش آمدید</h2>
              <p className="text-right opacity-60 mt-2 text-sm">
                زمان آن رسیده که شیوه‌ی نوشتن و خواندن مطالبتان را تغییر دهید.
                اگر برای آغاز دوران جدید آماده هستید به ویرگول خوش آمدید.
              </p>
              <button className="bg-cyan-600 hover:bg-cyan-700 font-bold w-40 text-white py-1 rounded-2xl mt-4">
                میخواهم ثبت نام کنم
              </button>
              <div className="mt-16 sticky top-4">
                <h2 className="font-bold mb-4"> محبوب‌ترین‌های ویرگول</h2>
                <div className="flex">
                  <div className="pl-2 rounded-full">
                    <Image
                      src={prof}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-800 text-sm font-bold">
                      چرا همه‌ی ما به فلسفه نیاز داریم؟
                    </p>
                    <p className="text-slate-600 text-xs mt-1 font-bold">
                      ایمان غواصیه
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-16 mb-4">
                    <Link href={'/'} className="text-sm font-bold text-gray-500 hover:text-gray-800">قوانین</Link>
                    <Link href={'/'} className="text-sm font-bold text-gray-500 hover:text-gray-800">حریم شخصی</Link>
                    <Link href={'/'} className="text-sm font-bold text-gray-500 hover:text-gray-800">نقشه راه</Link>
                    <Link href={'/'} className="text-sm font-bold text-gray-500 hover:text-gray-800">تماس با ما</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
