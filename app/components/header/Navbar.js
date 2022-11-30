import MenuLink from './MenuLink';
import Link from 'next/link';
import styles from '@styles/components/header/navbar.module.scss';
// import localFont from '@next/font/local'

// const LEMONMILK = localFont({ src: '../../fonts/lemon_milk/LEMONMILK-Light.otf' })

const Navbar = async () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <FirstLevelItem>
                    <MenuLink href='/'>Plan a visit</MenuLink>
                    <SubMenu>
                        <Link href='/'>Buy tickets</Link>
                        <Link href='/'>Pricing</Link>
                        <Link href='/'>Become a member</Link>
                        <Link href='/'>FAQs</Link>
                        <Link href='/'>Park map</Link>
                        <Link href='/'>School groups</Link>
                        <Link href='/'>Dine</Link>
                        <Link href='/'>Shop</Link>
                    </SubMenu>
                </FirstLevelItem>
                <FirstLevelItem>
                    <MenuLink href='/'>Experiences</MenuLink>
                    <SubMenu>
                        <Link href='/'>Aquari-OM Yoga Classes</Link>
                        <Link href='/'>Coral Spawning</Link>
                        <Link href='/'>Ocean Aloha</Link>
                        <Link href='/'>Ocean Education Classroom</Link>
                        <Link href='/'>Shark Dive</Link>
                    </SubMenu>
                </FirstLevelItem>
                <FirstLevelItem>
                    <MenuLink href='/'>Animals & Exhibits</MenuLink>
                    <SubMenu>
                        <Link href='/'>Hawaiʻi’s Marine Life</Link>
                        <Link href='/'>Exhibits</Link>
                        <Link href='/'>Humpbacks of Hawaiʻi</Link>
                        <Link href='/'>Live Cam + Gallery</Link>
                    </SubMenu>
                </FirstLevelItem>
                <FirstLevelItem>
                    <MenuLink href='/'>Conservation & Community</MenuLink>
                    <SubMenu>
                        <Link href='/'>Beach Cleanups</Link>
                        <Link href='/'>We Live Ocean Aloha</Link>
                        <Link href='/'>Events</Link>
                        <Link href='/'>Protect our water</Link>
                    </SubMenu>
                </FirstLevelItem>
                <FirstLevelItem>
                    <MenuLink href='/'>About Us</MenuLink>
                    <SubMenu>
                        <Link href='/'>Our story</Link>
                        <Link href='/'>Newsroom</Link>
                        <Link href='/'>Blog</Link>
                        <Link href='/'>Careers</Link>
                        <Link href='/'>Contact Us</Link>
                    </SubMenu>
                </FirstLevelItem>
            </ul>
        </nav>
    )
}
export default Navbar;

const FirstLevelItem = async ({ children }) => {
    return <li className={styles.firstLevelItem}>{children}</li>
}
const SubMenu = async ({ children }) => {
    // return <ul className={`${styles.subMenu} ${LEMONMILK.className}`}>{children}</ul>
    return <ul className={styles.subMenu}>{children}</ul>
}