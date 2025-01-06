import { createBrowserRouter } from 'react-router-dom';
import OnboardingScreen from '../pages/OnboardingPage';
import LoginScreen from '../pages/LoginScreen';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: '/onboarding',
    element: <OnboardingScreen />
  },
])