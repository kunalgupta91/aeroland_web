import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#052e16',
          900: '#0f3d22',
          800: '#166534',
          700: '#15803d',
          600: '#16a34a',
          500: '#22c55e',
          100: '#dcfce7',
          50:  '#f0fdf4',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'  },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
