/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "okrika-green": "#5CCA95", "okrika-orange": "#F46312" }
    }
  },
  plugins: []
};
