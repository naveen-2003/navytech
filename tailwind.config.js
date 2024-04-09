/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000816",
        tertiary: "#F0F5FF",
        "navy-blue": "#003BA4",
      },
      backgroundImage: {
        "gradient-border":
          "linear-gradient(90deg,rgba(255, 255, 255, 0.08) 0%,#ffffff 49.56%,rgba(255, 255, 255, 0.08) 99.84%)",
      },
    },
  },
  plugins: [],
};
