import { AnyRecord } from "dns";
import React, { useContext } from "react";
import Toolbar from "./components/Toolbar";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export interface IThemeContext {
  theme?: any;
  setThemeDark?: () => void;
  setThemeLight?: () => void;
}
export const ThemeContext = React.createContext<IThemeContext>({});
export const useThemeContext = () => useContext(ThemeContext);

function ReactContextExample() {
  const [theme, setTheme] = React.useState(themes.light);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeDark: () => {
          setTheme(themes.dark);
        },
        setThemeLight: () => {
          setTheme(themes.light);
        },
      }}
    >
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default ReactContextExample;
