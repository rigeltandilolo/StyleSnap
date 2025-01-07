import { useState } from "react";
import Navbar from "../components/Navbar";
import React from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0); // Main tab state
  const [activeClothesTab, setActiveClothesTab] = useState(0); // Nested clothes tab state
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup state

  const mainTabs = [
    { id: 0, title: "Clothes", content: "Clothes Section" },
    { id: 1, title: "Outfits", content: "Outfits Section" },
    { id: 2, title: "Collections", content: "Collections Section" },
  ];

  const clothesTabs = [
    { id: 0, title: "All", content: "All Clothes" },
    { id: 1, title: "Tops", content: "Tops" },
    { id: 2, title: "Bottoms", content: "Bottoms" },
    { id: 3, title: "Shoes", content: "Shoes" },
    { id: 4, title: "Outerwear", content: "Outerwear" },
    { id: 5, title: "Full Body", content: "Full Body" },
    { id: 6, title: "Accessories", content: "Accessories" },
  ];

  const Card = ({ title, content, image }) => (
    <div
      className="card bg-white rounded-lg p-2 mx-auto"
      style={{
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        margin: "1px",
        transform: "scale(0.95)", // Shrinks the card by 5%
        transition: "transform 0.3s ease", // Smooth transition for scaling
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-contain rounded-md"
          style={{
            objectFit: "contain", // Ensure the image is not cut off and fits within the card
          }}
        />
      )}
      <div className="card-title text-sm font-semibold">{title}</div>
      <div className="card-content text-gray-600 text-xs">{content}</div>
    </div>
  );

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
            key={tab.id}
            className={`py-2 w-full text-center font-medium ${
              activeTab === index
                ? "text-green-800 border-b-4 border-green-800"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
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
          {activeTab === 0 && (
            <div className="clothes-section">
              {/* Nested Clothes Tabs */}
              <div className="nested-tabs flex overflow-x-auto bg-white shadow-sm py-2 px-2 gap-1">
                {clothesTabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`px-3 py-1 flex-shrink-0 rounded-full text-sm font-medium ${
                      activeClothesTab === index
                        ? "bg-[#2c4214] text-white"
                        : "bg-white text-gray-500"
                    }`}
                    onClick={() => setActiveClothesTab(index)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Nested Clothes Content */}
              <div
                className="nested-slider-container relative overflow-hidden mt-2"
                style={{
                  display: "flex",
                  transform: `translateX(-${activeClothesTab * 100}%)`,
                  transition: "transform 0.5s ease",
                }}
              >
                {clothesTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className="nested-tab-content flex-shrink-0 w-full h-full flex items-center justify-center text-lg font-bold"
                  >
                    <div className="grid grid-cols-3 gap-4 p-4 justify-items-center">
                      <Card image="Baju.png" />
                      <Card image="outer.png" />
                      <Card image="hoodie.png" />
                      <Card image="sepatu.png" />
                      <Card image="sweater.png" />
                      <Card image="sepatucasual.png" />
                      <Card image="tas.png" />
                      <Card image="celana.png" />
                      <Card image="sneakers.png" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Outfits Section */}
        <div className="tab-content flex-shrink-0 w-full h-full flex items-center justify-center text-lg font-bold">
          {/* Add content here */}
        </div>

        {/* Collections Section */}
        <div className="tab-content flex-shrink-0 w-full h-full flex items-center justify-center text-lg font-bold">
          {/* Add content here */}
        </div>
      </div>

      {/* Floating Plus Button */}
      {activeTab === 0 && (
        <button
          className="fixed right-6 top-[85%] transform -translate-y-1/2 w-16 h-16 bg-[#2c4214] text-white rounded-full shadow-lg flex items-center justify-center text-2xl"
          style={{ zIndex: 1000 }}
          onClick={() => setIsPopupVisible(true)}
        >
          +
        </button>
      )}

      {/* Popup */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsPopupVisible(false)} // Close popup on background click
        >
          <div
            className="bg-white rounded-lg p-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-2">
                <span>📂</span> Add clothes from library
              </button>
              <button className="flex items-center gap-2">
                <span>📸</span> Take photo of clothes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Home;
