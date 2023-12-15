/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      whitesmoke: {
        100: "#f7f7f7",
        200: "#eee",
      },
      fontFamily: {
        "sf-pro-display": "'SF Pro Display'",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
