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
      animation: {
        float: "float 3s ease-in-out infinite", // Add floating animation
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui"),
    require('tailwindcss-animated')
  ],

  
};
