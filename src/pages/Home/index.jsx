import React, { useState, useEffect } from 'react';
import './index.css';
import MoonIcon from '../../assets/images/moon_icon.svg';
import SunIcon from '../../assets/images/sun_icon.png';
import SearchIcon from '../../assets/images/search_icon.svg';
import GermanyPicture from '../../assets/images/germany-picture.jpg';
import UsaPicture from '../../assets/images/usa_picture.jpg';
import BrazilPicture from '../../assets/images/brazil_picture.jpg';
import IcelandPicture from '../../assets/images/germany-picture.jpg';
import AfganistanPicture from '../../assets/images/iceland_picture.jpg';
import AlandPicture from '../../assets/images/afganiston_picture.jpg';
import AlbaniaPicture from '../../assets/images/albarra_picture.jpg';
import AlgeriaPicture from '../../assets/images/algeria_picture.jpg';

const translations = {
    English: {
        title: "Where in the world?",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        searchPlaceholder: "Search for a country",
        cards: {
            Germany: "Germany",
            USA: "United States of America",
            Brazil: "Brazil",
            Iceland: "Iceland",
            Afghanistan: "Afghanistan",
            Aland: "Åland Islands",
            Albania: "Albania",
            Algeria: "Algeria",
            population: "Population",
            region: "Region",
            capital: "Capital",
        }
    },
    Uzbek: {
        title: "Dunyoning qayerida?",
        darkMode: "Qorong'u rejim",
        lightMode: "Yorug' rejim",
        searchPlaceholder: "Mamlakatni qidiring",
        cards: {
            Germany: "Germaniya",
            USA: "Amerika Qo'shma Shtatlari",
            Brazil: "Braziliya",
            Iceland: "Islandiya",
            Afghanistan: "Afg'oniston",
            Aland: "Aland orollari",
            Albania: "Albaniya",
            Algeria: "Jazoir",
            population: "Aholi soni",
            region: "Hudud",
            capital: "Poytaxt",
        }
    },
    Russia: {
        title: "Где в мире?",
        darkMode: "Темный режим",
        lightMode: "Cветовой режим",
        searchPlaceholder: "Поиск страны",
        cards: {
            Germany: "Германия",
            USA: "Соединенные Штаты Америки",
            Brazil: "Бразилия",
            Iceland: "Исландия",
            Afghanistan: "Афганистан",
            Aland: "Аландские острова",
            Albania: "Албания",
            Algeria: "Алжир",
            population: "Население",
            region: "Регион",
            capital: "Столица",
        }
    },
};

function Home() {
    const [language, setLanguage] = useState("English");
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        const savedDarkMode = localStorage.getItem("darkMode");

        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
        if (savedDarkMode === "true") {
            setIsDarkMode(true);
        }
    }, []);

    function handleChangeLanguage(event) {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
    }

    function toggleDarkMode() {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("darkMode", newMode);
            return newMode;
        });
    }

    const translate = translations[language];

    return (
        <div className={`containers ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="logo">
                <h3>{translate.title}</h3>
                <div className="right" onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
                    <img src={isDarkMode ? SunIcon : MoonIcon} alt="Mode icon" />
                    <h4>{isDarkMode ? translate.lightMode : translate.darkMode}</h4>
                </div>
            </div>

            <div className="language">
                <label htmlFor="search">
                    <img src={SearchIcon} alt="" />
                    <input id="search" type="text" placeholder={translate.searchPlaceholder} />
                </label>

                <select value={language} onChange={handleChangeLanguage}>
                    <option value="English">English</option>
                    <option value="Uzbek">Uzbek</option>
                    <option value="Russia">Russia</option>
                </select>
            </div>

            <div className="cards">
                <div className="card">
                    <img src={GermanyPicture} alt="" />
                    <h3>{translate.cards.Germany}</h3>
                    <p><strong>{translate.cards.population}:</strong> 81,770,900</p>
                    <p><strong>{translate.cards.region}:</strong> Europe</p>
                    <p><strong>{translate.cards.capital}:</strong> Berlin</p>
                </div>

                <div className="card">
                    <img src={UsaPicture} alt="" />
                    <h3>{translate.cards.USA}</h3>
                    <p><strong>{translate.cards.population}:</strong>{" "}323,947,000</p>
                    <p><strong>{translate.cards.region}:</strong>{" "}Americas</p>
                    <p><strong>{translate.cards.capital}:</strong>{" "}Washington, D.C.</p>
                </div>

                <div className="card">
                    <img src={BrazilPicture} alt="" />
                    <h3>{translate.cards.Brazil}</h3>
                    <p><strong>{translate.cards.population}:</strong>{" "}206,135,893</p>
                    <p><strong>{translate.cards.region}:</strong>{" "}Americas</p>
                    <p><strong>{translate.cards.capital}:</strong>{" "}Brasília</p>
                </div>

                <div className="card">
                    <img src={IcelandPicture} alt="" />
                    <h3>{translate.cards.Iceland}</h3>
                    <p><strong>{translate.cards.population}:</strong>{" "}334,300</p>
                    <p><strong>{translate.cards.region}:</strong>{" "}Europe</p>
                    <p><strong>{translate.cards.capital}:</strong>{" "}Reykjavík</p>
                </div>

                <div className="card">
                    <img src={AfganistanPicture} alt="" />
                    <h3>{translate.cards.Afghanistan}</h3>
                    <p><strong>{translate.cards.population}:</strong>{" "}27,657,145</p>
                    <p><strong>{translate.cards.region}:</strong>{" "}Asia</p>
                    <p><strong>{translate.cards.capital}:</strong>{" "}Kabul</p>
                </div>

                <div className="card">
                    <img src={AlandPicture} alt="" />
                    <h3>{translate.cards.Aland}</h3>
                    <p><strong>{translate.cards.population}:</strong>{" "}28,875</p>
                    <p><strong>{translate.cards.region}:</strong>{" "}Europe</p>
                    <p><strong>{translate.cards.capital}:</strong>{" "}Mariehamn</p>
                </div>

                <div className="card">
                    <img src={AlbaniaPicture} alt="" />
                    <h3>{translate.cards.Albania}</h3>
                    <p><strong>{translate.cards.population}:</strong>{" "}2,886,026</p>
                    <p><strong>{translate.cards.region}:</strong>{" "}Europe</p>
                    <p><strong>{translate.cards.capital}:</strong>{" "}Tirana</p>
                </div>

                <div className="card">
                    <img src={AlgeriaPicture} alt="" />
                    <h3>{translate.cards.Algeria}</h3>
                    <p><strong>{translate.cards.population}:</strong>{" "}40,400,000</p>
                    <p><strong>{translate.cards.region}:</strong>{" "}Africa</p>
                    <p><strong>{translate.cards.capital}:</strong>{" "}Algiers</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
