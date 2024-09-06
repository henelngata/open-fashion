import Image from "next/image";
import { Heading } from "../components/components";

export default function Blog() {
  return (
    <main className="p-8">
      <section>
              <Heading />
      </section>
      <section>
        <section>
          <section className="bg-">
            <Image
              src="/images/holder.png"
              width={600}
              height={200}
              alt="image"
            />
            <p className="uppercase italic font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut
              libero beatae temporibus facilis{" "}
            </p>
          </section>
          <section className="red flex justify-between">
            <section>
              <p className="inline-block mr-4">Fashion</p>
              <p className="inline-block">Fashion</p>
            </section>
            <p>4 days ago</p>
          </section>
              </section>
              <section className=" grid place-items-center">
                  <button className="border-2 flex w-1/2 justify-between px-6 py-3 uppercase my-9">Load more <Image src="/images/search.svg" width={24} height={24} alt="add"/></button>
              </section>
      </section>
    </main>
  );
}
