import type { Config } from "tailwindcss";

/**
 * San Luxury brand palette — derived from the gold wordmark logo + design reference.
 * Signature metallic gold on warm ivory grounds, with jewel-tone accents (emerald / maroon).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm charcoal used for body copy / high-contrast text.
        ink: {
          DEFAULT: "#2A241C",
          light: "#5B5247",
          soft: "#8A8073",
        },
        // Signature metallic gold ramp (500 ≈ logo gold).
        gold: {
          50: "#FCF8F0",
          100: "#F7ECD2",
          200: "#EFDAA8",
          300: "#E3C37D",
          400: "#D3AB55",
          500: "#C6A15B", // brand signature gold
          600: "#A9833F",
          700: "#886732",
          800: "#6C5029",
          900: "#584121",
        },
        // Off-white grounds (secondary). Boss: use off-white, not beige.
        cream: {
          DEFAULT: "#FBFAF6",
          warm: "#F4F2EC",
          deep: "#E9E6DD",
        },
        // Jewel accents (used sparingly — badges, festive, hover states).
        emerald: { DEFAULT: "#1E5B47", dark: "#123B2E" },
        maroon: { DEFAULT: "#7A1F3D", dark: "#571328" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        accent: ["var(--font-accent)", "Marcellus", "serif"],
        sans: ["var(--font-sans)", "Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
        wide2: "0.14em",
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(88, 65, 33, 0.35)",
        cardHover: "0 28px 60px -28px rgba(88, 65, 33, 0.5)",
        soft: "0 10px 30px -18px rgba(42, 36, 28, 0.25)",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(135deg, #E3C37D 0%, #C6A15B 38%, #A9833F 62%, #E3C37D 100%)",
        "cream-fade": "linear-gradient(180deg, #FBFAF6 0%, #F4F2EC 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease both",
        marquee: "marquee 26s linear infinite",
        shimmer: "shimmer 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
