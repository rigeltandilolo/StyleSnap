import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Navbar from "../components/Navbar";

const SwipeClothes = () => {
    const tops = ["ClothesImage/contohtops.png", "ClothesImage/contohtops2.png", "ClothesImage/contohtops3.png"];
    const bottoms = ["ClothesImage/contohbottom.png", "ClothesImage/contohbottom2.png", "ClothesImage/contohbottom3.png"];
    const footwears = ["ClothesImage/contohfootwear.png", "ClothesImage/contohfootwear2.png", "ClothesImage/contohfootwear3.png"];
    const accessories = ["ClothesImage/contohtopi.png", "ClothesImage/contohtopi2.png", "ClothesImage/contohkacamata.png"];
    const outers = ["ClothesImage/contohouter.png", "ClothesImage/contohouter2.png", "ClothesImage/contohouter3.png"];
    const bags = ["ClothesImage/contohtas.png", "ClothesImage/contohtas2.png", "ClothesImage/contohtas3.png"];

    const [currentTop, setCurrentTop] = useState(0);
    const [currentBottom, setCurrentBottom] = useState(0);
    const [currentFootwear, setCurrentFootwear] = useState(0);
    const [currentAccessory, setCurrentAccessory] = useState(0);
    const [currentOuter, setCurrentOuter] = useState(null); // Untuk menyimpan pilihan outer
    const [isOuterSelecting, setIsOuterSelecting] = useState(false); // Mengontrol tampilan layar pemilihan outer
    const [currentBag, setCurrentBag] = useState(null); //untuk pemilihan tas
    const [isBagSelecting, setIsBagSelecting] = useState(false);

    const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

    const shuffleOutfit = () => {
        setCurrentTop(getRandomIndex(tops));
        setCurrentBottom(getRandomIndex(bottoms));
        setCurrentFootwear(getRandomIndex(footwears));
        setCurrentAccessory(getRandomIndex(accessories));
        setCurrentOuter(getRandomIndex(outers));
        setCurrentBag(getRandomIndex(bags));
    };

    const [showPopup, setShowPopup] = useState(false);

    const saveOutfit = () => {
        const savedOutfit = {
            top: tops[currentTop],
            bottom: bottoms[currentBottom],
            footwear: footwears[currentFootwear],
            accessory: accessories[currentAccessory],
            outer: currentOuter !== null ? outers[currentOuter] : null,
            bag: currentBag !== null ? bags[currentBag] : null,
        };
        localStorage.setItem("savedOutfit", JSON.stringify(savedOutfit));
        setShowPopup(true); // Tampilkan pop-up
        setTimeout(() => setShowPopup(false), 2000); //ubah durasi untuk lama POp up terbuka
    };

    const handleSwipe = (direction, currentIndex, setIndex, items) => {
        if (direction === "RIGHT") {
            setIndex((currentIndex - 1 + items.length) % items.length);
        } else if (direction === "LEFT") {
            setIndex((currentIndex + 1) % items.length);
        }
    };

    const outerHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT", currentOuter ?? 0, setCurrentOuter, outers),
        onSwipedRight: () => handleSwipe("RIGHT", currentOuter ?? 0, setCurrentOuter, outers),
    });

    const accessoryHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT", currentAccessory, setCurrentAccessory, accessories),
        onSwipedRight: () => handleSwipe("RIGHT", currentAccessory, setCurrentAccessory, accessories),
    });

    const topHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT", currentTop, setCurrentTop, tops),
        onSwipedRight: () => handleSwipe("RIGHT", currentTop, setCurrentTop, tops),
    });

    const bottomHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT", currentBottom, setCurrentBottom, bottoms),
        onSwipedRight: () => handleSwipe("RIGHT", currentBottom, setCurrentBottom, bottoms),
    });

    const footwearHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT", currentFootwear, setCurrentFootwear, footwears),
        onSwipedRight: () => handleSwipe("RIGHT", currentFootwear, setCurrentFootwear, footwears),
    });

    const bagHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT", currentBag ?? 0, setCurrentBag, bags),
        onSwipedRight: () => handleSwipe("RIGHT", currentBag ?? 0, setCurrentBag, bags),
    });

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-between p-4 relative">

            {/* Tombol Save di kanan atas */}
            <button
                onClick={saveOutfit}
                className="absolute top-4 right-4 bg-green-700 px-4 py-2 rounded-full shadow-md z-20 flex items-center gap-2"
                title="Save Outfit"
            >
                <img src="saveiconpng.png" alt="Save" className="w-[20px] h-[20px]" />
                <span className="text-white text-sm font-medium">Save Outfit</span>
            </button>

            {/* Pop-up */}
            {showPopup && (
                <div className="fixed top-16 bg-green-700 text-white p-3 rounded-md shadow-lg z-30">
                    Outfit saved successfully!
                </div>
            )}

            {/* Siluet tubuh */}
            <div className="absolute top-10 left-1 z-0 opacity-30"
                style={{ width: "400px", height: "700px" }}
            >
                <img
                    src="body.png"
                    alt="Silhouette"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Area swipeable */}
            <div className="relative w-full max-w-md mx-auto bg-gray-100 rounded-lg shadow-md z-10">

                {/* Outer/Jacket */}
                {currentOuter !== null && (
                    <div
                        {...outerHandlers}
                        className="absolute top-[100px] left-1/2 transform -translate-x-1/2 z-10" // z-index lebih tinggi dari Tops
                        style={{
                            clipPath: "inset(0 50% 0 0)", // Menampilkan hanya setengah bagian atas
                            width: "340px", height: "340px"
                        }}
                    >
                        <img
                            src={outers[currentOuter]}
                            alt="Outer"
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}

                {/* Tas */}
                {currentBag !== null && (
                    <div
                        {...bagHandlers}
                        className="absolute top-[400px] -right-7 transform -translate-y-1/2 z-10"
                        style={{ width: "250px", height: "250px" }}
                    >
                        <img
                            src={bags[currentBag]}
                            alt="Bag"
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}

                {/* Accessories */}
                <div
                    {...accessoryHandlers}
                    className="absolute top-[5%] left-1/2 transform -translate-x-1/2"
                    style={{ width: "110px", height: '110px' }}
                >
                    <img
                        src={accessories[currentAccessory]}
                        alt="Accessory"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Tops */}
                <div
                    {...topHandlers}
                    className="absolute top-24 left-1/2 transform -translate-x-1/2 "
                    style={{ width: "250px", height: '300px' }}
                >
                    <img
                        src={tops[currentTop]}
                        alt="Top"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Bottoms */}
                <div
                    {...bottomHandlers}
                    className="absolute top-[350px] left-1/2 transform -translate-x-1/2"
                    style={{ width: "400px", height: '400px' }}
                >
                    <img
                        src={bottoms[currentBottom]}
                        alt="Bottom"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Footwear */}
                <div
                    {...footwearHandlers}
                    className="absolute top-[620px] left-1/2 transform -translate-x-1/2"
                    style={{ width: "180px", height: '180px' }}
                >
                    <img
                        src={footwears[currentFootwear]}
                        alt="Footwear"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Tombol-tombol */}
            <div className="w-full max-w-md mx-auto flex justify-center items-center gap-4 p-4 z-20">

                {/* Tombol Add Bag */}
                <button
                    onClick={() => setIsBagSelecting(true)}
                    className="flex flex-col items-center justify-center w-20 h-20 bg-green-700 p-2 rounded-lg shadow-md"
                >
                    <img src="bagicon.png" alt="Add Bag" className="w-8 h-8" />
                    <span className="text-white text-xs mt-1">Add Bag</span>
                </button>

                {/* Tombol Add Jacket */}
                <button
                    onClick={() => setIsOuterSelecting(true)}
                    className="flex flex-col items-center justify-center w-20 h-20 bg-green-700 p-2 rounded-lg shadow-md"
                >
                    <img src="jacketicon.png" alt="Add Jacket" className="w-8 h-8" />
                    <span className="text-white text-xs mt-1">Add Jacket</span>
                </button>

                {/* Tombol Shuffle */}
                <button
                    onClick={shuffleOutfit}
                    className="flex flex-col items-center justify-center w-20 h-20 bg-green-700 p-2 rounded-lg shadow-md"
                >
                    <img src="shuffleicon.png" alt="Shuffle" className="w-8 h-8" />
                    <span className="text-white text-xs mt-1">Shuffle</span>
                </button>
            </div>

            {/* Modal Pemilihan Jacket */}
            {isOuterSelecting && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
                    <div className="bg-white rounded-lg shadow-lg p-4 w-3/4">
                        <h2 className="text-lg font-bold mb-4">Select an Outer</h2>
                        <div className="flex gap-2 overflow-x-scroll">
                            {outers.map((outer, index) => (
                                <img
                                    key={index}
                                    src={outer}
                                    alt={`Outer ${index}`}
                                    onClick={() => {
                                        setCurrentOuter(index);
                                        setIsOuterSelecting(false);
                                    }}
                                    className={`w-20 h-20 object-contain cursor-pointer ${currentOuter === index ? "border-2 border-green-700" : ""
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => setIsOuterSelecting(false)}
                            className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg shadow-md"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}

            {/* Modal Pemilihan Tas */}
            {isBagSelecting && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
                    <div className="bg-white rounded-lg shadow-lg p-4 w-3/4">
                        <h2 className="text-lg font-bold mb-4">Select a Bag</h2>
                        <div className="flex gap-2 overflow-x-scroll">
                            {bags.map((bag, index) => (
                                <img
                                    key={index}
                                    src={bag}
                                    alt={`Bag ${index}`}
                                    onClick={() => {
                                        setCurrentBag(index);
                                        setIsBagSelecting(false);
                                    }}
                                    className={`w-20 h-20 object-contain cursor-pointer ${currentBag === index ? "border-2 border-green-700" : ""
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => setIsBagSelecting(false)}
                            className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg shadow-md"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
            <Navbar />
        </div>
    );
};

export default SwipeClothes;