import React from 'react';
import Card from './components/Card';
import FirstCard from './components/FirstCard';
import "../home/home.css"
import SupplyOverViewCard from './components/SupplyOverViewCard';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="flex gap-4">
        <div class="gap-4 w-2/5">
          <FirstCard />
        </div>
        <div class="gap-4 w-3/5">
          <SupplyOverViewCard />
        </div>

      </div>
    </div>
  );
};

export default Home;
