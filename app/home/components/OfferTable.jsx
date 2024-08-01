import React from 'react';

const OfferTable = () => {
    const dataTable = [
        { name: "CUP STOCK", country: "Spain", city: "REMAPA", weight: "100.0 MT", product: "CIF", time: "7 Hours ago" },
        { name: "CUP STOCK", country: "Spain", city: "REMAPA", weight: "100.0 MT", product: "CIF", time: "7 Hours ago" },
        { name: "CUP STOCK", country: "Spain", city: "REMAPA", weight: "100.0 MT", product: "CIF", time: "7 Hours ago" },
        { name: "CUP STOCK", country: "Spain", city: "REMAPA", weight: "100.0 MT", product: "CIF", time: "7 Hours ago" },
        { name: "CUP STOCK", country: "Spain", city: "REMAPA", weight: "100.0 MT", product: "CIF", time: "7 Hours ago" },
        { name: "CUP STOCK", country: "Spain", city: "REMAPA", weight: "100.0 MT", product: "CIF", time: "7 Hours ago" },
        { name: "CUP STOCK", country: "Spain", city: "REMAPA", weight: "100.0 MT", product: "CIF", time: "7 Hours ago" },
    ];

    const columns = ["name", "country", "city", "weight", "product", "time"];

    return (
        <>
            <div className='mt-5 flex justify-between'>
                <h2 className="text-[16px] font-bold uppercase">Current Offer</h2>
                <div className="font-source-sans-pro text-[14px] font-normal leading-[17.6px] text-center underline">
                    View All Demand
                </div>
            </div>
            <div className='mt-3'>
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-white">
                        <thead className="text-xs text-white uppercase bg-[#444F63]">
                            <tr>
                                {columns.map((col) => (
                                    <th scope="col" className="px-6 py-3 text-[16px] table-col" key={col}>
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.map((val, index) => (
                                <tr key={index} className="bg-[#444F63] border-b border-gray-600">
                                    <th scope="row" className="px-6 py-4 font-bold text-[16px] text-white whitespace-nowrap">
                                        {val.name}
                                    </th>
                                    <td className="px-6 py-4 font-bold text-[16px] table-col">
                                        {val.country}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-[16px] table-col">
                                        {val.city}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-[16px] table-col">
                                        {val.weight}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-[16px] table-col">
                                        {val.product}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-[16px] table-col">
                                        {val.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default OfferTable;
