import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./iqtisodiyot.scss";
import Money from "../../assets/money.jpeg";

const Iqtisodiyot = () => {
    return (
        <div className="globus">
            <h1>It's Economy</h1>
            <img width="50%" src={Money} alt="" />
        </div>
    );
};

export default Iqtisodiyot;
