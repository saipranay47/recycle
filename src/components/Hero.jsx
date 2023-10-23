import React from 'react'
import HeroImg from "../assets/Hero-E-bike.png";

function Hero() {
  return (
    <div className="max-w-[1440px] w-full relative flex justify-center">
      <img src={HeroImg} alt="E-Bike hero image" className='w-full' />
      <div className="absolute top-10 left-0 max-w-[590px] px-[52px]">
        <h3 className="text-[40px] leading-[48px] max-w-[530px] ">
          Revolutionize Your Commute with ReCycle E-Bikes
        </h3>
        <button className=" mt-5 inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-full text-base text-black bg-white hover:bg-gray-200">
          Order now
        </button>
      </div>
      <div class="absolute -bottom-5 left-1/2 -translate-x-1/2">
        <h1 className=" uppercase 2xl:text-[284px] xl:text-[264px] text-[19vw]">
          C<span className=" font-montreal-italic">o</span>mmute
        </h1>
      </div>
    </div>
  );
}

export default Hero