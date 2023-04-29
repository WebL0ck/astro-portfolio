/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#fff",
      gray: {
        1: "#999",
        2: "#888",
        3: "#666",
        4: "#444",
        5: "#333",
        6: "#111",
        7: "#2E2E2E",
        8: "#454545",
      },
      black: {
        1: "12151D",
        2: "#131620",
      },
      blue: "0EA5E9",
      blurry: {
        1: "rgba(255, 255, 255, 0.02)",
      },
      "pink-gradient": {
        1: "#8236D4",
        2: "#E33283",
      },
      "blue-gradient": {
        1: "#377DE7",
        2: "#62D5D9",
      },
      "orange-gradient": {
        1: "#EC6155",
        2: "#F1BF50",
      },
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "main-bg": "url('/images/main-bg.jpg')",
      },
      height: {
        parent: "inherit",
      },
      borderColor: {
        transparent: "transparent",
      },
      textColor: {
        transparent: "transparent",
      },
      animation: {
        gradient: "gradient 5s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "150% 220%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
