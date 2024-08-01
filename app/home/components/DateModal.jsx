import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangeSelector = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return (
        <div>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
                className="w-full p-3 mb-4 text-[14px] rounded-full bg-[#F3F6FE] outline-none"
            />
        </div>
    );
};

const DataModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white rounded-lg shadow-xl w-[400px] md:w-full p-4">
                <div className="p-4">
                    <h2 className="text-[18px] font-semibold text-center">Select Date Range</h2>
                </div>
                <div className="p-4">
                    <DateRangeSelector />
                </div>
                <div className="flex justify-between gap-4 p-4">
                    <button
                        className="w-1/2 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                        onClick={onClose} >
                        Cancel
                    </button>
                    <button
                        className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={onClose} >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataModal;
