/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary, #e9005a)",
      },
    },
  },
  plugins: [],
};
