import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import AiMatchPage from "../pages/Ai"; // Import the new AI Match page

// Define the routes for the app
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home page as the root path
  },
  {
    path: "/register",
    element: <Register />, // Register page accessible at /register
  },
  {
    path: "/ai-match", // AI Match page route
    element: <AiMatchPage />, // AI Match page component
  },
]);
