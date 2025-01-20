import { useParams } from "react-router-dom";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const CollectionDetail = () => {
  const { id } = useParams();
  const [collections, setCollections] = useState([
    // Koleksi contoh...
  ]);
  const [isAdding, setIsAdding] = useState(false);

  const collection = collections.find((col) => col.id === parseInt(id));
  const handleAddOutfit = (newOutfit) => {
    const updatedCollections = collections.map((col) =>
      col.id === parseInt(id)
        ? { ...col, outfits: [...col.outfits, newOutfit] }
        : col
    );
    setCollections(updatedCollections);
    setIsAdding(false);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <h2 className="text-xl font-bold mb-4">{collection?.name}</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {collection?.outfits.map((outfit, index) => (
          <img
            key={index}
            src={outfit}
            alt={`Outfit ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
        ))}
      </div>
      <button
        onClick={() => setIsAdding(true)}
        className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
      >
        Add
      </button>

      {/* Bottom Sheet */}
      <CSSTransition in={isAdding} timeout={300} classNames="slide-up" unmountOnExit>
        <div className="fixed bottom-0 left-0 w-full bg-white p-6 shadow-lg rounded-t-lg z-20">
          <h3 className="text-lg font-bold mb-4">Add Outfit</h3>
          {/* Daftar outfit yang bisa dipilih */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {["/images/outfit1.png", "/images/outfit2.png"].map((outfit, index) => (
              <img
                key={index}
                src={outfit}
                alt={`Outfit ${index + 1}`}
                className="w-full h-full object-cover rounded-md cursor-pointer"
                onClick={() => handleAddOutfit(outfit)}
              />
            ))}
          </div>
          <button
            onClick={() => setIsAdding(false)}
            className="w-full py-3 mt-4 bg-gray-300 text-gray-700 font-bold rounded-lg"
          >
            Cancel
          </button>
        </div>
      </CSSTransition>
    </div>
  ); 
};

export default CollectionDetail;