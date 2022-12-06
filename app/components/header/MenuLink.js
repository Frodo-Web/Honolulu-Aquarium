'use client';

import { useEffect, useRef} from 'react';
import Link from 'next/link';
import styles from '@styles/components/header/navbar.module.scss';

const MenuLink = ({ children, href }) => {

    const hook = useRef(undefined);

    const setHeight = () => {
        if(hook && hook.current !== undefined) {
            const element = hook.current;
            element.nextSibling.style.setProperty('--height', `${element.nextSibling.scrollHeight}px`);
        }
    };
    useEffect(() => {
        setHeight();
    }, []);
    const handleClick = (e) => {
        const target = e.target;
        if (target.nextSibling.classList.contains(styles.show) || target.classList.contains(styles.show)) {
            target.nextSibling.classList.remove(styles.show);
            target.classList.remove(styles.show);
            return;
        }
        const firstLevelItems = document.querySelectorAll('.' + styles.firstLevelItem + ' > ul');
        const links = document.querySelectorAll('.' + styles.firstLevelItem + ' > a');
        firstLevelItems.forEach((el, idx) => {
            el.classList.remove(styles.show);
        })
        links.forEach((el, idx) => {
            el.classList.remove(styles.show);
        })
        target.nextSibling.classList.add(styles.show);
        target.classList.add(styles.show);
    }
    return <Link href={href} onClick={handleClick} ref={hook}>{children}</Link>
}

export default MenuLink;