import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import OnboardingScreen from '../pages/OnboardingPage';
import LoginScreen from '../pages/LoginScreen';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/OnboardingPage',
    element: <OnboardingScreen />, //onboarding
  },
  {
    path: '/LoginScreen',
    element: <LoginScreen />, //LoginScreen
  },
  {
    path: '/',
    element: <Home />, //Home
  },
]);