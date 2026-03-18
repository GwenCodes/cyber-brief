/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#E05A38",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};
