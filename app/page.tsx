import Image from "next/image";
import Link from "next/link";
import { bodoni } from "./fonts/fonts";
import {
  Br,
  HorizontalScroll,
  ProductShowcase,
  ScrollingItems,
  Tab,
} from "./components/components";
import MobileNav from "./components/menu";
import NewArival from "./components/NewArival";
import JustForYou from "./components/JustYou";
export default function Home() {
  return (
    <main>
      <section>
        <section>
          <Image
            src="/images/hero.svg"
            width={500}
            height={600}
            alt="hero image"
          />
        </section>
        <section className="absolute z-10 top-[40%] left-[20%]">
          <h1
            className={`${bodoni.className} uppercase text-3xl italic font-bold opacity-75 leading-10 letter-1`}
          >
            luxury <span className="block ml-5">fashion</span>
            &accessories
          </h1>
        </section>
        <div className="h-10 px-[30px] py-2 bg-black/40 rounded-[30px]  backdrop-blur-sm justify-center items-center gap-2 inline-flex absolute top-[80%] left-[20%]">
          <div className="text-[#fcfcfc] text-base font-normal font-['Tenor Sans'] uppercase leading-normal">
            Explore Collection
          </div>
        </div>
      </section>
      {/* New arrival section */}
      <NewArival />
      {/*  */}

      {/* partners */}
      <section className="p-4">
        <section className="grid place-items-center my-8">
          <Br />
        </section>

        <section className="grid grid-cols-3 gap-6 place-items-center">
          <Image
            src="/images/prada.svg"
            width={69.32}
            height={10.69}
            alt="prada logo"
          />
          <Image
            src="/images/burberry.svg"
            width={98.32}
            height={7.31}
            alt="prada logo"
          />
          <Image
            src="/images/boss.svg"
            width={52.6}
            height={19.73}
            alt="prada logo"
          />
          <Image
            src="/images/catier.svg"
            width={72.17}
            height={20.01}
            alt="prada logo"
          />
          <Image
            src="/images/gucci.svg"
            width={94.26}
            height={14.71}
            alt="prada logo"
          />
          <Image
            src="/images/tiffany-co.svg"
            width={98.36}
            height={12.64}
            alt="prada logo"
          />
        </section>
        <section className="grid place-items-center my-8">
          <Br />
        </section>
      </section>
      {/* Just for you section */}
      <JustForYou />
      {/* Trending section */}
      <div className="w-[375px] h-[140px] relative mb-8 ">
        <div className="left-[111px] top-[6px] absolute text-center text-black text-lg font-normal font-['Tenor Sans'] uppercase leading-10 tracking-[4px]">
          @Trending
        </div>
        <div className="px-2.5 py-2 left-[16px] top-[54px] absolute bg-[#f8f8f8] rounded-[30px] justify-start items-start gap-2.5 inline-flex">
          <div className="text-center text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-none tracking-tight">
            #2021
          </div>
        </div>
        <div className="px-2.5 py-2 left-[16px] top-[94px] absolute bg-[#f8f8f8] rounded-[30px] justify-start items-start gap-2.5 inline-flex">
          <div className="text-center text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-none tracking-tight">
            #dress
          </div>
        </div>
        <div className="px-2.5 py-2 left-[93px] top-[94px] absolute bg-[#f8f8f8] rounded-[30px] justify-start items-start gap-2.5 inline-flex">
          <div className="text-center text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-none tracking-tight">
            #autumncollection
          </div>
        </div>
        <div className="px-2.5 py-2 left-[85px] top-[54px] absolute bg-[#f8f8f8] rounded-[30px] justify-start items-start gap-2.5 inline-flex">
          <div className="text-center text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-none tracking-tight">
            #spring
          </div>
        </div>
        <div className="px-2.5 py-2 left-[168px] top-[54px] absolute bg-[#f8f8f8] rounded-[30px] justify-start items-start gap-2.5 inline-flex">
          <div className="text-center text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-none tracking-tight">
            #collection
          </div>
        </div>
        <div className="px-2.5 py-2 left-[276px] top-[54px] absolute bg-[#f8f8f8] rounded-[30px] justify-start items-start gap-2.5 inline-flex">
          <div className="text-center text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-none tracking-tight">
            #fall
          </div>
        </div>
        <div className="px-2.5 py-2 left-[251px] top-[94px] absolute bg-[#f8f8f8] rounded-[30px] justify-start items-start gap-2.5 inline-flex">
          <div className="text-center text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-none tracking-tight">
            #openfashion
          </div>
        </div>
      </div>
      {/* experiment */}
      {/* Open fashion section */}
      {/*  */}
      {/*  */}
      <section className="bg-back p-4 mb-8 ">
        <section className="grid place-items-center text-center">
          <Image
            className="inline-block mb-6"
            src="/images/logo.svg"
            width={100}
            height={50}
            alt="logo"
          />
          <div className="w-[285.04px] h-[65.63px]  relative text-center text-[#555555] text-sm font-normal font-['Tenor Sans'] leading-tight tracking-tight">
            Making a luxurious lifestyle accessible for a generous group of
            women is our daily drive.
          </div>
          <Br />
        </section>
        <section className=" grid grid-cols-2 gap-y-10 mt-2">
          <div className="w-[165px] h-[86.88px] relative">
            <div className="w-[165px] left-0 top-[46.88px] absolute text-center text-[#555555] text-[13px] font-normal font-['Tenor Sans'] leading-tight">
              Fast shipping. Free on orders over $25.
            </div>
            <img
              className="w-[49.77px] h-[34.91px] left-[59.55px] top-0 absolute"
              src="/images/m1.svg"
            />
          </div>
          <div className="w-[165px] h-[86.88px] relative">
            <div className="w-[165px] left-0 top-[46.88px] absolute text-center text-[#555555] text-[13px] font-normal font-['Tenor Sans'] leading-tight">
              Sustainable process from start to finish.
            </div>
            <img
              className="w-[49.77px] h-[34.91px] left-[59.55px] top-0 absolute"
              src="/images/m2.svg"
            />
          </div>
          <div className="w-[165px] h-[86.88px] relative">
            <div className="w-[165px] left-0 top-[46.88px] absolute text-center text-[#555555] text-[13px] font-normal font-['Tenor Sans'] leading-tight">
              Unique designs and high-quality materials.
            </div>
            <img
              className="w-[49.77px] h-[34.91px] left-[59.55px] top-0 absolute"
              src="/images/m3.svg"
            />
          </div>
          <div className="w-[165px] h-[86.88px] relative">
            <div className="w-[165px] left-0 top-[46.88px] absolute text-center text-[#555555] text-[13px] font-normal font-['Tenor Sans'] leading-tight">
              Fast shipping. Free on orders over $25.
            </div>
            <img
              className="w-[49.77px] h-[34.91px] left-[59.55px] top-0 absolute"
              src="/images/m4.svg"
            />
          </div>
        </section>
      </section>
      {/* Follow us */}
      <div className="w-[375px] h-[460px] relative">
        <div className=" relative text-center text-black text-lg font-normal font-['Tenor Sans'] uppercase leading-10 tracking-[4px]">
          Follow Us
        </div>
        <Image
          className="w-6 h-6 left-[175.50px] top-[58px] absolute"
          src="/images/insta.svg"
          width={24}
          height={24}
          alt="instagram icon"
        />

        <div className="w-[164px] h-[164px] left-[194px] top-[100px] absolute">
          <img
            className="w-[164px] h-[164px] left-0 top-0 absolute"
            src="/images/mia.svg"
          />
          <div className="w-[164px] h-[39px] px-[9px] py-3 left-0 top-[125px] absolute bg-gradient-to-t from-black to-black justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-sm font-normal font-['Tenor Sans'] leading-[14.84px] tracking-wide">
              @_jihyn
            </div>
          </div>
        </div>
        <div className="w-[164px] h-[164px] left-[16px] top-[100px] absolute">
          <img
            className="w-[164px] h-[164px] left-0 top-0 absolute"
            src="/images/ji.svg"
          />
          <div className="w-[164px] h-10 px-[9px] py-3 left-0 top-[124px] absolute bg-gradient-to-t from-black to-black justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-sm font-normal font-['Tenor Sans'] tracking-wide">
              @mia
            </div>
          </div>
        </div>
        <div className="w-[164px] h-[164px] left-[16px] top-[279px] absolute">
          <img
            className="w-[164px] h-[164px] left-0 top-0 absolute"
            src="/images/mia2.svg"
          />
          <div className="w-[164px] h-10 px-[9px] py-3 left-0 top-[124px] absolute bg-gradient-to-t from-black to-black justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-sm font-normal font-['Tenor Sans'] tracking-wide">
              @mia
            </div>
          </div>
        </div>
        <div className="w-[164px] h-[164px] left-[194px] top-[279px] absolute">
          <img
            className="w-[164px] h-[164px] left-0 top-0 absolute"
            src="/images/j2.svg"
          />
          <div className="w-[164px] h-[39px] px-[9px] py-3 left-0 top-[125px] absolute bg-gradient-to-t from-black to-black justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-sm font-normal font-['Tenor Sans'] leading-[14.84px] tracking-wide">
              @_jihyn
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
