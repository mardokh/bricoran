import styles from './myServices.module.css'
import electric from '../../images/electric.png'
import hammer from '../../images/hammer.png'
import paint from '../../images/paint.png'
import { useTranslation } from "react-i18next"


const MyServices = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.myServices} id='services'>
            <p className={styles.title}>{t("myServices.title")}</p>
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img src={hammer} className={styles.image}/>
                    <div className={styles.itemText}>
                        <h1>{t("myServices.DIY.title")}</h1>
                        <p>{t("myServices.DIY.describe")}</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={paint} className={styles.image}/>
                    <div className={styles.itemText}>
                        <h1>{t("myServices.painting.title")}</h1>
                        <p>{t("myServices.painting.describe")}</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={electric} className={styles.image}/>
                    <div className={styles.itemText}>
                        <h1>{t("myServices.electrical.title")}</h1>
                        <p>{t("myServices.electrical.describe")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MyServices