import { createTheme } from "@mui/material/styles";
import colors from "../constants/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      light: colors.primaryLight,
    },
    background: {
      default: colors.primarySoft,
      paper: colors.white,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: [
      "Manrope",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "\"Segoe UI\"",
      "sans-serif",
    ].join(","),
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 14,
          fontWeight: 700,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
