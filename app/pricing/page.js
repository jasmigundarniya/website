"use client";
import Select from "@/public/assets/svgs/Select";
import React, { useRef, useState } from "react";
import ProductModal from "../components/ProductModal";
import CountryModal from "../components/CountryModal";
import PrimaryLayout from "../layout/PrimaryLayout";

const page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [add, setAdd] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  return (
    <PrimaryLayout>
      <div className="bg-[#f3f6fe]  h-[calc(100vh-82.4px)] overflow-auto">
        <div className="container px-40 3xl:px-20 xl:px-5">
          <div className="heading font-normal text-[18px] xs:text-[18px] pb-[20px] flex gap-1">
            <p
              className={`${
                add === true ? "text-[#989BA8]" : "text-black text-[18px] "
              }`}
            >
              Local Pricing
            </p>
            {add == true && <p> / Add Local Pricing</p>}
          </div>

          {add == true ? (
            <div className="flex justify-center">
              <div className="flex flex-col gap-3 bg-white xs:p-5 p-10 rounded-lg border border-[#D6D7DC] w-[593px]">
                <div className="relative">
                  <div
                    onClick={() => setPricingOpen(true)}
                    className="cursor-pointer"
                  >
                    <p className="text-[#9297A6] text-[15px] mb-0.5">Product</p>
                    <div className="p-3 rounded-md flex items-center justify-between text-[#8D92A3] bg-gray-50 border border-gray-300 text-sm w-full">
                      Select Product <Select />
                    </div>
                  </div>
                  <ProductModal
                    isOpen={pricingOpen}
                    onClose={() => setPricingOpen(false)}
                  />
                </div>

                <div className="relative">
                  <div
                    onClick={() => setCountryOpen(true)}
                    className="cursor-pointer"
                  >
                    <p className="text-[#9297A6] text-[15px] mb-0.5">
                      Country*{" "}
                    </p>

                    <div className="p-3 rounded-md flex items-center justify-between text-[#8D92A3] bg-gray-50 border border-gray-300 text-sm w-full">
                      Select Country <Select />
                    </div>
                  </div>
                  <CountryModal
                    isOpen={countryOpen}
                    onClose={() => setCountryOpen(false)}
                  />
                </div>
                <div className="relative">
                  <div>
                    <p className="text-[#9297A6] text-[15px] mb-0.5">Price</p>

                    <div className="p-3 rounded-md flex items-center justify-between text-[#8D92A3] bg-gray-50 border border-gray-300 text-sm w-full">
                      $ <Select />
                    </div>
                  </div>
                </div>

                <div className="flex gap-5 mt-9">
                  <button className="text-[#0B79DA] border border-[#0B79DA] rounded-full w-full py-3 text-[16px] font-bold bg-white mt-4 my-2 px-5 flex justify-center items-center">
                    Cancel
                  </button>
                  <button className="bg-[#0B79DA] rounded-full w-full py-3 text-[16px] font-bold text-white mt-4 my-2 px-5 flex justify-center items-center">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="main-tab flex gap-4 flex-wrap lg:flex-col-reverse md:justify-end justify-between">
                <div className="left-div flex flex-wrap gap-4">
                  <div className="location-div lg:w-full flex">
                    <button
                      onClick={() => setActiveTab(1)}
                      type="button"
                      class={`px-6 py-3.5 lg:w-full rounded-l-md text-[18px] font-semibold ${
                        activeTab === 1
                          ? "text-white bg-[#0B79DA]"
                          : "text-[#0B79DA] border border-[#0B79DA] bg-white"
                      } `}
                    >
                      By Location
                    </button>

                    <button
                      onClick={() => setActiveTab(2)}
                      type="button"
                      class={`px-6  rounded-r-md  lg:w-full font-semibold text-[18px] ${
                        activeTab === 2
                          ? "text-white py-[15px] bg-[#0B79DA]"
                          : "text-[#0B79DA] py-[13px] border border-[#0B79DA] bg-white"
                      } `}
                    >
                      By Product
                    </button>
                  </div>

                  <div className="country lg:w-full text-[18px]">
                    <select
                      id="countries"
                      class="h-[58px] rounded-md lg:w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-[350px] pl-[15px]"
                    >
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>
                </div>

                <div
                  className="right-div flex items-end justify-end"
                  onClick={() => setAdd(true)}
                >
                  <button
                    type="button"
                    class="px-6 py-4 rounded-md  text-[18px] font-semibold  text-white bg-[#0B79DA]"
                  >
                    + Local Pricing
                  </button>
                </div>
              </div>

              {activeTab === 1 ? (
                <div className=" border-2 border-[#D6D7DC] rounded-lg mx-auto h-[201px] mt-[15px] bg-white">
                  <div className="cntr-1 border-b border-[#D6D7DC] h-[56px] flex justify-between ">
                    <div className="pl-[50px] font-normal text-[16px] flex items-center">
                      {" "}
                      OCC ( INDIA ){" "}
                    </div>
                    <div className="pr-[24px] font-normal text-[16px] text-[#1F263E80] flex items-center">
                      $0.3
                    </div>
                  </div>
                  <div className="cntr-1 border-b border-[#D6D7DC] h-[56px] flex justify-between ">
                    <div className="pl-[50px] font-normal text-[16px] flex items-center">
                      {" "}
                      SWL ( INDIA ){" "}
                    </div>
                    <div className="pr-[24px] font-normal text-[16px] text-[#1F263E80] flex items-center">
                      $0.3
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" border-2 border-[#D6D7DC] rounded-lg mx-auto h-[201px] mt-[15px] bg-white">
                  <div className="cntr-1 border-b border-[#D6D7DC] h-[56px] flex justify-between ">
                    <div className="pl-[50px] font-normal text-[16px] flex items-center">
                      {" "}
                      OCC ( INDIA ){" "}
                    </div>
                    <div className="pr-[24px] font-normal text-[16px] text-[#1F263E80] flex items-center">
                      $0.3
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default page;