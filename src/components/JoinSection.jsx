import React from "react";
import battryImg from "../assets/bikeBattery.png";
import joinImg from "../assets/bikeJoin.png";

function JoinSection() {
  return (
    <div className="relative w-full ">
      <img src={battryImg} alt="" className="w-full" />

      <h1 className="absolute top-0 left-10 uppercase 2xl:text-[246px] xl:text-[224px] text-[19vw] text-white max-w-[1440px] px-14">
        J<span className=" font-montreal-italic">o</span>in
      </h1>

      <div className="flex flex-cols justify-center items-center px-14">
        <h3 className=" absolute bottom-2 py-14 text-white text-5xl  border-t-2 w-full max-w-[1440px]">
          Join the ReCycle <br /> Revolution
        </h3>
      </div>
    </div>
  );
}

export default JoinSection;
