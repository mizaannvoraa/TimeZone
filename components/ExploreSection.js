"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ExploreSection = ({ city }) => {
  const pathname = usePathname();

  // Detect if route contains /delhi or /malad
  const isDelhi = pathname.startsWith("/delhi");
  const isMalad = pathname.startsWith("/malad");
  const isPune = pathname.startsWith("/pune");

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
    pactag: ["₹1,500", "₹2,000",  "₹3,000"],
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

  const puneMalls = React.useMemo(
    () => ({
      smp: "Seasons Mall Pune",
      pmp: "Phoenix Marketcity Pune",
      pmm: "Phoenix Mall of the Millennium Pune",
    }),
    []
  );

  const punePrices = {
    smp: ["₹1,500", "₹2,000", ""],
    pmp: ["₹1,500", "₹2,000","₹3,000"],
    pmm: ["₹1,500", "₹2,000","₹3,000"],
  };

  // Malad specific pricing - only Classic and Premium
  const maladPrices = {
    malad: ["₹2,000", "₹3,000", ""], // Classic, Premium, Ultimate (empty)
  };

  // Function to get features based on location and package
  const getPackageFeatures = (packageIndex, selectedMall) => {
    // Base packages features
    const basePackages = [
      {
        title: "CLASSIC",
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
      },
      {
        title: "PREMIUM",
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
      },
      {
        title: "ULTIMATE",
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
      },
    ];

    // Special handling for Malad - completely different feature sets
    if (isMalad) {
      if (packageIndex === 0) { // Classic
        return [
          "60 mins of Play Time",
          "Unlimited Video and Ticket Games",
          "5 Prize Games",
          "1 Bowling",
          "1 Attraction Game",
          "1 Laser Tag",
          "1 Bumper Car",
          "1 Photo Booth Panther Revolution",
          "1,000 Power Tickets per Child",
          "3,000 Power Tickets for Birthday Child",
          "Dedicated Party Space - 90 mins",
          "Dedicated Party Host",
          "Power Card and Lanyard",
          "1 Individual Meal per child (Beverage & Main course)",
          "", // Empty placeholder for alignment
        ];
      } else if (packageIndex === 1) { // Premium
        return [
          "90 mins of Play Time",
          "Unlimited Video and Ticket Games",
          "10 Prize Games",
          "1 Bowling",
          "2 Attraction Games",
          "1 Laser Tag",
          "1 Bumper Car",
          "1 Photo Booth Panther Revolution",
          "2,500 Power Tickets per Child",
          "7,500 Power Ticket for Birthday Child",
          "Dedicated Party Space - 120 mins",
          "Dedicated Party Host",
          "Power Card and Lanyard",
          "1 Individual Meal per Child (Beverage, Starter & Main course)",
          "", // Empty placeholder for alignment
        ];
      }
    }

    let features = [...basePackages[packageIndex].features];

    // Special handling for Pacific Mall NIT Faridabad
    if (isDelhi && selectedMall === "pacnit") {
      if (packageIndex === 0) { // Classic
        features[1] = "3 Prize Games"; // Change from 5 to 3
        features[2] = "1 Attraction"; // Change from 2 to 1
        features[3] = "500 Power Tickets per Child"; // Change from 1000 to 500
        features[4] = "1,500 Power Tickets for Birthday Child"; // Change from 3000 to 1500
        features[5] = "Dedicated Party Space - 60 mins"; // Change from 90 to 60
      } else if (packageIndex === 1) { // Premium
        features[1] = "6 Prize Games"; // Change from 10 to 6
        features[2] = "2 Attractions"; // Change from 3 to 2
        features[3] = "1,000 Power Tickets per Child"; // Change from 1500 to 1000
        features[4] = "3,000 Power Tickets for Birthday Child"; // Change from 4500 to 3000
      }
    }

    // Determine if the current mall configuration has Ultimate package with meal
    const currentMallHasUltimateMeal = (isPune) || 
                                      (isDelhi && selectedMall === "pactag") || 
                                      (!isDelhi && !isPune && !isMalad && (selectedMall === "gtk" || selectedMall === "lp" || selectedMall === "krl"));

    // Add Individual Meal for Ultimate packages at specific malls
    if (packageIndex === 2) { // Ultimate package
      if ((isDelhi && selectedMall === "pactag") || // Pacific Mall Tagore Garden
          (!isDelhi && !isPune && !isMalad && (selectedMall === "gtk" || selectedMall === "lp"|| selectedMall === "krl"))) { // RCity Ghatkopar & Phoenix Lower Parel
        features.push("Individual Meal Included (Beverage & Main course)");
      }
    }

    // Add Individual Meal for Pune Ultimate packages
    if (isPune && packageIndex === 2) { // Ultimate package
      features.push("Individual Meal Included (Beverage & Main course)");
    }

    // Add empty placeholder line for Classic and Premium when Ultimate has meal (for proper alignment)
    if (currentMallHasUltimateMeal && packageIndex < 2) {
      features.push(""); // Empty line to match Ultimate package height
    }

    return features;
  };

  // Packages with dynamic features
  const packages = [
    {
      title: "CLASSIC",
      subtitle: "REMARKABLE BIRTHDAY PARTY PACKAGE",
      image: "/assets/pkimage.jpg",
      label: "Classic Remarkable Party",
    },
    {
      title: "PREMIUM",
      subtitle: "REMARKABLE BIRTHDAY PARTY PACKAGE",
      image: "/assets/pkimage.jpg",
      label: "Premium Remarkable Party",
    },
    {
      title: "ULTIMATE",
      subtitle: "BIRTHDAY PARTY PACKAGE",
      image: "/assets/pkimage.jpg",
      label: "Ultimate Remarkable Party",
    },
  ];

  // State for selected mall
  // Default to first key of current malls based on route
  const [selectedMall, setSelectedMall] = useState(() => {
    if (isMalad) return "malad";
    if (isDelhi) return Object.keys(delhiMalls)[0];
    if (isPune) return Object.keys(puneMalls)[0];
    return Object.keys(mumbaiMalls)[0];
  });

  useEffect(() => {
    if (isMalad) {
      setSelectedMall("malad");
    } else if (isDelhi) {
      setSelectedMall(Object.keys(delhiMalls)[0]);
    } else if (isPune) {
      setSelectedMall(Object.keys(puneMalls)[0]);
    } else {
      setSelectedMall(Object.keys(mumbaiMalls)[0]);
    }
  }, [isDelhi, isMalad, isPune, delhiMalls, mumbaiMalls, puneMalls]);

  const handleChange = (e) => {
    setSelectedMall(e.target.value);
  };

  // Decide malls and prices based on route
  const malls = isDelhi ? delhiMalls : isPune ? puneMalls : mumbaiMalls;

  const pricesByMall = isMalad
    ? maladPrices
    : isDelhi
    ? delhiPrices
    : isPune
    ? punePrices
    : mumbaiPrices;

  const visiblePackages = packages
    .map((pkg, index) => ({
      ...pkg,
      price: pricesByMall[selectedMall]?.[index] || "",
      features: getPackageFeatures(index, selectedMall),
    }))
    .filter((pkg) => pkg.price !== "");

  return (
    <div
  className={`${
    isMalad
      ? "md:h-[1050px] sm:h-[970px] h-[1710px] lg:h-[1010px]"
      : visiblePackages.length === 2
      ? "md:h-[870px] sm:h-[810px] h-[1420px] lg:h-[850px]"
      : "sm:h-[1460px] md:h-[1590px] h-[2045px] lg:h-[850px]"
  }`}
>

      <section className="bg-[#003466] md:h-[460px] lg:h-[390px] h-[430px] py-5 px-2 md:px-4" id="Birthday-Party-Packages">
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

          {/* Right Content - Dropdown or Mall Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            {isMalad ? (
              // For Malad route - show mall name instead of dropdown
              <div className="text-center">
                <h2 className="text-white text-[18px] sm:text-[20px] md:text-[25px] font-semibold">
                  Inorbit Mall Malad 
                </h2>
              </div>
            ) : (
              // For other routes - show dropdown
              <>
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
                  <div className="absolute inset-y-0 md:right-4 right-2 flex items-center pointer-events-none text-gray-500">
                    ▼
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10 max-w-7xl mx-auto px-1 md:px-4">
          {packages
            .map((pkg, index) => ({
              ...pkg,
              price: pricesByMall[selectedMall]?.[index] || "",
              features: getPackageFeatures(index, selectedMall),
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
                    <p className="text-[12px] font-medium md:text-sm">
                      {pkg.subtitle}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 space-y-1 md:space-y-2">
                  {pkg.features.map((feature, i) => (
                    <p key={i} className="text-sm leading-relaxed min-h-[16px]">
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
                  <button
                    onClick={() => {
                      const section = document.getElementById("form");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="mt-2 cursor-pointer md:px-6 px-3 py-1 md:py-2 bg-white text-[#002550] font-bold rounded-sm shadow-md hover:bg-gray-200 transition"
                  >
                    Enquire Now
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