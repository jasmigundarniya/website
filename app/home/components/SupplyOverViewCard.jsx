import React from 'react'
import Card from './Card'

const SupplyOverViewCard = () => {
    return (<Card>
        <div className='flex justify-between items-center'>
            <h2 className="text-[16px] font-bold uppercase">My Supply Overview</h2>
            <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" class="px-4 py-2 text-sm font-medium text-white bg-[#0B79DA] border border-[#0B79DA] rounded-s-lg hover:bg-[#095A9E] focus:z-10 focus:ring-2 focus:ring-[#0B79DA]">
                    Supply
                </button>
                <button type="button" class="px-4 py-2 text-sm font-medium text-[#0B79DA] bg-white border border-[#0B79DA] rounded-e-lg hover:bg-[#095A9E] hover:text-white-700 focus:z-10 focus:ring-2 focus:ring-[#0B79DA] focus:text-blue-700 ">
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
                            <h2 className="text-[16px] font-bold uppercase">My Supply Overview</h2>
                            <button type="button" class="px-3 py-3 text-gray-600 border border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                        <hr className="border-t border-gray-300 my-4" />
                        <div className='flex justify-between items-center'>
                            <h1 className="text-[14px] font-bold">Higest No. of active offers</h1>
                            <div>3</div>
                        </div>
                        <div className="text-[14px] text-[#30375080]">
                            Manish Goyal
                        </div>
                    </Card>
                </div>
            </div>
            <div class="gap-4 w-2/4">
                <Card>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-[16px] font-bold uppercase">Demand In Hand</h2>
                        <button type="button" class="px-3 py-3 text-gray-600 border border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                    <hr className="border-t border-gray-300 my-4 pt-2" />
                    <div className='flex gap-3 pt-4'>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-white bg-[#0B79DA] border border-[#0B79DA] rounded-lg hover:bg-[#095A9E] focus:z-10 focus:ring-2 focus:ring-[#0B79DA]">
                            Supply
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-[#0B79DA] bg-white border border-[#0B79DA] rounded-lg">
                            Demand
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-[#0B79DA] bg-white border border-[#0B79DA] rounded-lg ">
                            Demand
                        </button>
                    </div>

                    <div className='flex justify-between mt-4 mx-3 mb-5'>
                        <div className="flex flex-col items-center justify-center">
                            <p className='px-2 py-2 font-bold text-[#0B79DA]'>2</p>
                            <p className="mt-1 text-black">Total Offer</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className='px-2 py-2 font-bold text-[#0B79DA]'>0</p>
                            <p className="mt-1 text-black">Po Raised</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className='px-2 py-2 font-bold text-[#0B79DA] '>1</p>
                            <p className="mt-1 text-black">Expried</p>
                        </div>
                    </div>
                </Card>
            </div>

        </div>


    </Card >

    )
}

export default SupplyOverViewCard