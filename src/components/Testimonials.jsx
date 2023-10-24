import React, { useState } from "react";

const Arrow = ({...props}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}

    >
      <path
        d="M8 1.39876e-06L6.59 1.41L12.17 7L-1.22392e-06 7L-1.57361e-06 9L12.17 9L6.59 14.59L8 16L16 8L8 1.39876e-06Z"
        fill="black"
      />
    </svg>
  );
};

function Testimonials() {
  const reviews = [
    {
      rating: 4,
      review:
        "ReCycle e-bikes have exceeded my expectations. Not only have I saved money on gas, but my fitness and well-being have also improved. Plus, I'm doing my part to reduce my carbon footprint. I highly recommend ReCycle e-bikes to anyone looking to make a positive change in their transportation habits.",
    },
    {
      rating: 5,
      review:
        "I absolutely love my ReCycle e-bike! It's a game-changer for my daily commute. The electric assistance makes riding a breeze, and I've noticed a significant decrease in my commuting costs. I can't imagine going back to a regular bike or car.",
    },
    {
      rating: 4,
      review:
        "ReCycle e-bikes have made my city exploring more enjoyable. The battery life is excellent, and the build quality is top-notch. I've had mine for a year now, and it's still as reliable as day one.",
    },
    {
      rating: 5,
      review:
        "I was initially skeptical about e-bikes, but ReCycle has converted me. The e-bike is smooth, and I can tackle hills with ease. It's also eco-friendly, which aligns with my values. Highly recommended!",
    },
    {
      rating: 4,
      review:
        "The ReCycle e-bike is a great investment in my health and the environment. It's fun to ride, and the electric motor helps me maintain a consistent speed even on uphill sections. Plus, it's a conversation starter wherever I go!",
    },
    {
      rating: 5,
      review:
        "I've had my ReCycle e-bike for six months, and I couldn't be happier. It's a convenient and efficient way to get around the city. The e-assist is a game-changer, and I've noticed a significant reduction in my carbon footprint. I recommend it to everyone I know!",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const changeReview = (increment) => {
    const newIndex = (currentReviewIndex + increment) % reviews.length;
    setCurrentReviewIndex(newIndex < 0 ? reviews.length - 1 : newIndex);
  };

  // Function to generate the star SVG elements
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none">
          <path
            d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z"
            fill="black"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className=" grid grid-cols-12 gap-5 w-full max-w-[1440px] lg:px-[56px] my-24">
      <div className="col-span-5">
        <h2 className="text-5xl">Reviews</h2>
      </div>
      <div className="col-span-7">
        <div className="flex gap-1">
          {renderStars(reviews[currentReviewIndex].rating)}
        </div>
        <p className=" text-4xl text-[#808080] leading-[130%]  my-10 h-[350px]">
          {reviews[currentReviewIndex].review}
        </p>
        <div className="flex gap-10">
          <button onClick={() => changeReview(-1)}>
            <Arrow className=" transform rotate-180" />
          </button>
          <button onClick={() => changeReview(1)}>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
