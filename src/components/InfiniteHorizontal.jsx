import React, { useRef, useEffect } from "react";

function InfiniteHorizontal({text}) {
  const listRef = useRef(null);

  useEffect(() => {
    const cloneList = listRef.current.cloneNode(true);
    listRef.current.parentElement.appendChild(cloneList);
  }, []);
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={listRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll lg:text-[246px] text-8xl"
      >
        <li>{text}</li>
        <li>{text}</li>
      </ul>
    </div>
  );
}

export default InfiniteHorizontal;
