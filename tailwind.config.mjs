import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const nativewind = require("nativewind/preset");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [nativewind],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#cbbeff",
          container: "#9d8af2",
          on: "#321a81",
          "on-container": "#331a82",
        },
        secondary: {
          DEFAULT: "#c7c5cf",
          container: "#4b4b53",
          on: "#303037",
          "on-container": "#bcbac4",
        },
        tertiary: {
          DEFAULT: "#c6c5d3",
          container: "#9998a5",
          on: "#2f303a",
          "on-container": "#30303b",
        },
        surface: {
          DEFAULT: "#131317",
          dim: "#131317",
          bright: "#39393d",
          variant: "#353439",
          container: {
            lowest: "#0e0e12",
            low: "#1b1b1f",
            DEFAULT: "#1f1f23",
            high: "#2a2a2e",
            highest: "#353439",
          },
        },
        on: {
          surface: "#e4e1e7",
          "surface-variant": "#c9c4d4",
          background: "#e4e1e7",
          primary: "#321a81",
          secondary: "#303037",
          "secondary-container": "#bcbac4",
          "on-background": "#e4e1e7",
        },
        outline: {
          DEFAULT: "#938e9d",
          variant: "#484552",
        },
        background: "#131317",
        error: {
          DEFAULT: "#ffb4ab",
          container: "#93000a",
          on: "#690005",
          "on-container": "#ffdad6",
        },
        // Direct colors for easier mapping from HTML
        "on-background": "#e4e1e7",
        "on-secondary-container": "#bcbac4",
        "primary-container": "#9d8af2",
        "surface-container-low": "#1b1b1f",
        "surface-container-high": "#2a2a2e",
        "outline-variant": "#484552",
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        full: "9999px",
      },
      spacing: {
        unit: "8px",
        "container-padding": "24px",
        gutter: "16px",
        "stack-sm": "4px",
        "stack-md": "12px",
        "stack-lg": "24px",
        "section-gap": "48px",
      },
      fontSize: {
        "h1": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "h2": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "h3": ["20px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "body-lg": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-sm": ["11px", { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};
