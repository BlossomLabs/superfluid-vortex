import { useTheme } from "@1hive/1hive-ui";
import { ThemeProvider } from "styled-components";
import { TopBar } from "./components/TopBar";
import { Routes } from "./routes/Routes";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBar />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
