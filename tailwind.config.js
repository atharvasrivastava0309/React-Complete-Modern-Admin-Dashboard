// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   darkMode: 'class',
//   theme: {
//     fontFamily: {
//       display: ['Open Sans', 'sans-serif'],
//       body: ['Open Sans', 'sans-serif'],
//     },
//     extend: {
//       fontSize: {
//         14: '14px',
//       },
//       backgroundColor: {
//         'main-bg': '#FAFBFB',
//         'main-dark-bg': '#20232A',
//         'secondary-dark-bg': '#33373E',
//         'light-gray': '#F7F7F7',
//         'half-transparent': 'rgba(0, 0, 0, 0.5)',
//       },
//       borderWidth: {
//         1: '1px',
//       },
//       borderColor: {
//         color: 'rgba(0, 0, 0, 0.1)',
//       },
//       width: {
//         400: '400px',
//         760: '760px',
//         780: '780px',
//         800: '800px',
//         1000: '1000px',
//         1200: '1200px',
//         1400: '1400px',
//       },
//       height: {
//         80: '80px',
//       },
//       minHeight: {
//         590: '590px',
//       },
//       backgroundImage: {
//         'hero-pattern':
//           "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
        160: '160px',
        320: '320px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#10B981',
        accent: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',
        dark: '#111827',
        light: '#F9FAFB',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.1)',
        medium: '0 4px 16px rgba(0, 0, 0, 0.15)',
        dark: '0 6px 24px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}


