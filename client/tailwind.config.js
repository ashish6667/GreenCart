/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e', // a Tailwind green
        'primary-dull': '#16a34a', // hover version
      },
    },
  },
  plugins: [],
}
