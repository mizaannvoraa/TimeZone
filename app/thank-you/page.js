"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const pathname = usePathname();

  // If it's home "/", link to "/"
  // Else, return to the same path (like "/delhi", "/mumbai")
  const backHref = pathname === "/" ? "/" : pathname;

  return (
    <div
      style={{ minHeight: "90vh" }}
      className="flex items-center justify-center bg-white text-black p-4"
    >
      <div className="text-center">
        <div className="bg-[#002F63] p-4 rounded-full w-16 h-16 mx-auto mb-6">
          <span className="text-white text-3xl font-bold">✔</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">You are all set!</h1>
        <p className="mb-2 text-lg font-medium">Greetings from TimeZone.</p>
        <p className="mb-6">
          Thank you for expressing interest. Our expert will contact you
          shortly.
        </p>
        <Link href={backHref} passHref>
          <div className="inline-block bg-[#002F63] hover:bg-[#4b5561] text-white font-semibold px-6 py-3 rounded-full cursor-pointer">
            ⬅ GO BACK
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
