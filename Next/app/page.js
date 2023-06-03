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
              <div className="col-span-2"></div>
              <div className="col-span-1">
                <Image src={banerBlog} className="h-72 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
