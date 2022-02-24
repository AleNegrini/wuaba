import { createTheme as createMuiTheme, responsiveFontSizes, Theme as MuiTheme } from "@mui/material/styles";
import { Direction } from "@mui/material";
import { baseThemeOptions } from "./baseThemeOptions";
import { lightThemeOptions } from "./lightThemeOptions";
import { CSSProperties } from "@mui/material/styles/createMixins";

export type ThemeName = "light" | "dark";

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  theme?: ThemeName;
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Neutral;
  }

  interface PaletteOptions {
    neutral?: Neutral;
  }
}

declare module "@mui/material/styles/createMixins" {
  interface Mixins {
    denseToolbar: CSSProperties;
  }
}

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MuiTheme {}
}

export const createTheme = (config: ThemeConfig = {}): MuiTheme => {
  let theme = createMuiTheme(baseThemeOptions, lightThemeOptions);
  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
