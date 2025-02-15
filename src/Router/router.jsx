import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/home";
import Jahon from "../pages/Jahon/jahon";
import Iqtisodiyot from "../pages/Iqtisodiyot/iqtisodiyot";
import Sport from "../pages/training/training";
import Uzbekiston from "../pages/Uzb/uzb";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jahon" element={<Jahon />} />
                <Route path="/iqtisodiyot" element={<Iqtisodiyot />} />
                <Route path="/sport" element={<Sport />} />
                <Route path="/uzbekistan" element={<Uzbekiston />} />
            </Routes>
        </div>
    );
};

export default Router;
