import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from "react-router-dom";

const WardrobeCollections = () => {
  const [collections, setCollections] = useState([
    {
      id: 1,
      name: 'Wattuna mi bali 🌴',
      type: 'Packing list',
      outfits: [
        '/images/outfit1.png',
        '/images/outfit2.png',
        '/images/outfit3.png',
        '/images/outfit4.png',
      ],
    },
    {
      id: 2,
      name: 'Uni Outfits',
      type: 'Favorite',
      outfits: [
        '/images/outfit5.png',
        '/images/outfit6.png',
        '/images/outfit7.png',
        '/images/outfit8.png',
      ],
    },
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [newCollection, setNewCollection] = useState({
    name: '',
    type: 'Favorite',
    outfits: [],
  });

  const navigate = useNavigate();

  const handleCreateNewCollection = () => {
    if (newCollection.name.trim() !== "") {
      const newId = collections.length + 1;
      const updatedCollections = [
        ...collections,
        { id: newId, ...newCollection },
      ];
      setCollections(updatedCollections);
      setNewCollection({ name: "", type: "Favorite", outfits: [] });
      navigate(`/CollectionDetail/${newId}`); // Navigasi ke halaman CollectionsDetails
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Collections List */}
      <div className="p-4">
        <div
          onClick={() => setIsCreating(true)}
          className="flex items-center justify-between w-full py-4 px-6 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100 transition-all mb-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#2C4214] flex items-center justify-center rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <span className="text-[#2C4214] font-semibold text-lg">
              Create new collection
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#2C4214"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-gray-100 p-4 rounded-md shadow-md">
              <div className="grid grid-cols-2 gap-1 mb-2">
                {collection.outfits.map((outfit, index) => (
                  <img
                    key={index}
                    src={outfit}
                    alt={`Outfit ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                ))}
              </div>
              <h3 className="text-sm font-bold text-[#2C4214]">{collection.name}</h3>
              <p className="text-xs text-gray-500">{collection.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isCreating && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsCreating(false)}
        />
      )}

      {/* Bottom Sheet */}
      <CSSTransition
        in={isCreating}
        timeout={300}
        classNames="slide-up"
        unmountOnExit
      >
        <div className="fixed bottom-0 left-0 w-full bg-white p-6 shadow-lg rounded-t-lg z-20">
          <h3 className="text-lg font-bold text-[#2C4214] mb-4">Create New Collection</h3>
          <input
            type="text"
            placeholder="Add a name for your new collection..."
            value={newCollection.name}
            onChange={(e) =>
              setNewCollection({ ...newCollection, name: e.target.value })
            }
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          <div className="flex items-center space-x-4 mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="collectionType"
                value="Packing list"
                checked={newCollection.type === 'Packing list'}
                onChange={(e) =>
                  setNewCollection({ ...newCollection, type: e.target.value })
                }
              />
              <span>Packing list</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="collectionType"
                value="Favorite"
                checked={newCollection.type === 'Favorite'}
                onChange={(e) =>
                  setNewCollection({ ...newCollection, type: e.target.value })
                }
              />
              <span>Favorite</span>
            </label>
          </div>
          <button
            onClick={handleCreateNewCollection}
            className="w-full py-3 bg-[#2C4214] text-white font-bold rounded-lg hover:bg-[#39591A] transition-all"
          >
            Next
          </button>
          <button
            onClick={() => setIsCreating(false)}
            className="w-full py-3 mt-4 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-400 transition-all"
          >
            Cancel
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default WardrobeCollections;