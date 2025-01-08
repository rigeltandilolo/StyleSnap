import { useNavigate } from "react-router-dom";
import { useNavbar } from "../store/useNavbar";

const Navbar = () => {
  const { currentPage, setCurrentPage } = useNavbar(state => state)
  const navigate = useNavigate();

  const menuItems = [
    { label: "Wardrobe", icon: "w.png", hoverIcon: "w2.png", route: '/' },
    { label: "AI Match", icon: "v2.png", hoverIcon: "Vector.png", route: '/ai-match' },
    { label: "Mix Matcher", icon: "s2.png", hoverIcon: "s.png", route: 'mix-matcher' },
    { label: "Planner", icon: "c2.png", hoverIcon: "c.png", route: '/planner' },
  ];

  const handleClick = (route) => {
    setCurrentPage(route)
    navigate(route)
  };

  return (
    <nav className="navbar">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`navbar-item ${currentPage === item.route ? "active" : ""}`}
          onClick={() => handleClick(item.route)}
        >
          <img
            src={`/icons/${currentPage === item.route ? item.icon : item.hoverIcon}`}
            alt={item.label}
            className="navbar-icon"
          />
          <span className="navbar-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
