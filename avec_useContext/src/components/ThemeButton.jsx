import  { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>Changer de thème</button>
    </div>
  );
};

export default ThemeButton;