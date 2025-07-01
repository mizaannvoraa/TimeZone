// EnquireNowButton.js
"use client";

import Link from "next/link";
import React, { useState } from "react";

const EnquireNowButton = ({ countryFromURL = "ae" }) => {
  return (
    <>
      {/* Desktop Button */}
      <Link href="#form">
        <button className="hidden md:flex font-sans fixed bottom-4 right-4 z-50 bg-[#034788] text-white font-semibold py-2 px-4 rounded-md items-center cursor-pointer shadow-lg hover:bg-[#4c6e8c] transition-all duration-300">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
            />
          </svg>
          Enquire Now
        </button>
        <div className="md:hidden font-sans fixed bottom-0 left-0 right-0 z-50 flex">
          <button className="flex-1  bg-[#003466] text-white py-[10px] flex justify-center items-center text-base font-semibold">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
              />
            </svg>
            Enquire Now
          </button>
        </div>
      </Link>
    </>
  );
};

export default EnquireNowButton;
