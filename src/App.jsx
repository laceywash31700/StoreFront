import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Home";
import dark from "./Components/Themes/dark";
import light from "./Components/Themes/light";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/index";
import productsSlice from "./store/products";
import { getProducts, updateProduct } from "./store/products";

export const ThemeContext = React.createContext({});

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [theme, setTheme] = useState(light);


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);



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
