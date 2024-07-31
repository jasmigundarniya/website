"use client"
import React, { useState } from 'react'

const page = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [add, setAdd] = useState(false)

    return (
        <div className='bg-[#f3f6fe]  h-[calc(100vh-82.4px)] overflow-auto'>
            <div className="container px-40 3xl:px-20 xl:px-5">

                <div className="heading font-normal text-[26px] xs:text-[18px] py-[20px] flex gap-1">
                    <p className={`${add === true ? "text-[#989BA8]" : "text-black"}`}>Local Pricing</p>
                    {add == true && <p> / Add Local Pricing</p>}
                </div>



                {add == true ?
                    <div className='flex justify-center'>
                        <div className='flex flex-col gap-3 bg-white xs:p-5 p-10 rounded-lg border border-[#D6D7DC] w-[593px]'>
                            <div>
                                <p className='text-[#9297A6] text-[15px] mb-0.5'>Product</p>
                                <select id="countries" class="p-3 rounded-md  bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full">
                                    <option selected disabled>Select Product</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                </select>
                            </div>
                            <div>
                                <p className='text-[#9297A6] text-[15px] mb-0.5'>Country* </p>
                                <select id="countries" class="p-3 rounded-md  bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full">
                                    <option selected disabled>Select Country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                </select>
                            </div>
                            <div>
                                <p className='text-[#9297A6] text-[15px] mb-0.5'>Price</p>
                                <select id="countries" class="p-3 rounded-md  bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full">
                                    <option selected disabled>$</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                </select>
                            </div>

                            <div className='flex gap-5 mt-9'>
                                <button className="text-[#0B79DA] border border-[#0B79DA] rounded-full w-full py-3 text-[16px] font-bold bg-white mt-4 my-2 px-5 flex justify-center items-center">
                                    Cancel
                                </button>
                                <button className="bg-[#0B79DA] rounded-full w-full py-3 text-[16px] font-bold text-white mt-4 my-2 px-5 flex justify-center items-center">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>

                    :
                    <div>
                        <div className="main-tab flex flex-wrap gap-4 justify-between">

                            <div className="left-div flex flex-wrap gap-4">

                                <div className="location-div flex">

                                    <button onClick={() => setActiveTab(1)} type="button"
                                        class={`px-6 py-3.5 rounded-l-md  font-semibold ${activeTab === 1 ? "text-white bg-[#0B79DA]" : "text-[#0B79DA] border border-[#0B79DA] bg-white"} `}>By Location</button>

                                    <button onClick={() => setActiveTab(2)} type="button"
                                        class={`px-6  rounded-r-md  font-semibold ${activeTab === 2 ? "text-white py-[15px] bg-[#0B79DA]" : "text-[#0B79DA] py-[13px] border border-[#0B79DA] bg-white"} `}>By Product</button>

                                </div>

                                <div className="country">

                                    <select id="countries" class="h-[54px] rounded-md  bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-[350px] pl-[15px] xl:w-auto">
                                        <option selected>Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                    </select>

                                </div>

                            </div>

                            <div className="right-div" onClick={() => setAdd(true)}>
                                <button type="button" class="px-6 py-4 rounded-md  font-semibold text-white bg-[#0B79DA]">+ Local Pricing</button>
                            </div>

                        </div>

                        {activeTab === 1 ?
                            <div className=' border-2 border-[#D6D7DC] rounded-lg mx-auto h-[201px] mt-[15px] bg-white' >
                                <div className="cntr-1 border-b border-[#D6D7DC] h-[56px] flex justify-between ">
                                    <div className="pl-[50px] font-normal text-[16px] flex items-center"> OCC ( INDIA )  </div>
                                    <div className="pr-[24px] font-normal text-[16px] text-[#1F263E80] flex items-center">$0.3</div>
                                </div>
                                <div className="cntr-1 border-b border-[#D6D7DC] h-[56px] flex justify-between ">
                                    <div className="pl-[50px] font-normal text-[16px] flex items-center"> SWL ( INDIA )  </div>
                                    <div className="pr-[24px] font-normal text-[16px] text-[#1F263E80] flex items-center">$0.3</div>
                                </div>
                            </div> :
                            <div className=' border-2 border-[#D6D7DC] rounded-lg mx-auto h-[201px] mt-[15px] bg-white' >
                                <div className="cntr-1 border-b border-[#D6D7DC] h-[56px] flex justify-between ">
                                    <div className="pl-[50px] font-normal text-[16px] flex items-center"> OCC ( INDIA )  </div>
                                    <div className="pr-[24px] font-normal text-[16px] text-[#1F263E80] flex items-center">$0.3</div>
                                </div>
                            </div>
                        }
                    </div>
                }


            </div>
        </div>
    )
}

export default page
