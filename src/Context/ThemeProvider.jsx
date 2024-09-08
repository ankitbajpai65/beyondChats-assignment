import { ThemeProvider, createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: { main: "#2872FA", light: "#e3f2ff" },
    secondary: { main: "#FA2871" },
  },
});

theme = createTheme(theme, {
  //   typography: {
  //     h4: {
  //       fontSize: "1.9rem",
  //       [theme.breakpoints.only("sm")]: {
  //         fontSize: "1.8rem",
  //       },
  //     },
  //   },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          "&:focus": {
            outline: "none",
          },
        },
      },
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {
            fontWeight: "600",
          },
        },
        {
          props: {
            variant: "outlined",
          },
          style: {
            fontWeight: "600",
          },
        },
      ],
    },
  },
});

export default function ThemeContext({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
