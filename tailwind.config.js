/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        'rssmall':{'max':'425px'}
      },
      
    },
  },
  prefix:"tw-",
  plugins: [],
}

