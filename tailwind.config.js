module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile': "url('./assets/profile.jpg')",
        'linktree-pf': "url('./assets/linktree.jpg')",
        'linktree': "url('./assets/full-bloom.png')",
        'placeholder-img': "url(./assets/placeholder.jpg)",
      }
    }
  },
  plugins: [],
}
