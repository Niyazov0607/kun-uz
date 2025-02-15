import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sport.scss";
import Sport from "../../assets/garcia.jpeg";

const Training = () => {
    return (
        <div className="globus">
            <h1>It's boxing</h1>
            <img width="50%" src={Sport} alt="" />
        </div>
    );
};

export default Training;
