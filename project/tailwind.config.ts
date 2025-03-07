/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Inclua .tsx e .jsx se necessário
  theme: {
    extend: {
      // Usando variáveis CSS para as fontes
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: [
          "var(--font-serif)",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        mono: [
          "var(--font-mono)",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
