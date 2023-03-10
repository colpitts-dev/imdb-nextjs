/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary, #b4d455)",
      },
    },
  },
  plugins: [],
};
