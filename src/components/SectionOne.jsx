import React from "react";

function SectionOne() {
  return (
    <div className="max-w-[1324px] ">
      <div className="border-b-2">
        <div class=" lg:p-0 p-5 grid grid-cols-12 gap-5 my-20">
          <div class="col-span-4">
            <h3 className=" text-5xl">Positive Impact of ReCycle E-Bikes</h3>
          </div>
          <div class="col-span-2"></div>
          <div class="col-span-6">
            <p className="text-lg max-w-[600px]">
              Not only are ReCycle e-bikes good for the environment, they are
              also beneficial for your health and well-being. Electric-assisted
              biking can provide a low-impact cardiovascular workout and help
              reduce stress.
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 flex w-full justify-around items-center">
        <div className="flex flex-col justify-start w-min">
          <span className="lg:text-[240px] text-8xl">25%</span>
          <p className=" text-3xl leading-10">
            Reduction in commuter transportation carbon emissions.
          </p>
        </div>
        <div className="border-r-2 h-[500px] -mt-20"></div>
        <div className="flex flex-col justify-start w-min">
          <span className="lg:text-[240px] text-8xl">30%</span>
          <p className="text-3xl leading-10 ">
            Average annual gas savings for ReCycle e-bike commuters.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
