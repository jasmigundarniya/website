import React from 'react'
import Card from './Card'
import FilterIcon from '@/public/assets/svgs/filterIcon'

const NewAdditionCard = () => {
    return (
        <Card>
            <div className='flex justify-between items-center'>
                <h2 className="text-[16px] font-bold uppercase">New Addition</h2>
               <FilterIcon />
            </div>
            <hr className={`border-t border-gray-300 my-4`} />
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

            <div className={`flex justify-between mx-3`}>
                <div className="flex flex-col items-center justify-center">
                    <p className='px-2 py-2 font-bold text-[#0B79DA]'>47</p>
                    <p className="mt-1 text-black font-bold">Total Offer</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className='px-2 py-2 font-bold text-[#0B79DA]'>12</p>
                    <p className="mt-1 text-black font-bold">Po Raised</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className='px-2 py-2 font-bold text-[#0B79DA] '>16</p>
                    <p className="mt-1 text-black font-bold">Expried</p>
                </div>
            </div>
        </Card>
    )
}

export default NewAdditionCard