import styles from './banner.module.css'
import { useTranslation } from "react-i18next";


const Banner = () => {

    const { t } = useTranslation();

    const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    };
    

    return (
        <section className={styles.banner}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>{t("banner.title")}</p>
                <p className={styles.subTitle}>{t("banner.subTile")}</p>
            </div>
            <button className={styles.btn} onClick={scrollToContact}>{t("banner.btnContact")}</button>
        </section>
    )
}


export default Banner