import React from "react";
import img1 from "../assets/E-bike-grid1.png";
import img2 from "../assets/E-bike-grid2.png";
import img3 from "../assets/E-bike-grid3.png";

function SectionTwo() {
  return (
    <div className="bg-black text-white w-full flex flex-col items-center pb-24">
      <h2 className="text-5xl my-24 text-center max-w-xl leading-[120%]">
        Leading the Way in Sustainable Transportation
      </h2>
      <div className="max-w-[1440px] w-full relative flex justify-center">
        <img
          src={img1}
          alt="bike front"
          className="max-w-[1324px] bg-[#222222]"
        />
        <div className="absolute bottom-10 left-10 max-w-[490px] px-[52px]">
          <h3 className="text-[32px] leading-[120%] mb-4">
            High-quality materials
          </h3>
          <p className=" text-lg leading-[150%] text-[#909090]">
            Premium materials and advanced construction techniques to ensure
            durability and a long lifespan.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto p-5 lg:p-0 mt-6">
        <div className="grid grid-cols-12 gap-9 w-full">
          <div className="col-span-6">
            <img src={img2} alt="Image" className="w-full bg-[#222222] mb-9" />
            <div className=" max-w-[490px]">
              <h3 className="text-[32px] leading-[120%] mb-4">
                Advanced technology
              </h3>
              <p className=" text-lg leading-[150%] text-[#909090]">
                Innovative technologies such as automatic shifting, smart
                connectivity, and advanced battery management systems.
              </p>
            </div>
          </div>
          <div className="col-span-6">
            <img src={img3} alt="Image" className="w-full mb-9" />
            <div className="max-w-[490px] ">
              <h3 className="text-[32px] leading-[120%] mb-4">
                Sustainable manufacturing practices
              </h3>
              <p className=" text-lg leading-[150%] text-[#909090]">
                We have adopted environmentally-friendly manufacturing practices
                and source all our materials sustainably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
