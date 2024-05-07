/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        250: "500px",
        card: "1000px",
      },

      height: {
        map: "100vh",
      },
    },
  },
  plugins: [],
};
