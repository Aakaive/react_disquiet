import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'min-1280': { 'min': '1281px'},
        'max-1160': { 'max': '1160px'},
        'max-lg': { 'max': '1024px' },
        'min-lg': { 'min': '1025px' },
        'max-md': { 'max': '768px'},
        'max-sd': { 'max': '640px'},
      },
    },
  },
  plugins: [],
};
export default config;
