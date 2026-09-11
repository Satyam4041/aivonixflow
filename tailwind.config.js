/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0A0E17",
          darker: "#05070D",
          surface: "#101726",
          card: "#0E1524",
          cardHover: "#141D30",
          blue: "#378ADD",
          cyan: "#00D2FF",
          purple: "#534AB7",
          violet: "#7B61FF",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(55, 138, 221, 0.4)",
          muted: "#94A3B8",
          subtle: "#64748B",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00D2FF 0%, #378ADD 45%, #534AB7 80%, #7B61FF 100%)",
        "brand-gradient-hover": "linear-gradient(135deg, #38BDF8 0%, #378ADD 50%, #6366F1 100%)",
        "glow-radial": "radial-gradient(circle at 50% 50%, rgba(55, 138, 221, 0.15), transparent 70%)",
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #378ADD 0deg, #534AB7 180deg, #00D2FF 360deg)",
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        "glow-blue": "0 0 30px -5px rgba(55, 138, 221, 0.35)",
        "glow-purple": "0 0 30px -5px rgba(83, 74, 183, 0.35)",
        "glow-card": "0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)",
        "glow-card-hover": "0 20px 40px -15px rgba(55, 138, 221, 0.2), 0 0 20px -2px rgba(83, 74, 183, 0.25)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
