'use client';

import Link from 'next/link';
import styles from '@styles/components/header/header.module.scss';

const Banner = () => {
    const handleClick = (e) => {
        document.getElementsByClassName(styles.banner)[0].classList.remove(styles.show);
    }
    return (
        <div className={`${styles.banner} ${styles.show}`}>
            <span className={styles.label}>PURCHASE YOUR TICKETS IN ADVANCE</span>
            <span className={styles.value}>Comming marine event: <Link href='/'>Join Coral Spawning</Link>
            {' '}| For the adventure seeker: <Link href='/'>Honolulu Shark Dive!</Link></span>
            <span className={styles.close} onClick={handleClick}></span>
        </div>
    )
}

export default Banner;