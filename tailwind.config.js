const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  corePlugins: {
    preflight: false, // UXP has its own baseline; avoid :where() reset conflicts
    gap: false, // UXP silently ignores gap — disable to avoid dead utilities
    columnGap: false,
    rowGap: false,
  },
  safelist: [
    // classes that always get loaded
    "bg-red-500",
    "border-red-500",
    "h-full",
    "h-1/2",
    "h-1/3",
    "h-1/4",
    "h-1/5",
    "bg-purple-500",
    "border-purple-500",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.8rem",
        md: "0.95rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        xxxs: [".60rem", "0.65rem"],
        xxs: [".70rem", "0.75rem"],
      },
      screens: {
        xxs: { max: "450px" },
        xs: "520px",
      },
      colors: {
        "uxp-card": "#2a2a2a",
        "uxp-hover": "#333333",
        "uxp-btn-hover": "#363636",
        "uxp-border": "#3a3a3a",
        "badge-green": "#4ade80",
        "badge-purple": "#a78bfa",
        fcblue: "#19154E",
        shorts: {
          100: "#DADADA",
          200: "#8B8B8B",
          300: "#4F5053",
          400: "#44464B",
          500: "#34363D",
          600: "#24272F",
          700: "#1F2026",
          800: "#17181A",
          900: "#101011",
        },
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: [
        "ui-monospace",
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
  plugins: [
    plugin(function ({ addBase, theme }) {
      const spacing = theme("spacing");
      const overrides = {};
      Object.entries(spacing).forEach(([key, value]) => {
        // Padding overrides
        overrides[`.p-${key}`] = { padding: `calc(${value} / 2) !important` };
        overrides[`.pt-${key}`] = {
          "padding-top": `calc(${value} / 2) !important`,
        };
        overrides[`.pr-${key}`] = {
          "padding-right": `calc(${value} / 2) !important`,
        };
        overrides[`.pb-${key}`] = {
          "padding-bottom": `calc(${value} / 2) !important`,
        };
        overrides[`.pl-${key}`] = {
          "padding-left": `calc(${value} / 2) !important`,
        };
        overrides[`.px-${key}`] = {
          "padding-left": `calc(${value} / 2) !important`,
          "padding-right": `calc(${value} / 2) !important`,
        };
        overrides[`.py-${key}`] = {
          "padding-top": `calc(${value} / 2) !important`,
          "padding-bottom": `calc(${value} / 2) !important`,
        };
        // Margin overrides
        overrides[`.m-${key}`] = { margin: `calc(${value} / 2) !important` };
        overrides[`.mt-${key}`] = {
          "margin-top": `calc(${value} / 2) !important`,
        };
        overrides[`.mr-${key}`] = {
          "margin-right": `calc(${value} / 2) !important`,
        };
        overrides[`.mb-${key}`] = {
          "margin-bottom": `calc(${value} / 2) !important`,
        };
        overrides[`.ml-${key}`] = {
          "margin-left": `calc(${value} / 2) !important`,
        };
        overrides[`.mx-${key}`] = {
          "margin-left": `calc(${value} / 2) !important`,
          "margin-right": `calc(${value} / 2) !important`,
        };
        overrides[`.my-${key}`] = {
          "margin-top": `calc(${value} / 2) !important`,
          "margin-bottom": `calc(${value} / 2) !important`,
        };
        // Gap overrides
        overrides[`.gap-${key}`] = { gap: `calc(${value} / 2) !important` };
        overrides[`.gap-x-${key}`] = {
          columnGap: `calc(${value} / 2) !important`,
        };
        overrides[`.gap-y-${key}`] = {
          rowGap: `calc(${value} / 2) !important`,
        };
        // Space overrides
        overrides[`.space-x-${key} > :not([hidden]) ~ :not([hidden])`] = {
          "margin-left": `calc(${value} / 2) !important`,
        };
        overrides[`.space-y-${key} > :not([hidden]) ~ :not([hidden])`] = {
          "margin-top": `calc(${value} / 2) !important`,
        };
      });
      addBase({
        "@media (max-height: 770px)": overrides,
      });
    }),
  ],
};
