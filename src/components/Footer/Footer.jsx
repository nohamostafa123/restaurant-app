import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[70px]" />
              yamy food
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <br />
            <div className="flex items-center hover:text-green-700 gap-3">
              <FaLocationArrow />
              <p>Noha, manger store</p>
            </div>
            <div className="flex items-center hover:text-green-700 gap-3 mt-3">
              <FaMobileAlt />
              <p>+48 0123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center text-green-700 gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                   Links store
                </h1>
                <ul className={`flex flex-col  gap-3`}>
                  <li className="cursor-pointer hover:text-green-700">Home</li>
                  <li className="cursor-pointer hover:text-green-700">About</li>
                  <li className="cursor-pointer hover:text-green-700">Services</li>
                  <li className="cursor-pointer hover:text-green-700">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  social media
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-green-700">Facebook</li>
                  <li className="cursor-pointer hover:text-green-700">Instagram</li>
                  <li className="cursor-pointer hover:text-green-700">twitter</li>
                  <li className="cursor-pointer hover:text-green-700">Linkedin</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-green-700">Home</li>
                  <li className="cursor-pointer hover:text-green-700">About</li>
                  <li className="cursor-pointer hover:text-green-700">Services</li>
                  <li className="cursor-pointer hover:text-green-700">Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @<span className="text-green-700">copyright</span> 2023 All rights reserved 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
