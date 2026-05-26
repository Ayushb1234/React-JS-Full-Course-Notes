import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (

    <div>

      <h1>
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

    </div>
  );
}

export default Navbar;