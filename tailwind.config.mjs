/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Bilyalared', 'sans-serif'], // Ganti default 'sans' menjadi Bilyalared
      },
      backgroundImage: {
        'wave': "url('/images/space.png')",
      },
    },
  },
  plugins: [require("daisyui"),
    require('tailwindcss-animated'),
    require('tailwindcss-motion'),
  ],
};
