import React from "react";
import cart from "./assets/cart.png";
import bulb1 from "./assets/bulb1.jpg";
import bulb2 from "./assets/bulb2.jpg";
import bulb3 from "./assets/bulb3.jpg";
import bulb4 from "./assets/bulb4.jpg";
import bulb5 from "./assets/bulb5.jpg";
import bulb6 from "./assets/bulb6.jpg";
import bulb7 from "./assets/bulb7.jpg";
import bulb8 from "./assets/bulb8.jpg";
import sofa from "./assets/sofa.jpg";
import light1 from "./assets/light1.png";
import light2 from "./assets/light2.png";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";



const Web = () => {
  return (
    <div className="mx-auto max-w-[1300px] px-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mt-3 gap-4">
        <div className="flex items-center">
          <p className="text-3xl md:text-4xl font-bold text-[#FFF085]">LED</p>
          <p className="text-3xl md:text-4xl font-bold ml-2">ZEN</p>
        </div>

        <input
          className="w-full md:w-[400px] lg:w-[600px] xl:w-[850px] border rounded px-3 py-2"
          placeholder="Search here..."
        />

        <div className="flex items-center gap-3">
          <p>0 item(0)</p>
          <img src={cart} className="w-8 h-8" alt="cart" />
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full bg-blue-600 text-white py-2 mt-4">
        <ul className="flex flex-wrap gap-5 justify-center md:justify-start px-4">
          <li>Interior</li>
          <li>Exterior</li>
          <li>Strips</li>
          <li>Bulbs</li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-4 m-5">
        <div className="relative flex-1">
          <img
            src={sofa}
            className="rounded-lg w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
            alt="sofa"
          />
          <p className="absolute font-bold text-xl md:text-3xl lg:text-4xl text-black p-4 top-6 md:top-10 left-5">
            Everything you need <br /> in one place!
          </p>
          <button className="absolute w-[100px] h-[40px] bg-sky-500/80 rounded-lg text-white bottom-6 left-5 hover:bg-sky-600">
            Shop Now
          </button>
        </div>

        {/* Side images */}
        <div className="flex lg:flex-col flex-row gap-4 w-full lg:w-[350px]">
          <div className="relative flex-1">
            <Link to={`/Light1`}>
            <img
              src={light1}
              className="rounded-lg w-full h-[180px] object-cover bg-gray-200 hover:bg-violet-200"
              alt="lamp"
            /></Link>
            <p className="absolute top-3 left-3 font-bold text-md md:text-lg">
              Elegant <br /> Efficient <br /> Illumination
            </p>
          </div>

          <div className="relative flex-1">
            <Link to={`/Light2`}><img
              src={light2}
              className="rounded-lg w-full h-[180px] object-cover bg-gray-200 hover:bg-violet-200 "
              alt="lamp1"
            /></Link>
            <p className="absolute top-3 left-3 font-bold text-md md:text-lg">
              Elegant <br /> Outdoor <br /> Lighting
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <p className="m-6 text-center text-2xl md:text-4xl font-bold">
        Die beliebtesten Kategorien
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4">
        {[bulb1, bulb2, bulb3, bulb4].map((img, i) => (
          <div className="relative group" key={i}>
            <img
              src={img}
              className="rounded-lg w-full h-[180px] md:h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
              alt={`bulb${i + 1}`}
            />
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-lg md:text-xl font-bold">
              {["Bulbs", "Exterior Lights", "Interior Lights", "Strips"][i]}
            </p>
          </div>
        ))}
      </div>

      {/* Shop By Brand */}
      <p className="m-6 text-center text-2xl md:text-4xl font-bold">
        Shop By Brand
      </p>
      <hr className="mb-4" />

      {/* Footer Section */}
      <div className="flex flex-col lg:flex-row bg-gray-200 p-6 rounded-lg">
        {/* Info Column */}
        <div className="flex-1">
          <ul className="space-y-2">
            <li className="text-xl font-bold">Information</li>
            <li className="text-blue-600">F.A.Q</li>
            <li className="text-blue-600">How to Order</li>
            <li className="text-blue-600">Manufacturers</li>
            <li className="text-blue-600">Terms & Conditions</li>
          </ul>
        </div>

        {/* Most Viewed */}
        <div className="flex-1 mt-6 lg:mt-0">
          <p className="text-xl font-bold mb-4">Most Viewed Products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[bulb5, bulb6, bulb7, bulb8].map((img, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg"
              >
                <img src={img} className="w-16 h-16 rounded-md" alt={`bulb${i}`} />
                <div>
                  <p className="text-sm font-semibold">
                    {["ArrcioLED", "Prios Dinvaris", "Barna", "Paulmann Artia"][i]}
                  </p>
                  <div className="flex text-yellow-500">
                    {Array(i + 3)
                      .fill(null)
                      .map((_, j) => (
                        <FaStar key={j} />
                      ))}
                    {i === 0 && <CiStar />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
