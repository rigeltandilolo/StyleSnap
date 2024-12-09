import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen'; // Pastikan path sudah sesuai
import Home from '../pages/Home'; // Pastikan path sudah sesuai

export const router = createBrowserRouter([
  {
    path: '/LoginScreen',
    element: <LoginScreen />, // Halaman LoginScreen
  },
  {
    path: '/',
    element: <Home />, // Halaman Home
  },
]);