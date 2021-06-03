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
                'cardauto': 'minmax(60%, 2fr)',
              },

            
            minWidth: {
              '0': '0',
              '1/4': '25%',
              '1/2': '50%',
              '3/4': '75%',
              'full': '100%',
              'card' : '100px',
            }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
