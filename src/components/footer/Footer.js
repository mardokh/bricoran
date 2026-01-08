import styles from './footer.module.css'
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className={styles.footer} id='contact'>

            <div className={styles.getStartContainer}>

                <div className={styles.itemContainer}>

                    <div className={styles.itemSubContainer}>
                        <FaSquarePhone className={styles.icon}/>
                        <p>+213 673 06 85 27</p>
                    </div>

                    <div className={styles.itemSubContainer}>
                        <IoIosMail className={styles.icon}/>
                        <p>bricoran@gmail.com</p>
                    </div>

                    <div className={styles.itemSubContainer}>
                        <MdLocationOn className={styles.icon}/>
                        <p>{t("footer.address")}</p>
                    </div>

                </div>

            </div>

            <div className={styles.copyright}>
                <FaRegCopyright/>
                <p>2026 Design by DevChak. All right reserved.</p>
            </div>

        </footer>
    )
}


export default Footer