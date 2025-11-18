/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
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

      boxShadow: {
        '3d-card':
          '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15)',
        '3d-hover':
          '0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.15), inset 0 2px 0 rgba(255,255,255,0.2), 0 0 60px rgba(255,0,85,0.6)',
        'neon-red':
          '0 0 20px rgba(255,0,85,0.6), 0 0 40px rgba(255,0,85,0.4), 0 0 60px rgba(255,0,85,0.2)',
        'neon-blue':
          '0 0 20px rgba(0,217,255,0.6), 0 0 40px rgba(0,217,255,0.4), 0 0 60px rgba(0,217,255,0.2)',
        'glass':
          '0 8px 32px rgba(0,0,0,0.36), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
        'btn-3d':
          '0 15px 35px rgba(255,0,85,0.4), 0 5px 15px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.2)',
        'btn-3d-hover':
          '0 25px 50px rgba(255,0,85,0.6), 0 15px 30px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.3), 0 0 30px rgba(255,0,85,0.5)'
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #ff0055 0%, #8b5cf6 50%, #00d9ff 100%)',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #050508 100%)'
      },

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
        'neon-flicker': 'neonFlicker 3s infinite alternate',
        'slideDown': 'slideDown 0.35s ease-out'
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' }
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        shimmer: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,0,85,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255,0,85,0.8)' }
        },
        bounce3d: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-80px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(80px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        neonFlicker: {
          '0%, 20%, 40%, 60%, 100%': { opacity: 1 },
          '30%, 50%': { opacity: 0.5 }
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },

  plugins: [
    function ({ addUtilities }) {
      const utilities = {
        '.text-shadow-glow-red': {
          textShadow: '0 0 20px rgba(255,0,85,0.6)'
        },
        '.text-shadow-glow-blue': {
          textShadow: '0 0 20px rgba(0,217,255,0.6)'
        },
        '.text-shadow-none': { textShadow: 'none' },
        '.transform-3d': { transformStyle: 'preserve-3d' },
        '.backface-hidden': { backfaceVisibility: 'hidden' }
      };
      addUtilities(utilities, ['responsive', 'hover']);
    }
  ]
};
