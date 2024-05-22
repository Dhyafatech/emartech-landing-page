import "./App.css";
import { LandingPage } from "./pages/landingPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { baseTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
