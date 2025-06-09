"use client";

import Image from "next/image";

export default function WhyTimezoneSection() {
  return (
    <section className="bg-white py-8 lg:py-17 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl text-center lg:text-start font-black font-sans text-[#002f63] leading-tight mb-3 md:mb-6">
            WHY TIMEZONE
            <br />
            FOR BIRTHDAYS?
          </h2>
          <p className="text-[#003466] text-[17px] md:text-xl mb-2 font-medium md:mb-4">
            Are you searching for the ideal place to host your child’s birthday
            party? Look no further! Timezone offers the perfect mix of fun,
            excitement, and convenience to make your child’s special day
            unforgettable.
          </p>
          <p className="text-[#003466] text-[17px] md:text-xl font-medium">
            From action-packed adventures like Bowling and Bumper Cars to
            immersive Virtual Reality and endless Arcade Games, our venues offer
            a diverse range of attractions that promise endless fun for your
            child.
          </p>
        </div>

        {/* Static Image (No Slider) */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[400px] xl:h-[390px] border bg-[#c5c0c0] border-[#486179] shadow-[10px_10px_8px_rgba(0,0,0,0.3)]  overflow-hidden">
          <Image
            src="/assets/WhatBel1.jpg" // Replace with actual path
            alt="Birthday Celebration at Timezone"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover p-3"
          />
        </div>
      </div>
    </section>
  );
}
