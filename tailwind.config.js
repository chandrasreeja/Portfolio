/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          dark: '#020c1b',
          light: '#112240',
          lightest: '#233554',
        },
        slate: {
          DEFAULT: '#8892b0',
          light: '#a8b2d1',
          lightest: '#ccd6f6',
        },
        white: '#e6f1ff',
        green: {
          DEFAULT: '#64ffda',
          tint: 'rgba(100, 255, 218, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Calibre', 'San Francisco', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'SF Mono', 'Fira Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'green-glow': '0 0 20px rgba(100, 255, 218, 0.35)',
        'card-hover': '0 20px 30px -15px rgba(2, 12, 27, 0.7)',
      },
    },
  },
  plugins: [],
};
