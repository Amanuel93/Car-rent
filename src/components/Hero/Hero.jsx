import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import Machines from "../../assets/HeroFurniture.jpg";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 pb-4">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : Machines}
              alt=""
              className="sm:scale-125 md:scale-150 relative -z-10 max-h-[800px] "
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 py-2 sm:py-0">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-5xl font-semibold font-serif"
            >
              <span className="text-red-500">Techno</span> TED Furniture
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="text-xl">
            Transform Your Space: Explore Our Furniture Collection Today! Discover a wide selection of beautifully crafted furniture, combining quality, style, and value. 
            Whether you're furnishing your home, 
            office, or any other space, we have the perfect pieces to match your vision!!{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-orange-500 hover:bg-primary/80 transition duration-500 py-2 px-6 text-white text-xl"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
