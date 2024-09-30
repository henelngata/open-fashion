import Image from "next/image";

export default function Blog() {
  return (
    <main>
      <img className="w-[380.41px] h-[221.81px]" src="/images/p1.svg" />
      <div className="w-[348.63px] text-black text-sm font-normal font-['Tenor Sans'] uppercase leading-snug">
        2021 className Guide: The Biggest Fall Trends
      </div>
      <div className="w-[314.41px] h-[222.41px] text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-normal">
        You guys know how much I love mixing high and low-end – it’s the best
        way to get the most bang for your buck while still elevating your
        wardrobe. The same goes for handbags! And honestly they are probably the
        best pieces to mix and match. I truly think the key to completing a look
        is with a great bag and I found so many this year that I wanted to share
        a round-up of my most worn handbags.
      </div>
      <img className="w-[342.59px] h-[450.12px]" src="/images/p2.svg" />
      <div className="w-[314.41px] h-[222.41px]">
        <span className="text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-normal">
          I found this{" "}
        </span>
        <span className="text-[#dd8560] text-sm font-normal font-['Tenor Sans'] leading-normal">
          Saint Laurent canvas handbag
        </span>
        <span className="text-[#333333] text-sm font-normal font-['Tenor Sans'] leading-normal">
          {" "}
          this summer and immediately fell in love. The neutral fabrics are so
          beautiful and I like how this handbag can also carry into fall. The
          mini Fendi bucket bag with the sheer fabric is so fun and such a
          statement bag. Also this DeMellier off white bag is so cute to carry
          to a dinner with you or going out, it’s small but not too small to fit
          your phone and keys still.
        </span>
      </div>
      <div className="text-[#555555] text-sm font-normal font-['Tenor Sans'] leading-normal">
        Posted by OpenFashion | 3 Days ago
      </div>
    </main>
  );
}
