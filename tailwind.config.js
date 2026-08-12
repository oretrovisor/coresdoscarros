/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Overrides Tailwind's default font-mono utility (used ~18x across the app).
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Only 'rule' is referenced via Tailwind utilities (border-rule, divide-rule).
        // Other design tokens (ink/paper/surface/muted/brand) are applied via the
        // CSS custom properties in index.css instead — see :root there.
        rule: '#DDDDDD',
      },
    },
  },
  plugins: [],
}


