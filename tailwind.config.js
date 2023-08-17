/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange_theme: {
          400: "#F58460",
          500: "#EE245F",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "primary-size": "5rem",
        "secondary-size": "3.438rem",
        "third-size": "3.125rem",
        "text-medium": "1.375rem",
      },
      screens: {
        "3xl": "2200px",
      },
    },
  },
  plugins: [],
};
