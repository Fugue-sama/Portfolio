tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#4f46e5', // màu xanh 
          secondary: '#10b981' // màu xanh lá
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif']
        },
        keyframes: {
          wipe: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(100%)' },
          },
          wipeOut: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0%)' },
          },
          slideIn: {
            '0%': { transform: 'translateX(-100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
          springIn: {
            '0%' : {
              opacity: '0',
              transform: 'scale(0.5)'
            },
            '60%': {
              opacity: '1',
              transform: 'scale(1.1)'
            },
            '100%' : {
              transform: 'scale(1)'
            }
          },
          coverSlide: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0%)' },
          },
        },
        animation: {
          wipe: 'wipe .5s ease-out forwards',
          wipeOut: 'wipeOut .5s ease-out forwards',
          slideIn: 'slideIn 0.5s ease-out forwards',
          spring : 'springIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          coverSlide: 'coverSlide 0.5s ease forwards',
        },
        screens: {
          xs: '375px', 
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      }
    },
    plugins: [],
  }
  