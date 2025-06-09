'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cards = [
  { img: '/assets/trial_bs_image.jpg', title: 'Dedicated Party Host' },
  { img: '/assets/trial_bs_image.jpg', title: 'Party Space and Decor' },
  { img: '/assets/trial_bs_image.jpg', title: 'Lanyards for All Birthday Kids' },
  { img: '/assets/trial_bs_image.jpg', title: 'Exciting Activities' },
  { img: '/assets/trial_bs_image.jpg', title: 'Pre-loaded Tickets' },
  { img: '/assets/trial_bs_image.jpg', title: 'Prize Shop Fun' },
];

export default function BirthdaySlider() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = cards.length;

  // Update visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards(); // initial run
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = totalCards - visibleCards;

  const next = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const cardWidthPercent = 100 / visibleCards;

  const getSlideStyle = () => ({
    transform: `translateX(-${cardWidthPercent * currentIndex}%)`,
    transition: 'transform 0.5s ease-in-out',
  });

  return (
    <div className="relative max-w-[1300px] mx-auto px-4 py-7 md:py-17 overflow-hidden">
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute z-10 top-1/2 -translate-y-1/2 left-0 bg-[#F9E360] cursor-pointer mx-1 hover:bg-yellow-500 md:p-3 p-2 rounded-full shadow"
      >
        <FaChevronLeft className="text-white text-lg" />
      </button>

      <button
        onClick={next}
        className="absolute z-10 top-1/2 -translate-y-1/2 right-0 bg-[#F9E360] cursor-pointer mx-1 hover:bg-yellow-500 md:p-3 p-2 rounded-full shadow"
      >
        <FaChevronRight className="text-white text-lg" />
      </button>

      {/* Slider Wrapper */}
      <div className="w-full max-w-6xl mx-auto overflow-hidden">
        <div className="flex" style={getSlideStyle()}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-4"
              style={{ width: `${cardWidthPercent}%` }}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative w-80 md:w-100 md:h-100 h-80">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
