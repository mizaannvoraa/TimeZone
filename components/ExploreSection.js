"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ExploreSection = ({ city }) => {
  const pathname = usePathname();

  // Detect if route contains /delhi
  const isDelhi = pathname.startsWith("/delhi");

  // Delhi malls and prices
  const delhiMalls = React.useMemo(
    () => ({
      ambgur: "Ambience Mall Gurgaon",
      ambvas: "Ambience Mall Vasant Kunj",
      gaur: "Gaur City Mall Noida",
      mgf: "MGF Metropolitan Mall Gurgaon",
      pacnit: "Pacific Mall NIT Faridabad",
      pactag: "Pacific Mall Tagore Garden",
      vegas: "Vegas Mall Delhi",
    }),
    []
  );

  const delhiPrices = {
    ambgur: ["₹1,500", "₹2,000", "₹3,000"],
    ambvas: ["₹1,750", "₹2,250", "₹3,500"],
    gaur: ["₹1,500", "₹2,000", ""],
    mgf: ["₹1,500", "₹2,000", ""],
    pacnit: ["₹1,200", "₹1,750", ""],
    pactag: ["₹1,500", "₹2,000", ""],
    vegas: ["₹1,500", "₹2,000", ""],
  };

  // Mumbai malls and prices (existing)
  const mumbaiMalls = React.useMemo(
    () => ({
      gtk: "RCity Mall Ghatkopar Mumbai",
      lp: "Phoenix Palladium Mall Lower Parel Mumbai",
      vsh: "Inorbit Mall Vashi Navi Mumbai",
      rml: "R Mall Thane Mumbai",
      krl: "Phoenix MarketCity Mall - Level 1",
      xpe: "Xperia Mall Dombivli Mumbai",
    }),
    []
  );

  const mumbaiPrices = {
    vsh: ["₹1,500", "₹2,000", ""],
    lp: ["₹1,500", "₹2,000", "₹3,000"],
    rml: ["₹1,500", "₹2,000", ""],
    gtk: ["₹1,500", "₹2,000", "₹3,000"],
    krl: ["₹1,500", "₹2,000", "₹3,000"],
    xpe: ["₹1,500", "₹2,000", ""],
  };

  // Packages remain the same
  const packages = [
    {
      title: "CLASSIC",
      subtitle: "REMARKABLE BIRTHDAY PARTY PACKAGE",
      image: "/assets/cardim1.jpg",
      features: [
        "60 minutes unlimited Video and ticket games",
        "5 Prize Games",
        "2 Attractions",
        "1,000 Power Tickets per Child",
        "3,000 Power Tickets for Birthday Child",
        "Dedicated Party Space - 90 mins",
        "Dedicated Party Host",
        "Power Card and Lanyard",
      ],
      label: "Classic Remarkable Party",
    },
    {
      title: "PREMIUM",
      subtitle: "REMARKABLE BIRTHDAY PARTY PACKAGE",
      image: "/assets/cardim2.jpg",
      features: [
        "90 minutes unlimited Video and ticket games",
        "10 Prize Games",
        "3 Attractions",
        "1,500 Power Tickets per Child",
        "4,500 Power Tickets for Birthday Child",
        "Dedicated Party Space - 120 mins",
        "Dedicated Party Host",
        "Power Card and Lanyard",
      ],
      label: "Premium Remarkable Party",
    },
    {
      title: "ULTIMATE",
      subtitle: "BIRTHDAY PARTY PACKAGE",
      image: "/assets/cardim3.jpg",
      features: [
        "90 minutes unlimited Video and ticket games",
        "15 Prize Games",
        "5 Attractions",
        "2,000 Power Tickets per Child",
        "6,000 Power Tickets for Birthday Child",
        "Dedicated Party Space - 120 mins",
        "Dedicated Party Host",
        "Power Card and Lanyard",
      ],
      label: "Ultimate Remarkable Party",
    },
  ];

  // State for selected mall
  // Default to first key of current malls based on route
  const [selectedMall, setSelectedMall] = useState(() =>
    isDelhi ? Object.keys(delhiMalls)[0] : Object.keys(mumbaiMalls)[0]
  );

  useEffect(() => {
    setSelectedMall(
      isDelhi ? Object.keys(delhiMalls)[0] : Object.keys(mumbaiMalls)[0]
    );
  }, [isDelhi, delhiMalls, mumbaiMalls]);

  const handleChange = (e) => {
    setSelectedMall(e.target.value);
  };

  // Decide malls and prices based on route
  const malls = isDelhi ? delhiMalls : mumbaiMalls;
  const pricesByMall = isDelhi ? delhiPrices : mumbaiPrices;
