"use client";
import React from 'react';

import FirstCard from './components/FirstCard';
import "../home/home.css"
import SupplyOverViewCard from './components/SupplyOverViewCard';
import NewAdditionCard from './components/newAdditionCard';
import DemandCard from './components/DemandCard';
import OfferTable from './components/OfferTable';
import { RationChartCard } from './components/RationChartCard';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="flex gap-4">
        <div class="gap-4 w-2/5">
          <FirstCard />
          <div className='mt-3'>
            <RationChartCard />
          </div>
          <div className='mt-3'>
            <NewAdditionCard />
          </div>
          <div className='mt-3'>
            <DemandCard />
          </div>
        </div>
        <div class="gap-4 w-3/5">
          <SupplyOverViewCard />
          <OfferTable />
        </div>

      </div>
    </div>
  );
};

export default Home;
