import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar"; // Ensure this path is correct

// Mock weather data
const weather = {
  icon: "/weather-icon.png", // Replace with your actual weather icon path
  description: "Partly cloudy with rain",
};

// Function to get the ordinal suffix for a day
const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return "th"; // special case for 11th-13th
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

// Function to format the date as "Today" or "Wed, 20th November"
const formatDate = (date) => {
  const options = { weekday: "short", day: "numeric", month: "long" };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
  const day = date.getDate();
  const ordinal = getOrdinalSuffix(day);
  return formattedDate.replace(day, `${day}${ordinal}`);
};

const Callender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showAddOutfitModal, setShowAddOutfitModal] = useState(false);

  // Swipe handlers for modal
  const swipeHandlers = useSwipeable({
    onSwipedDown: () => setShowAddOutfitModal(false), // Close modal on swipe down
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Get the days in a month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Generate all dates for the current month
  const generateMonthDates = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(month, year);
    return Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const toggleAddOutfitModal = () => {
    setShowAddOutfitModal(!showAddOutfitModal);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="w-full max-w-md p-4 pb-0">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Your outfit for</h2>
            <div className="text-2xl font-bold text-[#2c4214]">
              {selectedDate.toDateString() === new Date().toDateString()
                ? "Today"
                : formatDate(selectedDate)}
            </div>
          </div>
          <button
            onClick={toggleCalendar}
            className="w-10 h-10 bg-[#2c4214] rounded-full flex items-center justify-center p-2 focus:outline-none"
          >
            <img src="/cal.png" alt="Calendar" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swipeable Row of Dates */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 px-3">
          {generateMonthDates().map((date, index) => (
            <button
              key={index}
              onClick={() => handleDateSelect(date)}
              className="flex flex-col items-center py-2 px-2 transition-colors duration-200"
            >
              <span className="text-sm font-medium text-[#2c4214]">
                {date.toLocaleDateString("en-GB", { weekday: "short" })}
              </span>
              <span
                className={`text-lg font-semibold w-7 h-7 flex items-center justify-center rounded-full ${
                  selectedDate.toDateString() === date.toDateString()
                    ? "bg-[#2c4214] text-white"
                    : "bg-transparent text-[#2c4214] hover:bg-[#2c4214] hover:text-white"
                }`}
              >
                {date.getDate()}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Long Line Under Swipeable Dates */}
      <hr className="w-full border-b-1 border-[#d5d5d5]"></hr>

      {/* Date Picker Modal */}
      {showCalendar && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Select a Date</h3>
          </div>
          <div className="flex justify-center">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => handleDateSelect(date)}
              inline
              className="react-datepicker__input-container"
            />
          </div>

          {/* Full-length button below DatePicker */}
          <button
            onClick={toggleCalendar} // Close calendar when clicked
            className="w-full mt-4 py-2 bg-[#2c4214] text-white font-semibold rounded-md border-2 border-[#2c4214] hover:bg-[#2c4214] hover:bg-opacity-80"
          >
            Close
          </button>
        </div>
      )}

      {/* Bottom Section with Add Outfit Button and Title */}
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Add Outfit Button */}
        <button
          onClick={toggleAddOutfitModal}
          className="flex items-center justify-center w-16 h-16 bg-[#2c4214] rounded-full text-white text-3xl shadow-md hover:bg-[#2c4214] hover:bg-opacity-80"
        >
          +
        </button>

        {/* Add Outfit Title */}
        <p className="text-lg font-medium text-[#2c4214] mt-2">Add Outfit</p>
      </div>

      {/* Add Outfit Modal */}
      {showAddOutfitModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center"
          {...swipeHandlers} // Swipeable modal
        >
          <div className="w-full bg-white rounded-t-3xl shadow-lg p-6 h-5/6 overflow-y-auto relative">
            {/* Swipe Indicator */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full"></div>

            {/* Weather Section */}
            <div className="flex flex-col items-start mb-4 mt-6">
              <div className="flex items-center space-x-3">
                <img src="weather.png" alt="Weather Icon" className="w-10 h-10" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Today's Weather</h3>
                  <p className="text-sm text-gray-500">{weather.description}</p>
                </div>
              </div>

              {/* Full Length Line */}
              <hr className="w-full border-t-2 border-[#d5d5d5] my-2" />
            </div>

            {/* Title Section */}
            <h3 className="text-xl font-bold mb-4">Latest Outfits</h3>

            {/* Outfit Grid */}
            <div className="flex gap-4">
              <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                <img
                  src="outfit1.png"
                  alt="Outfit 1"
                  className="w-20 h-auto max-w-full max-h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                <img
                  src="outfit2.png"
                  alt="Outfit 2"
                  className="w-20 h-auto max-w-full max-h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Callender;
