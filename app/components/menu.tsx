"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";

const categories = ["New", "Apparel", "Bag", "Shoes", "Beauty", "Accessories"];
const subcategories = {
  New: ["Arrivals", "Trending", "Collections"],
  Apparel: ["Tops", "Pants", "Dresses"],
  Bag: ["Handbags", "Backpacks", "Wallets"],
  Shoes: ["Sneakers", "Heels", "Boots"],
  Beauty: ["Skincare", "Makeup", "Fragrance"],
  Accessories: ["Jewelry", "Belts", "Sunglasses"],
};

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Women");
  const [activeDropdowns, setActiveDropdowns] = useState<
    Record<string, boolean>
  >({});
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [fadeIn, setFadeIn] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 50);
    }
  };

  const toggleDropdown = (category: string) => {
    setActiveDropdowns((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(
        `button[data-active="true"]`
      );
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement as HTMLElement;
        setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
      }
    }

    setFadeIn(false);
    setActiveDropdowns({});

    setTimeout(() => setFadeIn(true), 50);
  }, [activeLink]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative z-50 p-2  border-none"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 overflow-y-auto">
          <nav className="p-4 pt-16">
            <ul ref={navRef} className="flex justify-around mb-6 relative">
              {["Women", "Men", "Kids"].map((link) => (
                <li key={link}>
                  <button
                    className={`text-lg font-semibold focus:outline-none ${
                      activeLink === link ? "text-orange-500" : ""
                    }`}
                    onClick={() => setActiveLink(link)}
                    data-active={activeLink === link}
                  >
                    {link}
                  </button>
                </li>
              ))}
              <div
                className="absolute bottom-0 h-0.5 bg-orange-500 transition-all duration-300 ease-in-out"
                style={{
                  left: `${underlineStyle.left}px`,
                  width: `${underlineStyle.width}px`,
                }}
              />
            </ul>

            <div
              className={`space-y-4 transition-opacity duration-300 ease-in-out ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
            >
              {categories.map((category) => (
                <div key={category}>
                  <button
                    className="flex justify-between items-center w-full py-2 text-left"
                    onClick={() => toggleDropdown(category)}
                  >
                    <span>{category}</span>
                    {activeDropdowns[category] ? (
                      <ChevronUp className="h-5 w-5 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeDropdowns[category] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="pl-4 mt-2 space-y-2">
                      {subcategories[category].map((subcategory) => (
                        <li key={subcategory}>
                          <Link
                            href={`/${activeLink.toLowerCase()}/${category.toLowerCase()}/${subcategory.toLowerCase()}`}
                            className="text-blue-600 hover:underline"
                          >
                            {subcategory}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
