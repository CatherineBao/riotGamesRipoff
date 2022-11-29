/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'textDark': '#242323',
      'backgroundHover': '#e0e0e0',
      'background': '#ebeced',
      'text': '#474747',
      'mainText': '#fafafa',
      'facebook': '#1564eb',
      'facebookHover': '#1055c9',
      'black': '#000000',
      'offBlack': '#1a1a1a',
      'accent': '#c41212'
    },
    extend: {
      backgroundImage: {
        'riot': "url('https://i.imgur.com/gwI7UME.jpg')",
      },
      fontFamily: {
        'main': ['Roboto', 'sans-serif'],
        'arvo': ['Arvo', 'serif'],
      },
    },
		minWidth: {
      '1/3': '33%',
			'1/4': '25%',
			'2/5': '40%'
    },
  },
  plugins: [],
}