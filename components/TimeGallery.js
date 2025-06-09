'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const TimeGallery = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) return null; // Prevent hydration mismatch

  const image = isMobile
    ? { src: "/assets/Photogallery.webp", alt: "Mobile Gallery Image" }
    : { src: "/assets/Photogallery.webp", alt: "Desktop Gallery Image" };

  return (
    <div>
      <div className="bg-[#003466] shadow-2xl mt-15 py-6">
        <h1 className="lg:text-3xl text-center text-white md:text-2xl text-xl font-bold">
          TIMEZONE GALLERY
        </h1>
      </div>

      <div className="relative w-full max-w-[1390px] mx-auto px-14 mt-10">
        <div className="relative h-[300px] xl:h-[500px] lg:h-[430px] md:h-[300px] w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={1820}
            height={1900}
            className="object-cover h-full w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default TimeGallery;
