"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Br } from "./components";

// Mock API call - replace with actual API call in production
const fetchImages = async () => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    " /images/1.svg",
    " /images/1.svg",
    " /images/1.svg",
    " /images/1.svg",
    " /images/1.svg",
  ];
};

export default function JustForYou() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchImages().then(setImages);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full px-4 py-8 overflow-hidden ">
      <section className="grid place-items-center mb-8">
        <h2 className="uppercase ">Just for you</h2>
        <Br />
      </section>

      <div className="relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 pr-1/3">
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                width={300}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-[50%] transform -translate-y-1/2 bg-opacity-50 p-2 rounded-full"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute left-[90%] top-1/2 transform -translate-y-1/2  bg-opacity-50 p-2 rounded-full"
          aria-label="Next image"
        >
          →
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <svg
            key={index}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className="cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            <rect
              x="1"
              y="1"
              width="8"
              height="8"
              transform="rotate(45 5 5)"
              fill={index === currentIndex ? "gold" : "white"}
              stroke="orange"
              strokeWidth=".5"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
