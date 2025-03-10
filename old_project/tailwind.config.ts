// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Inclua .tsx e .jsx se necessário
//   theme: {
//     extend: {
//       // Usando variáveis CSS para as fontes
//       fontFamily: {
//         sans: ["var(--font-sans)", "system-ui", "sans-serif"],
//         serif: [
//           "var(--font-serif)",
//           "Georgia",
//           "Cambria",
//           "Times New Roman",
//           "Times",
//           "serif",
//         ],
//         mono: [
//           "var(--font-mono)",
//           "SFMono-Regular",
//           "Menlo",
//           "Monaco",
//           "Consolas",
//           "Liberation Mono",
//           "Courier New",
//           "monospace",
//         ],
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary, #000000)",
        "bg-secondary": "#080808",
        "text-primary": "#fff7eb",
        "text-secondary": "#8fc7ce",
        accent: "#ffd0a3",
        "accent-hover": "#ffe0be",
        "link-hover": "#a4d7dd",
        info: "#7a8cc2",
      },

      // Custom Fonts
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

      fontWeight: {
        regular: 400,
        medium: 600,
        bold: 700,
      },

      borderRadius: {
        md: "0.375rem",
        lg: "0.5rem",
      },

      boxShadow: {
        lg: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
