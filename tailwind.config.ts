import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app.vue",
    "./pages/**/*.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

export default config;
