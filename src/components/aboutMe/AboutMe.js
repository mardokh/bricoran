import styles from './aboutMe.module.css'
import { useTranslation } from "react-i18next";


const AboutMe = () => {

    const { t } = useTranslation();

    return (
        <section id='about' className={styles.aboutMe}>
            <div className={styles.describeConainter}>
                <p className={styles.title}>{t("aboutMe.title")}</p>
                <p className={styles.text}>{t("aboutMe.describe")}</p>
            </div>
            <div className={styles.rattingContainer}>
                <div className={styles.rattingText}>
                    <p>10+</p>
                    <p>{t("aboutMe.experience")}</p>
                </div>
                <div className={styles.rattingText}>
                    <p>500+</p>
                    <p>{t("aboutMe.clients")}</p>
                </div>
                <div className={styles.rattingText}>
                    <p>100%</p>
                    <p>{t("aboutMe.rate")}</p>
                </div>
            </div>
        </section>
    )
}


export default AboutMe