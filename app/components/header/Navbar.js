import Link from 'next/link';
import styles from '@styles/components/header/navbar.module.scss';

const Navbar = async () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li>
                    <FirstLevelItem text='Plan a visit' to='/' />
                    <ul></ul>
                </li>
                <li>
                    <FirstLevelItem text='Experiences' to='/' />
                    <ul></ul>
                </li>
                <li>
                    <FirstLevelItem text='Animals & Exhibits' to='/' />
                    <ul></ul>
                </li>
                <li>
                    <FirstLevelItem text='Conservation & Community' to='/' />
                    <ul></ul>
                </li>
                <li>
                    <FirstLevelItem text='About Us' to='/' />
                    <ul></ul>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;

const FirstLevelItem = async ({ text, to }) => {
    return <Link className={styles.firstLevelItem} href={to}>{text}</Link>
}