const visiblePackages = packages
  .map((pkg, index) => ({
    ...pkg,
    price: pricesByMall[selectedMall]?.[index] || "",
  }))
  .filter((pkg) => pkg.price !== "");

  return (  
   <div className={`${
  visiblePackages.length === 2
    ? " md:h-[880px] h-[1400px]"
    : "sm:h-[1360px] md:h-[1480px] h-[1943px]"
} lg:h-[800px]  `}>

      <section className="bg-[#003466] md:h-[460px] lg:h-[390px] h-[430px] py-5 px-2 md:px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-start text-center font-black text-white uppercase leading-[25px] md:leading-[35px]">
              Explore Our Birthday <br /> Party Packages
            </h1>
            <p className="text-white lg:text-start text-center mt-2 text-[12px] sm:text-[15px]">
              Timezone offers a range of birthday party packages tailored to
              suit various preferences and budgets, ensuring there&apos;s a
              perfect option for every celebration.
            </p>
          </div>

          {/* Right Dropdown */}
          <div className="w-full lg:w-1/2 flex flex-col items-center  justify-center">
            <label
              htmlFor="mallSelect"
              className="block text-white text-[16px] sm:text-[18px] font-semibold mb-2"
            >
              Please Select a Mall:
            </label>
            <div className="relative">
              <select
                id="mallSelect"
                value={selectedMall}
                onChange={handleChange}
                className="appearance-none w-full bg-white text-gray-900 md:text-base text-[15px] md:px-4 px-2 py-[6px] md:py-3 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(malls).map(([key, name]) => (
                  <option key={key} value={key}>
                    {name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 md:right-4 right-2  flex items-center pointer-events-none text-gray-500">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10 max-w-7xl mx-auto px-1 md:px-4">
          {packages
            .map((pkg, index) => ({
              ...pkg,
              price: pricesByMall[selectedMall]?.[index] || "",
              isDisabled: !pricesByMall[selectedMall]?.[index],
              index,
            }))
            .filter((pkg) => pkg.price !== "") // Only render cards with a price
            .map((pkg) => (
              <div
                key={`${selectedMall}-${pkg.index}`}
                className={`bg-[#003466] rounded-lg overflow-hidden shadow-xl transform transition-all text-white duration-300 flex flex-col ${
                  pkg.isDisabled
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "md:hover:scale-105 hover:shadow-2xl"
                }`}
              >
                <div className="relative w-full h-[180px] clip-slant">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4">
                    <h2 className="md:text-3xl text-2xl font-extrabold">
                      {pkg.title}
                    </h2>
                    <p className="text-[12px] font-medium md:text-sm">{pkg.subtitle}</p>
                  </div>
                </div>

                <div className="px-4 py-3 space-y-1 md:space-y-2">
                  {pkg.features.map((feature, i) => (
                    <p key={i} className="text-sm leading-relaxed">
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="w-full max-w-[90%] mx-auto bg-gray-400 h-[1px]"></div>

                <div className="text-center py-2 md:py-4">
                  <p className="font-medium md:text-xl text-base">
                    {pkg.label}
                  </p>
                  <p className="md:text-4xl text-3xl font-black">{pkg.price}</p>
                  <button onClick={() => {
    const section = document.getElementById("form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }} className="mt-2 cursor-pointer md:px-6 px-3 py-1 md:py-2 bg-white text-[#002550] font-bold rounded-sm shadow-md hover:bg-gray-200 transition">
                    Book Online
                  </button>
                </div>
              </div>
            ))}
        </div>

        <style jsx>{`
          .clip-slant {
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
          }
        `}</style>
      </section>
    </div>
  );
};

export default ExploreSection;
