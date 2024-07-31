import Bid from "@/public/assets/svgs/Bid";
import Home from "@/public/assets/svgs/Home";
import Mih from "@/public/assets/svgs/Mih";
import Offer from "@/public/assets/svgs/Offer";
import React from "react";

const Sidebar = () => {
  return (
    <div className="relative h-[calc(100vh-82.4px)] overflow-auto">
      <div className="p-5 w-[225px] h-[calc(100vh-82.4px)] flex flex-col gap-5 border-r border-[#30375033] lg:hidden">
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
  );
};

export default Sidebar;
