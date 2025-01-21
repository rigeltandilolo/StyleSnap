import React from "react";
import "./SplashScreen.css"; 

const SplashScreen = () => {
    return (
        <div
            className="splash-screen flex items-center justify-center bg-white h-screen w-full"
        >
            <img
                src="logo.png" 
                alt="StyleSnap Logo"
                className="logo-animation w-52 h-52 object-contain" 
            />
        </div>
    );
};

export default SplashScreen;
