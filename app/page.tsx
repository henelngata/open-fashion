import Image from "next/image";
import Link from "next/link";
import { bodoni } from "./fonts/fonts";
import { Br } from "./components/components";
export default function Home() {
  return (
    <main>
      <section >
        <section >
          <Image
            src="/images/hero.svg"
            width={500}
            height={600}
            alt="hero image"
          />
        </section>
        <section className="relative z-10 -top-96 ml-6 ">
          <h1
            className={`${bodoni.className} uppercase text-3xl italic font-bold opacity-75 leading-10 letter-1`}
          >
            luxury <span className="block ml-5">fashion</span>
            &accessories
          </h1>
        </section>
        <section className="absolute top-3/4 ">
          <Link
            className="block border-2 border-black font-medium text-off-white  py-2 px-4 bg-black opacity-50 rounded-3xl text-center"
            href="/collection"
          >
            Explore Collection
          </Link>
        </section>
      </section>
      {/* New arrival section */}
      <section className="mt-10 letter-2 p-4">
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
          <section className="grid grid-cols-2">
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
          <section className="grid place-items-center my-8">
            <Link href="#">Explore More</Link>
          </section>
        </section>
      </section>
      <section className="p-4">
        <section className="grid place-items-center my-8">
          <Br />
        </section>

        <section className="grid grid-cols-3 w-6/6">
          <p>prada</p>
          <p>prada</p>
          <p>prada</p>
          <p>prada</p>
          <p>prada</p>
          <p>prada</p>
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
        <section className=" grid  grid-flow-col">
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
          <Image className="inline-block mb-6" src="/images/logo.svg" width={100} height={50} alt="logo" />
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
