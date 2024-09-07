"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./components.module.css";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { Heart } from "lucide-react";

 function HeartIcon() {
  const [isFilled, setIsFilled] = useState(false);

  const toggleFill = () => {
    setIsFilled(!isFilled);
  };

  return (
    <button
      onClick={toggleFill}
      className="p-2 rounded-full  transition-colors duration-50 border-none"
      aria-label={isFilled ? "Unlike" : "Like"}
    >
      <Heart
        className={`w-6 h-6  transition-colors duration-200 ${
          isFilled ? "fill-red-500 stroke-red-500" : "stroke-white"
        }`}
        strokeWidth={.3}
      />
    </button>
  );
}
function Header() {
  return (
    <header className="flex justify-between p-3 bg-back">
      <Image
        src="/images/menu.svg"
        width={24}
        height={24}
        alt="mobile menu navigation"
      />
      <Image
        src="/images/logo.svg"
        width={78.08}
        height={32}
        alt="mobile menu navigation"
      />
      <section className="flex justify-between w-30">
        <Image
          src="/images/search.svg"
          width={24}
          height={24}
          alt="mobile menu navigation"
        />
        <Image
          src="/images/shopping-bag.svg"
          width={24}
          height={24}
          alt="mobile menu navigation"
        />
      </section>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <section className="grid place-items-center">
        <section className="flex w-3/6 justify-between my-5">
          <Image
            src="/images/twitter.svg"
            width={24}
            height={24}
            alt="twitter logo"
          />
          <Image
            src="/images/instagram.svg"
            width={24}
            height={24}
            alt="instagram logo"
          />
          <Image
            src="/images/youtube.svg"
            width={24}
            height={24}
            alt="youtube logo"
          />
        </section>
        <Br />
        <section className="text-center my-5">
          <p>support@openui.design</p>
          <p>+60 825 876</p>
          <p>08:00 - 22:00 - Everyday</p>
        </section>
        <Br />
        <nav className="w-5/6 flex justify-between my-5">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </section>

      <section className=" bg-foot text-xs w-6/6 grid place-items-center p-3">
        <p>Copyright© OpenUI All Rights Reserved.</p>
      </section>
    </footer>
  );
}

function Br() {
  return <Image src="/images/br.svg" width={124.96} height={9.25} alt="br" />;
}
function Heading() {
  return (
    <section className="mt-10 letter-2 p-4">
      <section className="grid place-items-center mb-8">
        <h2 className="uppercase ">Blog</h2>
        <Br />
      </section>
    </section>
  );
}
const ScrollingItems = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ];

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollContent}>
        {items.map((item, index) => (
          <div className={styles.scrollItem} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProductTextProps {
  h3: string;
  paragraph: string;
}

const ProductText: React.FC<ProductTextProps> = ({ h3, paragraph }) => {
  return (
    <section>
      <h3 className="text-black text-sm font-normal uppercase leading-tight tracking-widest mb-2">
        {h3}
      </h3>
      <p className="w-[338.58px] h-[84.69px] text-[#555555] text-sm font-normal leading-normal mb-4">
        {paragraph}
      </p>
    </section>
  );
};




export { Header, Footer, Br, Heading, ScrollingItems, HeartIcon, ProductText };
