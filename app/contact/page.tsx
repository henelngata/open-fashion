import Image from "next/image";
import { Heading } from "../components/components";

export default function Contact() {
  return (
    <main className="p-4">
      <section>
        <Heading />
      </section>
      <section className="grid place-items-center mb-10">
        <section>
          <Image src="/images/twitter.svg" width={48} height={48} alt="chat" />
        </section>

        <p className="my-5 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, atque
          ea. Vitae voluptatibus cupiditate mollitia nesciunt unde, hic aliquam
          voluptatem aspernatur asperiores repellendus. Aliquid suscipit magnam
          consectetur quos obcaecati quasi.
        </p>
        <button className="text-off-white bg-black px-6 py-2 uppercase">
          chat with us
        </button>
      </section>
      <section className="grid place-items-center mb-10">
        <section>
          <Image src="/images/twitter.svg" width={48} height={48} alt="chat" />
        </section>

        <p className="my-5 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, atque
          ea. Vitae voluptatibus cupiditate mollitia nesciunt unde, hic aliquam
          voluptatem aspernatur asperiores repellendus. Aliquid suscipit magnam
          consectetur quos obcaecati quasi.
        </p>
        <button className="text-off-white bg-black px-6 py-2 uppercase">
          chat with us
        </button>
      </section>
      <section className="grid place-items-center mb-10">
        <section>
          <Image src="/images/twitter.svg" width={48} height={48} alt="chat" />
        </section>

        <p className="my-5 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, atque
          ea. Vitae voluptatibus cupiditate mollitia nesciunt unde, hic aliquam
          voluptatem aspernatur asperiores repellendus. Aliquid suscipit magnam
          consectetur quos obcaecati quasi.
        </p>
        <button className="text-off-white bg-black px-6 py-2 uppercase">
          chat with us
        </button>
      </section>
    </main>
  );
}
