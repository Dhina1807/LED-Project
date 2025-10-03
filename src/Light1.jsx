import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "./assets/cart.png";
import l1 from "./assets/l1.webp";
import l2 from "./assets/l2.webp";
import l3 from "./assets/l3.webp";
import l4 from "./assets/l4.webp";
import l5 from "./assets/l5.webp";
import l6 from "./assets/l6.webp";
import l7 from "./assets/l7.webp";
import l8 from "./assets/l8.webp";
import bulb5 from "./assets/bulb5.jpg";
import bulb6 from "./assets/bulb6.jpg";
import bulb7 from "./assets/bulb7.jpg";
import bulb8 from "./assets/bulb8.jpg";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const lights = [
  { id: 1, img: l1, title: "Barna gold colored", prize: "$229.99" },
  { id: 2, img: l2, title: "Helestra Sona LED", prize: "$99.99" },
  { id: 3, img: l3, title: "White Matte LED", prize: "$259.99" },
  { id: 4, img: l4, title: "Lindby Berisha LED", prize: "$429.99" },
  { id: 5, img: l5, title: "Lindby Gracjan LED", prize: "$329.99" },
  { id: 6, img: l6, title: "Ellamina LED", prize: "$129.99" },
  { id: 7, img: l7, title: "Lindby Simera LED", prize: "$199.99" },
  { id: 8, img: l8, title: "Paulmann Artia LED", prize: "$119.99" },
];

const Light1 = () => {
  const [counts, setCounts] = useState(
    Object.fromEntries(lights.map((p) => [p.id, 1]))
  );

  const increment = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decrement = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  return (
    <div className="mx-auto max-w-[1300px] px-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mt-3 gap-3">
        <div className="flex items-center">
          <p className="text-2xl md:text-3xl font-bold text-yellow-400">LED</p>
          <p className="text-2xl md:text-3xl font-bold ml-2">ZEN</p>
        </div>
        <input
          className="w-full md:w-[400px] lg:w-[600px] xl:w-[850px] border rounded px-3 py-2"
          placeholder="Search here..."
        />
        <div className="flex items-center gap-3">
          <p className="text-sm md:text-base">0 item(0)</p>
          <img src={cart} className="w-8 h-8" alt="cart" />
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full bg-blue-600 text-white py-2 mt-4">
        <ul className="flex flex-wrap gap-5 justify-center md:justify-start ml-5 text-sm md:text-base">
          <li>Interior</li>
          <li>Exterior</li>
          <li>Strips</li>
          <li>Bulbs</li>
        </ul>
      </div>

      {/* Title */}
      <div className="mt-10 mb-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans">
          LED-Ceiling Lights
        </h1>
      </div>
      <hr />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {lights.map((light) => (
          <div
            key={light.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
          >
            <Link to={`/lights/${light.id}`}>
              <div className="relative">
                <img
                  src={light.img}
                  alt={light.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="absolute top-2 right-2 font-semibold bg-yellow-500 px-2 py-1 rounded text-xs">
                  50% off
                </p>
              </div>
              <h3 className="mt-2 text-base md:text-lg font-semibold">
                {light.title}
              </h3>
              <p className="text-gray-600 font-semibold">{light.prize}</p>
             
            </Link>

            {/* Counter (outside Link to keep it working) */}
            
            <div className="flex items-center gap-2 mt-4 border rounded px-2 py-1 w-fit">
              <div className="flex gap-1 mr-3">
              <button
                onClick={() => decrement(light.id)}
                className="px-1 text-gray-700"
              >
                -
              </button>
              <p className="text-lg font-bold">{counts[light.id]}</p>
              <button
                onClick={() => increment(light.id)}
                className="px-1 text-gray-700"
              >
                +
              </button>
              </div>
               <button className=" px-3 py-1 w-full h-[35px] mt-2 bg-slate-900 text-white rounded-lg hover:bg-slate-500">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col lg:flex-row bg-gray-200 p-6 rounded-lg mt-10 gap-6">
        {/* Info */}
        <div className="flex-1">
          <ul className="space-y-2">
            <li className="text-lg font-bold">Information</li>
            <li className="text-blue-600">F.A.Q</li>
            <li className="text-blue-600">How to Order</li>
            <li className="text-blue-600">Manufacturers</li>
            <li className="text-blue-600">Terms & Conditions</li>
          </ul>
        </div>

        {/* Most Viewed */}
        <div className="flex-1">
          <p className="text-lg md:text-xl font-bold mb-4">
            Most Viewed Products
          </p>
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

export default Light1;


