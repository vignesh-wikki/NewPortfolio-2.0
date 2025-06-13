// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        "spin-dot": {
          "58%, 100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "spin-dot": "spin-dot 1s linear infinite",
      },
    },
  },
  plugins: [],
};
