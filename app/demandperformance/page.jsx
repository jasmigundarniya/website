"use client";

import React, { useState } from "react";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";
import "../styles.css";

function AccordionItem({ heading, content, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-heading">
        <button
          className="accordion-button w-full"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={onClick}
        >
          {heading}
        </button>
      </h2>
      <div className={`accordion-content ${isOpen ? "active" : ""}`}>
        {content}
      </div>
    </div>
  );
}

export default function SupplyPerformance() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = Array.from({ length: 10 }, (_, index) => ({
    heading: (
      <div
        className={`py-2.5 px-10 flex items-center justify-between ${
          openIndex === index ? "bg-[#F3F6FE]" : ""
        } border-b border-[#0000001A] w-full`}
      >
        <div className="uppercase text-black text-sm font-medium w-full text-start text-[16px]">
          ASHUl {index + 1}
        </div>
        <div className="text-black text-sm font-medium w-full text-center text-[16px]">
          {2 + index}
        </div>
        <div className="text-black text-sm font-medium w-full text-center text-[16px]">
          0
        </div>
        <div className="flex items-center justify-center text-sm font-medium w-full text-center text-[16px]">
          <div className="text-white text-sm font-medium text-center bg-[#F44236] h-7 w-7 flex items-center justify-center">
            0
          </div>
        </div>
        <div className="text-black text-sm font-medium w-full text-end text-[16px]">
          2
        </div>
        <div className="w-full flex items-center justify-end">
          {openIndex === index ? (
            <CiSquareChevUp className="text-3xl text-[#00000080]" />
          ) : (
            <CiSquareChevDown className="text-3xl text-[#00000080]" />
          )}
        </div>
      </div>
    ),
    content: (
      <div className={`border-b border-[#0000001A] w-full`}>
        <div className="bg-[#B2B2B2] w-full px-10 py-3">Active</div>

        <div className="px-10">
          <div className="flex items-center justify-between w-full py-3">
            <div className="gap-3 text-black text-sm font-medium w-full italic text-[16px]">
              HMP, United Kingdom
            </div>
            <div className="w-full"></div>
            <div className="w-full"></div>
            <div className="w-full"></div>
            <div className="text-black text-sm font-medium w-full text-end text-[16px]">
              {240.0 + index * 10} MT
            </div>
            <div className="w-full"></div>
          </div>

          <div className="flex items-center justify-between w-full py-3">
            <div className="flex gap-3 text-black text-sm font-medium w-full italic text-[16px]">
              BBC, United Kingdom
            </div>
            <div className="w-full"></div>
            <div className="w-full"></div>
            <div className="w-full"></div>
            <div className="text-black text-sm font-medium w-full text-end text-[16px]">
              {96.0 + index * 5} MT
            </div>
            <div className="w-full"></div>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="py-6 px-36 bg-[#F3F6FE]">
      <div className="text-[#989BA8] text-[26px]">
        Home<span className="text-black">/ Demand Performance</span>
      </div>

      <div className="mt-5 bg-white rounded-lg border border-[#D6D7DC]">
        <div className="py-4 px-10 flex items-center justify-between border-b border-[#0000001A]">
          <div className="uppercase text-black text-sm font-bold w-full text-[16px]">
            In charge
          </div>
          <div className="uppercase text-black text-sm font-bold w-full text-center text-[16px]">
            Active
          </div>
          <div className="uppercase text-black text-sm font-bold w-full text-center text-[16px]">
            Expired
          </div>
          <div className="uppercase text-black text-sm font-bold w-full text-center text-[16px]">
            MIH
          </div>
          <div className="uppercase text-black text-sm font-bold w-full text-end text-[16px]">
            Total
          </div>
          <div className="w-full"></div>
        </div>
        <div className="w-full">
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="w-full"
          >
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                heading={item.heading}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
