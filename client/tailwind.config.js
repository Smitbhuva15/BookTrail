/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      screens: {
        'xs': '425px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: false, 
  },
};
