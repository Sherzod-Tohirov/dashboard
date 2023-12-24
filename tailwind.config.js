/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}", "./*.{html, js, jsx}"],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

