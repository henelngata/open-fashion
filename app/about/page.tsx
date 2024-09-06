import Image from "next/image";
import { Heading } from "../components/components";

export default function About() {
  return (
    <main>
      <section>
        <Heading />
      </section>
      <section>
        <p className="px-6 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          rerum delectus doloribus facilis a, aspernatur dolores perspiciatis
          vel cumque dolor tempora minima autem debitis dignissimos rem
          reprehenderit corporis? Repudiandae, blanditiis?
        </p>
        <Image
          src="/images/holder.png"
          width={500}
          height={300}
          alt="Image of a model"
        />
      </section>
      <form>
        <Heading />
        <section className="grid place-items-center px-14 mb-8">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.tenetur
            error impedit perferendis dolore!
          </p>
        </section>
        <input
          type="email"
          className="py-4 border-b-2 w-full mb-8 mx-6"
          placeholder="Email address"
        />
        <button className=" bg-black text-off-white p-6 w-full flex justify-evenly uppercase">
          submit{" "}
          <Image
            className="relative -left-20"
            src="/images/search.svg"
            width={24}
            height={24}
            alt="submit arror"
          />
        </button>
      </form>
    </main>
  );
}
