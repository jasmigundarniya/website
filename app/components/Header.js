"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import profile from "../../public/assets/images/profile.png";
import { FiPlus } from "react-icons/fi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GrFormClose } from "react-icons/gr";
import Menu from "@/public/assets/svgs/Menu";
import Call from "@/public/assets/svgs/Call";
import Match from "@/public/assets/svgs/Match";
import Local from "@/public/assets/svgs/Local";
import Pricing from "@/public/assets/svgs/Pricing";
import ViewYard from "@/public/assets/svgs/ViewYard";
import ViewMill from "@/public/assets/svgs/ViewMill";
import ViewTrader from "@/public/assets/svgs/ViewTrader";
import PowerBi from "@/public/assets/svgs/PowerBi";
import Deal from "@/public/assets/svgs/Deal";
import Rate from "@/public/assets/svgs/Rate";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className="p-5 border-b border-[#30375033] flex justify-between">
        <div className="flex gap-5 md:gap-2 items-center">
          <div
            className="border border-[#30375033] w-fit p-3 py-3.5 rounded-md cursor-pointer"
            onClick={toggleDrawer}
          >
            <Menu />
          </div>
          <Image src={logo} width={27} height={41} className="sm:hidden" />
          <h2 className="text-black font-semibold sm:hidden">Dashboard</h2>
        </div>
        <div className="flex items-center gap-3 sm:hidden">
          <button className="text-[#838796] flex items-center gap-2 border rounded-md px-3 py-2">
            <FiPlus />
            Demand
          </button>
          <button className="text-[#838796] flex items-center gap-2 border rounded-md px-3 py-2">
            <FiPlus />
            Supply
          </button>
          <Image
            src={profile}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="left"
        className="chatDrawer"
      >
        <div className="p-4">
          <div className="w-full flex justify-between border-b border-[#30375033]  items-center pb-4">
            <Image src={logo} width={27} height={41} />

            <div className="p-1.5 border rounded-md cursor-pointer">
              <GrFormClose
                className="text-[24px] text-[#30375080] "
                onClick={toggleDrawer}
              />
            </div>
          </div>
          <div className="pt-4">
            <Image
              src={profile}
              width={40}
              height={40}
              className="object-cover"
            />
            <h3 className="text-[12px] font-semibold mt-1">Yogesh Shishodia</h3>
            <h3 className="text-[12px] text-[#30375080] font-normal border-b border-[#30375033] pb-4">
              yogesh.shishoda@eximroutes.sg
            </h3>
            <h3 className="text-[11px] text-[#0B79DA] font-normal pt-4 pb-1">
              Sale in charge
            </h3>
            <h3 className="text-[11px] text-[#0B79DA] font-normal border-b border-[#30375033] pb-4">
              Purchase in charge
            </h3>
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <Call />
                <h3>+658263822</h3>
              </div>
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <Match />
                <h3>Match</h3>
              </div>
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <Local />
                <h3>local</h3>
              </div>
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <Pricing />
                <h3>Current pricing</h3>
              </div>
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <ViewYard />
                <h3>View as Yard</h3>
              </div>
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <ViewMill />
                <h3>View as Mill</h3>
              </div>
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <ViewTrader />
                <h3>View as Trader</h3>
              </div>
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <PowerBi />
                <h3>Power BI</h3>
              </div>
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <Deal />
                <h3>Done Deals</h3>
              </div>
              <div className="flex items-center gap-2 font-normal text-[13px]">
                <Rate />
                <h3>Freight Rates</h3>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
