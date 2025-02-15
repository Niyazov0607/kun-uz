import React, { useContext } from "react";
import KunUz from "../../assets/logoKunUz.svg";
import "./home.scss";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/langSwitcher/lang";
import { CiSearch } from "react-icons/ci";
import { ThemeContext } from "../../ToggeBtn/ThemeContext"; 
import ThemeToggle from "../../ThemeToggle/ThemeToggle"; 

const Home = () => {
    const { t, i18n } = useTranslation();
    const { theme } = useContext(ThemeContext);

    const translations = {
        en: {
            uzbekiston: "Uzbekistan",
            jahon: "World",
            iqtisodiyot: "Economy",
            sport: "Sports",
        },
        uz: {
            uzbekiston: "O'zbekiston",
            jahon: "Jahon",
            iqtisodiyot: "Iqtisodiyot",
            sport: "Sport",
        },
        ru: {
            uzbekiston: "Узбекистан",
            jahon: "Мир",
            iqtisodiyot: "Экономика",
            sport: "Спорт",
        },
    };

    return (
        <div className={`container ${theme}`}>
            <div className="news">
                <div className="news__navbar">
                    <div>
                        <img width="100" src={KunUz} alt="News logo" />
                    </div>

                    <ul className="news__list">
                        <li>
                            <NavLink className="news__link2" to="/uzbekistan">
                                {translations[i18n.language].uzbekiston}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="news__link3" to="/jahon">
                                {translations[i18n.language].jahon}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="news__link4" to="/iqtisodiyot">
                                {translations[i18n.language].iqtisodiyot}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="news__link1" to="/sport">
                                {translations[i18n.language].sport}
                            </NavLink>
                        </li>
                    </ul>

                    <div className="news__app">
                        <LanguageSwitcher />
                        <p className="news__search">
                            <CiSearch size="30" color="white" />
                        </p>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
