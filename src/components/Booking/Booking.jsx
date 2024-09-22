import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    vehicleName: '',
    email: '',
    phoneNumber: '',
    type: '',
    pickupDate: '',
    destination: '',
    dropoffLocation: '',
    dropoffTime: '',
    pickupLocation: '',
    pickupTime: '',
    dropoffDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here (e.g., send data to server)
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="dark:bg-gray-900 bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Reserve Your Option</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="vehicleName">Vehicle Name</label>
            <input
              type="text"
              name="vehicleName"
              id="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>


          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            >
              <option value="">Select type</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Truck">Truck</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="pickupDate">Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              id="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="pickupTime">Pickup Time</label>
            <input
              type="time"
              name="pickupTime"
              id="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="pickupLocation">Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              id="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="destination">Destination</label>
            <input
              type="text"
              name="destination"
              id="destination"
              value={formData.destination}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="dropoffDate">Drop-off Date</label>
            <input
              type="date"
              name="dropoffDate"
              id="dropoffDate"
              value={formData.dropoffDate}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="dropoffTime">Drop-off Time</label>
            <input
              type="time"
              name="dropoffTime"
              id="dropoffTime"
              value={formData.dropoffTime}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 dark:text-white" htmlFor="dropoffLocation">Drop-off Location</label>
            <input
              type="text"
              name="dropoffLocation"
              id="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Booking;
