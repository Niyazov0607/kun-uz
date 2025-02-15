import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./lang.scss";
import { GrLanguage } from "react-icons/gr";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="custom-dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
                <GrLanguage size={20} /> {i18n.language.toUpperCase()} ▼
            </button>
            <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                <li onClick={() => changeLanguage("en")}>English</li>
                <li onClick={() => changeLanguage("ru")}>Русский</li>
                <li onClick={() => changeLanguage("uz")}>O'zbek</li>
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
