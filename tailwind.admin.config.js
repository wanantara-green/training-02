/** Tailwind v3 — grup "admin" (tema Claude: Hanken Grotesk + clay/ink/moss).
 *  Halaman: admin.html, bobot.html  →  css/admin.css
 *  Catatan: class Tailwind dirakit di skrip inline kedua file (literal), ter-scan. */
module.exports = {
  content: ["./admin.html", "./bobot.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Hanken Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        paper: "#EFEDE3",
        clay: { DEFAULT: "#C96442", bright: "#D97757", deep: "#A8472A", soft: "#E8C7B6" },
        ink: { DEFAULT: "#22211D", soft: "#56544C", faint: "#8A887E" },
        moss: { DEFAULT: "#5C6B4A", soft: "#9AA67F" },
      },
    },
  },
};
