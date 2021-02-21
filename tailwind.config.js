module.exports = {
  purge: [
    './pages/**/*.js',
    './layouts/**/*.js',
    './sections/**/*.js',
    './components/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
