/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#4CAF50', // Example green
        'brand-brown': '#795548', // Example brown
        'brand-yellow': '#FFC107', // Example yellow
        'brand-accent': '#2196F3', // Example blue for announcement
      }
    },
  },
  plugins: [],
}