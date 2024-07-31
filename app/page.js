import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Pricing from "./pricing/page";
import Current_pricing from "./current_pricing/page";


const Page = () => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1  overflow-y-auto">
          <Pricing />
          {/* <Current_pricing /> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
