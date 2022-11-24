import Link from 'next/link';
import styles from '@styles/components/header/navbar.module.scss';

const Navbar = async () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">Plan a visit</Link>
                    <ul></ul>
                </li>
                <li>
                    <Link href="/">Experiences</Link>
                    <ul></ul>
                </li>
                <li>
                    <Link href="/">{'Animals & Exhibits'}</Link>
                    <ul></ul>
                </li>
                <li>
                    <Link href="/">{'Conservation & Community'}</Link>
                    <ul></ul>
                </li>
                <li>
                    <Link href="/">About Us</Link>
                    <ul></ul>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;