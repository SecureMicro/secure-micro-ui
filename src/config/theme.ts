import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue
    },
    background: {
      default: "#ffffff", // White
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#1976d2",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2", // Blue
    },
    background: {
      default: "#121212", // Black
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#90caf9", // Light blue
    },
  },
});

export { lightTheme, darkTheme };
