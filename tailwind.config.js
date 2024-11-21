import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Audiowide', 'serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: "#e3ad65",
        primary_red: "#FF0000",
        secondary: "#000",
        primary_text: "#CCCCCC",
        gray_primary: "#777777",
        footer_bg: "#111111"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
