/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
 // For React
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
