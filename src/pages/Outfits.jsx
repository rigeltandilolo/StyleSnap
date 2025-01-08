import React from 'react'

const Outfits = () => {
  const outfits = [
    {
      id: 1,
      image: 'VectorImage/contoh outfit 1.png',
    },
    {
      id: 2,
      image: 'VectorImage/contoh outfit 2.png',
    },
    {
      id: 3,
      image: 'VectorImage/contoh outfit 1.png',
    },
    {
      id: 4,
      image: 'VectorImage/contoh outfit 2.png',
    },
  ];


  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {outfits.map((outfit) => (
        <div
          key={outfit.id}
          className="bg-white shadow-md rounded-md border overflow-hidden"
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
  )
}

export default Outfits