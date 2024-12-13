
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        anton: ["var(--font-geist-anton)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        alfaSlabOne : ["var(--alfaSlabOne)", "sans-serif"]
      },
      colors: {
        rojoprincipal: "rgba(213, 20, 53)",
        rojosecundario: "rgb(185, 35, 38)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
