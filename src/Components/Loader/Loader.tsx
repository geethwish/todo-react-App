
import styles from './Loader.module.scss'
const Loader = () => {
    return (
        <div>

            <div className={styles.meshLoader}>

                <div className={styles.setOne}>

                    <div className={styles.circle}></div>

                    <div className={styles.circle}></div>

                </div>

                <div className={styles.setTwo}>

                    <div className={styles.circle}></div>

                    <div className={styles.circle}></div>

                </div>

            </div>

        </div>
    )
}

export default Loader