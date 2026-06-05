/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        script: ['"Luxurious Script"', 'cursive'],
      },
      colors: {
        brand: {
          DEFAULT: '#1F7770',
          dark: '#17615b',
          light: '#ECE1A8',
        },
        ink: '#222222',
        paper: '#FFFFFF',
        surface: '#FAFAFA',
        rule: '#DDDDDD',
        muted: '#777777',
      },
    },
  },
  plugins: [],
}


