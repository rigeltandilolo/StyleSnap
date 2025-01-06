import { createBrowserRouter } from 'react-router-dom';
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
])