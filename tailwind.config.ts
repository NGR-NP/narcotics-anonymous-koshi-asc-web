import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'secondary-card': {
          DEFAULT: 'hsl(var(--secondary-card))',
          foreground: 'hsl(var(--secondary-card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-200%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'slide-left-out': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-right-out': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-up-out': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        'slide-down-out': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-200%)' },
        },
        'slide-up-out-back-in': {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-120%)' },
          '51%': { transform: 'translateY(180%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'slide-up-out-back-in-spring': {
          '0%': { transform: 'translateY(0%)' },
          '40%': { transform: 'translateY(-120%)' },
          '41%': { transform: 'translateY(180%)' },
          '81%': { transform: 'translateY(0%)' },
          '88%': { transform: 'translateY(15%)' },
          '94%': { transform: 'translateY(-10%)' },
          '98%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        shake: {
          // shake animation when input is invalid
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(10deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '40%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '70%': { transform: 'rotate(-10deg)' },
          '80%': { transform: 'rotate(10deg)' },
          '90%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-out': 'slide-out 0.5s ease-out',
        'slide-left': 'slide-left 0.5s ease-out',
        'slide-right': 'slide-right 0.5s ease-out',
        'slide-right-out': 'slide-right-out 0.5s ease-out',
        'slide-left-out': 'slide-left-out 0.5s ease-out',
        'slide-up-out': 'slide-up-out 0.5s ease-out',
        'slide-down-out': 'slide-down-out 0.5s ease-out',
        'slide-up-out-back-in': 'slide-up-out-back-in 0.5s ease-out',
        'slide-up-out-back-in-spring':
          'slide-up-out-back-in-spring 0.5s ease-out',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
          shake: 'shake 0.5s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
