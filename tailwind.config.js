module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.js",
  ],
  theme: {
    fontSize: {
      'fs12_lh16': ['12px', {lineHeight: '16px'}],
      'fs14_lh24': ['14px', {lineHeight: '24px'}],
      'fs18_lh24': ['18px', {lineHeight: '24px'}]
    },
    borderRadius: {
      '2px': '2px',
      '8px': '8px'
    },
    fontFamily: {
      serif: ['Futura Md BT', 'serif']
    },
    extend: {
      spacing: {
        'Neg_2px': '-2px',
        '3px': '3px',
        '6px': '6px',
        '38px': '38px',
        '77px': '77px',
        '88px': '88px',
        '360px': '360px',
        '1440px': '1440px'
      },
      colors: {
        'Oslo-Gray': '#7E858E',
        'Astronaut': '#263868',
        'Selago': '#FAFBFE',
        'Flamingo': '#EF4444',
        'White': '#ffffff'
      },
      boxShadow: {
        'loginPageCard': '0px 4px 16px 0px rgba(123, 135, 148, 0.16)'
      }
    },
  },
  plugins: [],
}
