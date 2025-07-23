module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
      },
      transformOrigin: {
        'center': 'center center',
      },
    },
  },
  plugins: [],
};


