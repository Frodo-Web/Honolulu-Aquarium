import Link from 'next/link';
import Image from 'next/image';
import logo from './media/logo.png';
import styles from '@styles/components/header/logo.module.scss';

const Logo = async() => {
    return (
        <Link className={styles.logo} href='/'>
            <Image
            src={logo}
            className={styles.image}
            />
        </Link>
    )
}

export default Logo;