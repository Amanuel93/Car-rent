import React from "react";
import whiteCar from "../../assets/white-car.png";
import sofa from "../../assets/sofa2.jpg";
import stand from "../../assets/TV stand3.jpg";
import armchair from "../../assets/Armchair1.jpg";
import loader from "../../assets/loader.webp";
import sinotruck from "../../assets/sinotruck.webp";
import { Link } from "react-router-dom";

const carList = [
  {
    id:1,
    name: "SOFA",
    price: 52000,
    image: sofa,
    aosDelay: "0",
    km: "NEW"
  },
  {
    id:2,
    name: "TV STAND",
    price: 45000,
    image: stand,
    aosDelay: "500",
    km: "NEW"
  },
  {
    id:3,
    name: "ARM CHAIR",
    price: 31000,
    image: armchair,
    aosDelay: "1000",
    km: "NEW",
  },
];

const CarList = () => {
  return (
    <div className="pb-24 pt-5">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Our Machines
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-xl pb-10">
          Book Your Comfort
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <Link to = "/products">
                <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                key={data.id}
              >
                <div className="w-full">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[180px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2 bg-orange-500 rounded-lg px-3 py-1">
                  <h1 className="font-semibold text-white">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p className="font-thin"><span className="text-2xl font-thin ">{data.price}</span> Birr</p>
                    <Link to="/product" className="border-2 border-white px-2 py-1 font-thin hover:bg-white rounded-lg">Details</Link>
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
