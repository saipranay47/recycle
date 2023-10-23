import React from "react";

function Logo({ className, ...props }) {
  return (
    <svg
      width="32"
      height="27"
      viewBox="0 0 32 27"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M31.5852 20.2363C26.4329 14.6819 22.5117 8.13476 20.0677 1.02411C19.9036 0.550063 19.4476 0.228072 18.937 0.228072C16.949 -0.076024 14.9702 -0.076024 12.9822 0.228072C12.4715 0.228072 12.0155 0.550063 11.8514 1.02411C9.39834 8.13476 5.47711 14.6819 0.315666 20.2363C0.0238529 20.5493 -0.0764579 20.9965 0.0603295 21.3901C0.680432 23.2147 1.61971 24.8962 2.81431 26.372C3.09701 26.7208 3.56208 26.8908 4.00892 26.7923C11.8696 25.084 20.0313 25.084 27.892 26.7923C28.3388 26.8908 28.8039 26.7208 29.0866 26.372C30.2812 24.8962 31.2205 23.2147 31.8406 21.3901C31.9774 20.9965 31.8771 20.5493 31.5852 20.2363ZM27.6276 22.8748L22.8035 20.0842C18.5722 17.6335 13.3196 17.6335 9.09742 20.0842L4.27339 22.8748L3.73535 21.9804L8.8056 19.0467C12.9092 16.6676 15.4261 12.3385 15.4261 7.66966V2.89345H16.4931V7.66966C16.4931 12.3475 19.01 16.6676 23.1136 19.0467L28.1747 21.9804L27.6276 22.8748Z"
        fill="#FE610B"
      />
    </svg>
  );
}

export default Logo;
