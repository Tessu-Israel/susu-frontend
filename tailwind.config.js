// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
      },
      transformOrigin: {
        center: 'center', // ✅ No need to wrap with quotes unless special characters
      },
    },
  },
  plugins: [],
};
