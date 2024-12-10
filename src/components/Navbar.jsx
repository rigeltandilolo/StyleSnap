import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Navbar.css"; // Import styles for the navbar

const Navbar = () => {
  // State for managing the active menu
  const [active, setActive] = useState("Wardrobe");

  // Instantiate the useNavigate hook
  const navigate = useNavigate();

  // Menu items data with PNG image paths
  const menuItems = [
    { id: "Wardrobe", label: "Wardrobe", icon: "w.png", hoverIcon: "w2.png" },
    { id: "AiMatch", label: "AI Match", icon: "v2.png", hoverIcon: "Vector.png" },
    { id: "MixMatcher", label: "Mix Matcher", icon: "s2.png", hoverIcon: "s.png" },
    { id: "Planner", label: "Planner", icon: "c2.png", hoverIcon: "c.png" },
  ];

  // Function to handle active state on click
  const handleClick = (itemId) => {
    setActive(itemId);

    // Navigate to Home page if 'Wardrobe' is clicked
    if (itemId === "Wardrobe") {
      navigate("/"); // Navigate to Home page
    }

    // Navigate to AiMatchPage if 'AiMatch' is clicked
    if (itemId === "AiMatch") {
      navigate("/ai-match"); // Navigate to AI Match page
    }
  };

  return (
    <nav className="navbar">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`navbar-item ${active === item.id ? "active" : ""}`}
          onClick={() => handleClick(item.id)} // Set active state on click
        >
          <img
            src={`/icons/${active === item.id ? item.icon : item.hoverIcon}`}  // Change icon based on active state
            alt={item.label}
            className="navbar-icon"
          />
          <span className="navbar-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
