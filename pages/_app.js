// pages/_app.js
import '../styles/globals.css'; // Optional: If you have global styles

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;