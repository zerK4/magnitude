/** @type {import('tailwindcss').Config} */
const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height');

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "mag": {
          "DEFAULT": "rgb(55,0,112)",
          "hover": "rgb(55,0,180)"
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        "sm-h": {"raw": '(max-height: 650px)'}, 
        "sm-normal": { "raw": '(min-height: 650px)' }
      }
    },
  },
  plugins: [require("tailwindcss-animate"), iOSHeight],
}