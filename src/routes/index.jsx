import { createBrowserRouter } from 'react-router-dom';
import OnboardingScreen from '../pages/OnboardingPage';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/onboarding',
    element: <OnboardingScreen />,
  },
]);