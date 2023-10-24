/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        header: " rgba(0,0,0,0.4)  url('/src/assets/image/bg-header.jpg')",
      },
    },
  },
  plugins: [],
};
