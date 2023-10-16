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
        secondary: "#3C3C3C",
        alternative: "#f5f5f5",
        error: "#ef4444",
        succsess: "#16a34a",
      },
    },
  },
  plugins: [],
};
