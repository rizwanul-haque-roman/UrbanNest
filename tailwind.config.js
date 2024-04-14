/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "log-reg-bg": "url('/src/assets/log-reg-bg.jpeg')",
        "log-reg-aside": "url('/src/assets/aside.jpg')",
        "slide-1": "url('/src/assets/slides/slide1.jpeg')",
        "slide-2": "url('/src/assets/slides/slide2.jpeg')",
        "slide-3": "url('/src/assets/slides/slide3.jpeg')",
        "slide-4": "url('/src/assets/slides/slide4.jpeg')",
        "slide-5": "url('/src/assets/slides/slide5.jpeg')",
      },
      fontFamily: {
        heading: ['"Alegreya", serif'],
        para: ['"Source Serif 4", serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
