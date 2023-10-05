import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './pages/mainlayout/Mainlayout.jsx';
import Home from './components/Hoome/Home.jsx';
import Jobs from './pages/job/Jobs.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/job",
        element: <Jobs></Jobs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
