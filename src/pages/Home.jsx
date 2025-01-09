import { useState } from "react";
import Navbar from "../components/Navbar";
import Clothes from "./Clothes";
import Outfits from "./Outfits";

const Home = () => {
  const [activeTab, setActiveTab] = useState('Clothes');

  const mainTabs = ['Clothes', 'Outfits', 'Collections'];

  const displayActiveTab = (activeTab) => {
    switch (activeTab) {
      case 'Clothes':
        return <Clothes />
      case 'Outfits':
        return <Outfits />
      default:
        return <h1>not found</h1>
    }
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Green Header */}
      <div className="header bg-[#2c4214] text-white p-4 flex justify-between items-center rounded-b-lg">
        <div className="welcome text-left">
          <p className="text-xs">Welcome Back,</p>
          <p className="text-lg font-bold">Guest</p>
        </div>
        <div className="app-name text-lg font-bold">StyleSnap</div>
      </div>

      {/* Main Tabs */}
      <div className="tabs flex justify-around bg-white shadow-md">
        {mainTabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 w-full text-center font-medium ${tab === activeTab
              ? "text-green-800 border-b-4 border-green-800"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Tab Content */}
      <div
        className="slider-container relative overflow-hidden w-full flex-grow"
        style={{
          display: "flex",
          transform: `translateX(-${activeTab * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {/* Clothes Section */}
        <div className="tab-content flex-shrink-0 w-full h-full">
          {displayActiveTab(activeTab)}
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Home;
