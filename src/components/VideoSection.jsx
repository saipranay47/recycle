import React from "react";

function VideoSection() {
  return (
    <div className="bg-[#FE610B] relative">
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-0">
        <h1 className=" uppercase 2xl:text-[246px] xl:text-[194px] text-[19vw]">
          C<span className=" font-montreal-italic">o</span>mmute
        </h1>
      </div>
      <video
        id="v0"
        preload="auto"
        style={{ width: "100%", objectFit: "contain" }}
        playsInline
        muted
        autoPlay
        loop
        className="z-10 relative"
      >
        <source
          type="video/mp4"
          src="https://cowboy.com/cdn/shop/t/28/assets/cruiser--connected-ride.mp4"
        />
      </video>
    </div>
  );
}

export default VideoSection;
