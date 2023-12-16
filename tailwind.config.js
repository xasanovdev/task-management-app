/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#635fc7",
        "primary-light": "#a7a4ff",
        "primary-disabled": "#39395b",
        grey: "828fa3",
        danger: "ea5555",
        "danger-light": "#ff9898",
      },
    },
  },
  plugins: [],
};
