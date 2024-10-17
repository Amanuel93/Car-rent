import React, { useState } from 'react';
// import axios from 'axios';

const CarUpdatePage = () => {
  // Initial form data state
  const [formData, setFormData] = useState({
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
    rentalDurationMin: '',
    rentalDurationMax: '',
    images: [],
  });

  const [filePreviews, setFilePreviews] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image file input
  const handleImageChange = (e) => {
    const files = e.target.files;
    setFormData({
      ...formData,
      images: files,
    });

    // File previews for better UX
    const previews = Array.from(files).map((file) => URL.createObjectURL(file));
    setFilePreviews(previews);
  };

  // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSubmit = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (key === 'images') {
//         Array.from(formData.images).forEach((image) => formDataToSubmit.append('images', image));
//       } else {
//         formDataToSubmit.append(key, formData[key]);
//       }
//     });

//     try {
//       await axios.put(`/api/cars/${carId}`, formDataToSubmit, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert('Car updated successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error updating car');
//     }
//   };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-black shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Update Car Details</h2>

        <form className="space-y-6">
          {/* Car Make and Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Make</label>
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter car make"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter car model"
              />
            </div>
          </div>

          {/* Year and Car Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter year"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Car Type</label>
              <input
                type="text"
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter car type (e.g. SUV, Sedan)"
              />
            </div>
          </div>

          {/* Fuel and Transmission Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Fuel Type</label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="">Select Fuel Type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Transmission Type</label>
              <select
                name="transmissionType"
                value={formData.transmissionType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="">Select Transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
          </div>

          {/* Seating Capacity and Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Seating Capacity</label>
              <input
                type="number"
                name="seatingCapacity"
                value={formData.seatingCapacity}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter seating capacity"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Availability Status</label>
              <select
                name="availabilityStatus"
                value={formData.availabilityStatus}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="">Select Availability</option>
                <option value="Available">Available</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
          </div>

          {/* Features and Price */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Features (comma-separated)</label>
            <input
              type="text"
              name="features"
              value={formData.features}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter features (e.g. GPS, Bluetooth)"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">Price Per Day</label>
            <input
              type="number"
              name="pricePerDay"
              value={formData.pricePerDay}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter price per day"
            />
          </div>

          {/* Rental Duration */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Rental Duration Min</label>
              <input
                type="number"
                name="rentalDurationMin"
                value={formData.rentalDurationMin}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter minimum rental duration"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Rental Duration Max</label>
              <input
                type="number"
                name="rentalDurationMax"
                value={formData.rentalDurationMax}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter maximum rental duration"
              />
            </div>
          </div> */}

          {/* Upload Images */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Upload Images</label>
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              {filePreviews.map((src, index) => (
                <img key={index} src={src} alt="Preview" className="h-32 w-full object-cover rounded-lg shadow" />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Update Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarUpdatePage;
