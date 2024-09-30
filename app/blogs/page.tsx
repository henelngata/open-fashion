import Image from "next/image";
import { Heading } from "../components/components";


function Blog(){
  return (
    <section className="flex justify-between mb-4">
      <section className="flex">
        {/* pic */}
        <Image src="/images/1.svg" width={120} height={155} alt="pic" />
      </section>
      <section className="w-[70%] pt-2">
        <h1 className="text-black text-sm font-normal font-['Tenor Sans'] uppercase leading-tight tracking-widest mb-2">
          2021 Style Guide: The Biggest Fall Trends
        </h1>
        <p className="opacity-80 text-[#333333] text-base font-normal font-['Tenor Sans'] leading-normal mb-4">
          The excitement of fall fashion is here and I’m already loving some of
          the trend forecasts{" "}
        </p>
        <p className="text-[#888888] text-sm font-normal font-['Tenor Sans'] leading-tight ">4 days ago</p>
      </section>
    </section>
  );
}
export default function Blogs() {
  return (
    <main className="">
      <section>
        <Heading />
      </section>
      <section>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </section>
      <div className="h-12 px-[33px] py-3 border border-[#dedede] justify-center items-center gap-4 inline-flex ml-[25%]">
        <div className="text-center text-black text-base font-normal font-['Tenor Sans'] uppercase leading-normal">
          Load more
        </div>
        <Image className="w-6 h-6 relative" src="/images/plus.svg" height={6} width={6} alt="plus icon"/>
      </div>
    </main>
  );
}
