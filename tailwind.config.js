/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D', 
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', 'sans-serif'],  
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(to right, #FF0080, #7928CA, #FF0080, #FFD300)', // Example gradient 
      }
    },
  },
  plugins: [],
}