import React, { useState } from 'react';
import Card from './Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid } from 'recharts';

const CustomXAxisTick = ({ x, y, payload }) => (
    <text
        x={x}
        y={y + 10} // Adjust vertical position of the tick label
        textAnchor="middle"
        fill="#000000" // Custom color
        fontSize={14} // Custom font size
        fontWeight="bold"
    >
        {payload.value}
    </text>
);

export const RationChartCard = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownVal, setDropdownVal] = useState("all")

    const data = [
        { name: 'Supply 6PIC', value: 75 },
        { name: 'Demand 6SIC', value: 134 },
    ];

    const customTicks = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135];

    const dropdownOption = ["all", "manish", "yogesh", "govind", "pallav", "VIVIIVPASATH"]

    const closeDropdown = (e) => {
        setIsDropdownOpen(false)
        setDropdownVal(e)
    }
    return (
        <Card>
            <div className='flex justify-between items-center'>
                <h2 className="text-[16px] font-bold uppercase">Supply - Demand Ratio</h2>
                <div className="relative">
                    <button
                        type="button"
                        className="text-[#1F263E] text-[16px] uppercase bg-[#F3F6FE]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        {dropdownVal}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div
                            className="absolute right-0 z-10 bg-white text-black divide-y divide-gray-100 rounded-lg shadow w-44 "
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                {
                                    dropdownOption.map((val) => {
                                        return <li>
                                            <a onClick={() => closeDropdown(val)} className={` ${val === dropdownVal && "bg-[#F3F6FE]"} block px-4 py-2 hover:bg-[#F3F6FE]  text-black uppercase`}>{val}</a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    )}
                    {isDropdownOpen && (
                        <div className="absolute bottom-full right-0 mb-2 p-2 text-sm bg-gray-800 text-white rounded">
                            Dropdown menu
                        </div>
                    )}
                </div>
            </div>
            <div className='ps-2'>
                <BarChart width={450} height={150} data={data} layout="vertical">
                    <XAxis
                        type="number"
                        tick={<CustomXAxisTick />} // Apply custom tick component
                        tickLine={false} // Remove default tick lines if needed
                        axisLine={{ stroke: '#D1D5DB', strokeWidth: 2, strokeDasharray: '5 6' }}
                        ticks={customTicks} // Set custom tick values
                        // label={{
                        //     value: 'Number of Offers',
                        //     position: 'insideBottomCenter', // Position label in the center
                        //     offset: 0, // Adjust offset to position label
                        //     fill: '#000',
                        //     fontSize: 14,
                        //     fontWeight: 'bold',
                        //     textAnchor: 'middle' // Center the text horizontally
                        // }}
                    />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                    <Bar dataKey="value" fill="#0B79DA" radius={[5, 5, 5, 5]} />
                </BarChart>
            </div>
        </Card>
    );
};
