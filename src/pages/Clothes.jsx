import { useState } from "react";
import Card from "../components/Card";

const Clothes = () => {
  const [activeClothesTab, setActiveClothesTab] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const clothesTabs = [
    { title: "All", content: "All Clothes", items: ["Baju.png", "hoodie.png", "sweater.png", "celana.png", "sepatu.png", "sneakers.png", "sepatucasual.png", "outer.png", "tas.png"] },
    { title: "Tops", content: "Tops", items: ["Baju.png", "hoodie.png", "sweater.png"] },
    { title: "Bottoms", content: "Bottoms", items: ["celana.png"] },
    { title: "Shoes", content: "Shoes", items: ["sepatu.png", "sneakers.png", "sepatucasual.png"] },
    { title: "Outerwear", content: "Outerwear", items: ["outer.png"] },
    { title: "Full Body", content: "Full Body", items: [] },
    { title: "Accessories", content: "Accessories", items: ["tas.png"] },
  ];

  return (
    <div className="clothes-section">
      {/* Nested Clothes Tabs */}
      <div className="nested-tabs flex overflow-x-auto bg-white shadow-sm py-2 px-2 gap-1">
        {clothesTabs.map((tab, index) => (
          <button
            key={index}
            className={`px-3 py-1 flex-shrink-0 rounded-full text-sm font-medium ${activeClothesTab === index
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
      <div className="nested-slider-container relative overflow-hidden mt-2">
        <div className="grid grid-cols-3 gap-4 px-4 pt-4 pb-24 justify-items-center h-[calc(100vh-264px)] overflow-y-scroll">
          {clothesTabs[activeClothesTab].items?.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </div>
      </div>

      <button
        className="fixed z-10 right-6 bottom-[108px] w-16 h-16 bg-[#2c4214] text-white rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsPopupVisible(true)}
      >
        <p className="text-4xl">+</p>
      </button>

      {/* Popup */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsPopupVisible(false)}
        >
          <div
            className="bg-white rounded-lg p-6"
            onClick={(e) => e.stopPropagation()}
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
    </div>
  );
};

export default Clothes;
