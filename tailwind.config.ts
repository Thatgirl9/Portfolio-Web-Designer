import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          0: "#fff",
          1: "#ffb400",
          2: "#eeeeee",
          3: "#ffe2b2",
          4: "#ffa001",
          5: "#111111",
          6: "#593c0c",
          7: "#4b4b4b",
          8: "#2b2a2a",
          9: "#dddddd",
        },
        primaryText: {
          0: "#666666",
          1: "#6D6D6D",
          3: "#"
        },
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins, serif"],
        openSans: ["Open Sans, serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
