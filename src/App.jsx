import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Home";
import dark from "./Components/Themes/dark";
import light from "./Components/Themes/light";
import { Provider } from "react-redux";
import { store } from "./store/index";

export const ThemeContext = React.createContext({});

function App() {
  const [theme, setTheme] = useState(light);

  return (
    <>
      <ThemeProvider theme={light}>
        <Provider store={store}>
          <ThemeContext.Provider
            value={{
              toggleTheme: () => setTheme(theme === light ? dark : light),
            }}
          >
            <CssBaseline />
            <Home />
          </ThemeContext.Provider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
