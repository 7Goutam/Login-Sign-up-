/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure this matches your file paths
  ],
  theme: {
    extend: {
      colors: {
        popxbg: "#F7F8F9",
      },
    },
  },
  plugins: [],
};
