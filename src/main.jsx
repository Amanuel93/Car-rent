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
import DashboardLoayout from "./DashboardLoayout";
import Cars from "./components/Dashboard/Cars";
import Addcar from "./components/Dashboard/Addcar";
import Rental from "./components/Dashboard/Rental";
import Setting from "./components/Dashboard/Setting";
import Dashboard from "./components/Dashboard/Dashboard";
import CarDetailPage from "./components/Dashboard/Cardetail";
import CarsLoayout from "./CarsLayout";
import RentalRequestDetail from "./components/Dashboard/Rentaldetail";
import CarUpdatePage from "./components/Dashboard/Updatecar";

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
    path: "/product", 
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
  },
  {
    path:"Dashboard",
    element:<DashboardLoayout/>,
    children:[
      {
        path:"",
        element:<Dashboard/>
      },
      {
        path:"store",
        element:<CarsLoayout/>,
        children: [
          {
            path: "", // Nested route accessible under /store/:carId
            element: <Cars />, // The component that shows details for a specific car
          },
          {
            path: ":carId", // Nested route accessible under /store/:carId
            element: <CarDetailPage />, // The component that shows details for a specific car
          },
        ],
      },
      {
        path:"Add car",
        element:<Addcar/>
      },
      {
        path:"request",
        element:<Rental/>
      },
      {
        path:"setting",
        element:<Setting/>
      },
      {
        path:"request/:id",
        element:<RentalRequestDetail/>
      },
      {
        path:"update/:id",
        element:<CarUpdatePage/>
      }

    ]
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
