/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.md",
    "./blog/**/*.md",
    "./**/*.md",
    "./.vitepress/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#228B22',
        secondary: '#32CD32'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          }
        }
      }
    }
  },
  plugins: []
}
