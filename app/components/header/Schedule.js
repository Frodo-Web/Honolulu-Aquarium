import styles from '@styles/components/header/schedule.module.scss';

const Schedule = async () => {
    return (
        <div className={styles.schedule}>
            <span className={styles.label}>
                Park Hours
            </span>
            <span className={styles.value}>
                9 AM - 5 PM
            </span>
        </div>
    )
}

export default Schedule;