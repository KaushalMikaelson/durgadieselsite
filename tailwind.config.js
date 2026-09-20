/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garage: {
          orange: '#ff5500',
          'orange-glow': '#ff6a00',
          'orange-dark': '#d94400',
          'orange-light': '#ff7733',
          black: '#08090b',
          surface: '#0f1117',
          card: '#13161f',
          'card-hover': '#181c27',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-orange': 'rgba(255, 85, 0, 0.35)',
          muted: '#8b949e',
          light: '#f3f4f6'
        },
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#ff5500',
          600: '#e64400',
          700: '#cc3700',
          800: '#92400e',
          900: '#78350f',
        },
        obsidian: {
          950: '#08090b',
          900: '#0f1117',
          850: '#13161f',
          800: '#181c27',
          700: '#232a3b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Syne', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-orange': '0 0 35px -5px rgba(255, 85, 0, 0.5)',
        'glow-wheel': '0 0 25px rgba(255, 85, 0, 0.8)',
        'glow-subtle': '0 0 20px -3px rgba(255, 85, 0, 0.25)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.06)'
      }
    },
  },
  plugins: [],
}
