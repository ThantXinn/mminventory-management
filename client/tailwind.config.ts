import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { createThemes } from "tw-colors";

const baseColors = [
  "gray",
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "indigo",
  "slate"
]

const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
}

const generateThemesObject = (colors: any, mapping: any, invert= false) => {
  const theme: any = {};
  baseColors.forEach((color) => {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
}

const lightTheme = generateThemesObject(colors, shadeMapping);
const darkTheme = generateThemesObject(colors, shadeMapping, true);

const themes = {
  light: {
    ...lightTheme,
    white: "#ffff"
  },
  dark: {
    ...darkTheme,
    white: colors.slate["800"],
    black: colors.slate["50"]
  }
}
const config: Config = {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};
export default config;
