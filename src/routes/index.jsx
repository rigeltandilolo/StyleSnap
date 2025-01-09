import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import OnboardingScreen from '../pages/OnboardingPage';
import LoginScreen from '../pages/LoginScreen';
import Home from '../pages/Home';
import Outfits from '../pages/WardrobeOutfits';
import WardrobeCollections from '../pages/WardrobeCollections';
import CollectionDetail from '../pages/CollectionsDetail';
import SwipeClothes from '../pages/SwipeClothesPage';

export const router = createBrowserRouter([
  {
    path: '/OnboardingPage',
    element: <OnboardingScreen />, //onboarding
  },
  {
    path: '/LoginScreen',
    element: <LoginScreen />, 
  },
  {
    path: '/WardrobeOutfits',
    element: <Outfits />, 
  },
  {
    path: '/WardrobeCollections',
    element: <WardrobeCollections />, 
  },
  {
    path: '/CollectionDetail',
    element: <CollectionDetail />, 
  },
  {
    path: '/SwipeClothes',
    element: <SwipeClothes />, 
  },
  {
    path: '/',
    element: <Home />, //Home
  },
]);