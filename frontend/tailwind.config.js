/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: { fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    boxShadow: {
      'inset-custom': '0 10px 15px -3px rgb(255, 255, 255, 0.8)',    // 0 0 0 9px 
      'inset-custom1': '0 10px 15px -3px rgb(0, 0, 55, 35)',
    },
  },
    backdropBlur: {
        xs: '4px',
        sm: '8px',
        DEFAULT: '16px', 
        lg: '24px',
        xl: '32px',
      },
  },
  plugins: [],
}