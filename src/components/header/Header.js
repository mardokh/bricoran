import styles from './header.module.css';
import bricoranLogo from '../../images/bricoran.png'
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';


const Header = () => {

    const [burgerActive, setBurgerActive] = useState(false)
    const [scrolled, setScrolled] = useState(false);


    const { t } = useTranslation();
    const { i18n } = useTranslation();


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    const burgerSwitch = () => {
        setBurgerActive(prev => !prev)
    }


    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        if (burgerActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [burgerActive])


    return (
        <header className={`${styles.header} ${scrolled ? styles.header_scroll : ""}`}>
            {/* BURGER NAV ICON*/}
            <div className={styles.burgerNavContainer} onClick={() => burgerSwitch()}>
                <span className={`${styles.burgerBar} ${burgerActive ? styles.burgerBar_1_active : styles.burgerBar_1}`}></span>
                <span className={`${styles.burgerBar} ${burgerActive ? styles.burgerBar_2_active : styles.burgerBar_2}`}></span>
                <span className={`${styles.burgerBar} ${burgerActive ? styles.burgerBar_3_active : styles.burgerBar_3}`}></span>
            </div>

            {/* LOGO */}
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={bricoranLogo} />
            </div>

            {/* NAVIGATION BAR */}
            <nav className={styles.navBar}>
                <ul className={styles.listUl}>
                    <li><a href="#home">{t("header.home")}</a></li>
                    <li><a href="#services">{t("header.services")}</a></li>
                    <li><a href="#about">{t("header.about")}</a></li>
                    <li><a href="#contact">{t("header.contact")}</a></li>
                </ul>
            </nav>

            {/* NAVIGATION BAR MOBILE VERSION  */}
            <nav className={`${styles.navBarMobile} ${burgerActive ? styles.navBarMobile_active : ''}`}>
                <ul className={styles.listUlMobile}>
                    <li onClick={burgerSwitch}><a href="#home">{t("header.home")}</a></li>
                    <li onClick={burgerSwitch}><a href="#services">{t("header.services")}</a></li>
                    <li onClick={burgerSwitch}><a href="#about">{t("header.about")}</a></li>
                    <li onClick={burgerSwitch}><a href="#contact">{t("header.contact")}</a></li>
                </ul>
            </nav>

            {/* LANGUAGE SWITCHER */}
            <div className={styles.lgSwitcherContainer}>
                <div className={styles.lgSwitcher}>
                    <div>
                        <select className={styles.selectOption}
                            onChange={(e) => changeLanguage(e.target.value)}
                            defaultValue="en"
                        >
                            <option value="en">🇬🇧 En</option>
                            <option value="fr">🇫🇷 Fr</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header