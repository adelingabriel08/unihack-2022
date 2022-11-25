import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  spacing: 10,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: "Jost,Franklin,Tahoma,Arial",
    fontSize: 16,
    allVariants: {
      color: "#000",
    },
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#49abb7",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
