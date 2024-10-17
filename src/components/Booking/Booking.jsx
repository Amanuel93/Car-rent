// import React, { useState } from 'react';

// const Booking = () => {
//   const [formData, setFormData] = useState({
//     vehicleName: '',
//     email: '',
//     phoneNumber: '',
//     type: '',
//     pickupDate: '',
//     destination: '',
//     dropoffLocation: '',
//     dropoffTime: '',
//     pickupLocation: '',
//     pickupTime: '',
//     dropoffDate: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Add form submission logic here (e.g., send data to server)
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="dark:bg-gray-900 bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-white">Reserve Your Option</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="vehicleName">Vehicle Name</label>
//             <input
//               type="text"
//               name="vehicleName"
//               id="vehicleName"
//               value={formData.vehicleName}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>


//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="tel"
//               name="phoneNumber"
//               id="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="type">Type</label>
//             <select
//               name="type"
//               id="type"
//               value={formData.type}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             >
//               <option value="">Select type</option>
//               <option value="SUV">SUV</option>
//               <option value="Sedan">Sedan</option>
//               <option value="Truck">Truck</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="pickupDate">Pickup Date</label>
//             <input
//               type="date"
//               name="pickupDate"
//               id="pickupDate"
//               value={formData.pickupDate}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="pickupTime">Pickup Time</label>
//             <input
//               type="time"
//               name="pickupTime"
//               id="pickupTime"
//               value={formData.pickupTime}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="pickupLocation">Pickup Location</label>
//             <input
//               type="text"
//               name="pickupLocation"
//               id="pickupLocation"
//               value={formData.pickupLocation}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="destination">Destination</label>
//             <input
//               type="text"
//               name="destination"
//               id="destination"
//               value={formData.destination}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="dropoffDate">Drop-off Date</label>
//             <input
//               type="date"
//               name="dropoffDate"
//               id="dropoffDate"
//               value={formData.dropoffDate}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="dropoffTime">Drop-off Time</label>
//             <input
//               type="time"
//               name="dropoffTime"
//               id="dropoffTime"
//               value={formData.dropoffTime}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-600 dark:text-white" htmlFor="dropoffLocation">Drop-off Location</label>
//             <input
//               type="text"
//               name="dropoffLocation"
//               id="dropoffLocation"
//               value={formData.dropoffLocation}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               required
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="mt-6 w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Booking;

import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    carId: '',
    startDate: '',
    endDate: '',
    drivingLicense: null,
    idCard: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files ? e.target.files[0] : null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-center">Rent a Machine</h2>
      <form onSubmit={handleSubmit} className="space-y-6 dark:bg-gray-800">
        
        {/* Row 1: Username and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-white">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-black"
              placeholder="Enter your Fullname"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder='Enter email'
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-black"
              required
            />
          </div>
        </div>

        {/* Row 2: Phone Number and Car Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-white">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              placeholder='Enter Phone-number'
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-black"
              required
            />
          </div>
        </div>

        {/* Row 3: Start Date and End Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-white">Start Date</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-black"
              required
            />
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-white">End Date</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-black"
              required
            />
          </div>
        </div>

        {/* Row 4: Driving License and ID Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Driving License */}
          <div>
            <label htmlFor="drivingLicense" className="block text-sm font-medium text-gray-700 dark:text-white">Upload Driving License</label>
            <input
              type="file"
              name="drivingLicense"
              id="drivingLicense"
              onChange={handleFileChange}
              className="w-full mt-1 p-2 bg-gray-200 text-black"
              required
            />
          </div>

          {/* ID Card */}
          <div>
            <label htmlFor="idCard" className="block text-sm font-medium text-gray-700 dark:text-white">Upload ID Card</label>
            <input
              type="file"
              name="idCard"
              id="idCard"
              onChange={handleFileChange}
              className="w-full mt-1 p-2 bg-gray-200 text-black"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Submit Rental Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
