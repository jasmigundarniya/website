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

export default function SupplyDetails() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = Array.from({ length: 10 }, (_, index) => ({
    heading: (
      <div
        className={`py-3 px-10 flex items-center justify-between ${
          openIndex === index ? "bg-[#F3F6FE]" : ""
        } border-b border-[#0000001A] w-full`}
      >
        <div className="uppercase text-black text-sm font-medium w-full text-start text-[16px]">
          ASHUl {index + 1}
        </div>
        <div className="uppercase text-black text-sm font-medium w-full text-center text-[16px]">
          {2 + index}
        </div>
        <div className="uppercase text-black text-sm font-medium w-full text-center text-[16px]">
          {240.0 + index * 10}
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
      <div className={`px-10 border-b border-[#0000001A] w-full`}>
        <div className="flex items-center justify-between w-full border-b border-[#1F263E36] border-dashed py-3">
          <div className="uppercase flex gap-3 text-black text-sm font-medium w-full text-[16px] italic">
            HMP, GB
            <span>
              W $ <span className="text-[#30375080] text-[16px]">161.0</span>
            </span>
            <span>
              S $ <span className="text-[#30375080] text-[16px]">154.0</span>
            </span>
          </div>
          <div className="w-full"></div>
          <div className="uppercase text-black text-sm font-medium w-full text-center text-[16px]">
            {240.0 + index * 10}
          </div>
          <div className="w-full"></div>
        </div>

        <div className="flex items-center justify-between w-full py-3">
          <div className="uppercase flex gap-3 text-black text-sm font-medium w-full text-[16px] italic">
            BBC, GB
            <span>
              W $ <span className="text-[#30375080] text-[16px]">0.0</span>
            </span>
            <span>
              S $ <span className="text-[#30375080] text-[16px]">174.0</span>
            </span>
          </div>
          <div className="w-full"></div>
          <div className="uppercase text-black text-sm font-medium w-full text-center text-[16px]">
            {96.0 + index * 5}
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="py-6 px-36 bg-[#F3F6FE]">
      <div className="text-[#989BA8] text-[26px]">
        Home<span className="text-black">/ Supply Details</span>
      </div>

      <div className="mt-5 bg-white rounded-lg border border-[#D6D7DC]">
        <div className="py-4 px-10 flex items-center justify-between border-b border-[#0000001A]">
          <div className="uppercase text-black text-sm font-bold w-full text-[16px]">
            In charge
          </div>
          <div className="uppercase text-black text-sm font-bold w-full text-center text-[16px]">
            Offer
          </div>
          <div className="uppercase text-black text-sm font-bold w-full text-center text-[16px]">
            Quantity (MT)
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
