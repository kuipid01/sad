import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage.tsx';
import Login from './pages/Login.tsx';
import Reg from './pages/Reg.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'sign-up',
    element: <Reg />
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
