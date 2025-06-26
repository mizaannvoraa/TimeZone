"use client"; // Only for App Router (remove if using Pages Router)

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#002f63] text-white shadow-xl">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with Link */}
        <Link href="/" passHref>
          <div className="relative w-36 h-12 sm:w-44 sm:h-14 md:w-52 md:h-16">
            <Image
              src="/assets/TzLogo.webp"
              alt="Timezone Logo"
              fill
              sizes="(min-width: 768px) 208px, (min-width: 640px) 176px, 144px"
              className="object-contain"
              priority
            />
          </div>
        </Link>
        {/* Menu Items */}
        <div className="flex space-x-6">
          {[{ label: "FAQs", href: "#faqs" }].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex flex-col items-center text-xs text-white hover:text-yellow-400 transition"
            >
              <div className="bg-white border-2 border-yellow-400 rounded-full w-8 h-8 flex items-center justify-center mb-1">
                <span className="text-black">👤</span>
              </div>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
