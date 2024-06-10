import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    let html = document.querySelector("html");

    html.classList.remove("light", "dark");

    html.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="p-4 bg-gray-400 flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>
          <div className="w-full max-w-sm mx-auto ">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
