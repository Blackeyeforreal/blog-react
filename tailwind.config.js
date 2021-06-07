module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
              gridTemplateColumns: {
                // Simple 16 column grid
              'auto': 'repeat(auto-fit, minmax(30% , 1fr))',

                // Complex site-specific column configuration
              'footer': '200px minmax(900px, 1fr) 100px',
              },
              gridAutoRows: {
                'cardauto': 'minmax(275px, 275px)',
              },
              minHeight: {

                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                'card' : '100px',
              },
              

            
              maxWidth: {

                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                'card' : '200px',
              },

              maxHeight: {

                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                'card' : '270px',
              },
              

            
              minWidth: {

                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                'card' : '75px',
              },
            
              backgroundImage: theme => ({
                'jon': "url('https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg')",
               
               }),
               backgroundColor: theme => ({
                ...theme('colors'),
                'primary': '#3490dc',
                'secondary': '#ffed4a',
              'danger': 'rgb(19, 40, 44)'  ,
               }),

               fontFamily: {

       'title': 'Pacifico, cursive',
       'norm':  'Noto Sans, sans-serif',
              'about': 'Amatic SC, cursive',
              'about2': 'Mali, cursive'
      
               }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
