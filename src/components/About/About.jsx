import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-400 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 rounded-xl">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
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
                <span>TMT Car Rental & Tours company ( founded in 2005 G.C). experienced in providing Tour services & car hire services. 
                We offer wide range of car rental service from Automobile to SUV vehicles, Buses, off-road 4x4 jeeps, Limousines, & Shuttle services throughout the country.
                At TMT, we are dedicated to providing you with a hassle-free car rental experience.</span>  

                <span className="pt-4 hidden md:block">With a diverse fleet of well-maintained vehicles and a commitment to exceptional 
                customer service, we strive to meet your travel needs. Whether you're exploring the city or embarking on an adventure, 
                we ensure your journey is safe, comfortable, and memorable. Join us in driving towards a better tomorrow!</span>
              </div>
              <button data-aos="fade-up" className="button-outline text-xl text-white">
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
