module.exports = {
  content: [ 
    "./src/**/*.{html,njk}" 
  ],
  theme: {
    fontFamily: {
      'logo': ['Rock\\ Salt', 'serif'],
      'headline': ['Baloo\\ 2', 'cursive'],
      'body': ['Libre\\ Franklin', 'Helvetica', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
