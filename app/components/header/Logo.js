import Image from 'next/image';
import logo from './media/logo.png';
import styles from '@styles/components/header/logo.module.scss';

const Logo = async() => {
    return (
        <div className={styles.logo}>
            <Image
            src={logo}
            className={styles.image}
            />
        </div>
    )
}

export default Logo;