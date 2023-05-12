/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#333333",
        mainOrange: "#EB5757",
        gray100: "#828282",
        gray300: "#4F4F4F",
        mainWhite: "#FFFFFF",
      },
      fontFamily: {
        montserratFont: "Montserrat, sans-serif",
        mulishFont: "Mulish, sans-serif",
      },
      fontSize: {
        sizeTitle: "24px",
        sizeMiddle02: "18px",
        sizeMiddle01: "16px",
        sizeNormal: "14px",
        sizeLittle02: "12px",
        sizeLittle01: "10px",
      },
    },
  },
  plugins: [],
};
