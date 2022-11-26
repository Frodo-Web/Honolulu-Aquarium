import styles from '@styles/components/header/header.module.scss';
import Logo from './Logo';
import Schedule from './Schedule';
import Navbar from './Navbar';
import BuyTicketButton from './BuyTicketButton';
import Search from './Search';
import Burger from './Burger';
import localFont from '@next/font/local'

const LEMONMILK = localFont({ src: '../../fonts/lemon_milk/LEMONMILK-Regular.otf' })

const Header = async() => {
    return (
        <div className={`${styles.header} ${LEMONMILK.className}`}>
            <Logo />
            <Schedule />
            <Navbar />
            <BuyTicketButton />
            <Search />
            <Burger />
        </div>
    )
}

export default Header;