import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import OnboardingScreen from '../pages/OnboardingPage';
import LoginScreen from '../pages/LoginScreen';
import Register from "../pages/Register";
import AiMatchPage from "../pages/Ai";
import Outfits from '../pages/WardrobeOutfits';
import Callender from '../pages/Callender';
import NotFound from '../pages/NotFound';
import SwipeClothes from '../pages/SwipeClothesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/onboarding',
    element: <OnboardingScreen />
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: '/ai-match',
    element: <AiMatchPage />
  },
  {
    path: '/mix-matcher',
    element: <SwipeClothes />
  },
  {
    path: '/calendar',
    element: <Callender />,
  },
  {
    path: '*',
    element: <NotFound />
  }
])