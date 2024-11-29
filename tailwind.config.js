/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/herobackground.png')",
      },
    },
  },
  plugins: [],
};
