import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#003a70]  text-white">
      <div className="w-full max-w-6xl px-1  mx-auto">
        <div className="relative w-36  h-12 sm:w-44 sm:h-14 md:w-52 md:h-16">
          <Image
            src="/assets/TzLogo.webp"
            alt="Timezone Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-3 px-4 md:px-8 flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-8">
        <div className="flex flex-col items-center w-full lg:w-auto">
          <span className="mb-2 font-semibold">Follow us</span>
          <div className="flex space-x-3">
            <a
              href="https://www.instagram.com/timezonegames/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="md:text-[24px] text-xl border border-white p-[2px] rounded cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/timezonegames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="md:text-[24px] text-xl border border-white p-[2px] rounded cursor-pointer" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvpF2I9MHjRyszwDuCkz4cg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="md:text-[24px] text-xl  border border-white p-[2px] rounded cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="hidden lg:block w-px bg-[#6B7F62] h-24"></div>

        <div className="flex flex-col items-center w-full lg:w-auto">
          <span className="font-semibold mb-2">Contact</span>
          <span className="text-sm">022 4095 4481</span>
        </div>

        <div className="hidden lg:block w-px bg-[#6B7F62] h-24"></div>

        <div className="flex flex-col items-center w-full lg:w-auto">
          <a className="font-semibold mb-2 hover:border-b hover:border-2-white" href ="https://www.timezonegames.com/en-in/terms-and-conditions/">Terms & Conditions</a>
          <a href="https://www.timezonegames.com/en-in/privacy-policy/" className="cursor-pointer text-sm hover:border-b hover:border-2-white">Privacy Policy</a>
          <a href="https://www.timezonegames.com/en-in/csr-policy/" className="hover:border-b hover:border-2-white text-sm">CSR Policy</a>
        </div>

        <div className="hidden lg:block w-px bg-[#6B7F62] h-24"></div>

        <div className="flex flex-col items-center w-full lg:w-auto">
          <a href="https://www.timezonegames.com/en-in/vendor-terms-of-business/" className="hover:border-b hover:border-2-white font-semibold mb-2">VENDOR TERMS OF BUSINESS</a>
          <a href="https://www.timezonegames.com/en-in/terms-of-use/" className="hover:border-b hover:border-2-white text-sm">Terms of Use</a>
          <a href="https://www.timezonegames.com/en-in/disclaimer/" className="hover:border-b hover:border-2-white text-sm">Disclaimer</a>
        </div>
      </div>

      <div className="bg-[#002b5c] text-center text-[#a1a7ae] text-[12px] py-2 md:text-base md:py-3">
        Copyright © 2025 Timezone All rights reserved.
      </div>
    </footer>
  );
}
