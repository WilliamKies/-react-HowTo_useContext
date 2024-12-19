/* eslint-disable react/prop-types */
import "react";

const ThemeButton = ({ theme, toggleTheme }) => {
  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>Changer de thème</button>
    </div>
  );
};

export default ThemeButton;