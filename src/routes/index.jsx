import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import OnboardingScreen from '../pages/OnboardingPage';
import LoginScreen from '../pages/LoginScreen';
import Home from '../pages/Home';
import Register from "../pages/Register";
import AiMatchPage from "../pages/Ai";
import NotFound from '../pages/NotFound';

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
    path: '*',
    element: <NotFound />
  }
])