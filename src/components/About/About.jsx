import React from "react";
import CarPng from "../../assets/car1.png";
import Furniture from "../../assets/HeroFurniture2.jpg";

const About = () => {
  return (
    <div className="dark:bg-dark sm:min-h-[600px] sm:grid sm:place-items-center duration-300 rounded-xl">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={Furniture}
              alt=""
              className="sm:scale-125 md:scale-150 sm:-translate-x-11 max-h-[300px]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <div className="leading-8 tracking-wide text-xl flex flex-col">
                <span>Elevate Your Space: Discover Our Furniture Collection Today! Experience effortless style with our extensive range of quality furniture, 
                  exceptional craftsmanship, 
                  and unbeatable value. Whether you're furnishing your home, office, or any space, we have the perfect pieces to suit your needs!</span> 
              </div>
              <button  className="bg-orange-500 button-outline text-xl text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
