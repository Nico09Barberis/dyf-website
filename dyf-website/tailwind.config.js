// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dorado: "#F4D03F",
        beige: "#F9F6F0",
        azulOscuro: "#001F3F",
      },
      fontFamily: {
        audiowide: ["'Audiowide'", "sans-serif"],
        cormorant: ["'Cormorant Garamond'", "serif"],
        lora: ["'Lora'", "serif"],
        prata: ["'Prata'", "serif"],
        urbanist: ["'Urbanist'", "sans-serif"],
        marcellus: ["'Marcellus'", "serif"],
        italiana: ["'Italiana'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
