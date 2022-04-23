module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'translucentBlack': 'rgba(0, 0, 0, 0.54)',
      'white': 'rgb(255, 255, 255)',
      'black': 'rgb(0, 0, 0)',
      'light-grey': '#E5E5E5',
      'secondary': 'rgb(151, 71, 255)',
      'primary': 'rgb(245, 59, 0)',
    },
    borderWidth: {
      DEFAULT: '0px',
      '1': '1px',
    },
    extend: {
      backgroundImage: {
        'profile': "url('./assets/profile.jpeg')",
        'linktree-pf': "url('./assets/linktree.jpg')",
        'linktree': "url('./assets/full-bloom.png')",
        'placeholder-img': "url(./assets/placeholder.jpg)",
        'Fotos': "url(./assets/placeholder.jpg)",
        'Reels': "url(./assets/placeholder.jpg)",
        'Divulgações': "url(./assets/placeholder.jpg)",
        'Lives': "url(./assets/placeholder.jpg)",
        'Desfiles': "url(./assets/placeholder.jpg)",
      }
    }
  },
  plugins: [],
}
