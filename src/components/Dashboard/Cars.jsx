// import React from 'react'
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

// const Cars = () => {
//   return (
//     <div className=" pt-16 flex flex-col">
//       <div className="container h-screen overflow-y-auto">
//         {/* Heading */}
//         <h1
          
//           className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
//         >
//           Vehicle store
//         </h1>
//         <p className="text-sm md:pb-10 pb-2">
//           See cars available
//         </p>
//         {/* Car listing */}
//         <div>
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-16">
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
//                 <div className="bg-yellow-500 rounded-lg px-3 py-1">
//                   <h1 className="font-semibold text-white">{data.name}</h1>
                  
//                 </div>
//                 <p className="text-xl font-semibold absolute top-0 left-3">
//                   {data.km}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cars

import React, { useState } from 'react';
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  { id: 1, name: "BMW UX", price: 2000, image: whiteCar },
  { id: 2, name: "KIA UX", price: 3500, image: car2 },
  { id: 3, name: "BMW UX", price: 4100, image: car3 },
  { id: 4, name: "Audi UX", price: 2800, image: whiteCar },
  { id: 5, name: "KIA UX", price: 3500, image: car2 },
  { id: 6, name: "BMW UX", price: 4100, image: car3},
  { id: 7, name: "Audi UX", price: 2800, image: whiteCar },
  { id: 8, name: "KIA UX", price: 3500, image: car2 },
  { id: 9, name: "BMW UX", price: 4100, image: car3},
];

// Get unique car names from carList
const carNames = [...new Set(carList.map(car => car.name))];

const Cars = () => {
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
    <div className="w-full pt-8 md:pt-10 flex flex-col">
      <div className="container h-screen">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-semibold font-serif mb-3">
           Available Vehicles
        </h1>
        <p className="text-sm md:pb-10 pb-2">See cars available</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            className={`px-4 py-2 rounded-lg border ${activeFilter === "" ? "bg-gray-800 text-white" : "bg-gray-200 dark:text-black"}`}
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
        <div className='overflow-y-auto overflow-x-hidden'>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-16">
            {filteredCars.map((data) => (
              <div
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group shadow-2xl"
                key={data.id}
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="flex justify-between bg-gray-700 rounded-lg px-3 py-1">
                  <h1 className="font-semibold text-white">{data.name}</h1>
                  <h1 className="font-semibold text-white">Edit</h1>
                </div>
                <p className="text-xl absolute top-0 left-3">{data.price} <span className='text-[14px]'>Br/day</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
