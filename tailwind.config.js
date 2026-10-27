/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "8rem",
        "4xl": "10rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        obsidian: "#090D16",
        surface: {
          elevated: "#0F172A",
          card: "#111827",
        },
        slate: {
          border: "#1E293B",
          outline: "#334155",
        },
        motion: {
          red: "#EF4444",
          redGlow: "#F87171",
          redClassic: "#C1271A",
        },
      },
    },
  },
  plugins: [],
};

