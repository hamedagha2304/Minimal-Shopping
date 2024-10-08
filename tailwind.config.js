/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "outfit": "outfit"
      },
      height: {
        "remain": "215px",
        "cart": "489px",
        "cartdetail": "391.4px"
      },
      width: {
        "21r": "21rem"
      },
      maxWidth: {
        "whole": "1440px",
      },
      colors: {
        "back": "#f9f9f9",
        "gray": "#000000b3",
        "gray2": "#00000080",
        "orange": "#fe8a00",
        "transparent": "rgba(0 ,0 ,0 ,0.25)",
        "grayback": "rgba(123, 123, 123, 0.06)",
        "quantity": "#D9D9D9",
        "addhover": "#e67d00",
        "addremovehover": "#eaeaea",
        "red": "#EB2563",
        "green": "#8bc34a80"
      },
      animation: {
        "opacityin": "opacityIn 0.3s",
        "opacityout": "opacityOut 0.3s",
        "translatein": "translateIn 0.3s",
        "translateout": "translateOut 0.3s",
        "translatein2": "translateIn2 0.3s",
        "translateout2": "translateOut2 0.3s",
        "loading": "Loading 0.9s linear 0s infinite normal forwards",
        "loading1": "Loading 0.9s linear 0.25s infinite normal forwards",
        "loading2": "Loading 0.9s linear 0.5s infinite normal forwards"
      },
      borderRadius: {
        "percent": "100%"
      }
    },
  },
  plugins: [],
};
