import React, { useState } from "react";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ProductDetails from "./Components/ProductDeatails/index";
import Home from "./Home";
import dark from "./Components/Themes/dark";
import light from "./Components/Themes/light";
import { Provider } from "react-redux";
import { store } from "./store/index";

export const ThemeContext = React.createContext({});

function App() {
  const [theme, setTheme] = useState(light);

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ThemeContext.Provider
            value={{
              toggleTheme: () => setTheme(theme === light ? dark : light),
            }}
          >
            <CssBaseline />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
            </Routes>
          </ThemeContext.Provider>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
