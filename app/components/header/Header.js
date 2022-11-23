import styles from '@styles/components/header/header.module.scss';
import Logo from './Logo';
import Schedule from './Schedule';
import Navbar from './Navbar';
import BuyTicketButton from './BuyTicketButton';
import Search from './Search';

const Header = async() => {
    return (
        <div className={styles.header}>
            <Logo />
            <Schedule />
            <Navbar />
            <BuyTicketButton />
            <Search />
        </div>
    )
}

export default Header;