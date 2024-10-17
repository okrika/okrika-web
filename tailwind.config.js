/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "okrika-green": "#5CCA95", "okrika-orange": "#F46312" },
      backgroundImage: {
        fashion: "url('./assets/images/clothing.png')",
        home: "url('./assets/images/home.png')",
        phone: "url('./assets/images/phone.png')",
        health: "url('./assets/images/health.png')",
        others: "url('./assets/images/others.png')"
      },
      fontFamily: {
        montserrat: ["var(montserrat)", "sans-serif"]
      }
    }
  },
  plugins: []
};
