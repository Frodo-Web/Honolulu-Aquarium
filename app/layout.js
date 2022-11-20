import Header from './components/Header';

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="honolulu-aquarium">
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