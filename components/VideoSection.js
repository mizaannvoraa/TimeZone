"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'

const videos = [
  {
    id: "QQa3sYzkx58",
    title: "Gaming Center Experience 1",
    thumbnail: "https://img.youtube.com/vi/QQa3sYzkx58/maxresdefault.jpg",
  },
  // {
  //   id: "LyNDwH4xDrk",
  //   title: "Gaming Center Experience 2",
  //   thumbnail: "https://img.youtube.com/vi/LyNDwH4xDrk/maxresdefault.jpg",
  // },
  // {
  //   id: "SVyrG2DBWu0",
  //   title: "Gaming Center Experience 3",
  //   thumbnail: "https://img.youtube.com/vi/SVyrG2DBWu0/maxresdefault.jpg",
  // },
  {
    id: "DxEn80SDc48",
    title: "Gaming Center Experience 4",
    thumbnail: "https://img.youtube.com/vi/DxEn80SDc48/maxresdefault.jpg",
  },
  {
    id: "p63KUGN2P_A",
    title: "Gaming Center Experience 5",
    thumbnail: "https://img.youtube.com/vi/p63KUGN2P_A/maxresdefault.jpg",
  },
  // {
  //   id: "QmUUIUJYwYQ",
  //   title: "Gaming Center Experience 6",
  //   thumbnail: "https://img.youtube.com/vi/QmUUIUJYwYQ/maxresdefault.jpg",
  // },
  // {
  //   id: "lYnEAGaX2TY",
  //   title: "Gaming Center Experience 7",
  //   thumbnail: "https://img.youtube.com/vi/lYnEAGaX2TY/maxresdefault.jpg",
  // },
]

const VISIBLE_COUNT = 3

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollIndex, setScrollIndex] = useState(0)
  const [isMainVideoLoaded, setIsMainVideoLoaded] = useState(false)

  const handlePrev = () => {
    if (scrollIndex > 0) {
      const newScrollIndex = scrollIndex - 1
      setScrollIndex(newScrollIndex)
      setActiveIndex(newScrollIndex)
      setIsMainVideoLoaded(false)
    }
  }

  const handleNext = () => {
    if (scrollIndex < videos.length - VISIBLE_COUNT) {
      const newScrollIndex = scrollIndex + 1
      setScrollIndex(newScrollIndex)
      setActiveIndex(newScrollIndex)
      setIsMainVideoLoaded(false)
    }
  }

  const handleThumbnailClick = (index) => {
    setActiveIndex(index)
    setIsMainVideoLoaded(false)
  }

  const loadMainVideo = () => {
    setIsMainVideoLoaded(true)
  }

  const visibleVideos = videos.slice(scrollIndex, scrollIndex + VISIBLE_COUNT)
  const canGoPrev = scrollIndex > 0
  const canGoNext = scrollIndex < videos.length - VISIBLE_COUNT

  return (
    <div className="w-full px-2 py-6 md:py-12 flex flex-col items-center bg-gray-50">
      {/* Main Video Player Facade */}
      <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl md:mb-10 mb-4">
        {!isMainVideoLoaded ? (
          <div
            className="relative w-full h-full cursor-pointer group"
            onClick={loadMainVideo}
          >
            <Image
              src={videos[activeIndex].thumbnail}
              alt={videos[activeIndex].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 768px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-[#FAE361] hover:bg-yellow-500 text-white rounded-full p-4 md:p-6 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <FaPlay className="h-8 w-8  md:h-10 md:w-10 text-white ml-1" />
              </div>
            </div>
           
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videos[activeIndex].id}?autoplay=1&rel=0&modestbranding=1`}
            title={videos[activeIndex].title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>

      {/* Thumbnails Slider */}
      <div className="relative flex items-center w-full max-w-6xl">
        {/* <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className={`absolute cursor-pointer left-0 z-10 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 ${
            canGoPrev
              ? "bg-[#FAE361] hover:bg-yellow-500 text-white hover:scale-110"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          aria-label="Previous videos"
        >
          <FaChevronLeft className="text-[13px] md:text-xl" />
        </button> */}

        <div className="flex overflow-hidden w-full mx-0 md:mx-12">
          <div className="flex gap-[6px] md:gap-4 md:p-2 p-1 w-full">
            {visibleVideos.map((video, index) => {
              const actualIndex = scrollIndex + index

              return (
                <div
                  key={video.id}
                  className={`relative flex-1 aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105`}
                  
                  onClick={() => handleThumbnailClick(actualIndex)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 300px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0  bg-opacity-20 hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-[#FAE361] hover:bg-yellow-500 text-white rounded-full p-[6px] md:p-3 shadow-md transform hover:scale-110 transition-all duration-300">
                      <FaPlay className="h-2 w-2  md:h-5 md:w-5 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`absolute right-0 z-10 p-2 cursor-pointer md:p-3 rounded-full shadow-lg transition-all duration-300 ${
            canGoNext
              ? "bg-[#FAE361] hover:bg-yellow-500 text-white hover:scale-110"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          aria-label="Next videos"
        >
          <FaChevronRight className="text-[13px] md:text-xl" />
        </button> */}
      </div>
    </div>
  )
}

export default VideoSection
