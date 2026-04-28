/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  corePlugins: {
    preflight: false,  // UXP has its own baseline; avoid :where() reset conflicts
    gap: false,        // UXP silently ignores gap — disable to avoid dead utilities
    columnGap: false,
    rowGap: false,
  },
  theme: {
    extend: {
      colors: {
        'uxp-card':      '#2a2a2a',
        'uxp-hover':     '#333333',
        'uxp-btn-hover': '#363636',
        'uxp-border':    '#3a3a3a',
        'badge-green':   '#4ade80',
        'badge-purple':  '#a78bfa',
      },
    },
  },
  plugins: [],
};
