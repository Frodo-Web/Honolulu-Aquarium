import '@styles/global/main.scss';
import styles from '@styles/layout.module.scss';
import Header from './components/header/Header';

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className={styles.honolulu_aquarium}>
                    <Header />
                    <Body children={children} />
                </div>
            </body>
        </html>
    );
}
const Body = async({ children }) => {
    return (
        <div className="body">
            {children}
        </div>
    )
}
export default RootLayout;