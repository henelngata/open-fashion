"use client";

"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSwipeable } from "react-swipeable";

const images = [
  "/images/product.svg",
  "/images/product.svg",
  "/images/product.svg",
  "/images/product.svg",
  "/images/product.svg",
];

 function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        {...handlers}
        className="relative overflow-hidden group"
        style={{ minHeight: "400px" }}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Carousel image ${index + 1}`}
              width={800}
              height={460}
              className="object-cover w-full h-full flex-shrink-0"
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex justify-center space-x-2 pt-4">
        {images.map((_, index) => (
          <svg
            key={index}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          >
            <rect
              x="2"
              y="8"
              width="8.4853"
              height="8.4853"
              transform="rotate(-45 2 8)"
              fill={index === currentIndex ? "gold" : "white"}
              stroke="currentColor"
              strokeWidth=".3"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <main>
      <section>
        <ImageCarousel />
        <div className=" rh-[78.52px] flex-col justify-center items-start gap-2 inline-flex">
          <div className="w-[343.48px] h-[22.52px] relative">
            <div className="left-0 top-[3.52px] absolute text-center text-black text-base font-normal font-['Tenor Sans'] uppercase tracking-[4px]">
              MOHAN
            </div>
            <div className="w-4 h-4 left-[327.48px] top-0 absolute">
              <div className="w-[8.67px] h-[0px] left-[8px] top-[0.67px] absolute origin-top-left rotate-90 border border-[#333333]"></div>
            </div>
          </div>
          <div className="text-center text-[#555555] text-base font-normal font-['Tenor Sans'] capitalize">
            Recycle Boucle Knit Cardigan Pink
          </div>
          <div className="text-[#dd8560] text-lg font-normal font-['Tenor Sans'] capitalize">
            $120
          </div>
        </div>
      </section>
    </main>
  );
}
