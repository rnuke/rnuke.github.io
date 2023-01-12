const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Press Start 2P"', ...defaultTheme.fontFamily.serif],
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
