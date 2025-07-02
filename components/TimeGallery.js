"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

const TimeGallery = () => {
  const pathname = usePathname();
  const isSliderEnabled = pathname.includes("/malad");

  const images = [
    { src: "/assets/Photogallery.webp", alt: "Gallery Image 1" },
    { src: "/assets/photogallery2.webp", alt: "Gallery Image 2" },
    { src: "/assets/Photogallery.webp", alt: "Gallery Image 3" },
    { src: "/assets/photogallery2.webp", alt: "Gallery Image 4" },
    { src: "/assets/Photogallery.webp", alt: "Gallery Image 5" },
    { src: "/assets/photogallery2.webp", alt: "Gallery Image 6" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isSliderEnabled || !isClient) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isSliderEnabled, isClient, currentSlide, images.length]);

  const handlePrev = () => {
    if (!isSliderEnabled) return;
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (!isSliderEnabled) return;
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  if (!isClient) {
    return (
      <div id="Timezone-Gallery">
        <div className="bg-[#003466] shadow-2xl mt-15 py-6">
          <h1 className="lg:text-3xl text-center text-white md:text-2xl text-xl font-bold">
            TIMEZONE GALLERY
          </h1>
        </div>
        <div className="relative w-full max-w-[1390px] mx-auto px-14">
          <div className="relative aspect-[23/9] w-full bg-gray-200 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div >
      {/* Header */}
      <div className="bg-[#003466] shadow-2xl mt-15 py-6" >
        <h1 className="lg:text-3xl text-center text-white md:text-2xl text-xl font-bold">
          TIMEZONE GALLERY
        </h1>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-[1390px] mx-auto px-1 md:px-4 mt-5 md:mt-13 overflow-hidden">
        <div className="relative aspect-[24/9] w-full overflow-hidden">
          {isSliderEnabled ? (
            <div className="w-full h-full relative">
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((slide, index) => (
                  <div
                    key={index}
                    className="min-w-full h-full relative"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-[10px] md:text-2xl bg-[#FAE361] bg-opacity-40 hover:bg-opacity-60 p-2 rounded-full z-30 transition-all duration-200"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-[10px] md:text-2xl bg-[#FAE361] bg-opacity-40 hover:bg-opacity-60 p-2 rounded-full z-30 transition-all duration-200"
              >
                <FaChevronRight />
              </button>
            </div>
          ) : (
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeGallery;
