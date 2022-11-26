import styles from '@styles/components/header/burger.module.scss';

const Burger = async() => {
    return (
        <div className={styles.burger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
    )
}

export default Burger;