import React from "react";
import img from "../public/image.webp";
import Image from "next/image";
const Card = () => {
  return (
    <div className="w-[300px] h-[350px] card shadow-lg  flex flex-col">
      <div className=" m-3  img_card">
        <Image  src={img} alt="card_data" />
      </div>
      <div className="flex flex-col items-top">
        <div className="flex justify-between">
          <p className={`m-3 uppercase font-[500] text-white`}>Asset Name</p>
          <p className={`m-3 uppercase font-[500] text-white`}>#452</p>
        </div>
        <div className="flex justify-between m-3">
          <div className="">
            <h2 className=" text-gray-400 text-sm">Current Price</h2>
            <p className={` uppercase font-[500] text-white`}>3 CX</p>
          </div>
          <div>
            <h2 className="text-sm text-gray-400">Sale Ends In</h2>
            <p className={` uppercase font-[500] text-white flex justify-end`}>2 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
