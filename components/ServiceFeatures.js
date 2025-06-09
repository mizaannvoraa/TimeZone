import React from 'react';
import Image from 'next/image';

const ServiceFeatures = () => {
  const features = [
    {
      title: "ALL-INCLUSIVE PACKAGES",
      description: "Enjoy hassle-free planning with our all-inclusive birthday party packages.",
      image: "/assets/wychbel4.webp",
      bgColor: "bg-[#003466]"
    },
    {
      title: "EXCITING ATTRACTIONS",
      description: "From VR experiences to arcade games, we have something for every age. Every birthday party package includes",
      image: "/assets/wychbel3.webp",
      bgColor: "bg-[#003466]"
    },
    {
      title: "PROFESSIONAL HOSTS",
      description: "Our dedicated party hosts ensure everything runs smoothly.",
      image: "/assets/whychbel2.png",
      bgColor: "bg-[#003466]"
    },
    {
      title: "SAFE AND SECURE",
      description: "Safety is our top priority, ensuring a worry-free environment for you and the little ones.",
      image: "/assets/wychbel1.webp",
      bgColor: "bg-[#003466]"
    }
  ];

  return (
    <div className="w-full py-15 px-4 bg-gray-50 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col h-full shadow-xl">
              {/* Header Section */}
              <div className={`${feature.bgColor} text-white py-5 border-b-4 border-[#FAE361] px-15 text-center min-h-[40px] text-2xl flex items-center justify-center`}>
                <h3 className="text-lg font-semibold leading-tight">
                  {feature.title}
                </h3>
              </div>
              
              {/* Content Section */}
              <div className="bg-[#F2F2F2] flex-1 flex flex-col">
                {/* Text Content */}
                <div className="px-2 py-1 flex-1">
                  <p className="text-[#003466] font-medium text-base leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
                
                {/* Image Section */}
                <div className="px-6">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                     width={500}
                     height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
