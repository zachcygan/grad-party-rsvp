module.exports = {
  content: ['./views/**/*.handlebars', './public/**/*.{css,js}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'white': '#FFFFFF',
        'navy-blue': '#003366',
        'orange': '#FF5722'
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
}
