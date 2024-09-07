import Image from "next/image";
import Link from "next/link";
import { bodoni } from "./fonts/fonts";
import { Br, ScrollingItems } from "./components/components";
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
        <section className="relative z-10 top60">
          <h1
            className={`${bodoni.className} uppercase text-3xl italic font-bold opacity-75 leading-10 letter-1`}
          >
            luxury <span className="block ml-5">fashion</span>
            &accessories
          </h1>
        </section>
        <section className="absolute top-85 w-2/3 left-14">
          <Link
            className="block border-2 border-black font-medium text-off-white  py-2 px-4 bg-black opacity-50 rounded-3xl text-center "
            href="/collection"
          >
            Explore Collection
          </Link>
        </section>
      </section>
      {/* New arrival section */}
      <section className="red mt-10 letter-2 p-4 -top-20 z-10">
        <section className="grid place-items-center mb-8">
          <h2 className="uppercase ">new arrival</h2>
          <Br />
        </section>
        <section>
          <section className="flex justify-between p-4">
            <Link href="/all"> All</Link>
            <Link href="/Apparel"> Apparel</Link>
            <Link href="/all"> Dress</Link>
            <Link href="/all"> Tshirt</Link>
            <Link href="Bag">Bag</Link>
          </section>
          <section className="grid grid-cols-2 gap-2.5">
            <section className="text-center">
              <Image
                src="/images/1.svg"
                width={165}
                height={200}
                alt="fashion"
              />
              <p className="leading-0"> 21WN reversible angora cardigan</p>
              <p className="text-orange-600">$120</p>
            </section>
            <section className="text-center">
              <Image
                src="/images/2.svg"
                width={165}
                height={200}
                alt="fashion"
              />
              <p>Oblog bag in the world of ceaser its </p>
              <p className="text-orange-600">$120</p>
            </section>
            <section className="text-center">
              <Image
                src="/images/3.svg"
                width={165}
                height={200}
                alt="fashion"
              />
              <p>Oblog bag in the world of ceaser its </p>
              <p className="text-orange-600">$120</p>
            </section>
            <section className="text-center">
              <Image
                src="/images/2.svg"
                width={165}
                height={200}
                alt="fashion"
              />
              <p>Oblog bag in the world of ceaser its </p>
              <p className="text-orange-600">$120</p>
            </section>
          </section>
          <section className="grid place-items-center my-8 ">
            <Link href="#" className="flex ">
              Explore More{" "}
              <Image
                className="ml-2"
                src="/images/forward-arrow.svg"
                width={18}
                height={18}
                alt="forward arrow"
              />{" "}
            </Link>
          </section>
        </section>
      </section>
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
      <section className="p-4">
        <section className="mt-10 letter-2 p-4">
          <section className="grid place-items-center mb-8">
            <h2 className="uppercase ">Just for you</h2>
            <Br />
          </section>
        </section>
        <section className="grid-flow-col">
          <ScrollingItems/>
          <section className="text-center red">
            <Image
              className="rounded-md"
              src="/images/2.svg"
              width={254.89}
              height={311.64}
              alt="fashion"
            />
            <p className="text-sm">Harris Tweed Three button Jacket</p>
            <p className="text-orange-600">$120</p>
          </section>
          <section className="text-center">
            <Image
              className="rounded-md"
              src="/images/hero.svg"
              width={200}
              height={300}
              alt="fashion"
            />
            <p>Oblog bag in the world of ceaser its </p>
            <p className="text-orange-600">$120</p>
          </section>
          <section className="text-center">
            <Image
              className="rounded-md"
              src="/images/hero.svg"
              width={200}
              height={300}
              alt="fashion"
            />
            <p>Oblog bag in the world of ceaser its </p>
            <p className="text-orange-600">$120</p>
          </section>
        </section>
      </section>

      {/* Trending section */}
      <section className="p-4">
        <section className="mt-10 letter-2mb-5">
          <section className="grid place-items-center">
            <h2 className="uppercase ">@trending</h2>
          </section>
        </section>
        <section>
          <p className="inline-block rounded-xl p-2 bg-back">#2021</p>
        </section>
      </section>
      {/* Open fashion section */}
      <section className="bg-back p-4 mb-10">
        <section className="grid place-items-center text-center">
          <Image
            className="inline-block mb-6"
            src="/images/logo.svg"
            width={100}
            height={50}
            alt="logo"
          />
          <p className="mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            omnis ?
          </p>
          <Br />
        </section>
        <section className=" grid place-items-center grid-cols-2 mt-6">
          <section className="grid place-items-center">
            <Image src="/images/search.svg" width={48} height={48} alt="logo" />
            <p>Lorem ipsum dolor sit amet, lo .</p>
          </section>
          <section className="grid place-items-center">
            <Image src="/images/search.svg" width={48} height={48} alt="logo" />
            <p>Lorem ipsum dolor sit amet, lo .</p>
          </section>
          <section className="grid place-items-center">
            <Image src="/images/search.svg" width={48} height={48} alt="logo" />
            <p>Lorem ipsum dolor sit amet, lo .</p>
          </section>
          <section className="grid place-items-center">
            <Image src="/images/search.svg" width={48} height={48} alt="logo" />
            <p>Lorem ipsum dolor sit amet, lo .</p>
          </section>
          <section className="grid place-items-center">
            <Image src="/images/search.svg" width={48} height={48} alt="logo" />
            <p>Lorem ipsum dolor sit amet, lo .</p>
          </section>
        </section>
      </section>
    </main>
  );
}
