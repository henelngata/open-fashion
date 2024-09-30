"use client";
import { useState } from "react";
import Image from "next/image";
import { Br } from "./components";
import Link from "next/link";

const categories = ["All", "Apparel", "Dress", "Tshirt", "Bag"];

const products = {
  All: [
    {
      id: 1,
      name: "Product 1",
      image: " /images/1.svg",
    },
    {
      id: 2,
      name: "Product 2",
      image: " /images/1.svg",
    },
    {
      id: 3,
      name: "Product 3",
      image: " /images/1.svg",
    },
    {
      id: 4,
      name: "Product 4",
      image: " /images/1.svg",
    },
  ],
  Apparel: [
    {
      id: 5,
      name: "Apparel 1",
      image: " /images/1.svg",
    },
    {
      id: 6,
      name: "Apparel 2",
      image: " /images/1.svg",
    },
    {
      id: 7,
      name: "Apparel 3",
      image: " /images/1.svg",
    },
    {
      id: 8,
      name: "Apparel 4",
      image: " /images/1.svg",
    },
  ],
  Dress: [
    { id: 9, name: "Dress 1", image: "/images/1.svg" },
    { id: 10, name: "Dress 2", image: " /images/1.svg" },
    { id: 11, name: "Dress 3", image: " /images/1.svg" },
    { id: 12, name: "Dress 4", image: " /images/1.svg" },
  ],
  Tshirt: [
    {
      id: 13,
      name: "Tshirt 1",
      image: "/images/1.svg",
    },
    {
      id: 14,
      name: "Tshirt 2",
      image: " /images/1.svg",
    },
    {
      id: 15,
      name: "Tshirt 3",
      image: " /images/1.svg",
    },
    {
      id: 16,
      name: "Tshirt 4",
      image: " /images/1.svg",
    },
  ],
  Bag: [
    { id: 17, name: "Bag 1", image: " /images/1.svg" },
    { id: 18, name: "Bag 2", image: " /images/1.svg" },
    { id: 19, name: "Bag 3", image: " /images/1.svg" },
    { id: 20, name: "Bag 4", image: " /images/1.svg" },
  ],
};

export default function NewArrival() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="w-full px-4 py-8 ">
      <section className="grid place-items-center mb-8">
        <h2 className="uppercase ">new arrival</h2>
        <Br />
      </section>

      <nav className="flex justify-center space-x-6 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`relative text-sm font-normal font-['Tenor Sans'] leading-none tracking-wide pb-1
              ${
                activeCategory === category ? "text-lime-950" : "text-zinc-500"
              }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
            {activeCategory === category && (
              <span
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2 text-orange-500 mt-1"
                style={{ width: "4px", height: "4px" }}
              >
                ◆
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {products[activeCategory].map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div style={{ width: "165px", height: "200px", flexShrink: 0 }}>
              <Image
                src={product.image}
                alt={product.name}
                width={165}
                height={200}
                className="object-cover"
              />
            </div>
            <p className="text-center mt-2">{product.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
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
      </div>
    </div>
  );
}
