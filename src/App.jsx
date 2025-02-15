import React from "react";
import Router from "./Router/router";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./ToggeBtn/ThemeContext";

const App = () => {
    return (
        <ThemeProvider>
            <ToastContainer />
            <Router />
        </ThemeProvider>
    );
};

export default App;
