// import React from 'react';

// const RentalRequestDetail = () => {
//   // Dummy data
//   const rentalRequest = {
//     username: 'John Doe',
//     phoneNumber: '+1234567890',
//     drivingLicense: 'DL1234567890',
//     idCard: 'ID1234567890',
//     car: {
//       make: 'Toyota',
//       model: 'RAV4',
//       year: 2021,
//       carType: 'SUV',
//       fuelType: 'Hybrid',
//     },
//     startDate: new Date('2024-10-01'),
//     endDate: new Date('2024-10-10'),
//     status: 'pending', // Status can be 'pending', 'approved', or 'rejected'
//   };

//   // Format dates
//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString();
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       {/* Rental Request Header */}
//       <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg mb-6">
//         <h1 className="text-3xl font-bold mb-2">Rental Request Details</h1>
//         <p className="text-lg">Request for {rentalRequest.username}</p>
//       </div>

//       {/* Request Information */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* User Info */}
//         <div className="bg-gray-50 p-6 rounded-lg shadow-gray-500 shadow-2xl">
//           <h2 className="text-2xl font-bold text-indigo-700 mb-4">User Information</h2>
//           <p className="text-lg"><span className="font-semibold">Name:</span> {rentalRequest.username}</p>
//           <p className="text-lg"><span className="font-semibold">Phone Number:</span> {rentalRequest.phoneNumber}</p>
//           <p className="text-lg"><span className="font-semibold">Driving License:</span> {rentalRequest.drivingLicense}</p>
//           <p className="text-lg"><span className="font-semibold">ID Card:</span> {rentalRequest.idCard}</p>
//         </div>

//         {/* Car Info */}
//         <div className="bg-gray-50 p-6 rounded-lg shadow-gray-500 shadow-2xl">
//           <h2 className="text-2xl font-bold text-indigo-700 mb-4">Car Information</h2>
//           <p className="text-lg"><span className="font-semibold">Make & Model:</span> {rentalRequest.car.make} {rentalRequest.car.model}</p>
//           <p className="text-lg"><span className="font-semibold">Year:</span> {rentalRequest.car.year}</p>
//           <p className="text-lg"><span className="font-semibold">Car Type:</span> {rentalRequest.car.carType}</p>
//           <p className="text-lg"><span className="font-semibold">Fuel Type:</span> {rentalRequest.car.fuelType}</p>
//         </div>
//       </div>

//       {/* Rental Period */}
//       <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-gray-500 shadow-2xl">
//         <h2 className="text-2xl font-bold text-indigo-700 mb-4">Rental Period</h2>
//         <p className="text-lg"><span className="font-semibold">Start Date:</span> {formatDate(rentalRequest.startDate)}</p>
//         <p className="text-lg"><span className="font-semibold">End Date:</span> {formatDate(rentalRequest.endDate)}</p>
//       </div>

//       {/* Request Status */}
//       <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-gray-500 shadow-2xl">
//         <h2 className="text-2xl font-bold text-indigo-700 mb-4">Request Status</h2>
//         <p className={`text-lg font-semibold ${rentalRequest.status === 'approved' ? 'text-green-600' : rentalRequest.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
//           {rentalRequest.status === 'approved' ? 'Approved' : rentalRequest.status === 'rejected' ? 'Rejected' : 'Pending Approval'}
//         </p>
//       </div>

//       {/* Action Buttons */}
//       <div className="mt-8 text-center space-x-4">
//         <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-105">
//           Approve
//         </button>
//         <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition duration-300 shadow-lg transform hover:scale-105">
//           Reject
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RentalRequestDetail;

import React from 'react';
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const RentalRequestDetail = () => {
  // Dummy data with image URLs for driving license and ID card
  const rentalRequest = {
    username: 'John Doe',
    phoneNumber: '+1234567890',
    drivingLicenseImage: car3, // Replace with actual image URL
    idCardImage: car2, // Replace with actual image URL
    car: {
      make: 'Toyota',
      model: 'RAV4',
      year: 2021,
      carType: 'SUV',
      fuelType: 'Hybrid',
    },
    startDate: new Date('2024-10-01'),
    endDate: new Date('2024-10-10'),
    status: 'pending', // Status can be 'pending', 'approved', or 'rejected'
  };

  // Format dates
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Rental Request Header */}
      <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold mb-2">Rental Request Details</h1>
        <p className="text-lg">Request for {rentalRequest.username}</p>
      </div>

      {/* Request Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Info */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-gray-500 shadow-2xl">
          <h2 className="text-xl font-bold text-indigo-700 mb-2">User Information</h2>
          <p className="text-md"><span className="font-semibold">Name:</span> {rentalRequest.username}</p>
          <p className="text-md"><span className="font-semibold">Phone Number:</span> {rentalRequest.phoneNumber}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Driving License Card */}
          <div className="mt-4">
            <h3 className="font-semibold">Driving License:</h3>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md mt-2">
              <img
                src={rentalRequest.drivingLicenseImage}
                alt="Driving License"
                className="w-full h-48 object-cover"
              />
              <div className="p-2 text-center">Driving License</div>
            </div>
          </div>

          {/* ID Card Card */}
          <div className="mt-4">
            <h3 className="font-semibold">ID Card:</h3>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md mt-2">
              <img
                src={rentalRequest.idCardImage}
                alt="ID Card"
                className="w-full h-48 object-cover"
              />
              <div className="p-2 text-center">ID Card</div>
            </div>
          </div>
        </div>
     </div>
        {/* Car Info */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-gray-500 shadow-2xl">
          <h2 className="text-xl font-bold text-indigo-700 mb-2">Car Information</h2>
          <p className="text-md"><span className="font-semibold">Make & Model:</span> {rentalRequest.car.make} {rentalRequest.car.model}</p>
          <p className="text-md"><span className="font-semibold">Year:</span> {rentalRequest.car.year}</p>
          <p className="text-md"><span className="font-semibold">Car Type:</span> {rentalRequest.car.carType}</p>
          <p className="text-md"><span className="font-semibold">Fuel Type:</span> {rentalRequest.car.fuelType}</p>
        </div>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Rental Period */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-gray-500 shadow-2xl">
        <h2 className="text-xl font-bold text-indigo-700 mb-2">Rental Period</h2>
        <p className="text-md"><span className="font-semibold">Start Date:</span> {formatDate(rentalRequest.startDate)}</p>
        <p className="text-md"><span className="font-semibold">End Date:</span> {formatDate(rentalRequest.endDate)}</p>
      </div>

      {/* Request Status */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-gray-500 shadow-2xl">
        <h2 className="text-xl font-bold text-indigo-700 mb-2">Request Status</h2>
        <p className={`text-md font-semibold ${rentalRequest.status === 'approved' ? 'text-green-600' : rentalRequest.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
          {rentalRequest.status === 'approved' ? 'Approved' : rentalRequest.status === 'rejected' ? 'Rejected' : 'Pending Approval'}
        </p>
      </div>
    </div>
      {/* Action Buttons */}
      <div className="mt-8 text-center space-x-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-105">
          Approve
        </button>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 shadow-lg transform hover:scale-105">
          Reject
        </button>
      </div>
    </div>
  );
};

export default RentalRequestDetail;
