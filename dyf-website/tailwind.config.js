// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dorado: "#CFA768",
        beige: "#F9F6F0",
      },
      fontFamily: {
        playfair: ["'Playfair Display', serif"],
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
}
