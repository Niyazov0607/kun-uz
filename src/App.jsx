import React from "react";
import Router from "./Router/router";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./ToggeBtn/ThemeContext";
import Card  from "./Cards/card"

const App = () => {
    return (
        <ThemeProvider>
            <ToastContainer />
            <Router />
            <Card/>
        </ThemeProvider>
    );
};

export default App;
