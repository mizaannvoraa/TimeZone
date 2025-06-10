// app/components/BirthdayHighlights.js
"use client";

import Image from "next/image";

const highlights = [
  {
    src: "/assets/WhatBel6.webp",
    alt: "Dedicated Party Host",
    text: "DEDICATED PARTY HOST",
  },
  {
    src: "/assets/WhatBel1.webp",
    alt: "Party Space & Decor",
    text: "PARTY SPACE & DECOR",
  },
  {
    src: "/assets/WhatBel3.jpg",
    alt: "Lanyards for All Birthday Kid",
    text: "LANYARDS FOR ALL BIRTHDAY KID",
  },
  {
    src: "/assets/WhatBel4.jpg",
    alt: "Exciting Activities",
    text: "EXCITING ACTIVITIES",
  },
  {
    src: "/assets/WhatBel5.jpg",
    alt: "Pre-Loaded Tickets",
    text: "PRE-LOADED TICKETS",
  },
  {
    src: "/assets/WhatBel2.jpg",
    alt: "Prize Shop Fun",
    text: "PRIZE SHOP FUN",
  },
];

export default function WhatcanBelowSec() {
  return (
    <section className="px-4 py-10 sm:px-6 w-full max-w-6xl mx-auto lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-[10px_10px_15px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col items-center"
          >
            <div className="w-full md:h-75 h-80  relative">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-center text-red-600 font-bold py-3 px-2 text-[16px] sm:text-[18px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}