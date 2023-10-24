import React from 'react'
import battryImg from "../assets/bikeBattery.png";
import joinImg from "../assets/bikeJoin.png";

function JoinSection() {
  return (
    <div className="relative w-full ">
      <img src={battryImg} alt="" className="w-full" />
      <div className="absolute top-0 left-14 ">
        <h1 className=" uppercase 2xl:text-[246px] xl:text-[224px] text-[19vw] text-white">
          J<span className=" font-montreal-italic">o</span>in
        </h1>
      </div>
      <div>
        <h3 className=' absolute bottom-2 pl-14 py-14 text-white text-5xl  border-t-2 w-full'>Join the ReCycle <br /> Revolution</h3>
      </div>
    </div>
  );
}

export default JoinSection