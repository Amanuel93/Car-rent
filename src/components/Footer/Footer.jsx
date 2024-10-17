import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    id:1,
    title: "Home",
    location:'Bambis near Mekaneyesus church',
    link: "/#",
  },
  {
    id:2,
    title: "About",
    location:'Yerer',
    link: "/#about",
  },
  {
    id:3,
    title: "Contact",
    location:'Around Mekanisa',
    link: "/#contact",
  },
  {
    id:4,
    title: "Blog",
    location:'Around Kara',
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-900 mt-14 rounded-t-3xl text-white">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-2 ">
            <h1 className="sm:text-3xl  font-bold sm:text-left text-justify mb-3 flex  gap-3 font-serif">
              TECHNO TED FURNITURE
            </h1>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p className="text-white sm:text-[20px]">Mekanisa,Near Mekaneyesusu church, Addis Ababa, 1000</p>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <FaMobileAlt />
              <p>+251 911 245 678</p>
              <p>+251 939 717 171</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200" key={link.id}>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200" key={link.id}>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300  space-x-1 text-white md:text-[20px] dark:text-gray-200" key={link.id}>
                      <span>&#11162;</span>
                      <span>{link.location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
