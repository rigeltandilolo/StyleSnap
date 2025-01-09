import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '/src/index.css';
import image1 from '../../public/VectorImage/contoh outfit 1.png';
import image2 from '../../public/VectorImage/contoh outfit 2.png';
import WardrobeHeader from '../components/WardrobeHeader';
import WardrobeCollections from './WardrobeCollections';

const outfits = [
  {
    id: 1,
    image: image1, //foto hasil mix and match Ai dan swipe clothes
  },
  {
    id: 2,
    image: image2, //foto hasil mix and match Ai dan swipe clothes
  },
  {
    id: 3,
    image: image1, //foto hasil mix and match Ai dan swipe clothes
  },
  {
    id: 4,
    image: image2, //foto hasil mix and match Ai dan swipe clothes
  },
];

const Outfits = () => {
  const [activeTab, setActiveTab] = useState('Outfits');
  const tabs = ['Clothes', 'Outfits', 'Collections'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-[#2C4214] rounded-b-xl pb-6 mb-4">
        <div className="flex justify-between items-center px-6 pt-6">
          <div className="text-left">
            <h1 className="text-sm font-medium text-white">Welcome Back,</h1>
            <h2 className="text-lg font-bold text-white">Henry Setiawan</h2>
          </div>
          <h1 className="text-lg font-bold text-white">StyleSnap</h1>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="relative">
        <div className="flex justify-center space-x-16 relative">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm pb-2 ${
                activeTab === tab
                  ? 'text-[#2C4214] font-bold'
                  : 'text-gray-500 font-normal hover:text-[#2C4214]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Underline Indicator */}
        <div
          className="absolute h-[4px] bg-[#00274D] transition-all duration-300"
          style={{
            width: '138px', // Panjang indikator seragam untuk setiap tab
            left: `${tabs.indexOf(activeTab) * 138}px`, // Mengatur posisi horizontal
            bottom: '-1px', // Mengatur posisi vertikal agar menutupi garis pembatas
          }}
        />
      </div>

      {/* garis pembatas antara tab navigation dengan isi konten */}
      <div className="border-b border-gray-300 w-full" />

      {/* Tab Content with Animation */}
      <TransitionGroup>
        <CSSTransition key={activeTab} timeout={300} classNames="fade">
          <div className="p-4">
            {/* card outfits */}
            {activeTab === 'Clothes' && (
              <p className="text-gray-500">Content for Clothes</p>
            )}
            {activeTab === 'Outfits' && (
              <div className="grid grid-cols-3 gap-4">
                {outfits.map((outfit) => (
                  <div
                    key={outfit.id}
                    className="bg-white shadow-md rounded-md overflow-hidden"
                  >
                    {/* tempat foto untuk outfits */}
                    <img
                      src={outfit.image}
                      alt={`Outfit ${outfit.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'Collections' && <WardrobeCollections />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Outfits;