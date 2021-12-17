module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#2c2d36',
      'night': '#000000',
      'light-gray': '#F2F5F8',
      'light-grey': 'rgba(0, 0, 0, 0.2)',
      'blue': '#071133',
      'blue-500': '#000622',
      'blue-300': '#020d32',
      'accent': '#17BDB4',
      'doughnuts-cream': '#fffcf6',
      'doughnuts-green': '#8cc63f',
      'travel-teal': '#54807B',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
