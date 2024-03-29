import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.vue"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#33E5B0",
        background: "#FFF",
        grey: "#DDDCE0",
        black: "#0B0B0B",
        textPrimary: "#21211F",
        textSecondary: "#595855",
        textThird: "#73726D",
      },
      fontFamily: {
        sans: ["Inter", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
