import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {

  const { darkMode } =
    useContext(ThemeContext);

  return (

    <div>

      <h2>
        {darkMode
          ? "Dark Theme Active"
          : "Light Theme Active"}
      </h2>
    </div>
  );
}

export default Home;