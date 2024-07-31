import React from 'react';
import Card from './Card';
const FirstCard = () => {
    return (
        <Card className="flex-grow-0 flex-shrink-0">
            <div className='flex  justify-between p-5 w-auto'>
                <div className='flex'>
                    <button type="button" className="paper-icon text-white hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                    <div className='grid'>
                        <h1 class="text-[14px] font-bold">Paper Recycled</h1>
                        <div class="text-[14px] text-[#30375080]">
                            10244.0MT
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <button type="button" className="bg-[#5470DE] text-white hover:bg-[#4058CC] focus:ring-4 focus:outline-none focus:ring-[#5470DE]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                    <div className='grid'>
                        <h1 className="text-[14px] font-bold">Trees Saved</h1>
                        <div className="text-[14px] text-[#30375080]">
                            204
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <button type="button" className="bg-[#01C0AA] text-white hover:bg-[#01C0AA] focus:ring-4 focus:outline-none focus:ring-[#01C0AA]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                    <div className='grid'>
                        <h1 class="text-[14px] font-bold">Co2 Saved</h1>
                        <div class="text-[14px] text-[#30375080]">
                            4.46 TONS
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    );
};

export default FirstCard;
