import React, { useState } from 'react'
import Card from './Card'
import DrafIcon from '@/public/assets/svgs/DrafIcon';
import BackArrow from '@/public/assets/svgs/BackArrow';
import FilterIcon from '@/public/assets/svgs/filterIcon';

const SupplyOverViewCard = () => {


    const [selectedBtn, setSelectedBtn] = useState("supply");

    const toogleSelectedBtn = (val) => {
        setSelectedBtn(val)
    }

    const isSupplyBtnSelelct = selectedBtn === "supply"
    const selectedBtnClassName = "px-4 py-2 text-sm font-medium text-white bg-[#0B79DA] border border-[#0B79DA]  hover:bg-[#095A9E] focus:z-10 focus:ring-2 focus:ring-[#0B79DA]"
    const unSelectedBtnClassName = "px-4 py-2 text-sm font-medium text-[#0B79DA] bg-white border border-[#0B79DA]  hover:bg-[#095A9E] hover:text-white focus:z-10 focus:ring-2 focus:ring-[#0B79DA] focus:text-white "

    const clientName = isSupplyBtnSelelct ? 'Isha Malhotra' : 'Manish Goyal'
    const cardTitleName = isSupplyBtnSelelct ? 'Material unsold' : 'My Supply Overview'

    return (<Card>
        <div className='flex justify-between items-center'>
            <h2 className="text-[16px] font-bold uppercase">My Supply Overview</h2>
            <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" className={`rounded-s-lg ${isSupplyBtnSelelct ? selectedBtnClassName : unSelectedBtnClassName}`} onClick={() => toogleSelectedBtn('supply')}>
                    Supply
                </button>
                <button type="button" className={`rounded-e-lg ${!isSupplyBtnSelelct ? selectedBtnClassName : unSelectedBtnClassName}`} onClick={() => toogleSelectedBtn('demand')}>
                    Demand
                </button>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <div class="gap-4 w-2/4">
                <Card>
                    <div className='flex justify-between'>
                        <div className="flex flex-col items-center justify-center">
                            <button className='px-4 py-2 font-medium bg-[#23B471] rounded-lg'>2</button>
                            <p className="mt-2 text-[#0B79DA]">&lt; 24 hrs</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button className='px-4 py-2 font-medium bg-[#EFA400] rounded-lg'>0</button>
                            <p className="mt-2 text-[#0B79DA]">24 - 28 hrs</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button className='px-4 py-2 font-medium bg-[#C05A18] rounded-lg'>1</button>
                            <p className="mt-2 text-[#0B79DA]">Offer Expiring</p>
                        </div>
                    </div>
                </Card>
                <div className='pt-4'>
                    <Card>
                        <div className='flex justify-between items-center'>
                            <h2 className="text-[16px] font-bold uppercase">{cardTitleName}</h2>
                            <FilterIcon />
                        </div>
                        <hr className="border-t border-gray-300 my-4" />
                        {isSupplyBtnSelelct && <div className={`flex mx-3 py-3`}>
                            <div className="flex flex-col me-5 ">
                                <p className='font-bold text-[#0B79DA]'>13645.0 MT</p>
                                <p className="mt-1 text-[#30375080] font-bold">Org</p>
                            </div>
                            <div className="flex flex-col">
                                <p className='font-bold text-[#0B79DA]'>8280.0 MT</p>
                                <p className="mt-1 text-[#30375080] font-bold">Our Deals</p>
                            </div>
                        </div>}
                        <div className='flex justify-between items-center'>
                            <h1 className="text-[14px] font-bold">Higest No. of active offers</h1>
                            <div>3</div>
                        </div>
                        <div className="text-[14px] text-[#30375080]">
                            {clientName}
                        </div>
                    </Card>
                </div>
            </div>
            <div class="gap-4 w-2/4">
                {isSupplyBtnSelelct &&
                    <div className='mb-4'>
                        <Card>
                            <div className='flex justify-between items-center py-3'>
                                <div className='flex items-center'>
                                    <DrafIcon />
                                    <h2 className="text-[16px] font-bold ms-2">Draft(05)</h2>
                                </div>
                                <BackArrow />
                            </div>
                        </Card>
                    </div>
                }
                <Card>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-[16px] font-bold uppercase">Demand In Hand</h2>
                        <FilterIcon />
                    </div>
                    <hr className={`border-t border-gray-300 my-4 ${!isSupplyBtnSelelct && "mt-5 mb-5"}`} />
                    <div className='flex gap-3 pt-4'>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-white bg-[#0B79DA] border border-[#0B79DA] rounded-lg hover:bg-[#095A9E] focus:z-10 focus:ring-2 focus:ring-[#0B79DA]">
                            Last Week
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-[#0B79DA] bg-white border border-[#0B79DA] rounded-lg">
                            Last Month
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-[#0B79DA] bg-white border border-[#0B79DA] rounded-lg ">
                            Last Year
                        </button>
                    </div>

                    <div className={`flex justify-between ${!isSupplyBtnSelelct ? "mt-4 mb-5" : "mt-1"}  mx-3`}>
                        <div className="flex flex-col items-center justify-center">
                            <p className='px-2 py-2 font-bold text-[#0B79DA]'>{isSupplyBtnSelelct ? 47 : 3}</p>
                            <p className="mt-1 text-black font-bold">Total Offer</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className='px-2 py-2 font-bold text-[#0B79DA]'>{isSupplyBtnSelelct ? 12 : 7}</p>
                            <p className="mt-1 text-black font-bold">Po Raised</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className='px-2 py-2 font-bold text-[#0B79DA] '>{isSupplyBtnSelelct ? 16 : 0}</p>
                            <p className="mt-1 text-black font-bold">Expried</p>
                        </div>
                    </div>
                </Card>
            </div>

        </div>

    </Card>
    )
}

export default SupplyOverViewCard