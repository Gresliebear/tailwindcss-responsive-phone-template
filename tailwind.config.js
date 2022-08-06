// tailwind.config.js
const { colors: defaultColors } = require('tailwindcss/defaultTheme')


module.exports = {
    "theme": {
        // Use these screens to call elements to fit correctly to various phones, desktop, and tablet types
        screens: {
            // iPhone SE
            'iphoneSE': '375px',

            // iPhone XR
            'iphoneXR': '414px',

            // iPhone 12 Pro 
            'iphone12PRO': '390px',

            // Pixel 5 
            'pixel5':'393px',

            // Samsung Galaxy S8+
            'samsungGS8+':'360px',

            // Samsung Galaxy S20 Ultra
            'samesungGS20Ultra':'412px',

            // IPad Air 
            'ipadAir':'820px',

            // Ipad Mini
            'ipadMini':'768px',
            
            // SurfacePro7
            'surfacePRO7':'912px',

            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
      
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
          },

        // WIP further color improvements require testing
         colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'caribbeangreen': '#06D6A0',
          'MarjorieBlue ': '#623CEA',
          'midnight': '#121063',
          'metal': '#565584',
          'MadderLake': '#CC2936',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
        },
    }
};
