import React from "react";
import { useParams } from "react-router-dom";   
import heart from "./assets/heart.png";
import l1 from "./assets/l1.webp";
import l2 from "./assets/l2.webp";
import l3 from "./assets/l3.webp";
import l4 from "./assets/l4.webp";
import l5 from "./assets/l5.webp";
import l6 from "./assets/l6.webp";
import l7 from "./assets/l7.webp";
import l8 from "./assets/l8.webp";
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


const lights = [
  { id: 1, img: l1, title: "Barna gold colored", prize: "$229.99" },
  { id: 2, img: l2, title: "Helestra Sona LED", prize: "$99.99" },
  { id: 3, img: l3, title: "White Matte LED", prize: "$259.99" },
  { id: 4, img: l4, title: "Lindby Berisha LED", prize: "$429.99" },
  { id: 5, img: l5, title: "Lindby Gracjan LED", prize: "$329.99" },
  { id: 6, img: l6, title: "Ellamina LED", prize: "$129.99" },
  { id: 7, img: l7, title: "Lindby Simera LED", prize: "$199.99" },
  { id: 8, img: l8, title: "Paulmann Artia LED", prize: "$119.99" },
  { id: 9, img: l9, title: "Arrcchio Wall lamp", prize: "$329.99" },
  { id: 10, img: l10, title: "BEGA 33017 LED", prize: "$95.99" },
  { id: 11, img: l11, title: "Ideal Lux Lamp", prize: "$209.99" },
  { id: 12, img: l12, title: "Taparita LED LAMP", prize: "$229.99" },
  { id: 13, img: l13, title: "Lanae Gracjan LED", prize: "$129.99" },
  { id: 14, img: l14, title: "Cremona  LED", prize: "$189.99" },
  { id: 15, img: l15, title: "Eskina frame  LED", prize: "$159.99" },
  { id: 16, img: l16, title: "Camera Wall Light", prize: "$179.99" },
  ];
  




const Shop = () => {
  const { id } = useParams(); 
  const product = lights.find((p) => p.id.toString() === id); 

  if (!product) {
    return;
  }

  return (
    <div className="mx-auto max-w-[1300px] px-4">
      <div className="col-7 m-5 flex gap-5">
        <img
          src={product.img}
          alt={product.title}
          style={{ width: "550px", height: "500px", marginLeft: "100px" }}
          className="mt-10 mr-10 rounded-2xl"
        />

        <div className="col-6">
          <p className="mt-10 font-bold text-4xl">{product.title}</p>
          <p className="mt-5 font-bold">MRP: {product.prize}</p>
          <p className="mt-5">Inclusive of All Taxes</p>

          <button
            className="block mt-10 rounded-lg text-white bg-gray-950"
            style={{ width: "300px", height: "50px" }}
          >
            Add To Bag
          </button>

          <button
            className="mt-10 rounded-lg text-white bg-gray-950 flex items-center justify-center gap-2"
            style={{ width: "300px", height: "50px" }}
          >
            Favourite
            <img src={heart} style={{ width: "1rem", height: "1rem" }} />
          </button>
        </div>

        

        



      </div> 
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

export default Shop;
    