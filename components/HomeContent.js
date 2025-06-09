'use client'
import BannerSlider from "@/components/BannerSlider";
import ExploreSection from "@/components/ExploreSection";
import FaqSection from "@/components/FaqSection";
import ServiceFeatures from "@/components/ServiceFeatures";
import TimeGallery from "@/components/TimeGallery";
import VideoGallery from "@/components/VideoSection";
import WhatcanBelowSec from "@/components/WhatcanBelowSec";
import WhatCanSection from "@/components/WhatCanSection";
import WhyChoose from "@/components/WhyChoose";
import WhyTimezoneSection from "@/components/WhyTimezoneSection";

export default function HomeContent({ city = "delhi" }) {
  return (
    <>
    <BannerSlider/>
      <WhyTimezoneSection/>
      <VideoGallery/>
      <ExploreSection city={city}/>
      <WhatCanSection/>
      <WhatcanBelowSec/>
      <TimeGallery/>
       <WhyChoose/>
      <ServiceFeatures/>
      <FaqSection/>
    </>
  );
}
