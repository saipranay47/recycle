module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montreal-book": ["PP Neue Montreal Book"],
        "montreal-italic": ["PP Neue Montreal Italic"],
        "montreal-thin": ["PP Neue Montreal Thin"],
        "montreal-medium": ["PP Neue Montreal Medium"],
        "montreal-semibolditalic": ["PP Neue Montreal SemiBold italic"],
        "montreal-bold": ["PP Neue Montreal Bold"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
