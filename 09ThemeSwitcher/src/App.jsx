import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeButton";
import { ThemeProvider } from "./Contexts/Theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThememode] = useState("light");

  const lightTheme = () => {
    setThememode("light");
  };

  const darkTheme = () => {
    setThememode("dark");
  };

  useEffect(() => {
    const SelectDoc = document.querySelector("html");
    SelectDoc.classList.remove("light", "dark");
    SelectDoc.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Btn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}

            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
