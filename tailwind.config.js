/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 99%': {
            borderTop: '4px solid rgba(255, 255, 255, 0.87)',
          },
          '100%': {
            zIndex: 11,
            opacity: '1',
            transform: 'translateY(0)',
            borderTop: '0px',
          },
        },
      },
    },
  },
  plugins: [],
};
