'use client';

import Link from 'next/link';
import styles from '@styles/components/header/navbar.module.scss';

const MenuLink = ({ children, href }) => {
    const handleClick = (e) => {
        const target = e.target;
        if (target.nextSibling.classList.contains(styles.show)) {
            target.nextSibling.classList.remove(styles.show);
            return;
        }
        const firstLevelItems = document.querySelectorAll('.' + styles.firstLevelItem + ' > ul');
        firstLevelItems.forEach((el, idx) => {
            el.classList.remove(styles.show);
        })
        target.nextSibling.classList.add(styles.show);
    }
    return <Link href={href} onClick={handleClick}>{children}</Link>
}

export default MenuLink;