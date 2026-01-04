/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Medical Trust & Authority
        primary: {
          DEFAULT: "#2E86AB", // blue-600
          50: "#EBF5F9",
          100: "#D7EBF3",
          200: "#AFD7E7",
          300: "#87C3DB",
          400: "#5FA5C3",
          500: "#2E86AB",
          600: "#256B89",
          700: "#1C5067",
          800: "#133545",
          900: "#0A1A23",
        },
        // Secondary Colors - Wellness & Growth
        secondary: {
          DEFAULT: "#A8DADC", // teal-200
          50: "#F0F9F9",
          100: "#E1F3F4",
          200: "#C3E7E9",
          300: "#A8DADC",
          400: "#86C5C8",
          500: "#64B0B4",
          600: "#4D8A8D",
          700: "#3A676A",
          800: "#264547",
          900: "#132223",
        },
        // Accent Colors - Gentle Urgency
        accent: {
          DEFAULT: "#F4A261", // orange-400
          50: "#FEF5EF",
          100: "#FDEBDF",
          200: "#FBD7BF",
          300: "#F8C39F",
          400: "#F4A261",
          500: "#F08030",
          600: "#C06624",
          700: "#904D1B",
          800: "#603312",
          900: "#301A09",
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          DEFAULT: "#F8FFFE", // gray-50
          hover: "#F0FFFE",
          active: "#E8FFFD",
        },
        // Text Colors
        text: {
          primary: "#1A365D", // blue-900
          secondary: "#4A5568", // gray-700
          tertiary: "#718096", // gray-600
          disabled: "#A0AEC0", // gray-500
        },
        // Semantic Colors
        success: {
          DEFAULT: "#38A169", // green-600
          50: "#F0FFF4",
          100: "#C6F6D5",
          200: "#9AE6B4",
          300: "#68D391",
          400: "#48BB78",
          500: "#38A169",
          600: "#2F855A",
          700: "#276749",
          800: "#22543D",
          900: "#1C4532",
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          50: "#FFFFF0",
          100: "#FEFCBF",
          200: "#FAF089",
          300: "#F6E05E",
          400: "#ECC94B",
          500: "#D69E2E",
          600: "#B7791F",
          700: "#975A16",
          800: "#744210",
          900: "#5F370E",
        },
        error: {
          DEFAULT: "#E53E3E", // red-600
          50: "#FFF5F5",
          100: "#FED7D7",
          200: "#FEB2B2",
          300: "#FC8181",
          400: "#F56565",
          500: "#E53E3E",
          600: "#C53030",
          700: "#9B2C2C",
          800: "#822727",
          900: "#63171B",
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-300
          hover: "#CBD5E0", // gray-400
          focus: "#2E86AB", // primary
        },
      },
      fontFamily: {
        headline: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
        sans: ['Inter', 'Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.875rem' }],
        'xl': ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4rem' }],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(46, 134, 171, 0.05)',
        'base': '0 2px 8px rgba(46, 134, 171, 0.1)',
        'md': '0 4px 12px rgba(46, 134, 171, 0.12)',
        'lg': '0 4px 16px rgba(46, 134, 171, 0.15)',
        'xl': '0 8px 24px rgba(46, 134, 171, 0.18)',
        '2xl': '0 12px 32px rgba(46, 134, 171, 0.2)',
        'inner': 'inset 0 2px 4px 0 rgba(46, 134, 171, 0.06)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'fade-in-up': 'fadeInUp 500ms ease-out',
        'slide-in-right': 'slideInRight 300ms ease-out',
        'slide-in-left': 'slideInLeft 300ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}