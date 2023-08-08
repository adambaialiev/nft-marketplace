/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "rgba(0, 0, 0, 1)",
        black1: "rgba(77, 77, 77, 1)",
        black2: "rgba(25, 25, 25, 1)",
        "black-transparent": "rgba(0, 0, 0, 0.6)",
        orange: "rgba(200, 114, 106, 1)",
        orange2: "rgba(200, 114, 106, 0.30)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
