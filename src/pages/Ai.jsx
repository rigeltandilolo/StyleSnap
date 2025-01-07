import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import Navbar from "../components/Navbar";

const AiMatchPage = () => {
  const [showCard, setShowCard] = useState(false); // Track visibility of the cards
  const [showHistoryCard, setShowHistoryCard] = useState(false); // Track visibility of the history card
  const [inputValue, setInputValue] = useState(""); // Track the search input value

  const handleHistoryClick = () => {
    setShowCard(false); // Close the card slider when history is clicked
    setShowHistoryCard((prev) => !prev); // Toggle the visibility of the history card
  };

  const handleSearchClick = () => {
    if (inputValue.trim() !== "") {
      setShowCard(true); // Show cards if there's input text
      setShowHistoryCard(false); // Hide history card when send button is clicked
    }
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <HeaderBar />
        <InputSection
          setShowCard={setShowCard}
          setInputValue={setInputValue}
          inputValue={inputValue}
          handleSearchClick={handleSearchClick}
          handleInputChange={handleInputChange}
        />
        <HistoryLink handleHistoryClick={handleHistoryClick} />
        {showCard && <CardSwiper />}
        {showHistoryCard && <HistoryCard />}
        <FooterNavigation />
      </div>
    </div>
  );
};

const HeaderBar = () => <div className="flex justify-between items-center mb-1" />;

const InputSection = ({
  setShowCard,
  setInputValue,
  inputValue,
  handleSearchClick,
  handleInputChange,
}) => {
  return (
    <div className="mb-6 flex items-center gap-2">
      <input
        type="text"
        placeholder="Planning a look? Describe it here!"
        value={inputValue}
        onChange={handleInputChange}
        className={`flex-grow p-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4214] ${
          inputValue ? "font-semibold" : ""
        }`}
      />
      <button
        className="w-12 h-12 bg-[#2c4214] text-white rounded-lg flex items-center justify-center"
        onClick={handleSearchClick}
        disabled={!inputValue.trim()}
      >
        <img src="search.png" alt="Search" className="w-6 h-6" />
      </button>
    </div>
  );
};

const HistoryLink = ({ handleHistoryClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={handleHistoryClick}
        className="text-[#2c4214] font-bold hover:underline"
      >
        History
      </button>
    </div>
  );
};

// The new history card component
const HistoryCard = () => (
  <div className="bg-yellow-200 rounded-lg p-4 mt-4 shadow-lg">
    <h3 className="text-xl font-bold text-[#2c4214]">History Card</h3>
    <p className="mt-2 text-gray-600">This is a history card that appears after clicking the History link.</p>
  </div>
);

const CardSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="h-[calc(90vh-200px)]">
      <Swiper spaceBetween={30} slidesPerView={1} className="h-full" onSlideChange={handleSlideChange}>
        <SwiperSlide>
          <CardContent
            title="Look #1"
            description="Discover your first personalized style match here."
            color="bg-red-200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardContent
            title="Look #2"
            description="Check out another recommended style just for you."
            color="bg-blue-200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardContent
            title="Look #3"
            description="More style inspiration awaits—swipe to explore!"
            color="bg-green-200"
          />
        </SwiperSlide>
      </Swiper>

      {/* Circle Indicators with numbers */}
      <div className="flex justify-center mt-4">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`w-6 h-6 mx-2 rounded-full flex items-center justify-center text-white font-semibold ${
              currentSlide === index ? "bg-[#2c4214]" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

const CardContent = ({ title, description, color }) => (
  <div className={`h-full ${color} rounded-lg shadow-md flex flex-col justify-center items-center`}>
    <h2 className="text-2xl font-bold text-[#2c4214]">{title}</h2>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const FooterNavigation = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-3 flex justify-around">
    <NavItem label="Wardrobe" />
    <NavItem label="Ai Match" isActive />
    <NavItem label="Mix Matcher" />
    <NavItem label="Planner" />
  </div>
);

const NavItem = ({ label, isActive }) => (
  <div className={`text-center ${isActive ? "text-[#2c4214] font-bold" : "text-gray-400"}`}>
    {label}
  </div>
);

export default AiMatchPage;
