// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout'; // Import Layout
import App from './App'; // Landing page
import CarListPage from "./components/CarListPage/CarListPage";
import Booking from "./components/Booking/Booking";
// import AboutPage from './pages/AboutPage'; // Example of another page
// import ServicesPage from './pages/ServicesPage'; // Example of another page
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider
import './index.css';

// Define the router
const router = createBrowserRouter([
  {
    path: "/", 
    element: (
      <Layout>
        <App /> {/* App is the landing page */}
      </Layout>
    ),
  },
  {
    path: "/cars", 
    element: (
      <Layout>
        <CarListPage /> {/* Example of an About page */}
      </Layout>
    ),
  },
  {
    path: "/booking", 
    element: (
      <Layout>
        <Booking /> {/* Example of a Services page */}
      </Layout>
    ),
  }
]);

// Render the RouterProvider with the router inside the ThemeProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
