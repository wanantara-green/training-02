/** Tailwind v3 — grup "mce" (Inter + canopy + clay{400,500,600} + paper).
 *  Halaman: mce-index.html, mce-hasil.html  →  css/mce.css
 *  'paper' disatukan (#f7f4ec) untuk kedua file; mce-hasil memakai bg-paper/80. */
module.exports = {
  content: ["./mce-index.html", "./mce-hasil.html", "./js/mce-app.js", "./js/mce-config.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        canopy: { 50:"#f1f6f0", 100:"#dbe8d8", 600:"#3f6b3a", 700:"#2f5430", 800:"#234023", 900:"#1a3019" },
        clay: { 400:"#c98a5a", 500:"#b6713f", 600:"#9a5a2e" },
        paper: "#f7f4ec",
      },
    },
  },
};
