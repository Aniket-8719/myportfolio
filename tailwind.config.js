/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'navblue': '#EEF5FF',
      'primarycolor': '#98A8F8',
      'grey' : '#EEEEEE',
      'headingColor' : '#2B2A4C',
      'smallheadingColor': '#DC84F3',
      'btnColor' : '#B15EFF',
      'instaColor': '#DD2A7B',
      'linkdinColor': '#0077B5',
      'githubColor': '#171515',
      'twitterColor': '#1DA1F2',
      'contactColor': '#F3F8FF',
      'footerColor': '#12141e',
      'gray': '#A9A9A9',
      'bgGreen': '#C1F2B0',
      'facheck': '#65B741',
      'cardBorder': '#607274'
    },
    extend: {},
  },
  varients: {
    backgroundColor: ['responsive','hover', 'focus', 'active' ]

  },
  plugins: [],
}

