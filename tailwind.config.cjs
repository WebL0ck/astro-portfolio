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
        1: "#12151D",
        2: "#131620",
      },
      blue: "#0EA5E9",
      blurry: {
        1: "rgba(255, 255, 255, 0.02)",
        2: "rgba(255, 255, 255, 0.1)",
        3: "rgba(255, 255, 255, 4%)",
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
        2: "#F0BD50",
      },
      transparent: "transparent",
    },
    extend: {
      boxShadow: {
        sociogram: "-5px -61px 168px 73px rgba(90,93,246,0.7)",
        battlepro: "-5px -61px 168px 73px rgba(29,161,218,0.7)",
        myeyedr: "-5px -61px 168px 73px rgba(0,127,225, 0.9)",
        "button-active": "0px 4px 30px 3px rgba(236, 96, 84, 0.5)",
        button: "0px 4px 20px 5px rgba(236, 96, 84, 0.2)",
      },
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
  plugins: [require("@tailwindcss/line-clamp")],
};
