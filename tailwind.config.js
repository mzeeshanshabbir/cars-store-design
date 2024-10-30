/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js}",
  ],
  theme: {
    extend: {
      spacing:{
        // 1:'1px',
        35:'35px',

      },
      backgroundImage:{
        'home-page-banner' : 'url(../images/beleasing2-section-bg1.webp)'
      },
      colors:{
        main_color_1:'#202448',
        main_color_2:'#ffffff',
        main_color_3:'#16182d',
        main_color_4:'#f4f4f4',
      },
    },
  },
  plugins: [],
}

