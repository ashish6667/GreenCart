/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15803d',        // Tailwind green-700 (dark green)
        'primary-dull': '#166534', // Tailwind green-800 (darker hover)
      },
    },
  },
  plugins: [],
}
