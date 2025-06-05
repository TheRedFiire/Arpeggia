/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#F9EDF0',
        champagne: {
          50: '#FAF7F4',
          100: '#F1EBE4',
          200: '#E6C8B7',
          300: '#DDB49F',
          400: '#D4A087',
          500: '#CB8C6F',
          600: '#B8714A',
          700: '#A55625',
          800: '#8A4A20',
          900: '#6F3E1A'
        },
        ambre: {
          50: '#FDF4E7',
          100: '#F9E5C7',
          200: '#F2D089',
          300: '#EABA4B',
          400: '#E2A50D',
          500: '#BA6A36',
          600: '#9B5A2E',
          700: '#7C4926',
          800: '#5D391E',
          900: '#3E2816'
        },
        cognac: {
          50: '#FBF6F0',
          100: '#F5E8D6',
          200: '#EDD1AD',
          300: '#E4BA84',
          400: '#DCA35B',
          500: '#C3955B',
          600: '#A07A47',
          700: '#7D5F33',
          800: '#5A441F',
          900: '#37290B'
        },
        violet: {
          50: '#F3F0FF',
          100: '#E9E5FF',
          200: '#D6CCFF',
          300: '#C3B3FF',
          400: '#B09AFF',
          500: '#9D81FF',
          600: '#7E57C2',
          700: '#6D4AB5',
          800: '#5C3DA8',
          900: '#4A148C'
        },
        gray: {
          slate: '#6B7280',
          warm: '#4B5563'
        },
        'dark-navy': '#1B263B',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(249, 237, 240, 0.8) 0%, rgba(230, 200, 183, 0.6) 50%, rgba(186, 106, 54, 0.4) 100%)',
        'section-gradient': 'linear-gradient(135deg, rgba(249, 237, 240, 0.8) 0%, rgba(230, 200, 183, 0.6) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}