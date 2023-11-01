import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Components/Home";
import dark from "./Components/Themes/dark";
import light from "./Components/Themes/light";
import {Provider} from "react-redux";
import {store} from "./store/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <Provider store={store}>
        <Home />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
