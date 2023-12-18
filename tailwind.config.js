module.exports = {
  content: ['./**/*.html'],
  darkMode: ['class', '[theme-data="dark"]'],
  theme: {
    extend: {
      backgroundColor: {
        'page-color': 'var(--bg-page-color)',
        'content-color': 'var(--bg-content-color)',
        'lines-color': 'var(--lines-color)',
      },
      textColor: {
        'primary-color': 'var(--primary-color)',
        'primary-light-color': 'var(--primary-light-color)',
        'primary-disabled-color': 'var(--primary-disabled-color)',
        'gray-color': 'var(--gray-color)',
        'danger-color': 'var(--danger-color)',
        'danger-light-color': 'var(--danger-light-color)',
        color: 'var(--text-color)', // assuming 'color' is meant to be a generic text color
      },
      width: {
        280: '280px',
      },
    },
  },
  plugins: [],
}
