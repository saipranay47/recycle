import React, { useState, useEffect, useRef } from "react";
import BlackImg from "../assets/E-bikeBlack.png";
import WhiteImg from "../assets/E-bikeWhite.png";
import OlivImg from "../assets/E-bikeOliv.png";
import LavenderImg from "../assets/E-bikeLavender.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Gallery() {
  const [bgColor, setBgColor] = useState("#222222");
  const [currentImage, setCurrentImage] = useState(BlackImg);

  const changeImage = (image, backgroundColor) => {
    setCurrentImage(image);
    setBgColor(backgroundColor);
  };

  const listRef = useRef(null);

  useEffect(() => {
    const cloneList = listRef.current.cloneNode(true);
    listRef.current.parentElement.appendChild(cloneList);
  }, []);

  return (
    <div
      className={classNames(
        "w-full flex justify-center items-center overflow-hidden flex-col min-h-[800px]"
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute z-0 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          ref={listRef}
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll lg:text-[800px] text-8xl  leading-0"
          style={{ color: bgColor == "#222222" ? "#ffffff" : "#222222" }}
        >
          <li>EcoBoost</li>
          <li>EcoBoost</li>
        </ul>
      </div>
      <div>
        <img
          src={currentImage}
          alt="E-bike"
          className=" relative -bottom-[310px] z-10 "
        />
      </div>
      <div className="bg-white px-3 py-3 rounded-full flex gap-3 relative z-20 bottom-[0px]">
        <button
          onClick={() => changeImage(BlackImg, "#222222")}
          className="p-4 bg-black rounded-full"
        ></button>
        <button
          onClick={() => changeImage(LavenderImg, "#e3e4fc")}
          className="p-4 bg-[#e3e4fc] rounded-full"
        ></button>
        <button
          onClick={() => changeImage(WhiteImg, "#F2E9DC")}
          className="p-4 rounded-full bg-[#e8dec8]"
        ></button>
        <button
          onClick={() => changeImage(OlivImg, "#92A396")}
          className="p-4 rounded-full bg-[#92A396]"
        ></button>
      </div>
    </div>
  );
}

export default Gallery;
