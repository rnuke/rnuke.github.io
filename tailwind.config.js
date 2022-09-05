module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
