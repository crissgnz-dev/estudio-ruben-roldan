/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6b38d4',
          container: '#8455ef',
          light: '#e9ddff',
          fixed: '#e9ddff',
          dim: '#d0bcff',
          dark: '#5516be',
        },
        violet: {
          cta: '#6b38d4',
          hover: '#5516be',
          light: '#f3e8ff',
          border: '#c084fc',
        },
        secondary: {
          DEFAULT: '#8455ef',
          container: '#e9ddff',
        },
        tertiary: {
          DEFAULT: '#515c71',
          container: '#6a758a',
        },
        surface: {
          DEFAULT: '#f7f9fb',
          dim: '#d8dadc',
          bright: '#f7f9fb',
          lowest: '#ffffff',
          low: '#f2f4f6',
          container: '#eceef0',
          high: '#e6e8ea',
          highest: '#e0e3e5',
          variant: '#e0e3e5',
        },
        'on-surface': {
          DEFAULT: '#191c1e',
          variant: '#494454',
        },
        charcoal: '#1e293b',
        outline: {
          DEFAULT: '#7b7486',
          variant: '#cbc3d7',
        },
        background: '#f7f9fb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      spacing: {
        'gutter': '24px',
        'margin-desktop': '48px',
        'margin-mobile': '16px',
        'section-gap': '80px',
      }
    },
  },
  plugins: [],
}
