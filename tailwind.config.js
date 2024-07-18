/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto slab', 'serif'],
        Raleway: ['Raleway', 'sans-serif']
      },
      letterSpacing: {
        wider: '0.9px',
      },
      borderRadius: {
        '3xl': '3rem',
      },
      colors: {
        customBackground: '#1f2123',
        customTextColor: '#a1a1a1',
        customTextColor1: '#f9d3b4'
      },
  
      boxShadow1: {
        custom1: '0px 13px 10px -7px rgba(0, 0, 0, 0.1)',
      },
      padding: {
        '7': '1.75rem', // Adding custom padding value
      },
      zIndex: {
        '2': '2',
      }
    },
  },
  plugins: [],
}

