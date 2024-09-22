import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import { Link } from "react-router-dom";

const carList = [
  {
    id:1,
    name: "BMW UX",
    price: 2000,
    image: whiteCar,
    aosDelay: "0",
    km: "12km"
  },
  {
    id:2,
    name: "KIA UX",
    price: 3500,
    image: car2,
    aosDelay: "500",
    km: "20km"
  },
  {
    id:3,
    name: "BMW UX",
    price: 4100,
    image: car3,
    aosDelay: "1000",
    km: "45km",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Our Vehicles
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-xl pb-10">
          Book Your Comfort
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <Link to = "/cars">
                <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                key={data.id}
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2 bg-yellow-500 rounded-lg px-3 py-1">
                  <h1 className="text-primary font-semibold text-white">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p><span className="text-2xl">{data.price}</span> Birr/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  {data.km}
                </p>
              </div>
            </Link>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
