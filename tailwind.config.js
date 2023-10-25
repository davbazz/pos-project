/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA16C",
        softPrimary: "rgb(255 161 108 / 0.9)",
        bgPrimary: "rgb(255 161 108 / 0.2)",
        hoverPrimary: "rgb(255 161 108 / 0.3)",
        secondary: "#3C3C3C",
        softSecondary: "rgb(60 60 60 / 0.5)",
        alternative: "#f5f5f5",
        error: "#ef4444",
        success: "#16a34a",
        linear: "rgb(60 60 60 / 0.15)",
      },
    },
  },
  plugins: [],
};
