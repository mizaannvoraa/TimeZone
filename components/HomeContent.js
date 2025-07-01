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
import Head from "next/head";
import EnquireNowButton from "./EnquireNowButton";

export default function HomeContent({ city = "delhi" }) {
  return (
    <>
     <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
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
      <EnquireNowButton/>
    </>
  );
}
