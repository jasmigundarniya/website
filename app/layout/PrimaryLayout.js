import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Home from '@/public/assets/svgs/Home'
import Offer from '@/public/assets/svgs/Offer'
import Mih from '@/public/assets/svgs/Mih'
import Bid from '@/public/assets/svgs/Bid'

const PrimaryLayout = ({ children }) => {
    return (
        <div>
            <div className="h-full flex flex-col">
                <Header />
                <div className="flex flex-1">
                    <Sidebar />
                    <div className="flex-1 bg-[#F3F6FE] py-5 h-[calc(100vh-82.4px)] overflow-auto sidescroll">
                        {children}
                    </div>
                </div>
                <div className="p-5 sticky w-full bottom-0 hidden justify-between gap-2 border-t border-[#30375033] lg:flex bg-white">
                    <div className="flex items-center gap-3">
                        <Home />
                        <h2 className="text-[13px] text-[#0B79DA] font-semibold">Home</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <Offer />
                        <h2 className="text-[13px] text-black font-normal">Offers</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mih />
                        <h2 className="text-[13px] text-black font-normal">Mih/So</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <Bid />
                        <h2 className="text-[13px] text-black font-normal">Bid</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrimaryLayout
