import { useState } from "react";

const Clothes = () => {
  const [activeClothesTab, setActiveClothesTab] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const clothesTabs = [
    { title: "All", content: "All Clothes" },
    { title: "Tops", content: "Tops" },
    { title: "Bottoms", content: "Bottoms" },
    { title: "Shoes", content: "Shoes" },
    { title: "Outerwear", content: "Outerwear" },
    { title: "Full Body", content: "Full Body" },
    { title: "Accessories", content: "Accessories" },
  ];

  const Card = ({ title, content, image }) => (
    <div
      className="card bg-white rounded-lg p-2 mx-auto"
      style={{
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        margin: "1px",
        transform: "scale(0.95)",
        transition: "transform 0.3s ease",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-contain rounded-md"
          style={{
            objectFit: "contain",
          }}
        />
      )}
      <div className="card-title text-sm font-semibold">{title}</div>
      <div className="card-content text-gray-600 text-xs">{content}</div>
    </div>
  );

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
            <div className="grid grid-cols-3 gap-4 px-4 pt-4 pb-24 justify-items-center h-[calc(100vh-264px)] overflow-y-scroll">
              <Card image="Baju.png" />
              <Card image="outer.png" />
              <Card image="hoodie.png" />
              <Card image="sepatu.png" />
              <Card image="sweater.png" />
              <Card image="sepatucasual.png" />
              <Card image="tas.png" />
              <Card image="celana.png" />
              <Card image="sneakers.png" />
              <Card image="tas.png" />
              <Card image="celana.png" />
              <Card image="sneakers.png" />
              <Card image="tas.png" />
              <Card image="celana.png" />
              <Card image="sneakers.png" />
            </div>
          </div>
        ))}
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
  )
}

export default Clothes