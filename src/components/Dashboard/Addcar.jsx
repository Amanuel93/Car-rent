import React, { useState } from 'react';

const AddCar = ({ onSubmit }) => {
  const [carDetails, setCarDetails] = useState({
    carType: '',
    make: '',
    model: '',
    year: '',
    fuelType: '',
    transmissionType: '',
    seatingCapacity: '',
    availabilityStatus: '',
    features: '',
    pricePerDay: '',
    images: null, // For file upload
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setCarDetails({
      ...carDetails,
      images: e.target.files,
    });
  };

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(carDetails); // Call the parent onSubmit function
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-semibold text-gray-700 dark:text-white mb-4">Add a New Car</h2>

      {/* Grid layout for responsive form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Car Type */}
        <div className="flex flex-col">
          <label htmlFor="carType" className="font-medium text-gray-700 dark:text-white">
            Car Type
          </label>
          <input
            type="text"
            id="carType"
            name="carType"
            value={carDetails.carType}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black bg-gray-200"
            placeholder="Sedan, SUV, etc."
          />
        </div>

        {/* Make */}
        <div className="flex flex-col dark:text-white">
          <label htmlFor="make" className="font-medium text-gray-700 dark:text-white">
            Make
          </label>
          <input
            type="text"
            id="make"
            name="make"
            value={carDetails.make}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black bg-gray-200"
            placeholder="Toyota, Honda, etc."
          />
        </div>

        {/* Model */}
        <div className="flex flex-col">
          <label htmlFor="model" className="font-medium text-gray-700 dark:text-white">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={carDetails.model}
            onChange={handleChange}
            className="bg-gray-200 mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="Camry, Accord, etc."
          />
        </div>

        {/* Year */}
        <div className="flex flex-col">
          <label htmlFor="year" className="font-medium text-gray-700 dark:text-white">
            Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            value={carDetails.year}
            onChange={handleChange}
            className="bg-gray-200 mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="2021, 2020, etc."
          />
        </div>

        {/* Fuel Type */}
        <div className="flex flex-col">
          <label htmlFor="fuelType" className="font-medium text-gray-700 dark:text-white">
            Fuel Type
          </label>
          <input
            type="text"
            id="fuelType"
            name="fuelType"
            value={carDetails.fuelType}
            onChange={handleChange}
            className="bg-gray-200 mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="Petrol, Diesel, etc."
          />
        </div>

        {/* Transmission Type */}
        <div className="flex flex-col">
          <label htmlFor="transmissionType" className="font-medium text-gray-700 dark:text-white">
            Transmission Type
          </label>
          <input
            type="text"
            id="transmissionType"
            name="transmissionType"
            value={carDetails.transmissionType}
            onChange={handleChange}
            className="bg-gray-200 mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="Automatic, Manual"
          />
        </div>

        {/* Seating Capacity */}
        <div className="flex flex-col">
          <label htmlFor="seatingCapacity" className="font-medium text-gray-700 dark:text-white">
            Seating Capacity
          </label>
          <input
            type="number"
            id="seatingCapacity"
            name="seatingCapacity"
            value={carDetails.seatingCapacity}
            onChange={handleChange}
            className="bg-gray-200 mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="5, 7, etc."
          />
        </div>

        {/* Price Per Day */}
        <div className="flex flex-col">
          <label htmlFor="pricePerDay" className="font-medium text-gray-700 dark:text-white">
            Price Per Day
          </label>
          <input
            type="number"
            id="pricePerDay"
            name="pricePerDay"
            value={carDetails.pricePerDay}
            onChange={handleChange}
            className="bg-gray-200 mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="50, 100, etc."
          />
        </div>

        {/* Availability Status */}
        <div className="flex flex-col">
          <label htmlFor="availabilityStatus" className="font-medium text-gray-700 dark:text-white">
            Availability Status
          </label>
          <select
            id="availabilityStatus"
            name="availabilityStatus"
            value={carDetails.availabilityStatus}
            onChange={handleChange}
            className="bg-gray-200 mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
          >
            <option value="">Select</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        {/* Features */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="features" className="font-medium text-gray-700 dark:text-white">
            Features (comma-separated)
          </label>
          <input
            type="text"
            id="features"
            name="features"
            value={carDetails.features}
            onChange={handleChange}
            className="bg-gray-200 mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="AC, GPS, Bluetooth"
          />
        </div>

        {/* File Upload */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="images" className="font-medium text-gray-700 dark:text-white">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleFileChange}
            className="bg-gray-200 mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-gray-800 text-white p-3 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Car
        </button>
      </div>
    </form>
  );
};

export default AddCar;
