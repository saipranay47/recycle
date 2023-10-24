import React from "react";

function EndCredit() {
  return (
    <div className="w-full bg-white text-black flex justify-center items-center p-5">
      <span className=" text-lg">
        Website Built by{" "}
        <a
          href="https://www.linkedin.com/in/saipranay47/"
          target="_blank"
          className="underline"
        >
          Sai Pranay
        </a>{"  "}
        using React.js & Tailwind CSS -{" "}
        <a
          href="https://github.com/saipranay47/recycle"
          target="_blank"
          className="underline"
        >
          Github
        </a>
      </span>
    </div>
  );
}

export default EndCredit;
