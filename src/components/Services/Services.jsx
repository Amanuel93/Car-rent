import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FaChair } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

const services = [
  {
    name: "Affordable Pricing",
    icon: <FaChair className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "Enjoy high-quality furniture at unbeatable prices for any room or style.",
  },
  {
    name: "Fast and Reliable Delivery",
    icon: <FaTruckMoving className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "Count on our quick and reliable delivery to get your furniture to you right on time.",
  },
  {
    name: "Expert Assistance",
    icon: <FaScrewdriverWrench className="text-5xl text-primary group-hover:text-black duration-500" />,
    link: "#",
    description: "Our team provides expert guidance to help you find the perfect furniture for your space.",
  },
  
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((skill) => (
              <div
                key={skill.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-orange-500 hover:bg-primary duration-300 text-white rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
