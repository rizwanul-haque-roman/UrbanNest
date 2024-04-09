/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "log-reg-bg": "url('/src/assets/log-reg-bg.jpeg')",
        "log-reg-aside": "url('/src/assets/aside.jpg')",
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
