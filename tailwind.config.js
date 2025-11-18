/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Modern Color Palette
        "bt-black": "#050508",
        "bt-dark": "#0a0a0f", 
        "bt-red": "#ff0055",
        "bt-red-dark": "#cc0044",
        "bt-blue": "#00d9ff",
        "bt-purple": "#8b5cf6",
        "bt-gray": "#1a1a1a",
        "bt-muted": "#9CA3AF",
        "bt-neon-pink": "#ff0080",
        "bt-neon-cyan": "#00ffcc",
        "bt-neon-purple": "#bf00ff"
      },
      
      // Advanced 3D Shadows
      boxShadow: {
        '3d-card': '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15)',
        '3d-hover': '0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.15), inset 0 2px 0 rgba(255,255,255,0.2), 0 0 60px rgba(255,0,85,0.6)',
        'neon-red': '0 0 20px rgba(255,0,85,0.6), 0 0 40px rgba(255,0,85,0.4), 0 0 60px rgba(255,0,85,0.2)',
        'neon-blue': '0 0 20px rgba(0,217,255,0.6), 0 0 40px rgba(0,217,255,0.4), 0 0 60px rgba(0,217,255,0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'btn-3d': '0 15px 35px rgba(255,0,85,0.4), 0 5px 15px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.2)',
        'btn-3d-hover': '0 25px 50px rgba(255,0,85,0.6), 0 15px 30px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.3), 0 0 30px rgba(255,0,85,0.5)'
      },
      
      // Enhanced Background Images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #ff0055 0%, #8b5cf6 50%, #00d9ff 100%)',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #050508 100%)'
      },
      
      // Advanced Animations
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'bounce-3d': 'bounce-3d 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'neon-flicker': 'neonFlicker 3s infinite alternate'
      },
      
      // Custom Keyframes
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg) scale(1.02)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg) scale(1.01)' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-25px) scale(1.03)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        shimmer: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,0,85,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255,0,85,0.8), 0 0 60px rgba(255,0,85,0.4)' }
        },
        bounce3d: {
          '0%, 100%': { transform: 'translateY(0) rotateX(0)' },
          '50%': { transform: 'translateY(-20px) rotateX(10deg)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-80px) rotate(-5deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotate(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(80px) rotate(5deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotate(0)' }
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            opacity: '1',
            textShadow: '0 0 20px #ff0055, 0 0 40px #ff0055, 0 0 60px #ff0055'
          },
          '20%, 24%, 55%': {
            opacity: '0.8',
            textShadow: 'none'
          }
        }
      },
      
      // Enhanced Transforms
      transformStyle: {
        '3d': 'preserve-3d'
      },
      perspective: {
        '1000': '1000px',
        '1200': '1200px',
        '1500': '1500px'
      },
      rotate: { 
        '-3': '-3deg',
        '3': '3deg',
        '-5': '-5deg',
        '5': '5deg',
        '10': '10deg',
        '-10': '-10deg'
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
        '110': '1.10'
      },
      
      // Backdrop Blur Support
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      
      // Enhanced Transitions
      transitionDuration: { 
        '400': '400ms', 
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '2000': '2000ms'
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'bounce-hard': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      
      // Text Shadows
      textShadow: {
        'glow-red': '0 0 20px rgba(255,0,85,0.6), 0 0 40px rgba(255,0,85,0.4), 0 0 60px rgba(255,0,85,0.2)',
        'glow-blue': '0 0 20px rgba(0,217,255,0.6), 0 0 40px rgba(0,217,255,0.4), 0 0 60px rgba(0,217,255,0.2)',
        'glow-purple': '0 0 20px rgba(139,92,246,0.6), 0 0 40px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.2)'
      },
      
      // Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      
      // Z-Index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    }
  },
  plugins: [
    // Custom plugin for text shadows
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow-red': {
          textShadow: '0 0 20px rgba(255,0,85,0.6), 0 0 40px rgba(255,0,85,0.4), 0 0 60px rgba(255,0,85,0.2)'
        },
        '.text-shadow-glow-blue': {
          textShadow: '0 0 20px rgba(0,217,255,0.6), 0 0 40px rgba(0,217,255,0.4), 0 0 60px rgba(0,217,255,0.2)'
        },
        '.text-shadow-none': {
          textShadow: 'none'
        },
        '.transform-3d': {
          transformStyle: 'preserve-3d'
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden'
        },
        '.perspective-1000': {
          perspective: '1000px'
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
