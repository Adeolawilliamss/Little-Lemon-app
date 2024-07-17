/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#495E57',
        'yellow': '#F4CE14',
         'grey':'#D3D3D3'
      },
      screens: {
        'xs': '480px',
        // default Tailwind screens
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '2.5': '10px', // Adding a custom spacing value for 10px
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
