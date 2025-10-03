import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "./assets/cart.png";
import l9 from "./assets/l9.webp";
import l10 from "./assets/l10.webp";
import l11 from "./assets/l11.webp";
import l12 from "./assets/l12.webp";
import l13 from "./assets/l13.webp";
import l14 from "./assets/l14.webp";
import l15 from "./assets/l15.webp";
import l16 from "./assets/l16.webp";
import bulb5 from "./assets/bulb5.jpg";
import bulb6 from "./assets/bulb6.jpg";
import bulb7 from "./assets/bulb7.jpg";
import bulb8 from "./assets/bulb8.jpg";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Bulbs = [
  { id: 9, img: l9, title: "Arrcchio Wall lamp", prize: "$329.99" },
  { id: 10, img: l10, title: "BEGA 33017 LED", prize: "$95.99" },
  { id: 11, img: l11, title: "Ideal Lux Lamp", prize: "$209.99" },
  { id: 12, img: l12, title: "Taparita LED LAMP", prize: "$229.99" },
  { id: 13, img: l13, title: "Lanae Gracjan LED", prize: "$129.99" },
  { id: 14, img: l14, title: "Cremona  LED", prize: "$189.99" },
  { id: 15, img: l15, title: "Eskina frame  LED", prize: "$159.99" },
  { id: 16, img: l16, title: "Camera Wall Light", prize: "$179.99" },
];

const Light2 = () => {
  const [counts, setCounts] = useState(
    Bulbs.reduce((acc, bulb) => ({ ...acc, [bulb.id]: 1 }), {})
  );

  const increment = (id) => {
    setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));
  };

  return (
    <div className="mx-auto max-w-[1300px] px-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mt-3 gap-4">
        <div className="flex items-center">
          <p className="text-3xl md:text-4xl font-bold text-yellow-300">LED</p>
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

      {/* Nav */}
      <div className="w-full bg-blue-600 text-white py-2 mt-4">
        <ul className="flex flex-wrap gap-5 justify-center md:justify-start px-4">
          <li>Interior</li>
          <li>Exterior</li>
          <li>Strips</li>
          <li>Bulbs</li>
        </ul>
      </div>

      {/* Title */}
      <div className="mt-10 mb-5">
        <h1 className="text-3xl md:text-4xl font-bold">LED-Wall Lights</h1>
      </div>
      <hr />

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Bulbs.map((light) => (
          <div
            key={light.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 relative"
          >
            <Link to={`/Bulbs/${light.id}`}>
              <img
                src={light.img}
                alt={light.title}
                className="w-full h-[220px] sm:h-[250px] object-cover rounded-md"
              />
              <p className="absolute top-5 right-5 font-semibold bg-yellow-500 text-black px-2 py-1 rounded text-xs">
                50% off
              </p>
              <h3 className="mt-2 text-lg font-semibold">{light.title}</h3>
              <p className="text-gray-600 font-semibold">{light.prize}</p>
             
            </Link>

            {/* Counter */}
            <div className="flex items-center justify-between mt-3 border rounded px-2 py-1">
              
              <div className="flex gap-1 mr-3 ">
              <button
                onClick={() => decrement(light.id)}
                className="text-lg font-bold"
              >
                -
              </button>
              <p className="text-lg font-bold">{counts[light.id]}</p>
              <button
                onClick={() => increment(light.id)}
                className="text-lg font-bold"
              >
                +
              </button>
              </div>
              

              
              <div className="mr-28 my-1">
               <button className="mt-2 mx- bg-slate-900 text-white rounded-lg py-2 hover:bg-slate-600 w-[125px]">
                Add To Cart
              </button>
              </div>
              
              
              
            </div>
            
            
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col lg:flex-row bg-gray-200 p-6 rounded-lg mt-10 gap-6">
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
        <div className="flex-1">
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

export default Light2;
