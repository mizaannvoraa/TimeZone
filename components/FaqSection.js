"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "WHAT TIME SHOULD I ARRIVE FOR THE PARTY?",
    answer:
      "We request that you and your guests arrive at least 15 minutes prior to your party start time. This will ensure that your party experience begins on time and that none of your guests miss out on any of the fun! All parties at Timezone commence on the hour.",
  },
  {
    question:
      "WHAT IS THE MINIMUM NUMBER OF GUESTS FOR A BIRTHDAY PARTY BOOKING?",
    answer:
      "There is a minimum 10 guests to enjoy the full experience of a birthday party with Timezone.",
  },
  {
    question: "WHAT IF I NEED TO CANCEL OR MAKE CHANGES TO MY PARTY?",
    answer:
      "If for any reason you need to make an amendment to your party, please get in touch with us by phone or email. If you need to cancel your party, we ask that you inform us at least five business days prior to the party to receive a refund of your deposit in your Timezone Powercard.",
  },
  {
    question: "WHAT DOES THE PARTY HOST DO?",
    answer: "Our party hosts are there to organise all the fun and entertain the guests during the party. While the party hosts will be with the kids for the duration of their party to guide activities, we recommend that parents, guardians to stay close by to supervise for the duration of the party. ",
  },
  {
    question: "HOW LONG IS A BIRTHDAY PARTY AT TIMEZONE?",
    answer: "Depending on the party package you have chosen, Timezone parties are approximately 3 hours from start to finish.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div id="faqs" className="bg-[#F2F2F2] border-b-4 py-2 md:py-4 border-[#FAE361]">
        <h2 className="text-center text-2xl lg:text-4xl font-black font-sans text-[#002f63] leading-tight">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>
      <section className="bg-[#003366] text-white py-7 md:py-15 px-4 mb-7 md:mb-15 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto  grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              <Image
                src="/assets/faqgirl.webp"
                alt="FAQ Person"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-6  w-full flex items-center justify-center">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[white] text-[#003366] text-[15px] md:text-[18px] rounded-lg overflow-hidden shadow-md"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between md:text-[18px] text-[14px] items-center px-2 md:px-4 py-[4px] md:py-3 font-bold text-left"
                  >
                    {faq.question}
                    <span className="text-white md:p-3 p-1 md:text-xl text-[14px] rounded-full bg-[#003366] cursor-pointer">
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  {openIndex === index && faq.answer && (
                    <div className="px-4 pb-4 text-sm md:text-[14px] text-[12px] text-[#003366]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
