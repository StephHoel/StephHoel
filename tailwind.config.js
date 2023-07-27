/** @type {import('tailwindcss').Config} */
export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
export const theme = {
  extend: {
    screens: {
      fd: '200px', // mobile galaxy fold
      mb: '400px', // mobile standard
      dk: '900px', // desktop
    },
  },
}
