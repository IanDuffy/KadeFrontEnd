/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#13131C",
        primaryNormal: "#1B1B25",
        offWhite: "#E4E1EE",
        secondary: "#E9E7F5",
        light: "#302F3A",
        purple: "#D4C6FF",
        purpledark: "#AC9BE3",
        puprleNormal: "#1E0A4E",
        orange: "#FABBA6",
        brown: "#562D1F",
      },
      fontFamily: {
        suisse: ["Suisse", "sans-serif"],
        suisseMedium: ["Suisse-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
