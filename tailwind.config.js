/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#08090d',
          darkCard: '#0f1118',
          darkElevated: '#171a26',
          light: '#f8fafc',
          lightCard: '#ffffff',
          lightElevated: '#f1f5f9'
        },
        primary: {
          DEFAULT: '#38bdf8', // Sky/cyan glow
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        accent: {
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(56, 189, 248, 0.25)',
        'glow-md': '0 0 25px -4px rgba(56, 189, 248, 0.35)',
        'glow-lg': '0 0 40px -5px rgba(56, 189, 248, 0.45)',
        'glow-violet': '0 0 30px -4px rgba(139, 92, 246, 0.35)',
        'card-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
        'card-light': '0 8px 30px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

