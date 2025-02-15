import React, { useContext } from "react";
import { ThemeContext } from "../../src/ToggeBtn/ThemeContext";
import "./theme.scss";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? " Dark Mode" : " Light Mode"}
        </button>
    );
};

export default ThemeToggle;
