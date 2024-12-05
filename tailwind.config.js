/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue1: "#015180",
        gray2: "#F1EFEF",
        gray3: "#EEEAF1",
      },
      screens: {
        "mw-14": { max: "1430px" },
        "mw-13": { max: "1350px" },
        "mw-xl": { max: "1280px" },
        "mw-12": { max: "1200px" },
        "mw-11": { max: "1100px" },
        // => @media (max-width: 1279px) { ... }
        "mw-lg": { max: "1023px" },
        "mw-9": { max: "900px" },
        // => @media (max-width: 1023px) { ... }
        "mw-md": { max: "768px" },
        // => @media (max-width: 767px) { ... }
        "mw-sm1": { max: "690px" },
        "mw-sm2": { min: "691px" },
        "mw-sm": { max: "639px" },
        "mw-sm4": { max: "576px" },
        "mw-sm5": { max: "450px" },
        "mw-sm3": { max: "400px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
};
