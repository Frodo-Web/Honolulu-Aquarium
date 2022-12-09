'use client';

import styles from '@styles/components/header/burger.module.scss';
import navbar from '@styles/components/header/navbar.module.scss';

const Burger = () => {
    const handleClick = (e) => {
        document.getElementsByClassName(navbar.navbar)[0].classList.toggle(navbar.opened);
        document.getElementsByClassName(styles.burger)[0].classList.toggle(styles.opened);
    }
    return (
        <div className={styles.burger} onClick={handleClick}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
    )
}

export default Burger;