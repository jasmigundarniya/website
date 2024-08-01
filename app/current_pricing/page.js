"use client"
import React, { useState } from 'react'
import PrimaryLayout from '../layout/PrimaryLayout'

const page = () => {
    const [activeTab, setActiveTab] = useState(1)
    return (
        <PrimaryLayout>
            <div className="bg-[#f3f6fe]  h-[calc(100vh-82.4px)] overflow-auto">
                <div className="container px-40 3xl:px-20 xl:px-5">
                    <div className="heading font-normal  text-[18px] pb-[30px]">
                        <p>Current Pricing</p>
                    </div>
                    <div>
                        <div className="main-tab flex justify-between">

                            <div className="left-div flex flex-wrap gap-4  md:w-full">

                                <div className="location-div flex md:w-full">

                                    <button onClick={() => setActiveTab(1)} type="button"
                                        class={`px-6 py-3.5 rounded-l-md md:w-full text-[18px] font-semibold ${activeTab === 1 ? "text-white bg-[#0B79DA]" : "text-[#0B79DA] border border-[#0B79DA] bg-white"} `}>By Location</button>

                                    <button onClick={() => setActiveTab(2)} type="button"
                                        class={`px-6 text-[18px] rounded-r-md md:w-full font-semibold ${activeTab === 2 ? "text-white py-[15px] bg-[#0B79DA]" : "text-[#0B79DA] py-[13px] border border-[#0B79DA] bg-white"} `}>By Product</button>

                                </div>

                                <div className="country md:w-full">

                                    <select id="countries" class="h-[54px] md:w-full rounded-md  bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-[350px] pl-[15px]">
                                        <option selected>Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                    </select>

                                </div>

                            </div>



                        </div>

                        {activeTab === 1 ?
                            <div class="relative mt-5">
                                <table class="w-full text-sm text-left rtl:text-right text-black border border-[#D6D7DC] rounded-md">
                                    <thead class="text-black font-bold text-[16px] md:text-[10px]  uppercase">
                                        <tr className='bg-white border-b border-[#D6D7DC]'>
                                            <th scope="col" class="px-6 py-4 uppercase">
                                                Product
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                PRICE(USD/MT)
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                LAST UPDATE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b border-[#D6D7DC]">
                                            <th scope="row" class="px-6 text-[16px] md:text-[10px]  py-4 font-medium text-gray-900 whitespace-nowrap">
                                                occ 90/10
                                            </th>
                                            <td class="px-6 py-4 flex items-center gap-2">
                                                __ <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <g clip-path="url(#clip0_136_6808)">
                                                        <path d="M17.2169 1.37335C16.2088 0.367087 14.5764 0.367087 13.5684 1.37335L12.6551 2.29164L2.93322 12.0084L2.91256 12.0292C2.90756 12.0342 2.90756 12.0395 2.90223 12.0395C2.8919 12.055 2.87641 12.0703 2.86624 12.0858C2.86624 12.091 2.86091 12.091 2.86091 12.0962C2.85058 12.1117 2.84558 12.122 2.83508 12.1375C2.83008 12.1427 2.83008 12.1477 2.82491 12.153C2.81975 12.1685 2.81458 12.1788 2.80926 12.1943C2.80926 12.1993 2.80425 12.1993 2.80425 12.2046L0.647262 18.6909C0.583987 18.8756 0.632089 19.0801 0.771067 19.2172C0.868724 19.3135 1.00044 19.3674 1.13748 19.367C1.19349 19.366 1.24902 19.3573 1.30261 19.3411L7.78391 17.179C7.78892 17.179 7.78892 17.179 7.79424 17.174C7.81055 17.1691 7.8262 17.1622 7.84057 17.1531C7.84461 17.1527 7.84816 17.1509 7.85106 17.1481C7.8664 17.1378 7.88706 17.1273 7.90255 17.117C7.91789 17.1068 7.93355 17.0913 7.94904 17.081C7.95421 17.0757 7.95921 17.0757 7.95921 17.0707C7.96454 17.0655 7.97487 17.0605 7.98003 17.05L18.6152 6.41483C19.6215 5.40679 19.6215 3.7744 18.6152 2.76652L17.2169 1.37335ZM7.61879 15.9663L4.0273 12.3749L13.0163 3.38587L16.6078 6.9772L7.61879 15.9663ZM3.52142 13.3295L6.65901 16.467L1.94762 18.0356L3.52142 13.3295ZM17.8877 5.69234L17.3407 6.24454L13.749 2.65289L14.3014 2.10085C14.9056 1.49715 15.8849 1.49715 16.4892 2.10085L17.8927 3.50435C18.4924 4.11127 18.4901 5.08832 17.8877 5.69234Z" fill="black" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_136_6808">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </td>
                                            <td class="px-6 py-4">
                                                __
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> :


                            <div class="relative  mt-5">
                                <table class="w-full text-sm text-left rtl:text-right text-black border border-[#D6D7DC] rounded-md">
                                    <thead class="text-black font-bold text-[16px] md:text-[10px] uppercase">
                                        <tr className='bg-white border-b border-[#D6D7DC]'>
                                            <th scope="col" class="px-6 py-4 uppercase">
                                                Country
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                PRICE(USD/MT)
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                LAST UPDATE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b border-[#D6D7DC]">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                USA
                                            </th>
                                            <td class="px-6 py-4 flex items-center gap-2">
                                                115 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <g clip-path="url(#clip0_136_6808)">
                                                        <path d="M17.2169 1.37335C16.2088 0.367087 14.5764 0.367087 13.5684 1.37335L12.6551 2.29164L2.93322 12.0084L2.91256 12.0292C2.90756 12.0342 2.90756 12.0395 2.90223 12.0395C2.8919 12.055 2.87641 12.0703 2.86624 12.0858C2.86624 12.091 2.86091 12.091 2.86091 12.0962C2.85058 12.1117 2.84558 12.122 2.83508 12.1375C2.83008 12.1427 2.83008 12.1477 2.82491 12.153C2.81975 12.1685 2.81458 12.1788 2.80926 12.1943C2.80926 12.1993 2.80425 12.1993 2.80425 12.2046L0.647262 18.6909C0.583987 18.8756 0.632089 19.0801 0.771067 19.2172C0.868724 19.3135 1.00044 19.3674 1.13748 19.367C1.19349 19.366 1.24902 19.3573 1.30261 19.3411L7.78391 17.179C7.78892 17.179 7.78892 17.179 7.79424 17.174C7.81055 17.1691 7.8262 17.1622 7.84057 17.1531C7.84461 17.1527 7.84816 17.1509 7.85106 17.1481C7.8664 17.1378 7.88706 17.1273 7.90255 17.117C7.91789 17.1068 7.93355 17.0913 7.94904 17.081C7.95421 17.0757 7.95921 17.0757 7.95921 17.0707C7.96454 17.0655 7.97487 17.0605 7.98003 17.05L18.6152 6.41483C19.6215 5.40679 19.6215 3.7744 18.6152 2.76652L17.2169 1.37335ZM7.61879 15.9663L4.0273 12.3749L13.0163 3.38587L16.6078 6.9772L7.61879 15.9663ZM3.52142 13.3295L6.65901 16.467L1.94762 18.0356L3.52142 13.3295ZM17.8877 5.69234L17.3407 6.24454L13.749 2.65289L14.3014 2.10085C14.9056 1.49715 15.8849 1.49715 16.4892 2.10085L17.8927 3.50435C18.4924 4.11127 18.4901 5.08832 17.8877 5.69234Z" fill="black" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_136_6808">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </td>
                                            <td class="px-6 py-4">
                                                a month ago
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        }
                    </div>
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default page
