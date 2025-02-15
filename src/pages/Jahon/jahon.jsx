import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./jahon.scss"
import Globus from "../../assets/Globus.jpg";

const Jahon = () => {
    return (
        <div className="globus">
            <h1>It's World</h1>
            <img width="50%" src={Globus} alt="" />
        </div>
    );
};

export default Jahon;
