import Search from '@/public/assets/svgs/Search';
import Tick from '@/public/assets/svgs/Tick';
import React, { useState } from 'react';

const CountryModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-[1px]" onClick={onClose}></div>
            <div className="absolute bg-white rounded-lg shadow-lg border border-gray-300  w-[511px] md:w-full top-[80px] left-0 z-10"
            >
                <div className="bg-white rounded-lg w-full">
                    <div className="p-4 border-b relative">
                        <h2 className="text-[18px] font-semibold text-center">Select Country</h2>
                        {/* <button className="text-gray-500 hover:text-gray-700 float-right absolute right-5 top-5" onClick={onClose}>X</button> */}
                    </div>
                    <div className="p-4">
                        <div className='relative'>
                            <div className='absolute left-4 top-4'>
                                <Search />
                            </div>
                            <input
                                type="text"
                                placeholder="Search Country"
                                className="w-full p-3 ps-10 mb-4 text-[14px] rounded-full bg-[#F3F6FE] outline-none"
                            />
                        </div>
                        <ul className="max-h-96 overflow-y-auto sidescroll">
                            <li className="p-4 text-[14px] text-[#0A79D9] cursor-pointer flex items-center gap-2 border-b border-[#D6D7DC]">
                                <Tick />  Afghanistan
                            </li>
                            {['Aland Island', 'Albania', 'Algeria', 'American Samoa', 'Andorra'].map((country, index) => (
                                <li key={index} className="p-4 text-[14px] cursor-pointer flex items-center gap-2 border-b border-[#D6D7DC] ps-10">
                                    {country}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default CountryModal;
