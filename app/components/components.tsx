"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./components.module.css";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { Heart } from "lucide-react";
import React, { useRef, useEffect } from "react";

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
        strokeWidth={0.3}
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

interface ScrollItem {
  id: number;
  imageUrl: string;
  text: string;
}

interface HorizontalScrollProps {
  items: ScrollItem[];
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToItem = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="red relative  w-[254.89px] h-[311.64px] overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex-none w-full snap-center transition-opacity duration-300 ${
              index === activeIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <div className="relative w-[254.89px] h-[311.64px] red">
              <Image
                src={item.imageUrl}
                alt={item.text}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-2 text-center">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => scrollToItem(index)}
          />
        ))}
      </div>
    </div>
  );
};



interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
}

interface ProductShowcaseProps {
  products: Product[];
 
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = 265; // Width of each item including gap
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-[375px] h-[531px] relative font-['Tenor Sans']">
      

      <div className="w-[1050px] h-[390.27px] left-[16.37px] top-[95.31px] absolute">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-[255px] h-[390px] pt-[0.27px] pb-[2.09px] flex-none mr-[10px] snap-center flex-col justify-center items-center gap-1 inline-flex"
            >
              <div className="relative w-[254.89px] h-[311.64px]">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="h-[72px] flex-col justify-start items-center inline-flex">
                <div className="w-[232.36px] text-center text-[#333333] text-base font-normal leading-normal">
                  {product.name}
                </div>
                <div className="text-[#dd8560] text-base font-normal leading-normal">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[34.20px] h-2 left-[175px] top-[502.88px] absolute">
        {products.slice(0, 3).map((_, index) => (
          <div
            key={index}
            className={`w-[5.66px] h-[5.66px] absolute origin-top-left rotate-45 ${
              index === activeIndex ? "bg-[#ffe863]" : "border border-[#888888]"
            } `}
            style={{ left: `${4 + index * 13.1}px`, top: "0" }}
          />
        ))}
      </div>
    </div>
  );
};
interface Category {
  name: string;
  href: string;
}

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
}

const Tab: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
}) => {
  return (
    <div className="w-[375px] h-9 relative font-['Tenor Sans']">
      <div className="w-[292.10px] h-[16.28px] left-[42.45px] top-[9.05px] absolute flex justify-between">
        {categories.map((category, index) => (
          <Link key={category.name} href={category.href}>
            <a
              className={`text-center text-sm font-normal leading-[14.84px] tracking-wide ${
                category.name === activeCategory
                  ? "text-[#212806]"
                  : "text-[#888888] opacity-80"
              }`}
            >
              {category.name}
            </a>
          </Link>
        ))}
      </div>
      {activeCategory === "All" && (
        <div className="w-1 h-1 left-[52.04px] top-[26.48px] absolute origin-top-left rotate-45 bg-[#dd8560]" />
      )}
    </div>
  );
};

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  productUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  price,
  productUrl,
}) => {
  return (
    <div className="w-[165px] h-[260.16px] pb-[0.16px] flex-col justify-center items-center gap-1 inline-flex">
      <Link href={productUrl}>
        <a className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
          <div className="relative w-[165px] h-[200px]">
            <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
          </div>
          <div className="h-14 flex-col justify-start items-center inline-flex mt-1">
            <h3 className="w-[148.89px] text-center text-[#333333] text-xs font-normal font-['Tenor Sans'] leading-none">
              {name}
            </h3>
            <p
              className="text-[#dd8560] text-[15px] font-normal font-['Tenor Sans'] leading-normal mt-1"
              aria-label={`Price: ${price}`}
            >
              {price}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};
export {
  Header,
  Footer,
  Br,
  Heading,
  ScrollingItems,
  HeartIcon,
  ProductText,
  HorizontalScroll,
  ProductShowcase,
  Tab,
  ProductCard
};
