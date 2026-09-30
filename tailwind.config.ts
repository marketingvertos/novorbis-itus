import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  // Preflight is off: the site's own reset lives in src/styles/legacy/global.css,
  // and Tailwind's reset would change the existing design.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#4caf74",
          ink: "#050608",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Hempa Sans", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [animate],
} satisfies Config;
