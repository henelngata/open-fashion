import Image from "next/image";

export default function Product() {
  return (
    <main className="p-4 mb-10">
      <section className=" flex justify-between mb-8">
        <p className="uppercase">4500 Apparel</p>
        <section className="flex justify-between w-1/3 ">
          <p>New</p>
          <p>Filter</p>
        </section>
      </section>
      <section className="red mb-8">
        <section className="flex justify-between">
          <Image
            src="/images/hero.svg"
            width={150}
            height={200}
            alt="Lamerei"
          />
          <section className="w-3/4 m-4">
            <p className="uppercase  font-bold text-xl mb-1">Lamerei</p>
            <p>Recycle Bouche Knit</p>
            <p className="text-orange-600 mb-4">$120</p>
            <section className=" flex mb-4">
              <Image
                src="/images/twitter.svg"
                width={10}
                height={10}
                alt="Icon"
              />
              <p className="ml-2">4.8 Ratings</p>
            </section>
            <section className="flex items-center">
              <p className="mr-2 capitalize">size</p>
              <section className=" flex justify-evenly">
                <p className=" border-2 rounded-full inline-block w-8 h-8 pt-1 text-sm text-center mr-2">
                  S
                </p>
                <p className=" border-2 rounded-full inline-block w-8 h-8 pt-1 text-sm text-center mr-2">
                  S
                </p>
                <p className=" border-2 rounded-full inline-block w-8 h-8 pt-1 text-sm text-center mr-2">
                  S
                </p>
              </section>
              <Image
                className="inline-block relative -top-4 left-16"
                src="/images/twitter.svg"
                width={20}
                height={20}
                alt="Icon"
              />
            </section>
          </section>
        </section>
      </section>
      <section className="red mb-8">
        <section className="flex justify-between">
          <Image
            src="/images/hero.svg"
            width={150}
            height={200}
            alt="Lamerei"
          />
          <section className="w-3/4 m-4">
            <p className="uppercase  font-bold text-xl mb-1">Lamerei</p>
            <p>Recycle Bouche Knit</p>
            <p className="text-orange-600 mb-4">$120</p>
            <section className=" flex mb-4">
              <Image
                src="/images/twitter.svg"
                width={10}
                height={10}
                alt="Icon"
              />
              <p className="ml-2">4.8 Ratings</p>
            </section>
            <section className="flex items-center">
              <p className="mr-2 capitalize">size</p>
              <section className=" flex justify-evenly">
                <p className=" border-2 rounded-full inline-block w-8 h-8 pt-1 text-sm text-center mr-2">
                  S
                </p>
                <p className=" border-2 rounded-full inline-block w-8 h-8 pt-1 text-sm text-center mr-2">
                  S
                </p>
                <p className=" border-2 rounded-full inline-block w-8 h-8 pt-1 text-sm text-center mr-2">
                  S
                </p>
              </section>
              <Image
                className="inline-block relative -top-4 left-16"
                src="/images/twitter.svg"
                width={20}
                height={20}
                alt="Icon"
              />
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
