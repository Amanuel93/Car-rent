// import React from "react";
// import whiteCar from "../../assets/white-car.png";
// import car2 from "../../assets/car5.png";
// import car3 from "../../assets/car6.png";
// import { Link } from "react-router-dom";

// const carList = [
//   {
//     id:1,
//     name: "BMW UX",
//     price: 2000,
//     image: whiteCar,
//     aosDelay: "0",
//     km: "12km"
//   },
//   {
//     id:2,
//     name: "KIA UX",
//     price: 3500,
//     image: car2,
//     aosDelay: "500",
//     km: "20km"
//   },
//   {
//     id:3,
//     name: "BMW UX",
//     price: 4100,
//     image: car3,
//     aosDelay: "1000",
//     km: "45km",
//   },
//   {
//     id:4,
//     name: "BMW UX",
//     price: 2000,
//     image: whiteCar,
//     aosDelay: "0",
//     km: "12km"
//   },
//   {
//     id:5,
//     name: "KIA UX",
//     price: 3500,
//     image: car2,
//     aosDelay: "500",
//     km: "20km"
//   },
//   {
//     id:6,
//     name: "BMW UX",
//     price: 4100,
//     image: car3,
//     aosDelay: "1000",
//     km: "45km",
//   },
// ];

// const CarListPage = () => {
//   return (
//     <div className=" pt-16 flex flex-col">
//       <div className="container h-screen overflow-y-auto">
//         {/* Heading */}
//         <h1
//           data-aos="fade-up"
//           className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
//         >
//           Available Vehicle
//         </h1>
//         <p data-aos="fade-up" aos-delay="400" className="text-sm md:pb-10 pb-2">
//           Reserve your options & spent your time with ease
//         </p>
//         {/* Car listing */}
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
//             {carList.map((data) => (
//               <div
//                 // data-aos="fade-up"
//                 // data-aos-delay={data.aosDelay}
//                 className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
//                 key={data.id}
//               >
//                 <div className="w-full h-[120px]">
//                   <img
//                     src={data.image}
//                     alt=""
//                     className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
//                   />
//                 </div>
//                 <div className="space-y-2 bg-yellow-500 rounded-lg px-3 py-1">
//                   <h1 className="font-semibold text-white">{data.name}</h1>
//                   <div className="flex justify-between items-center text-xl font-semibold">
//                     <p><span className="text-2xl">{data.price}</span> Birr/Day</p>
//                     <Link to="/booking">Reserve</Link>
//                   </div>
//                 </div>
//                 <p className="text-xl font-semibold absolute top-0 left-3">
//                   {data.km}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* End of car listing */}
//         <div className="grid place-items-center mt-8">
//          <Link to="/booking">
//           <button className="button-outline">
//             Get Started
//           </button>
//          </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarListPage;

import React, { useState } from 'react';
import sofa2 from "../../assets/sofa2.jpg";
import sofa3 from "../../assets/sofa3.jpg";
import sofa4 from "../../assets/sofa4.jpg";
import stand1 from "../../assets/TV stand1.jpg";
import stand2 from "../../assets/TV stand2.jpg";
import stand3 from "../../assets/TV stand3.jpg";
import stand4 from "../../assets/TV stand4.jpg";
import arm1 from "../../assets/Armchair1.jpg";
import arm2 from "../../assets/Armchair2.jpg";
import arm3 from "../../assets/Armchair3.jpg";
import bed1 from "../../assets/Bed 1.jpg";
import bed2 from "../../assets/Bed 2.jpg";
import bed3 from "../../assets/Bed3.jpg";
import bed4 from "../../assets/Bed4.jpg";
import cabinet1 from "../../assets/cabinets1.jpg";
import cabinet2 from "../../assets/cabinet2.jpg";
import cabinet3 from "../../assets/cabinet3.png";
import drawer1 from "../../assets/chest of drawer.jpg";
import drawer2 from "../../assets/chest of drawer 2.jpg";
import drawer3 from "../../assets/chest of drawer 3.jpg";
import drawer4 from "../../assets/chest of drawer4.jpg";

import { Link } from 'react-router-dom';

const carList = [
  { id: 1, name: "SOFA", image: sofa2, price: "51200" },
  { id: 2, name: "SOFA",  image: sofa3, price: "42000" },
  { id: 3, name: "SOFA", image: sofa4, price: "75500" },
  { id: 4, name: "TV STAND",  image: stand1, price: "29500" },
  { id: 5, name: "TV STAND", image: stand2, price: "32000" },
  { id: 6, name: "TV STAND",  image: stand3, price: "32000" },
  { id: 7, name: "TV STAND", image: stand4, price: "35000" },
  { id: 8, name: "ARM CHAIR",  image: arm1, price: "45500" },
  { id: 9, name: "ARM CHAIR", image: arm2, price: "41200" },
  { id: 10, name: "ARM CHAIR",  image: arm3, price: "32000" },
  { id: 11, name: "BED", image: bed1, price: "64500" },
  { id: 12, name: "BED",  image: bed2, price: "71500" },
  { id: 13, name: "BED", image: bed3, price: "61200" },
  { id: 14, name: "BED",  image: bed4, price: "82000" },
  { id: 15, name: "CABINET", image: cabinet1, price: "114500" },
  { id: 16, name: "CABINET",  image: cabinet2, price: "181500" },
  { id: 17, name: "CABINET",  image: cabinet3, price: "171500" },
  { id: 18, name: "CHEST OF DRAWER", image: drawer1, price: "31200" },
  { id: 19, name: "CHEST OF DRAWER",  image: drawer2, price: "22000" },
  { id: 20, name: "CHEST OF DRAWER", image: drawer3, price: "24500" },
  { id: 21, name: "CHEST OF DRAWER",  image: drawer4, price: "21500" },

];

// Get unique car names from carList
const carNames = [...new Set(carList.map(car => car.name))];

const CarListPage = () => {
  const [filteredCars, setFilteredCars] = useState(carList);
  const [activeFilter, setActiveFilter] = useState("");

  // Filter cars based on selected name
  const filterByName = (name) => {
    if (name === "") {
      setFilteredCars(carList);
    } else {
      const filtered = carList.filter((car) => car.name === name);
      setFilteredCars(filtered);
    }
    setActiveFilter(name); // Set active filter
  };

  return (
    <div className="pt-16 flex flex-col">
      <div className="container h-screen overflow-y-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Currently Available
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            className={`px-4 py-2 rounded-lg border ${activeFilter === "" ? "bg-gray-800 text-white dark:text-white" : "bg-gray-200 dark:text-black"}`}
            onClick={() => filterByName("")}
          >
            All
          </button>
          {carNames.map((name) => (
            <button
              key={name}
              className={`px-4 py-2 rounded-lg border ${activeFilter === name ? "bg-gray-800 text-white" : "bg-gray-200 dark:text-black"}`}
              onClick={() => filterByName(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Car Listing */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-16">
            {filteredCars.map((data) => (
              <div
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                key={data.id}
              >
                <div className="w-full h-[150px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[150px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="flex justify-between bg-orange-500 rounded-lg px-3 py-1">
                  <h1 className="md:font-semibold font-thin text-white">{data.name}</h1>
                  <Link to="/booking" className=''>SHOP</Link>
                </div>
                <p className="text-xl absolute top-0 left-3">{data.price} <span className='text-[14px]'>Br</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListPage;

