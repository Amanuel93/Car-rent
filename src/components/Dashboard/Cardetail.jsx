// import React from 'react';

// const CarDetailPage = () => {
//   // Dummy data for the car
//   const car = {
//     carType: 'SUV',
//     make: 'Toyota',
//     model: 'Highlander',
//     year: 2021,
//     fuelType: 'Hybrid',
//     transmissionType: 'Automatic',
//     seatingCapacity: 7,
//     availabilityStatus: 'Available',
//     features: ['Air Conditioning', 'GPS', 'Bluetooth', 'Backup Camera', 'Heated Seats', 'Cruise Control'],
//     pricePerDay: 80,
//     images: [
//       'https://via.placeholder.com/400x300.png?text=Car+Image+1',
//       'https://via.placeholder.com/400x300.png?text=Car+Image+2',
//       'https://via.placeholder.com/400x300.png?text=Car+Image+3',
//       'https://via.placeholder.com/400x300.png?text=Car+Image+4',
//     ],
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       {/* Car Images */}
//       <div className="flex flex-col lg:flex-row gap-4">
//         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {car.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={car.model}
//               className="w-full h-64 object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
//             />
//           ))}
//         </div>

//         {/* Car Overview */}
//         <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-2xl">
//           <h1 className="text-3xl font-bold mb-2 text-indigo-700">{car.make} {car.model}</h1>
//           <p className="text-xl text-gray-600 mb-4">{car.year} - {car.carType}</p>
//           <div className="space-y-2">
//             <p><span className="font-semibold">Fuel Type:</span> {car.fuelType}</p>
//             <p><span className="font-semibold">Transmission:</span> {car.transmissionType}</p>
//             <p><span className="font-semibold">Seating Capacity:</span> {car.seatingCapacity} seats</p>
//             <p className={`font-semibold ${car.availabilityStatus === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
//               {car.availabilityStatus === 'Available' ? 'Available for Rent' : 'Currently in Maintenance'}
//             </p>
//           </div>
//           <p className="text-2xl font-bold mt-6 text-indigo-600">${car.pricePerDay}/day</p>
//         </div>
//       </div>

//       {/* Car Features */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold text-indigo-700 mb-4">Features</h2>
//         <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
//           {car.features.map((feature, index) => (
//             <li key={index} className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md shadow-md">
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Book Button */}
//       <div className="mt-8 text-center">
//         <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-105">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarDetailPage;

import React, { useState }  from 'react';
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import whiteCar from "../../assets/white-car.png";


const CarDetailPage = () => {
  // Dummy data
  const car = {
    carType: 'SUV',
    make: 'Toyota',
    model: 'RAV4',
    year: 2021,
    fuelType: 'Hybrid',
    transmissionType: 'Automatic',
    seatingCapacity: 5,
    availabilityStatus: 'Available',
    features: ['Air Conditioning', 'GPS', 'Bluetooth', 'Backup Camera', 'Heated Seats'],
    pricePerDay: 120,
    images: [
      car2, // Dummy image URLs
      car3,
      whiteCar,
      'https://dummyimage.com/600x400/333/ccc',
    ],
  };
  const [mainImage, setMainImage] = useState(car.images[0]);

  return (
 <div className="w-full">
    <div className="container mx-auto px-6 py-6 sm:hidden">
      {/* Car Images */}
      <div className="w-full">
        <img
          src={mainImage}
          alt={car.model}
          className="w-full h-[140px] md:h-96 rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-4 mt-4 overflow-x-auto">
        {car.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setMainImage(image)} // Set the clicked image as the main image
            className={`w-24 h-16 rounded-lg cursor-pointer object-cover transition-transform duration-300 ${
              mainImage === image ? 'border-4 border-indigo-500 scale-105' : 'hover:scale-105'
            }`}
          />
        ))}
      </div>

      {/* Car Overview */}
      <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-indigo-700">
          {car.make} {car.model}
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          {car.year} - {car.carType}
        </p>
        <div className="space-y-2">
          <p><span className="font-semibold">Fuel Type:</span> {car.fuelType}</p>
          <p><span className="font-semibold">Transmission:</span> {car.transmissionType}</p>
          <p><span className="font-semibold">Seating Capacity:</span> {car.seatingCapacity} seats</p>
          <p className={`font-semibold ${car.availabilityStatus === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
            {car.availabilityStatus === 'Available' ? 'Available for Rent' : 'Currently in Maintenance'}
          </p>
        </div>
        <p className="text-2xl font-bold mt-6 text-indigo-600">
          ${car.pricePerDay}/day
        </p>
      </div>

      {/* Car Features */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Features</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {car.features.map((feature, index) => (
            <li key={index} className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md shadow-md">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Book Button */}
      <div className="mt-8 text-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-105">
          Book Now
        </button>
      </div>
    </div>


    <div className="container mx-auto px-4 py-6 hidden md:block">
       {/* Car Images */}
       <div className="flex flex-col lg:flex-row gap-4">
         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
           {car.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={car.model}
              className="w-full lg:h-64 md:h-[150px] object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* Car Overview */}
        <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold mb-2 text-indigo-700">{car.make} {car.model}</h1>
          <p className="text-xl text-gray-600 mb-4">{car.year} - {car.carType}</p>
          <div className="space-y-2">
            <p><span className="font-semibold">Fuel Type:</span> {car.fuelType}</p>
            <p><span className="font-semibold">Transmission:</span> {car.transmissionType}</p>
             <p><span className="font-semibold">Seating Capacity:</span> {car.seatingCapacity} seats</p>
             <p className={`font-semibold ${car.availabilityStatus === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
               {car.availabilityStatus === 'Available' ? 'Available for Rent' : 'Currently in Maintenance'}
             </p>
           </div>
           <p className="text-2xl font-bold mt-6 text-indigo-600">${car.pricePerDay}/day</p>
         </div>
       </div>

       {/* Car Features */}
       <div className="mt-10">
         <h2 className="text-2xl font-bold text-indigo-700 mb-4">Features</h2>
         <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
           {car.features.map((feature, index) => (
             <li key={index} className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md shadow-md">
               {feature}
             </li>
           ))}
         </ul>
       </div>

       {/* Book Button */}
       <div className="mt-8 text-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-105">
          Book Now
        </button>
      </div>
    </div>

 </div>
  );
};

export default CarDetailPage;

