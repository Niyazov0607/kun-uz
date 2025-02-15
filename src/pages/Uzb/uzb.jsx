import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./uzb.scss";
import Uzb from "../../assets/bukhara.jpg";

const Uzbekiston = () => {
    return (
        <div className="globus">
            <h1>It's Uzbekiston</h1>
            <img width="50%" src={Uzb} alt="" />
        </div>
    );
};

export default Uzbekiston;
